import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";
import { useQueryClient } from "@tanstack/react-query";

export const useCheckin = () => {
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  const queryClient = useQueryClient();

  const performCheckin = async () => {
    if (!user) return { success: false, error: "Não autenticado" };
    setLoading(true);

    try {
      const today = new Date().toISOString().split("T")[0];

      // Try to insert checkin (unique constraint will prevent duplicates)
      const { error: checkinError } = await supabase
        .from("checkins")
        .insert({ user_id: user.id, checkin_date: today, points_earned: 10 });

      if (checkinError) {
        if (checkinError.code === "23505") {
          return { success: false, error: "Você já fez check-in hoje!" };
        }
        throw checkinError;
      }

      // Get current profile
      const { data: profile } = await supabase
        .from("profiles")
        .select("total_points, streak_days, last_checkin_date")
        .eq("user_id", user.id)
        .single();

      if (profile) {
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        const yesterdayStr = yesterday.toISOString().split("T")[0];

        const newStreak = profile.last_checkin_date === yesterdayStr
          ? profile.streak_days + 1
          : 1;

        const bonusPoints = newStreak >= 7 ? 5 : 0;

        await supabase
          .from("profiles")
          .update({
            total_points: profile.total_points + 10 + bonusPoints,
            streak_days: newStreak,
            last_checkin_date: today,
          })
          .eq("user_id", user.id);
      }

      queryClient.invalidateQueries({ queryKey: ["profile"] });
      queryClient.invalidateQueries({ queryKey: ["ranking"] });

      return { success: true, error: null };
    } catch (err: any) {
      return { success: false, error: err.message };
    } finally {
      setLoading(false);
    }
  };

  return { performCheckin, loading };
};

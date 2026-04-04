import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useCheckin } from "@/hooks/useCheckin";
import { Button } from "@/components/ui/button";
import { Trophy, Star, Flame, LogOut, Crown, Medal } from "lucide-react";
import { toast } from "sonner";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const HomePage = () => {
  const { user, signOut } = useAuth();
  const { performCheckin, loading: checkinLoading } = useCheckin();
  const [activeTab, setActiveTab] = useState<"home" | "ranking">("home");

  const { data: profile } = useQuery({
    queryKey: ["profile", user?.id],
    queryFn: async () => {
      const { data } = await supabase
        .from("profiles")
        .select("*")
        .eq("user_id", user!.id)
        .single();
      return data;
    },
    enabled: !!user,
  });

  const { data: ranking } = useQuery({
    queryKey: ["ranking"],
    queryFn: async () => {
      const { data } = await supabase
        .from("profiles")
        .select("*")
        .order("total_points", { ascending: false })
        .limit(50);
      return data ?? [];
    },
  });

  const todayCheckedIn = profile?.last_checkin_date === new Date().toISOString().split("T")[0];

  const handleCheckin = async () => {
    const result = await performCheckin();
    if (result.success) {
      toast.success("Check-in feito! +10 pontos 🎉");
    } else {
      toast.info(result.error);
    }
  };

  const getRankIcon = (index: number) => {
    if (index === 0) return <Crown className="w-5 h-5 text-reward" />;
    if (index === 1) return <Medal className="w-5 h-5 text-muted-foreground" />;
    if (index === 2) return <Medal className="w-5 h-5 text-amber-700" />;
    return <span className="w-5 text-center text-sm font-medium text-muted-foreground">{index + 1}</span>;
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="px-5 pt-12 pb-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center">
            <Trophy className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold text-foreground">CNB</span>
        </div>
        <Button variant="ghost" size="icon" onClick={signOut}>
          <LogOut className="w-5 h-5 text-muted-foreground" />
        </Button>
      </header>

      {/* Content */}
      <main className="flex-1 px-5 pb-24">
        {activeTab === "home" ? (
          <div className="flex flex-col gap-5 mt-4">
            {/* Welcome Card */}
            <div className="bg-card rounded-2xl p-5 shadow-card">
              <p className="text-sm text-muted-foreground">Olá,</p>
              <p className="text-xl font-bold text-foreground">
                {profile?.display_name || "Usuário"}
              </p>
            </div>

            {/* Points Card */}
            <div className="gradient-primary rounded-2xl p-6 shadow-elevated">
              <div className="flex items-center gap-2 mb-1">
                <Star className="w-5 h-5 text-primary-foreground/80" />
                <span className="text-sm font-medium text-primary-foreground/80">Seus Pontos</span>
              </div>
              <p className="text-4xl font-black text-primary-foreground">
                {profile?.total_points ?? 0}
              </p>
            </div>

            {/* Streak */}
            <div className="bg-card rounded-2xl p-5 shadow-card flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-accent/30 flex items-center justify-center">
                <Flame className="w-6 h-6 text-reward" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Sequência</p>
                <p className="text-2xl font-bold text-foreground">
                  {profile?.streak_days ?? 0} {(profile?.streak_days ?? 0) === 1 ? "dia" : "dias"}
                </p>
              </div>
            </div>

            {/* Checkin Button */}
            <Button
              size="lg"
              disabled={todayCheckedIn || checkinLoading}
              onClick={handleCheckin}
              className="w-full h-16 text-lg font-bold rounded-2xl gradient-primary text-primary-foreground shadow-elevated disabled:opacity-60"
            >
              {todayCheckedIn ? "✅ Check-in feito hoje!" : checkinLoading ? "Registrando..." : "Fazer Check-in (+10 pts)"}
            </Button>
          </div>
        ) : (
          <div className="flex flex-col gap-3 mt-4">
            <h2 className="text-xl font-bold text-foreground">Ranking</h2>
            <div className="bg-card rounded-2xl shadow-card overflow-hidden divide-y divide-border">
              {ranking?.map((p, i) => (
                <div key={p.id} className="flex items-center gap-3 px-4 py-3">
                  <div className="w-6 flex justify-center">{getRankIcon(i)}</div>
                  <Avatar className="w-9 h-9">
                    <AvatarImage src={p.avatar_url ?? undefined} />
                    <AvatarFallback className="bg-secondary text-secondary-foreground text-xs font-bold">
                      {(p.display_name ?? "U")[0].toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-foreground truncate">
                      {p.display_name || "Usuário"}
                    </p>
                  </div>
                  <span className="text-sm font-bold text-primary">{p.total_points} pts</span>
                </div>
              ))}
              {(!ranking || ranking.length === 0) && (
                <div className="p-8 text-center text-muted-foreground text-sm">
                  Nenhum usuário ainda.
                </div>
              )}
            </div>
          </div>
        )}
      </main>

      {/* Bottom Tab Bar */}
      <nav className="fixed bottom-0 left-0 right-0 bg-card border-t border-border px-6 pb-6 pt-3 flex justify-around">
        <button
          onClick={() => setActiveTab("home")}
          className={`flex flex-col items-center gap-1 ${activeTab === "home" ? "text-primary" : "text-muted-foreground"}`}
        >
          <Star className="w-6 h-6" />
          <span className="text-xs font-medium">Início</span>
        </button>
        <button
          onClick={() => setActiveTab("ranking")}
          className={`flex flex-col items-center gap-1 ${activeTab === "ranking" ? "text-primary" : "text-muted-foreground"}`}
        >
          <Trophy className="w-6 h-6" />
          <span className="text-xs font-medium">Ranking</span>
        </button>
      </nav>
    </div>
  );
};

export default HomePage;

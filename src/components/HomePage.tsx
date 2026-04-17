import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useCheckin } from "@/hooks/useCheckin";
import { Button } from "@/components/ui/button";
import { Trophy, Star, Flame, LogOut, Crown, Medal } from "lucide-react";
import { toast } from "sonner";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import phoneMockup from "@/assets/phone-mockup.png";

const HomePage = () => {
  const { user, signOut } = useAuth();
  const { performCheckin, loading: checkinLoading } = useCheckin();
  const [activeTab, setActiveTab] = useState<"home" | "ranking">("home");
  const { t } = useTranslation();

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
      toast.success(t("home.checkinSuccess"));
    } else {
      toast.info(result.error);
    }
  };

  const getRankIcon = (index: number) => {
    if (index === 0) return <Crown className="w-5 h-5 text-reward" />;
    if (index === 1) return <Medal className="w-5 h-5 text-muted-foreground" />;
    if (index === 2) return <Medal className="w-5 h-5 text-accent-foreground" />;
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
        <div className="flex items-center gap-2">
          <LanguageSwitcher />
          <Button variant="ghost" size="icon" onClick={signOut}>
            <LogOut className="w-5 h-5 text-muted-foreground" />
          </Button>
        </div>
      </header>

      {/* Content */}
      <main className="flex-1 px-5 pb-24">
        {activeTab === "home" ? (
          <div className="flex flex-col gap-5 mt-4">
            {/* Welcome Card */}
            <div className="bg-card rounded-2xl p-5 shadow-card">
              <p className="text-sm text-muted-foreground">{t("home.hello")}</p>
              <p className="text-xl font-bold text-foreground">
                {profile?.display_name || t("home.user")}
              </p>
            </div>

            <div className="gradient-primary rounded-2xl p-6 shadow-elevated">
              <div className="flex items-center gap-2 mb-1">
                <Star className="w-5 h-5 text-primary-foreground/80" />
                <span className="text-sm font-medium text-primary-foreground/80">{t("home.yourPoints")}</span>
              </div>
              <p className="text-4xl font-black text-primary-foreground">
                {profile?.total_points ?? 0}
              </p>
            </div>

            <div className="bg-card rounded-2xl p-5 shadow-card flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-accent/30 flex items-center justify-center">
                <Flame className="w-6 h-6 text-reward" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">{t("home.streak")}</p>
                <p className="text-2xl font-bold text-foreground">
                  {profile?.streak_days ?? 0} {(profile?.streak_days ?? 0) === 1 ? t("home.day") : t("home.days")}
                </p>
              </div>
            </div>

            <Button
              size="lg"
              disabled={todayCheckedIn || checkinLoading}
              onClick={handleCheckin}
              className="w-full h-16 text-lg font-bold rounded-2xl gradient-primary text-primary-foreground shadow-elevated disabled:opacity-60"
            >
              {todayCheckedIn ? t("home.checkinDone") : checkinLoading ? t("home.checkinLoading") : t("home.checkinAction")}
            </Button>

            {/* Phone Mockup Showcase */}
            <div className="relative mt-6 rounded-3xl overflow-hidden shadow-elevated">
              <div
                className="relative px-6 pt-8 pb-0 flex items-end justify-center min-h-[420px]"
                style={{
                  background:
                    "radial-gradient(circle at 20% 20%, hsl(var(--primary) / 0.9), transparent 55%), radial-gradient(circle at 85% 30%, hsl(var(--reward) / 0.7), transparent 50%), linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--accent)) 100%)",
                }}
              >
                {/* Decorative blurred blobs */}
                <div className="absolute top-6 left-6 w-32 h-32 rounded-full bg-white/20 blur-3xl" />
                <div className="absolute bottom-10 right-8 w-40 h-40 rounded-full bg-reward/30 blur-3xl" />

                <div className="relative z-10 text-center text-primary-foreground pb-6">
                  <p className="text-xs font-semibold uppercase tracking-widest opacity-80 mb-2">
                    Cripto no Bolso
                  </p>
                  <h3 className="text-2xl font-black leading-tight mb-1">
                    Ganhe pontos<br />todos os dias
                  </h3>
                  <p className="text-sm opacity-90 max-w-[240px] mx-auto">
                    Faça check-in diário e suba no ranking da comunidade
                  </p>
                </div>

                <img
                  src={phoneMockup}
                  alt="Mockup do app CNB no celular"
                  loading="lazy"
                  width={1024}
                  height={1024}
                  className="absolute -bottom-10 right-0 w-56 sm:w-64 drop-shadow-2xl rotate-6 pointer-events-none select-none"
                />
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-3 mt-4">
            <h2 className="text-xl font-bold text-foreground">{t("home.ranking")}</h2>
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
                      {p.display_name || t("home.user")}
                    </p>
                  </div>
                  <span className="text-sm font-bold text-primary">{p.total_points} {t("home.points")}</span>
                </div>
              ))}
              {(!ranking || ranking.length === 0) && (
                <div className="p-8 text-center text-muted-foreground text-sm">
                  {t("home.noUsers")}
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
          <span className="text-xs font-medium">{t("home.tabHome")}</span>
        </button>
        <button
          onClick={() => setActiveTab("ranking")}
          className={`flex flex-col items-center gap-1 ${activeTab === "ranking" ? "text-primary" : "text-muted-foreground"}`}
        >
          <Trophy className="w-6 h-6" />
          <span className="text-xs font-medium">{t("home.tabRanking")}</span>
        </button>
      </nav>
    </div>
  );
};

export default HomePage;

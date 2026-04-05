import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { useEffect } from "react";
import { lovable } from "@/integrations/lovable";
import { Button } from "@/components/ui/button";
import { Zap, Trophy, Gamepad2, Globe, TrendingUp, Shield, ChevronRight } from "lucide-react";
import { toast } from "sonner";

const Login = () => {
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && user) navigate("/", { replace: true });
  }, [user, loading, navigate]);

  const handleSignIn = async (provider: "google" | "apple") => {
    const result = await lovable.auth.signInWithOAuth(provider);
    if (result.error) {
      toast.error("Erro ao fazer login. Tente novamente.");
    }
  };

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold font-heading">
              <span className="text-primary">CNB</span>Cripto
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#como-funciona" className="hover:text-foreground transition-colors">Como funciona</a>
            <a href="#funcionalidades" className="hover:text-foreground transition-colors">Funcionalidades</a>
            <a href="#sobre" className="hover:text-foreground transition-colors">Sobre</a>
          </div>
          <Button
            size="sm"
            className="rounded-full px-6 font-semibold"
            onClick={() => document.getElementById("cta")?.scrollIntoView({ behavior: "smooth" })}
          >
            Quero participar
          </Button>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6 gradient-hero">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-xs font-mono uppercase tracking-widest text-primary">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Abra o App e Ganhe Pontos
            </div>
            <h1 className="text-4xl md:text-6xl font-black font-heading leading-tight">
              Abra o App.{" "}
              <span className="text-primary">Ganhe pontos e suba no Ranking.</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-lg">
              O CNB Cripto recompensa você simplesmente por abrir o app todos os dias. Acumule pontos, mantenha sua sequência e dispute o topo do ranking.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button
                size="lg"
                className="rounded-full px-8 font-bold text-base h-14"
                onClick={() => document.getElementById("cta")?.scrollIntoView({ behavior: "smooth" })}
              >
                QUERO PARTICIPAR
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="rounded-full px-8 font-bold text-base h-14"
                onClick={() => document.getElementById("como-funciona")?.scrollIntoView({ behavior: "smooth" })}
              >
                Saiba mais
              </Button>
            </div>
          </div>

          {/* Phone mockup */}
          <div className="flex-shrink-0">
            <div className="w-64 md:w-72 rounded-[2rem] border-2 border-primary/30 bg-card p-6 shadow-elevated relative">
              <div className="w-20 h-1 rounded-full bg-primary/30 mx-auto mb-6" />
              <div className="flex flex-col items-center gap-4">
                <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center">
                  <Zap className="w-8 h-8 text-primary-foreground" />
                </div>
                <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">CNB Cripto</p>
                <p className="text-xs text-muted-foreground">Carregando…</p>
                <div className="w-full h-1.5 rounded-full bg-muted overflow-hidden">
                  <div className="w-3/4 h-full rounded-full bg-primary animate-pulse" />
                </div>
                <p className="text-2xl font-black font-heading text-primary">+10 Points</p>
                <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground">Pontos acumulados hoje</p>
                <div className="w-full rounded-xl border border-border p-3 text-center mt-2">
                  <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground">Saldo Total</p>
                  <p className="text-xl font-black font-heading text-primary">347.5 Points</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="max-w-6xl mx-auto mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "Gratuito", value: "100%", icon: "💎" },
            { label: "Recompensas", value: "Diário", icon: "🎯" },
            { label: "Ranking", value: "Global", icon: "🏆" },
            { label: "Inovação", value: "BR", icon: "🇧🇷" },
          ].map((s) => (
            <div key={s.label} className="bg-card rounded-xl p-4 border border-border text-center">
              <p className="text-2xl mb-1">{s.icon}</p>
              <p className="text-sm font-bold text-foreground">{s.value}</p>
              <p className="text-xs text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="h-px glow-line" />

      {/* Como funciona */}
      <section id="como-funciona" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs font-mono uppercase tracking-widest text-primary mb-3">// Como funciona</p>
          <h2 className="text-3xl md:text-4xl font-black font-heading mb-4">
            Simples como abrir o app
          </h2>
          <p className="text-muted-foreground mb-12 max-w-lg">
            Três passos para começar a acumular pontos todos os dias.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { step: "01", icon: "📲", title: "Baixe o app", desc: "Instale o CNB Cripto no seu smartphone. Disponível para iOS, sem burocracia." },
              { step: "02", icon: "👆", title: "Abra todos os dias", desc: "Ao abrir o app, seu check-in diário é registrado automaticamente e você ganha pontos." },
              { step: "03", icon: "🏆", title: "Acumule e suba no ranking", desc: "Quanto mais dias consecutivos, mais bônus. Dispute o topo do ranking global." },
            ].map((item) => (
              <div key={item.step} className="bg-card rounded-2xl p-6 border border-border group hover:border-primary/50 transition-colors">
                <p className="text-xs font-mono text-muted-foreground mb-4">{item.step} —</p>
                <p className="text-3xl mb-3">{item.icon}</p>
                <h3 className="text-lg font-bold font-heading mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="h-px glow-line" />

      {/* Funcionalidades */}
      <section id="funcionalidades" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs font-mono uppercase tracking-widest text-primary mb-3">// Funcionalidades</p>
          <h2 className="text-3xl md:text-4xl font-black font-heading mb-4">
            Um game que recompensa você
          </h2>
          <p className="text-muted-foreground mb-12 max-w-lg">
            Muito além de um app de pontos — uma experiência gamificada completa.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: <Gamepad2 className="w-6 h-6" />, title: "Gamificação real", desc: "Check-ins diários, sequências (streaks) e ranking que tornam o acúmulo de pontos divertido e viciante." },
              { icon: <Shield className="w-6 h-6" />, title: "Seguro e confiável", desc: "Autenticação via Google e Apple. Seus dados protegidos com criptografia de ponta." },
              { icon: <Globe className="w-6 h-6" />, title: "Use de qualquer lugar", desc: "Funciona de qualquer lugar. Basta abrir o app uma vez por dia para ganhar pontos." },
              { icon: <TrendingUp className="w-6 h-6" />, title: "Ranking global", desc: "Veja sua posição entre todos os usuários. Quem abre mais, sobe mais no ranking." },
            ].map((item) => (
              <div key={item.title} className="bg-card rounded-2xl p-6 border border-border flex gap-4 items-start hover:border-primary/50 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold font-heading mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="h-px glow-line" />

      {/* Sobre */}
      <section id="sobre" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs font-mono uppercase tracking-widest text-primary mb-3">// Sobre</p>
          <h2 className="text-3xl md:text-4xl font-black font-heading mb-4">
            CNB Cripto
          </h2>
          <p className="text-muted-foreground max-w-2xl">
            O CNB Cripto é um game mobile que recompensa seus usuários com pontos simplesmente por abrir o app diariamente.
            Mantenha sua sequência, acumule pontos e dispute o topo do ranking. Simples, divertido e gratuito.
          </p>
        </div>
      </section>

      <div className="h-px glow-line" />

      {/* CTA */}
      <section id="cta" className="py-20 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <p className="text-xs font-mono uppercase tracking-widest text-primary mb-3">// Entre agora</p>
          <h2 className="text-3xl md:text-4xl font-black font-heading mb-4">
            Pronto para começar a ganhar?
          </h2>
          <p className="text-muted-foreground mb-8">
            Faça login e comece a acumular pontos agora mesmo.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-sm mx-auto">
            <Button
              size="lg"
              className="h-14 rounded-full px-8 font-bold text-base gap-3 w-full"
              onClick={() => handleSignIn("google")}
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
              </svg>
              Entrar com Google
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="h-14 rounded-full px-8 font-bold text-base gap-3 w-full"
              onClick={() => handleSignIn("apple")}
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
              </svg>
              Entrar com Apple
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-10 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start gap-6">
            <div>
              <p className="text-lg font-bold font-heading">
                <span className="text-primary">CNB</span>Cripto
              </p>
            </div>
            <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
              <Link to="/terms" className="hover:text-foreground transition-colors">Termos de Serviço</Link>
              <Link to="/privacy" className="hover:text-foreground transition-colors">Política de Privacidade</Link>
              <Link to="/privacy-en" className="hover:text-foreground transition-colors">Privacy Policy (EN)</Link>
              <Link to="/support" className="hover:text-foreground transition-colors">Suporte</Link>
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-6">
            © 2026 CNB Cripto. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Login;

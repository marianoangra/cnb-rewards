import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { useEffect } from "react";
import { lovable } from "@/integrations/lovable";
import { Button } from "@/components/ui/button";
import { Zap, Trophy, Gamepad2, Globe, TrendingUp, Shield, BatteryCharging, Smartphone } from "lucide-react";
import { toast } from "sonner";

const Login = () => {
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && user) navigate("/", { replace: true });
  }, [user, loading]);

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
            <span className="text-xl font-bold font-heading"><span className="text-primary">CNB</span> Mobile</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#como-funciona" className="hover:text-foreground transition-colors">Como funciona</a>
            <a href="#funcionalidades" className="hover:text-foreground transition-colors">Funcionalidades</a>
            <a href="#sobre" className="hover:text-foreground transition-colors">Sobre</a>
          </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6 gradient-hero">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-xs font-mono uppercase tracking-widest text-primary">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Carregue e Ganhe
            </div>
            <h1 className="text-4xl md:text-6xl font-black font-heading leading-tight">
              Carregue seu celular.{" "}
              <span className="text-primary">Ganhe pontos CNB.</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-lg">
              O CNB Mobile transforma o tempo de carregamento do seu celular em pontos CNB. Uma nova economia baseada no seu consumo diário de energia — de qualquer lugar do mundo.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://play.google.com/store/apps/details?id=com.cnb.cnbappv2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  alt="Disponível no Google Play"
                  src="https://play.google.com/intl/en_us/badges/static/images/badges/pt-br_badge_web_generic.png"
                  className="h-14 w-auto"
                />
              </a>
            </div>
          </div>

          {/* Phone mockup */}
          <div className="flex-shrink-0">
            <div className="w-64 md:w-72 rounded-[2rem] border-2 border-primary/30 bg-card p-6 shadow-elevated relative">
              <div className="w-20 h-1 rounded-full bg-primary/30 mx-auto mb-6" />
              <div className="flex flex-col items-center gap-4">
                <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center">
                  <BatteryCharging className="w-8 h-8 text-primary-foreground" />
                </div>
                <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">CNB Mobile</p>
                <p className="text-xs text-muted-foreground">Carregando…</p>
                <div className="w-full h-1.5 rounded-full bg-muted overflow-hidden">
                  <div className="w-3/4 h-full rounded-full bg-primary animate-pulse" />
                </div>
                <p className="text-2xl font-black font-heading text-primary">+10 CNB</p>
                <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground">Pontos ganhos hoje</p>
                <div className="w-full rounded-xl border border-border p-3 text-center mt-2">
                  <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground">Saldo Total</p>
                  <p className="text-xl font-black font-heading text-primary">347.5 CNB</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="max-w-6xl mx-auto mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "Gratuito", value: "100%", icon: "💎" },
            { label: "Downloads", value: "50 mil+", icon: "📲" },
            { label: "Plataforma", value: "Global", icon: "🌍" },
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
            Simples: carregue e ganhe
          </h2>
          <p className="text-muted-foreground mb-12 max-w-lg">
            Três passos para transformar o carregamento do seu celular em pontos CNB.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { step: "01", icon: "📲", title: "Baixe o CNB Mobile", desc: "Instale o app no seu smartphone. Disponível para Android e iOS, sem burocracia." },
              { step: "02", icon: "🔌", title: "Coloque para carregar", desc: "Conecte seu celular ao carregador. O app detecta automaticamente e começa a acumular pontos CNB." },
              { step: "03", icon: "🏆", title: "Acumule e suba no ranking", desc: "Quanto mais você carrega, mais pontos ganha. Dispute o topo do ranking global entre todos os usuários." },
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
            Uma nova economia de energia
          </h2>
          <p className="text-muted-foreground mb-12 max-w-lg">
            Transforme algo que você já faz todos os dias em recompensas reais.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: <BatteryCharging className="w-6 h-6" />, title: "Mineração por carregamento", desc: "Conecte o carregador e o app converte automaticamente o tempo de carga em pontos CNB. Sem esforço." },
              { icon: <Shield className="w-6 h-6" />, title: "Seguro e confiável", desc: "Autenticação via Google e Apple. Seus dados protegidos com criptografia de ponta." },
              { icon: <Globe className="w-6 h-6" />, title: "Plataforma global", desc: "Funciona de qualquer lugar do mundo. Basta carregar o celular para acumular pontos CNB." },
              { icon: <TrendingUp className="w-6 h-6" />, title: "Ranking global", desc: "Acompanhe sua posição entre todos os usuários. Quem carrega mais, sobe mais no ranking." },
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
            CNB Mobile
          </h2>
          <p className="text-muted-foreground max-w-2xl">
            O CNB Mobile é uma plataforma inovadora que revoluciona a forma como você carrega seu celular. 
            Nosso app converte o tempo de carregamento em pontos CNB valiosos, criando uma nova economia baseada 
            no seu consumo diário de energia. Carregue, acumule e suba no ranking — de qualquer lugar do mundo.
          </p>
        </div>
      </section>

      <div className="h-px glow-line" />

      {/* CTA */}
      <section id="cta" className="py-20 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <p className="text-xs font-mono uppercase tracking-widest text-primary mb-3">// Baixe agora</p>
          <h2 className="text-3xl md:text-4xl font-black font-heading mb-4">
            Pronto para ganhar enquanto carrega?
          </h2>
          <p className="text-muted-foreground mb-8">
            Baixe o CNB Mobile e comece a transformar energia em pontos CNB agora mesmo.
          </p>

          <div className="flex justify-center">
            <a
              href="https://play.google.com/store/apps/details?id=com.cnb.cnbappv2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                alt="Disponível no Google Play"
                src="https://play.google.com/intl/en_us/badges/static/images/badges/pt-br_badge_web_generic.png"
                className="h-14 w-auto"
              />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-10 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start gap-6">
            <div>
              <p className="text-lg font-bold font-heading">
                <span className="text-primary">CNB</span> Mobile
              </p>
              <p className="text-xs text-muted-foreground mt-1">por Cripto no Bolso</p>
            </div>
            <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
              <Link to="/terms" className="hover:text-foreground transition-colors">Termos de Serviço</Link>
              <Link to="/privacy" className="hover:text-foreground transition-colors">Política de Privacidade</Link>
              <Link to="/privacy-en" className="hover:text-foreground transition-colors">Privacy Policy (EN)</Link>
              <Link to="/support" className="hover:text-foreground transition-colors">Suporte</Link>
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-6">
            © 2026 CNB Mobile — Cripto no Bolso. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Login;
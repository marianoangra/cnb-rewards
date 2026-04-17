import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { useEffect } from "react";
import { lovable } from "@/integrations/lovable";
import { Globe, TrendingUp, Shield, BatteryCharging, Instagram, Linkedin, MessageCircle, Send, Users } from "lucide-react";
import { toast } from "sonner";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import ceoImage from "@/assets/ceo-rafael.jpg";
import logoCnb from "@/assets/logo-cnb.png";

const Login = () => {
  const { user, loading } = useAuth();
  const navigate = useNavigate();
  const { t } = useTranslation();

  useEffect(() => {
    if (!loading && user) navigate("/", { replace: true });
  }, [user, loading]);

  const handleSignIn = async (provider: "google" | "apple") => {
    const result = await lovable.auth.signInWithOAuth(provider);
    if (result.error) toast.error(t("landing.loginError"));
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
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src={logoCnb} alt="CNB Mobile logo" className="w-8 h-8 rounded-lg" />
            <span className="text-xl font-bold font-heading"><span className="text-primary">CNB</span> Mobile</span>
          </div>
          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
              <a href="#como-funciona" className="hover:text-foreground transition-colors">{t("nav.howItWorks")}</a>
              <a href="#funcionalidades" className="hover:text-foreground transition-colors">{t("nav.features")}</a>
              <a href="#sobre" className="hover:text-foreground transition-colors">{t("nav.about")}</a>
            </div>
            <LanguageSwitcher />
          </div>
        </div>
      </nav>

      <section className="relative pt-32 pb-20 px-6 gradient-hero">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-xs font-mono uppercase tracking-widest text-primary">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              {t("landing.badge")}
            </div>
            <h1 className="text-4xl md:text-6xl font-black font-heading leading-tight">
              {t("landing.heroTitle1")}{" "}
              <span className="text-primary">{t("landing.heroTitle2")}</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-lg">{t("landing.heroDesc")}</p>
            <div className="flex flex-wrap gap-3">
              <a href="https://play.google.com/store/apps/details?id=com.cnb.cnbappv2" target="_blank" rel="noopener noreferrer">
                <img alt={t("landing.googlePlayAlt")} src="https://play.google.com/intl/en_us/badges/static/images/badges/pt-br_badge_web_generic.png" className="h-14 w-auto" />
              </a>
            </div>
          </div>

          <div className="flex-shrink-0">
            <div className="w-64 md:w-72 rounded-[2rem] border-2 border-primary/30 bg-card p-6 shadow-elevated relative">
              <div className="w-20 h-1 rounded-full bg-primary/30 mx-auto mb-6" />
              <div className="flex flex-col items-center gap-4">
                <img src={logoCnb} alt="CNB Mobile logo" className="w-16 h-16 rounded-2xl" />
                <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">CNB Mobile</p>
                <p className="text-xs text-muted-foreground">{t("landing.phoneCharging")}</p>
                <div className="w-full h-1.5 rounded-full bg-muted overflow-hidden">
                  <div className="w-3/4 h-full rounded-full bg-primary animate-pulse" />
                </div>
                <p className="text-2xl font-black font-heading text-primary">+10 CNB</p>
                <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground">{t("landing.phonePointsToday")}</p>
                <div className="w-full rounded-xl border border-border p-3 text-center mt-2">
                  <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground">{t("landing.phoneTotalBalance")}</p>
                  <p className="text-xl font-black font-heading text-primary">347.5 CNB</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: t("landing.statsFree"), value: "100%", icon: "💎" },
            { label: t("landing.statsDownloads"), value: t("landing.statsDownloadsValue"), icon: "📲" },
            { label: t("landing.statsPlatform"), value: t("landing.statsPlatformValue"), icon: "🌍" },
            { label: t("landing.statsInnovation"), value: t("landing.statsInnovationValue"), icon: "🇧🇷" },
          ].map((s) => (
            <div key={s.label} className="bg-card rounded-xl p-4 border border-border text-center">
              <p className="text-2xl mb-1">{s.icon}</p>
              <p className="text-sm font-bold text-foreground">{s.value}</p>
              <p className="text-xs text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="h-px glow-line" />

      <section id="como-funciona" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs font-mono uppercase tracking-widest text-primary mb-3">{t("landing.howSection")}</p>
          <h2 className="text-3xl md:text-4xl font-black font-heading mb-4">{t("landing.howTitle")}</h2>
          <p className="text-muted-foreground mb-12 max-w-lg">{t("landing.howDesc")}</p>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { step: "01", icon: "📲", title: t("landing.step1Title"), desc: t("landing.step1Desc") },
              { step: "02", icon: "🔌", title: t("landing.step2Title"), desc: t("landing.step2Desc") },
              { step: "03", icon: "🏆", title: t("landing.step3Title"), desc: t("landing.step3Desc") },
            ].map((item) => (
              <div key={item.step} className="bg-card rounded-2xl p-6 border border-border group hover:border-primary/50 transition-colors">
                <p className="text-xs font-mono text-muted-foreground mb-4">{item.step} —</p>
                <p className="text-3xl mb-3">{item.icon}</p>
                <h3 className="text-lg font-bold font-heading mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-card rounded-2xl p-8 border border-primary/30">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold font-heading">{t("landing.communityTitle")}</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-6">{t("landing.communityDesc")}</p>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://chat.whatsapp.com/GsIEmnUPKsn2W95HEjPwW8"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-border bg-background hover:border-primary/50 hover:text-primary transition-colors text-sm font-semibold"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>
              <a
                href="https://t.me/grupcriptocnb"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-border bg-background hover:border-primary/50 hover:text-primary transition-colors text-sm font-semibold"
              >
                <Send className="w-4 h-4" />
                Telegram
              </a>
              <a
                href="https://instagram.com/criptonobolso"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-border bg-background hover:border-primary/50 hover:text-primary transition-colors text-sm font-semibold"
              >
                <Instagram className="w-4 h-4" />
                @criptonobolso
              </a>
              <a
                href="https://x.com/criptonobolso"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (antigo Twitter) @criptonobolso"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-border bg-background hover:border-primary/50 hover:text-primary transition-colors text-sm font-semibold"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true" className="w-4 h-4 fill-current">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
                @criptonobolso
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="h-px glow-line" />

      <section id="funcionalidades" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs font-mono uppercase tracking-widest text-primary mb-3">{t("landing.featSection")}</p>
          <h2 className="text-3xl md:text-4xl font-black font-heading mb-4">{t("landing.featTitle")}</h2>
          <p className="text-muted-foreground mb-12 max-w-lg">{t("landing.featDesc")}</p>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: <BatteryCharging className="w-6 h-6" />, title: t("landing.feat1Title"), desc: t("landing.feat1Desc") },
              { icon: <Shield className="w-6 h-6" />, title: t("landing.feat2Title"), desc: t("landing.feat2Desc") },
              { icon: <Globe className="w-6 h-6" />, title: t("landing.feat3Title"), desc: t("landing.feat3Desc") },
              { icon: <TrendingUp className="w-6 h-6" />, title: t("landing.feat4Title"), desc: t("landing.feat4Desc") },
            ].map((item) => (
              <div key={item.title} className="bg-card rounded-2xl p-6 border border-border flex gap-4 items-start hover:border-primary/50 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">{item.icon}</div>
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

      <section id="sobre" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs font-mono uppercase tracking-widest text-primary mb-3">{t("landing.aboutSection")}</p>
          <h2 className="text-3xl md:text-4xl font-black font-heading mb-4">{t("landing.aboutTitle")}</h2>
          <p className="text-muted-foreground max-w-2xl">{t("landing.aboutDesc")}</p>
        </div>
      </section>

      <div className="h-px glow-line" />

      <section id="founder" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs font-mono uppercase tracking-widest text-primary mb-3">{t("landing.founderSection")}</p>
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="flex-shrink-0">
              <img src={ceoImage} alt="Rafael Mariano" className="w-48 h-48 rounded-2xl object-cover border-2 border-primary/30 shadow-elevated" />
            </div>
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-black font-heading mb-2">Rafael Mariano</h2>
              <p className="text-sm font-mono uppercase tracking-widest text-primary mb-4">{t("landing.founderRole")}</p>
              <p className="text-muted-foreground mb-3">{t("landing.founderBio1")}</p>
              <p className="text-muted-foreground">{t("landing.founderBio2")}</p>
              <a href="https://rafaelmariano.com.br" target="_blank" rel="noopener noreferrer" className="inline-block mt-4 text-sm font-semibold text-primary hover:underline">
                rafaelmariano.com.br →
              </a>
              <div className="flex flex-wrap gap-4 mt-3">
                <a href="https://instagram.com/rafaelmariano" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                  <Instagram className="w-4 h-4" />
                  @rafaelmariano
                </a>
                <a href="https://www.linkedin.com/in/palestranterafaelmariano/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                  <Linkedin className="w-4 h-4" />
                  palestranterafaelmariano
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="h-px glow-line" />

      <section id="cta" className="py-20 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <p className="text-xs font-mono uppercase tracking-widest text-primary mb-3">{t("landing.ctaSection")}</p>
          <h2 className="text-3xl md:text-4xl font-black font-heading mb-4">{t("landing.ctaTitle")}</h2>
          <p className="text-muted-foreground mb-8">{t("landing.ctaDesc")}</p>
          <div className="flex justify-center">
            <a href="https://play.google.com/store/apps/details?id=com.cnb.cnbappv2" target="_blank" rel="noopener noreferrer">
              <img alt={t("landing.googlePlayAlt")} src="https://play.google.com/intl/en_us/badges/static/images/badges/pt-br_badge_web_generic.png" className="h-14 w-auto" />
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-10 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start gap-6">
            <div>
              <p className="text-lg font-bold font-heading"><span className="text-primary">CNB</span> Mobile</p>
              <p className="text-xs text-muted-foreground mt-1">{t("landing.footerBy")}</p>
              <p className="text-xs text-muted-foreground mt-1">{t("landing.footerLocation")}</p>
            </div>
            <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
              <Link to="/terms" className="hover:text-foreground transition-colors">{t("landing.footerTerms")}</Link>
              <Link to="/privacy" className="hover:text-foreground transition-colors">{t("landing.footerPrivacy")}</Link>
              <Link to="/privacy-en" className="hover:text-foreground transition-colors">{t("landing.footerPrivacyEN")}</Link>
              <Link to="/copyright" className="hover:text-foreground transition-colors">{t("landing.footerCopyright")}</Link>
              <Link to="/support" className="hover:text-foreground transition-colors">{t("landing.footerSupport")}</Link>
              <a href="https://x.com/criptonobolso" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-foreground transition-colors">
                <Twitter className="w-4 h-4" />
                @criptonobolso
              </a>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-border flex flex-col gap-2">
            <p className="text-xs text-muted-foreground">
              {t("landing.footerBuiltWith")} <span className="text-foreground font-semibold">Claude.ai</span>, <span className="text-foreground font-semibold">Grok.ai</span>, <span className="text-foreground font-semibold">Firebase</span> {t("landing.footerAnd")} <span className="text-foreground font-semibold">Lovable</span>.
            </p>
            <p className="text-xs text-muted-foreground">
              {t("landing.footerSupportedBy")} <span className="text-foreground font-semibold">SuperTeam Brasil Solana</span> {t("landing.footerAnd")} <span className="text-foreground font-semibold">Cultura Builder</span>.
            </p>
            <p className="text-xs text-muted-foreground mt-2">{t("landing.footerRights")}</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Login;

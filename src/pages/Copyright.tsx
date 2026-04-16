import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const Copyright = () => {
  const { t } = useTranslation();
  const email = <a href="mailto:contato@criptonobolso.com.br" className="text-primary underline">contato@criptonobolso.com.br</a>;
  return (
    <div className="min-h-screen bg-background px-6 py-10">
      <div className="mx-auto max-w-2xl">
        <div className="flex items-center justify-between mb-6">
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
            <ArrowLeft className="w-4 h-4" /> {t("common.back")}
          </Link>
          <LanguageSwitcher />
        </div>

        <h1 className="text-2xl font-bold text-foreground mb-2">{t("copyright.title")}</h1>
        <p className="text-xs text-muted-foreground mb-6">{t("common.lastUpdated")}: {t("copyright.date")}</p>

        <div className="prose prose-sm text-muted-foreground space-y-4">
          <section>
            <h2 className="text-lg font-semibold text-foreground">{t("copyright.s1Title")}</h2>
            <p>{t("copyright.s1a")}</p>
            <p>{t("copyright.s1b")}</p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-foreground">{t("copyright.s2Title")}</h2>
            <p>{t("copyright.s2")}</p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-foreground">{t("copyright.s3Title")}</h2>
            <p>{t("copyright.s3Intro")}</p>
            <ul className="list-disc pl-5 space-y-1">
              {[1,2,3,4,5].map((i) => <li key={i}>{t(`copyright.s3l${i}`)}</li>)}
            </ul>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-foreground">{t("copyright.s4Title")}</h2>
            <p>{t("copyright.s4")}</p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-foreground">{t("copyright.s5Title")}</h2>
            <p>{t("copyright.s5Intro")}</p>
            <ul className="list-disc pl-5 space-y-1">
              {[1,2,3,4].map((i) => <li key={i}>{t(`copyright.s5l${i}`)}</li>)}
            </ul>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-foreground">{t("copyright.s6Title")}</h2>
            <p>{t("copyright.s6")} {email}</p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-foreground">{t("copyright.s7Title")}</h2>
            <p>
              <strong>Cripto no Bolso</strong><br />
              São Paulo, Brasil<br />
              {t("common.email")}: {email}<br />
              <a href="https://www.cnbmobile.com" className="text-primary underline">www.cnbmobile.com</a>
            </p>
          </section>
          <p className="pt-4 border-t border-border">{t("copyright.rights")}</p>
        </div>
      </div>
    </div>
  );
};

export default Copyright;

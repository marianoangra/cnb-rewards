import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const Privacy = () => {
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

        <h1 className="text-2xl font-bold text-foreground mb-2">{t("privacy.title")}</h1>
        <p className="text-xs text-muted-foreground mb-6">{t("common.lastUpdated")}: {t("privacy.date")}</p>

        <div className="prose prose-sm text-muted-foreground space-y-4">
          <section>
            <h2 className="text-lg font-semibold text-foreground">{t("privacy.s1Title")}</h2>
            <p>{t("privacy.s1")}</p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-foreground">{t("privacy.s2Title")}</h2>
            <p>{t("privacy.s2Intro")}</p>
            {(["a","b","c"] as const).map((sub) => (
              <div key={sub}>
                <h3 className="text-base font-medium text-foreground mt-3">{t(`privacy.s2${sub}Title`)}</h3>
                <ul className="list-disc pl-5 space-y-1">
                  {[1,2,3,4].map((i) => {
                    const key = `privacy.s2${sub}${i}`;
                    const v = t(key);
                    return v === key ? null : <li key={i}>{v}</li>;
                  })}
                </ul>
              </div>
            ))}
          </section>
          <section>
            <h2 className="text-lg font-semibold text-foreground">{t("privacy.s3Title")}</h2>
            <p>{t("privacy.s3Intro")}</p>
            <ul className="list-disc pl-5 space-y-1">
              {[1,2,3,4,5,6].map((i) => <li key={i}>{t(`privacy.s3l${i}`)}</li>)}
            </ul>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-foreground">{t("privacy.s4Title")}</h2>
            <p><strong>{t("privacy.s4a")}</strong></p>
            <p>{t("privacy.s4Intro")}</p>
            <ul className="list-disc pl-5 space-y-1">
              {[1,2,3].map((i) => <li key={i}>{t(`privacy.s4l${i}`)}</li>)}
            </ul>
          </section>
          {[5,6].map((n) => (
            <section key={n}>
              <h2 className="text-lg font-semibold text-foreground">{t(`privacy.s${n}Title`)}</h2>
              <p>{t(`privacy.s${n}`)}</p>
            </section>
          ))}
          <section>
            <h2 className="text-lg font-semibold text-foreground">{t("privacy.s7Title")}</h2>
            <p>{t("privacy.s7Intro")}</p>
            <ul className="list-disc pl-5 space-y-1">
              {[1,2,3,4,5].map((i) => <li key={i}>{t(`privacy.s7l${i}`)}</li>)}
            </ul>
            <p>{t("privacy.s7Out")} {email}</p>
          </section>
          {[8,9,10,11].map((n) => (
            <section key={n}>
              <h2 className="text-lg font-semibold text-foreground">{t(`privacy.s${n}Title`)}</h2>
              <p>{t(`privacy.s${n}`)}</p>
            </section>
          ))}
          <section>
            <h2 className="text-lg font-semibold text-foreground">{t("privacy.s12Title")}</h2>
            <p>{t("privacy.s12Intro")}</p>
            <p>{t("common.email")}: {email}</p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-foreground">{t("privacy.s13Title")}</h2>
            <p>{t("privacy.s13")}</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Privacy;

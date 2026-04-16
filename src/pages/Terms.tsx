import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const Terms = () => {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen bg-background px-6 py-10">
      <div className="mx-auto max-w-2xl">
        <div className="flex items-center justify-between mb-6">
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
            <ArrowLeft className="w-4 h-4" /> {t("common.back")}
          </Link>
          <LanguageSwitcher />
        </div>

        <h1 className="text-2xl font-bold text-foreground mb-2">{t("terms.title")}</h1>
        <p className="text-xs text-muted-foreground mb-6">{t("common.lastUpdated")}: {t("terms.date")}</p>

        <div className="prose prose-sm text-muted-foreground space-y-4">
          {[1,2,3,4,5,6,7,8,9,10,11].map((n) => {
            const isS2 = n === 2;
            const isS5 = n === 5;
            return (
              <section key={n}>
                <h2 className="text-lg font-semibold text-foreground">{t(`terms.s${n}Title`)}</h2>
                {isS2 ? (
                  <>
                    <p>{t("terms.s2a")}</p>
                    <p><strong>{t("terms.s2b")}</strong></p>
                  </>
                ) : isS5 ? (
                  <>
                    <p>{t("terms.s5Intro")}</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>{t("terms.s5l1")}</li>
                      <li>{t("terms.s5l2")}</li>
                      <li>{t("terms.s5l3")}</li>
                      <li>{t("terms.s5l4")}</li>
                    </ul>
                  </>
                ) : n === 11 ? (
                  <p>{t("terms.s11")} <a href="mailto:contato@criptonobolso.com.br" className="text-primary underline">contato@criptonobolso.com.br</a></p>
                ) : (
                  <p>{t(`terms.s${n}`)}</p>
                )}
              </section>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Terms;

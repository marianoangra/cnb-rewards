import { Link } from "react-router-dom";
import { ArrowLeft, Mail, MessageCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const Support = () => {
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

        <h1 className="text-2xl font-bold text-foreground mb-6">{t("support.title")}</h1>

        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Mail className="w-5 h-5 text-primary" />
                {t("support.emailTitle")}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-2">{t("support.emailIntro")}</p>
              <a href="mailto:contato@criptonobolso.com.br" className="text-primary underline font-medium">
                contato@criptonobolso.com.br
              </a>
              <p className="text-xs text-muted-foreground mt-2">{t("support.emailSla")}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <MessageCircle className="w-5 h-5 text-primary" />
                {t("support.faqTitle")}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {[1,2,3,4].map((i) => (
                <div key={i}>
                  <p className="text-sm font-medium text-foreground">{t(`support.q${i}`)}</p>
                  <p className="text-sm text-muted-foreground">{t(`support.a${i}`)}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Support;

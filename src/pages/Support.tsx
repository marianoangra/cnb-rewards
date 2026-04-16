import { Link } from "react-router-dom";
import { ArrowLeft, Mail, MessageCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Support = () => {
  return (
    <div className="min-h-screen bg-background px-6 py-10">
      <div className="mx-auto max-w-2xl">
        <Link to="/login" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6">
          <ArrowLeft className="w-4 h-4" /> Voltar
        </Link>

        <h1 className="text-2xl font-bold text-foreground mb-6">Suporte</h1>

        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Mail className="w-5 h-5 text-primary" />
                Contato por E-mail
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-2">
                Para dúvidas, sugestões ou problemas técnicos, envie um e-mail para:
              </p>
              <a href="mailto:contato@criptonobolso.com.br" className="text-primary underline font-medium">
                contato@criptonobolso.com.br
              </a>
              <p className="text-xs text-muted-foreground mt-2">
                Respondemos em até 48 horas úteis.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <MessageCircle className="w-5 h-5 text-primary" />
                Perguntas Frequentes
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="text-sm font-medium text-foreground">Como ganho pontos?</p>
                <p className="text-sm text-muted-foreground">Basta abrir o app uma vez por dia para receber 10 pontos. Mantenha sua sequência diária para ganhar bônus!</p>
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">Os pontos têm valor monetário?</p>
                <p className="text-sm text-muted-foreground">Não. Os pontos são exclusivamente para fins de entretenimento e ranking entre usuários.</p>
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">Como excluo minha conta?</p>
                <p className="text-sm text-muted-foreground">Envie um e-mail para contato@criptonobolso.com.br solicitando a exclusão. Processaremos em até 30 dias.</p>
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">O app coleta dados sensíveis?</p>
                <p className="text-sm text-muted-foreground">Não. Coletamos apenas informações básicas de perfil fornecidas pelo Google ou Apple no login.</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Support;

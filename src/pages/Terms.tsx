import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background px-6 py-10">
      <div className="mx-auto max-w-2xl">
        <Link to="/login" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6">
          <ArrowLeft className="w-4 h-4" /> Voltar
        </Link>

        <h1 className="text-2xl font-bold text-foreground mb-6">Termos de Uso</h1>
        <p className="text-xs text-muted-foreground mb-6">Última atualização: 4 de abril de 2026</p>

        <div className="prose prose-sm text-muted-foreground space-y-4">
          <section>
            <h2 className="text-lg font-semibold text-foreground">1. Aceitação dos Termos</h2>
            <p>Ao acessar e utilizar o aplicativo CNB Cripto ("App"), você concorda em cumprir e estar vinculado a estes Termos de Uso. Se você não concordar com qualquer parte destes termos, não deverá utilizar o App.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">2. Descrição do Serviço</h2>
            <p>O CNB Cripto é um aplicativo gamificado que recompensa os usuários com pontos virtuais por acessar o app diariamente. Os pontos são acumulados automaticamente e servem para fins de entretenimento e ranking entre usuários.</p>
            <p><strong>Os pontos do CNB Cripto NÃO possuem valor monetário real</strong>, não podem ser trocados por dinheiro, criptomoedas, bens ou serviços reais, e não constituem qualquer forma de investimento ou ativo financeiro.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">3. Elegibilidade</h2>
            <p>Você deve ter pelo menos 13 anos de idade para utilizar o App. Ao utilizar o App, você declara e garante que possui a idade mínima necessária.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">4. Conta do Usuário</h2>
            <p>Para utilizar o App, é necessário criar uma conta utilizando autenticação via Google ou Apple. Você é responsável por manter a segurança da sua conta e por todas as atividades realizadas nela.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">5. Regras de Uso</h2>
            <p>Ao utilizar o App, você concorda em:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Não utilizar o App para fins ilegais ou não autorizados;</li>
              <li>Não tentar manipular, hackear ou explorar vulnerabilidades do sistema de pontos;</li>
              <li>Não criar múltiplas contas para acumular pontos de forma indevida;</li>
              <li>Não utilizar bots, scripts ou ferramentas automatizadas para interagir com o App.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">6. Pontos e Ranking</h2>
            <p>Os pontos são concedidos exclusivamente como forma de gamificação. Reservamo-nos o direito de modificar, suspender ou encerrar o sistema de pontos a qualquer momento, sem aviso prévio. Os pontos acumulados não geram direito adquirido.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">7. Propriedade Intelectual</h2>
            <p>Todo o conteúdo do App, incluindo mas não se limitando a textos, gráficos, logos, ícones, imagens e software, é de propriedade exclusiva do CNB Cripto e está protegido pelas leis de propriedade intelectual aplicáveis.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">8. Limitação de Responsabilidade</h2>
            <p>O App é fornecido "como está" e "conforme disponível". Não garantimos que o App estará disponível ininterruptamente ou livre de erros. Em nenhuma circunstância seremos responsáveis por quaisquer danos diretos, indiretos, incidentais ou consequenciais decorrentes do uso do App.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">9. Modificações dos Termos</h2>
            <p>Reservamo-nos o direito de modificar estes Termos de Uso a qualquer momento. Alterações significativas serão comunicadas através do App. O uso continuado após as modificações constitui aceitação dos novos termos.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">10. Rescisão</h2>
            <p>Podemos suspender ou encerrar sua conta a qualquer momento, por qualquer motivo, incluindo violação destes Termos de Uso. Você pode encerrar sua conta a qualquer momento entrando em contato conosco.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">11. Contato</h2>
            <p>Em caso de dúvidas sobre estes Termos de Uso, entre em contato pelo e-mail: <a href="mailto:suporte@cnbcripto.com" className="text-primary underline">suporte@cnbcripto.com</a></p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Terms;

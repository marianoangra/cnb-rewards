import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background px-6 py-10">
      <div className="mx-auto max-w-2xl">
        <Link to="/login" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6">
          <ArrowLeft className="w-4 h-4" /> Voltar
        </Link>

        <h1 className="text-2xl font-bold text-foreground mb-6">Política de Privacidade</h1>
        <p className="text-xs text-muted-foreground mb-6">Última atualização: 4 de abril de 2026</p>

        <div className="prose prose-sm text-muted-foreground space-y-4">
          <section>
            <h2 className="text-lg font-semibold text-foreground">1. Introdução</h2>
            <p>O CNB Mobile ("nós", "nosso" ou "App") está comprometido em proteger a privacidade dos nossos usuários. Esta Política de Privacidade descreve como coletamos, usamos, armazenamos e protegemos suas informações pessoais.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">2. Informações Coletadas</h2>
            <p>Coletamos as seguintes categorias de informações:</p>
            <h3 className="text-base font-medium text-foreground mt-3">2.1 Informações de Conta</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Nome de exibição (fornecido pelo provedor de autenticação);</li>
              <li>Endereço de e-mail;</li>
              <li>Foto de perfil (quando disponível via Google ou Apple);</li>
              <li>Identificador único da conta.</li>
            </ul>
            <h3 className="text-base font-medium text-foreground mt-3">2.2 Dados de Uso</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Datas e horários de acesso ao App;</li>
              <li>Pontuação acumulada e histórico de check-ins;</li>
              <li>Sequência de dias consecutivos (streak);</li>
              <li>Posição no ranking.</li>
            </ul>
            <h3 className="text-base font-medium text-foreground mt-3">2.3 Informações Técnicas</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Tipo de dispositivo e sistema operacional;</li>
              <li>Versão do App;</li>
              <li>Dados de desempenho e diagnóstico.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">3. Como Usamos suas Informações</h2>
            <p>Utilizamos suas informações para:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Criar e gerenciar sua conta;</li>
              <li>Registrar check-ins diários e calcular pontuação;</li>
              <li>Exibir o ranking de usuários;</li>
              <li>Melhorar a experiência do usuário e o desempenho do App;</li>
              <li>Comunicar atualizações importantes sobre o serviço;</li>
              <li>Prevenir fraudes e abusos.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">4. Compartilhamento de Dados</h2>
            <p><strong>Não vendemos, alugamos ou comercializamos suas informações pessoais.</strong></p>
            <p>Suas informações podem ser compartilhadas apenas nas seguintes circunstâncias:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Ranking público:</strong> seu nome de exibição e pontuação podem ser visíveis para outros usuários no ranking;</li>
              <li><strong>Provedores de serviço:</strong> utilizamos serviços de terceiros para hospedagem e autenticação (Google, Apple);</li>
              <li><strong>Obrigação legal:</strong> quando exigido por lei ou processo judicial.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">5. Armazenamento e Segurança</h2>
            <p>Seus dados são armazenados em servidores seguros com criptografia em trânsito e em repouso. Implementamos medidas técnicas e organizacionais adequadas para proteger suas informações contra acesso não autorizado, alteração ou destruição.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">6. Retenção de Dados</h2>
            <p>Mantemos suas informações pessoais enquanto sua conta estiver ativa. Após a exclusão da conta, seus dados serão removidos em até 30 dias, exceto quando a retenção for necessária por obrigação legal.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">7. Seus Direitos</h2>
            <p>Você tem os seguintes direitos em relação aos seus dados pessoais:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Acesso:</strong> solicitar uma cópia dos dados que temos sobre você;</li>
              <li><strong>Correção:</strong> solicitar a correção de dados imprecisos;</li>
              <li><strong>Exclusão:</strong> solicitar a exclusão dos seus dados e conta;</li>
              <li><strong>Portabilidade:</strong> receber seus dados em formato estruturado;</li>
              <li><strong>Oposição:</strong> opor-se ao processamento dos seus dados.</li>
            </ul>
            <p>Para exercer qualquer destes direitos, entre em contato pelo e-mail: <a href="mailto:contato@criptonobolso.com.br" className="text-primary underline">contato@criptonobolso.com.br</a></p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">8. Privacidade de Menores</h2>
            <p>O App não é destinado a menores de 13 anos. Não coletamos intencionalmente informações de crianças menores de 13 anos. Se tomarmos conhecimento de que coletamos dados de uma criança menor de 13 anos, tomaremos medidas para excluir essas informações.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">9. Cookies e Tecnologias Similares</h2>
            <p>O App pode utilizar cookies e tecnologias similares para manter sua sessão de autenticação e melhorar a experiência de uso. Essas tecnologias são essenciais para o funcionamento do App.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">10. Transferência Internacional de Dados</h2>
            <p>Seus dados podem ser processados em servidores localizados fora do seu país de residência. Garantimos que qualquer transferência internacional de dados é realizada com as devidas proteções e em conformidade com as leis aplicáveis.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">11. Alterações nesta Política</h2>
            <p>Podemos atualizar esta Política de Privacidade periodicamente. Notificaremos sobre alterações significativas por meio do App. Recomendamos revisar esta política regularmente.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">12. Contato</h2>
            <p>Para dúvidas sobre esta Política de Privacidade ou sobre seus dados pessoais, entre em contato:</p>
            <p>E-mail: <a href="mailto:contato@criptonobolso.com.br" className="text-primary underline">contato@criptonobolso.com.br</a></p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">13. Conformidade com a Apple</h2>
            <p>Este App está em conformidade com as diretrizes da Apple App Store, incluindo as Diretrizes de Revisão de Apps da Apple e os requisitos de privacidade do App Tracking Transparency (ATT). Não realizamos rastreamento de usuários entre apps ou sites de terceiros.</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Privacy;

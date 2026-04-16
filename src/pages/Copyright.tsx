import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Copyright = () => {
  return (
    <div className="min-h-screen bg-background px-6 py-10">
      <div className="mx-auto max-w-2xl">
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6">
          <ArrowLeft className="w-4 h-4" /> Voltar
        </Link>

        <h1 className="text-2xl font-bold text-foreground mb-2">Copyright & Propriedade Intelectual</h1>
        <p className="text-xs text-muted-foreground mb-6">Última atualização: 16 de abril de 2026</p>

        <div className="prose prose-sm text-muted-foreground space-y-4">
          <section>
            <h2 className="text-lg font-semibold text-foreground">1. Titularidade</h2>
            <p>
              O aplicativo <strong>CNB Mobile</strong>, incluindo seu nome, logotipo, marca, código-fonte, design, conteúdo,
              textos, imagens, ícones, interfaces e demais elementos, é de propriedade exclusiva de
              <strong> Cripto no Bolso</strong>, sediada em São Paulo, Brasil.
            </p>
            <p>
              Todos os direitos autorais, marcas registradas e demais direitos de propriedade intelectual associados
              ao CNB Mobile são protegidos pelas leis brasileiras (Lei nº 9.610/98 — Lei de Direitos Autorais e
              Lei nº 9.279/96 — Lei da Propriedade Industrial) e por tratados internacionais aplicáveis.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">2. Declaração de Propriedade</h2>
            <p>
              Declaramos, sob as penas da lei, que somos os legítimos titulares de todos os direitos de propriedade
              intelectual sobre o aplicativo CNB Mobile e que sua publicação nas lojas oficiais (Google Play e Apple App Store)
              está em conformidade com as diretrizes legais vigentes.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">3. Conformidade Legal</h2>
            <p>O CNB Mobile está em conformidade com:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Lei Geral de Proteção de Dados (LGPD — Lei nº 13.709/2018);</li>
              <li>Marco Civil da Internet (Lei nº 12.965/2014);</li>
              <li>Código de Defesa do Consumidor (Lei nº 8.078/1990);</li>
              <li>Diretrizes de Revisão da Apple App Store;</li>
              <li>Políticas do Google Play Developer Program.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">4. Uso Permitido</h2>
            <p>
              É concedida ao usuário uma licença pessoal, limitada, não exclusiva, intransferível e revogável para
              utilizar o aplicativo CNB Mobile exclusivamente para fins pessoais e não comerciais, conforme nossos
              <Link to="/terms" className="text-primary underline mx-1">Termos de Serviço</Link>.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">5. Restrições</h2>
            <p>É expressamente proibido, sem autorização prévia e por escrito:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Reproduzir, copiar, modificar, distribuir ou comercializar qualquer parte do aplicativo;</li>
              <li>Realizar engenharia reversa, descompilar ou desmontar o código-fonte;</li>
              <li>Utilizar a marca, logotipo ou qualquer elemento visual do CNB Mobile em produtos de terceiros;</li>
              <li>Criar obras derivadas baseadas no aplicativo.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">6. Denúncia de Violação</h2>
            <p>
              Caso identifique qualquer uso não autorizado ou violação dos direitos autorais do CNB Mobile,
              entre em contato imediatamente pelo e-mail:{" "}
              <a href="mailto:contato@criptonobolso.com.br" className="text-primary underline">
                contato@criptonobolso.com.br
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">7. Contato</h2>
            <p>
              <strong>Cripto no Bolso</strong><br />
              São Paulo, Brasil<br />
              E-mail: <a href="mailto:contato@criptonobolso.com.br" className="text-primary underline">contato@criptonobolso.com.br</a><br />
              Site: <a href="https://www.cnbmobile.com" className="text-primary underline">www.cnbmobile.com</a>
            </p>
          </section>

          <p className="pt-4 border-t border-border">
            © 2026 CNB Mobile — Cripto no Bolso. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Copyright;

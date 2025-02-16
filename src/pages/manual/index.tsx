export default function ManualPage() {
    return (
        <div className="prose prose-xl max-w-none dark:prose-invert">
        <h2>Configurando sua conta</h2>
        <p>
          Para que a plataforma consiga ter acesso à sua conta e aos seus anúncios, é necessário configurar sua conta na
          aplicação. Para isso, seguiremos os passos abaixo.
        </p>
  
        <h3>Facebook Token</h3>
        <ol>
          <li>
            Acesse o link{' '}
            <a href="https://developers.facebook.com/apps" target="_blank" className="text-blue-600 hover:underline">
              https://developers.facebook.com/apps
            </a>{' '}
            e crie um App, caso ainda não possua. Se já possuir apps criados, selecione o que for mais conveniente para
            você.
          </li>
          <li>
            Solicite permissão para seu app poder gerenciar seus anúncios. Vá em{' '}
            <code className="bg-gray-100 px-1 py-0.5 rounded text-lg">Análise do app &gt; Permissões e Recursos</code> e
            solicite permissão para{' '}
            <code className="bg-gray-100 px-1 py-0.5 rounded text-lg">ads_management</code>.
          </li>
          <li>
            Copie o token acessando{' '}
            <a
              href="https://developers.facebook.com/tools/explorer/"
              target="_blank"
              className="text-blue-600 hover:underline"
            >
              https://developers.facebook.com/tools/explorer/
            </a>
            , ao canto direito da tela no campo{' '}
            <code className="bg-gray-100 px-1 py-0.5 rounded text-lg">Token de acesso</code>.
          </li>
          <li>
            Na plataforma AdZen{' '}
            <a href="/settings" className="text-blue-600 hover:underline">
              clique aqui
            </a>{' '}
            para ser redirecionado para a seção de configurações e salve seu token no campo indicado.
          </li>
        </ol>
        <p>Pronto! Com esses passos, sua conta está apta a iniciar os agendamentos dos seus anúncios.</p>
  
        <h2>Realizando Agendamentos</h2>
        <p>Com sua conta devidamente configurada, você está pronto para iniciar os agendamentos dos seus anúncios.</p>
  
        <ol>
          <li>
            Vá à seção de{' '}
            <a href="/agendamentos" className="text-blue-600 hover:underline">
              agendamentos
            </a>
            . Preencha o formulário indicando o ID do anúncio que você consegue acessar em{' '}
            <a
              href="https://adsmanager.facebook.com/adsmanager"
              target="_blank"
              className="text-blue-600 hover:underline"
            >
              https://adsmanager.facebook.com/adsmanager
            </a>
            , a data de disparo da ação e qual status você deseja que o anúncio esteja nesse dia.
          </li>
        </ol>
  
        <p>
          Pronto! Seu agendamento está feito e agora é só aguardar. Na página de agendamentos, você consegue acompanhar
          agendamentos que já foram executados e se obtiveram sucesso ou não, bem como entender possível motivo de
          insucesso.
        </p>
      </div>
    )
}

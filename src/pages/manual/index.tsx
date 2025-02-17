import Typography from '@/components/ui/typography'
import List from '@/components/ui/list'

export default function ManualPage() {
    return (
        <div className="max-w-3xl p-4">
            <Typography.H1>Manual do Usuário</Typography.H1>
            <Typography.P>
                Seja bem-vindo ao manual do usuário da plataforma AdZen. Aqui
                você encontrará informações sobre como configurar sua conta e
                realizar agendamentos de anúncios.
            </Typography.P>
            <Typography.H2>Configurando sua conta</Typography.H2>
            <Typography.P>
                Para que a plataforma consiga ter acesso à sua conta e aos seus
                anúncios, é necessário configurar sua conta na aplicação. Para
                isso, seguiremos os passos abaixo.
            </Typography.P>
            <Typography.H3>Facebook Token</Typography.H3>
            <List.Ol>
                <List.Li>
                    <Typography.P>
                        Acesse o{' '}
                        <Typography.A
                            href="https://developers.facebook.com/apps"
                            target="_blank"
                        >
                            Facebook Apps
                        </Typography.A>{' '}
                        e crie um App caso ainda não possua, se já possuir apps
                        criados, selecione o que for mais conveniente para você.
                    </Typography.P>
                </List.Li>
                <List.Li>
                    <Typography.P>
                        Solicite permissão para seu app poder gerenciar seus
                        anúncios. Vá em{' '}
                        <Typography.Code>
                            Análise do app {`>`} Permissões e Recursos
                        </Typography.Code>{' '}
                        e solicite permissão para{' '}
                        <Typography.Code>ads_management</Typography.Code>.
                    </Typography.P>
                </List.Li>
                <List.Li>
                    <Typography.P>
                        Copie o token acessando{' '}
                        <Typography.A
                            href="https://developers.facebook.com/tools/explorer/"
                            target="_blank"
                        >
                            API Graph Explorer
                        </Typography.A>
                        . O token deverá estar ao lado direito da tela no campo{' '}
                        <Typography.Code>Token de acesso</Typography.Code>.
                    </Typography.P>
                </List.Li>
                <List.Li>
                    <Typography.P>
                        Na plataforma AdZen vá em{' '}
                        <Typography.A href="/settings">
                            Configurações
                        </Typography.A>
                        e salve seu token no campo indicado.
                    </Typography.P>
                </List.Li>
            </List.Ol>
            <Typography.P>
                Pronto! Com esses passos, sua conta está apta a iniciar os
                agendamentos dos seus anúncios.
            </Typography.P>
            <Typography.H2>Realizando Agendamentos</Typography.H2>
            <Typography.P>
                Com sua conta devidamente configurada, você está pronto para
                iniciar os agendamentos dos seus anúncios.
            </Typography.P>
            <Typography.P>
                Vá à seção de <a href="/schedules">Agendamentos</a> e preencha o
                formulário indicando o ID do anúncio, que você consegue acessar
                no{' '}
                <Typography.A
                    href="https://adsmanager.facebook.com/adsmanager"
                    target="_blank"
                >
                    Facebook Ads Manager
                </Typography.A>
                , a data de disparo da ação e qual status você deseja que o
                anúncio esteja nesse dia.
            </Typography.P>
            <Typography.P>
                Pronto! Seu agendamento está feito e agora é só aguardar. Na
                página de agendamentos, você consegue acompanhar agendamentos
                que já foram executados e se obtiveram sucesso ou não, bem como
                entender possível motivo de insucesso.
            </Typography.P>
        </div>
    )
}

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function PrivacyPolicy() {
    return (
        <div className="container mx-auto p-4 max-w-4xl">
            <h1 className="text-3xl font-bold mb-6 text-center">
                Política de Privacidade
            </h1>
            <Card className="mb-6">
                <CardContent className="pt-6">
                    <p className="mb-4">
                        No Personalidade Test, estamos comprometidos em proteger
                        sua privacidade e garantir a segurança de suas
                        informações pessoais. Esta Política de Privacidade
                        descreve como coletamos, usamos, divulgamos e protegemos
                        seus dados quando você utiliza nosso site e serviços. Ao
                        acessar ou utilizar o Personalidade Test, você concorda
                        com os termos e condições desta Política de Privacidade.
                    </p>
                </CardContent>
            </Card>

            <ScrollArea className="h-[600px] w-full rounded-md border p-4">
                <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                        <AccordionTrigger>
                            1. Informações que Coletamos
                        </AccordionTrigger>
                        <AccordionContent>
                            <h3 className="font-semibold mb-2">
                                1.1 Informações Pessoais
                            </h3>
                            <p className="mb-2">
                                Podemos coletar informações pessoais que você
                                nos fornece voluntariamente ao interagir com
                                nosso site, como ao entrar em contato conosco ou
                                participar de atividades nos Serviços. As
                                informações pessoais que coletamos podem
                                incluir:
                            </p>
                            <ul className="list-disc list-inside mb-4">
                                <li>Nomes</li>
                                <li>Endereços de e-mail</li>
                            </ul>
                            <h3 className="font-semibold mb-2">
                                1.2 Informações Coletadas Automaticamente
                            </h3>
                            <p className="mb-2">
                                Coletamos automaticamente certas informações
                                quando você visita, utiliza ou navega em nosso
                                site. Essas informações não revelam sua
                                identidade específica, mas podem incluir dados
                                de uso e do dispositivo, como:
                            </p>
                            <ul className="list-disc list-inside">
                                <li>Dados de registro e uso</li>
                                <li>Informações do dispositivo</li>
                                <li>Dados de localização</li>
                            </ul>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-2">
                        <AccordionTrigger>
                            2. Como Usamos Suas Informações
                        </AccordionTrigger>
                        <AccordionContent>
                            <p className="mb-2">
                                Processamos suas informações para diversos fins,
                                com base em diferentes fundamentos legais,
                                incluindo:
                            </p>
                            <ul className="list-disc list-inside">
                                <li>
                                    Facilitar a criação de contas e a
                                    autenticação
                                </li>
                                <li>
                                    Fornecer e facilitar a entrega de serviços a
                                    você
                                </li>
                                <li>
                                    Responder a consultas dos usuários e
                                    oferecer suporte
                                </li>
                                <li>
                                    Enviar informações administrativas para você
                                </li>
                                <li>
                                    Proteger interesses vitais de uma pessoa
                                </li>
                            </ul>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-3">
                        <AccordionTrigger>
                            3. Suas Informações Serão Compartilhadas com Alguém?
                        </AccordionTrigger>
                        <AccordionContent>
                            <p className="mb-2">
                                Podemos compartilhar suas informações em
                                situações específicas descritas nesta seção e/ou
                                com as seguintes categorias de terceiros:
                            </p>
                            <ul className="list-disc list-inside mb-4">
                                <li>
                                    Fornecedores, consultores e outros
                                    prestadores de serviços de terceiros
                                </li>
                            </ul>
                            <p className="mb-2">
                                Também podemos precisar compartilhar suas
                                informações pessoais nas seguintes situações:
                            </p>
                            <ul className="list-disc list-inside">
                                <li>
                                    Transferências de negócios: Podemos
                                    compartilhar ou transferir suas informações
                                    em conexão com, ou durante negociações de,
                                    qualquer fusão, venda de ativos da empresa,
                                    financiamento ou aquisição de todo ou parte
                                    do nosso negócio para outra empresa.
                                </li>
                            </ul>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-4">
                        <AccordionTrigger>
                            4. Usamos Cookies e Outras Tecnologias de
                            Rastreamento?
                        </AccordionTrigger>
                        <AccordionContent>
                            <p>
                                Podemos usar cookies e tecnologias de
                                rastreamento semelhantes para acessar ou
                                armazenar informações. Informações específicas
                                sobre como usamos essas tecnologias e como você
                                pode recusar certos cookies estão descritas em
                                nosso Aviso de Cookies.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-5">
                        <AccordionTrigger>
                            5. Por Quanto Tempo Mantemos Suas Informações?
                        </AccordionTrigger>
                        <AccordionContent>
                            <p>
                                Manteremos suas informações pessoais apenas pelo
                                tempo necessário para os propósitos
                                estabelecidos nesta Política de Privacidade, a
                                menos que um período de retenção mais longo seja
                                exigido ou permitido por lei.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-6">
                        <AccordionTrigger>
                            6. Como Mantemos Suas Informações Seguras?
                        </AccordionTrigger>
                        <AccordionContent>
                            <p>
                                Implementamos medidas técnicas e organizacionais
                                apropriadas para proteger a segurança de
                                quaisquer informações pessoais que processamos.
                                No entanto, apesar de nossos esforços para
                                proteger suas informações, nenhuma transmissão
                                eletrônica pela Internet ou tecnologia de
                                armazenamento de informações pode ser garantida
                                como 100% segura.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-7">
                        <AccordionTrigger>
                            7. Quais São Seus Direitos de Privacidade?
                        </AccordionTrigger>
                        <AccordionContent>
                            <p className="mb-2">
                                Dependendo de onde você está localizado
                                geograficamente, a lei de privacidade aplicável
                                pode garantir certos direitos em relação às suas
                                informações pessoais. Isso pode incluir o
                                direito de:
                            </p>
                            <ul className="list-disc list-inside mb-4">
                                <li>
                                    Solicitar acesso às suas informações
                                    pessoais
                                </li>
                                <li>
                                    Solicitar correção de suas informações
                                    pessoais
                                </li>
                                <li>
                                    Solicitar a exclusão de suas informações
                                    pessoais
                                </li>
                                <li>
                                    Opor-se ao processamento de suas informações
                                    pessoais
                                </li>
                                <li>
                                    Solicitar a restrição do processamento de
                                    suas informações pessoais
                                </li>
                                <li>
                                    Solicitar a transferência de suas
                                    informações pessoais
                                </li>
                                <li>Retirar o seu consentimento</li>
                            </ul>
                            <p>
                                Se você tiver dúvidas ou comentários sobre seus
                                direitos de privacidade, pode nos enviar um
                                e-mail para contato@personalidadetest.com.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-8">
                        <AccordionTrigger>
                            8. Controles para Recursos de Não Rastreamento
                        </AccordionTrigger>
                        <AccordionContent>
                            <p>
                                A maioria dos navegadores da web e alguns
                                sistemas operacionais móveis e aplicativos
                                móveis incluem um recurso de Não Rastreamento
                                ("DNT") que você pode ativar para sinalizar sua
                                preferência de privacidade para não ter dados de
                                suas atividades de navegação online monitorados
                                e coletados. No momento, não há um padrão
                                tecnológico uniforme para reconhecer e
                                implementar sinais DNT. Como tal, não
                                respondemos atualmente a sinais de navegador DNT
                                ou qualquer outro mecanismo que comunique
                                automaticamente sua escolha de não ser rastreado
                                online.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-9">
                        <AccordionTrigger>
                            9. Residentes da Califórnia Têm Direitos de
                            Privacidade Específicos?
                        </AccordionTrigger>
                        <AccordionContent>
                            <p>
                                Sim, se você é residente da Califórnia, tem
                                direitos específicos em relação ao acesso às
                                suas informações pessoais de acordo com a Lei de
                                Privacidade do Consumidor da Califórnia (CCPA).
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-10">
                        <AccordionTrigger>
                            10. Fazemos Atualizações a Este Aviso?
                        </AccordionTrigger>
                        <AccordionContent>
                            <p>
                                Sim, atualizaremos este aviso conforme
                                necessário para permanecer em conformidade com
                                as leis relevantes. A versão atualizada será
                                indicada por uma data de "Revisado" e a versão
                                atualizada será efetiva assim que estiver
                                acessível.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-11">
                        <AccordionTrigger>
                            11. Como Você Pode Entrar em Contato Conosco Sobre
                            Este Aviso?
                        </AccordionTrigger>
                        <AccordionContent>
                            <p>
                                Se você tiver perguntas ou comentários sobre
                                este aviso, pode entrar em contato conosco por
                                e-mail em contato@personalidadetest.com.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-12">
                        <AccordionTrigger>
                            12. Como Você Pode Revisar, Atualizar ou Excluir os
                            Dados que Coletamos de Você?
                        </AccordionTrigger>
                        <AccordionContent>
                            <p>
                                Com base nas leis aplicáveis do seu país, você
                                pode ter o direito de solicitar acesso às
                                informações pessoais que coletamos de você,
                                alterá-las ou excluí-las. Para solicitar a
                                revisão, atualização ou exclusão de suas
                                informações pessoais, visite:
                                https://www.personalidadetest.com/contato.
                            </p>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </ScrollArea>
        </div>
    );
}

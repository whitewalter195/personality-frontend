import { Button } from "@/components/ui/button";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

export default function Home() {
    return (
        <div>
            <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
                <div className="container px-4 md:px-6 mx-auto">
                    <div className="flex flex-col items-center space-y-4 text-center">
                        <div className="space-y-2">
                            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                                Descubra Seu Verdadeiro Eu
                            </h1>
                            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                                Desbloqueie os segredos da sua personalidade com
                                o nosso teste respaldado cientificamente.
                                Obtenha insights que transformarão sua vida.
                            </p>
                        </div>
                        <div className="space-x-4">
                            <Link
                                href="/test"
                                className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                            >
                                Comece Seu Teste
                            </Link>
                            <Button
                                className="inline-flex h-9 items-center justify-center rounded-md border border-gray-200 bg-white px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                                variant="outline"
                            >
                                Aprenda Mais
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            <section
                className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800"
                id="faq"
            >
                <div className="container px-4 md:px-6 mx-auto">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
                        Perguntas Frequentes
                    </h2>
                    <Accordion
                        type="single"
                        collapsible
                        className="w-full max-w-3xl mx-auto"
                    >
                        <AccordionItem value="item-1">
                            <AccordionTrigger className="text-2xl">
                                Quanto tempo leva para fazer o teste?
                            </AccordionTrigger>
                            <AccordionContent className="text-xl">
                                O teste geralmente leva cerca de 15-20 minutos
                                para ser concluído. No entanto, não há limite de
                                tempo, então você pode levar o tempo que
                                precisar para responder de forma reflexiva.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger className="text-2xl">
                                Meus dados são mantidos em sigilo?
                            </AccordionTrigger>
                            <AccordionContent className="text-xl">
                                Sim, levamos sua privacidade muito a sério.
                                Todas as suas respostas são criptografadas e
                                armazenadas com segurança. Nunca compartilhamos
                                seus dados individuais com terceiros.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                            <AccordionTrigger className="text-2xl">
                                Posso refazer o teste?
                            </AccordionTrigger>
                            <AccordionContent className="text-xl">
                                Sim, você pode refazer o teste quantas vezes
                                quiser. No entanto, recomendamos esperar pelo
                                menos alguns meses entre os testes para permitir
                                possíveis mudanças em sua personalidade ou
                                circunstâncias.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-4">
                            <AccordionTrigger className="text-2xl">
                                Que tipo de resultados vou receber?
                            </AccordionTrigger>
                            <AccordionContent className="text-xl">
                                Você receberá um relatório abrangente detalhando
                                seus traços de personalidade, pontos fortes,
                                áreas potenciais para crescimento e como seu
                                tipo de personalidade geralmente interage com os
                                outros. Também fornecemos recomendações
                                personalizadas com base nos seus resultados.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </section>
        </div>
    );
}

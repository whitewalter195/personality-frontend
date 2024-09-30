import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Instagram, Facebook, Twitter, Mail } from "lucide-react";

export default function ContactUs() {
    return (
        <div className="container mx-auto p-4 max-w-4xl">
            <h1 className="text-3xl font-bold mb-6 text-center">
                Entre em Contato
            </h1>

            <Card className="mb-8">
                <CardContent className="pt-6">
                    <p className="mb-4">
                        Estamos aqui para ajudar! Se você tiver alguma dúvida,
                        sugestão ou precisar de suporte relacionado aos nossos
                        testes de personalidade, sinta-se à vontade para entrar
                        em contato conosco. Nossa equipe está disponível para
                        responder o mais rápido possível.
                    </p>
                </CardContent>
            </Card>

            <div className="grid gap-8 md:grid-cols-2">
                <Card>
                    <CardHeader>
                        <CardTitle className="text-xl">
                            Informações de Contato
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="flex items-center mb-4">
                            <Mail className="mr-2" />
                            <p>contato@personalidadetest.com</p>
                        </div>
                        <p className="text-sm text-gray-500">
                            Para dúvidas gerais ou suporte, envie um e-mail para
                            o endereço acima.
                        </p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle className="text-xl">Redes Sociais</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="mb-4">
                            Siga-nos nas redes sociais para ficar por dentro das
                            novidades e atualizações!
                        </p>
                        <div className="flex space-x-4">
                            <a
                                href="#"
                                className="text-primary hover:text-primary-dark"
                            >
                                <Instagram size={24} />
                                <span className="sr-only">Instagram</span>
                            </a>
                            <a
                                href="#"
                                className="text-primary hover:text-primary-dark"
                            >
                                <Facebook size={24} />
                                <span className="sr-only">Facebook</span>
                            </a>
                            <a
                                href="#"
                                className="text-primary hover:text-primary-dark"
                            >
                                <Twitter size={24} />
                                <span className="sr-only">Twitter</span>
                            </a>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}

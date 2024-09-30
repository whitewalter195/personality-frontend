import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AboutUs() {
    return (
        <div className="container mx-auto p-4 max-w-4xl">
            <h1 className="text-3xl font-bold mb-6 text-center">Sobre Nós</h1>
            <Card className="mb-6">
                <CardHeader>
                    <CardTitle className="text-2xl">
                        Bem-vindo ao PersonalidadeTest.com!
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="mb-4">
                        No Personalidade Test, nossa missão é ajudar você a
                        descobrir mais sobre si mesmo, suas características e
                        como sua personalidade influencia diversos aspectos da
                        sua vida. Acreditamos que o autoconhecimento é uma
                        ferramenta poderosa para o crescimento pessoal e
                        profissional.
                    </p>
                </CardContent>
            </Card>

            <div className="grid gap-6 md:grid-cols-2">
                <Card>
                    <CardHeader>
                        <CardTitle className="text-xl">Nossa Visão</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>
                            Queremos que você explore seu verdadeiro potencial e
                            entenda melhor suas forças, desafios e como
                            interagir de forma mais eficaz com as pessoas ao seu
                            redor. Por meio de testes de personalidade bem
                            elaborados e cientificamente baseados, oferecemos a
                            você uma maneira divertida e informativa de se
                            autodescobrir.
                        </p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle className="text-xl">
                            O que Oferecemos
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>
                            No Personalidade Test, nossos testes são
                            desenvolvidos com base em teorias psicológicas
                            amplamente reconhecidas. Eles foram projetados para
                            fornecer insights sobre sua maneira de pensar, agir
                            e reagir em diversas situações do dia a dia. Se você
                            quer entender melhor seu comportamento, sua
                            carreira, ou mesmo como melhorar seus
                            relacionamentos, nossos testes podem ajudar.
                        </p>
                    </CardContent>
                </Card>
            </div>

            <Card className="mt-6">
                <CardHeader>
                    <CardTitle className="text-xl">Nossa Equipe</CardTitle>
                </CardHeader>
                <CardContent>
                    <p>
                        Somos uma equipe apaixonada por psicologia,
                        comportamento humano e desenvolvimento pessoal.
                        Combinamos ciência e tecnologia para criar uma
                        experiência única e acessível a todos. Cada teste que
                        oferecemos é cuidadosamente desenvolvido para garantir
                        precisão e relevância.
                    </p>
                </CardContent>
            </Card>

            <Card className="mt-6">
                <CardHeader>
                    <CardTitle className="text-xl">Junte-se a Nós</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="mb-4">
                        No PersonalidadeTest.com, você pode aprender mais sobre
                        si mesmo e compartilhar suas descobertas com amigos e
                        familiares. Estamos comprometidos em oferecer uma
                        plataforma interativa e educativa que permita o
                        crescimento pessoal e o entendimento dos outros.
                    </p>
                    <p className="font-semibold">
                        Agradecemos sua visita e esperamos que aproveite nossos
                        testes de personalidade!
                    </p>
                </CardContent>
            </Card>
        </div>
    );
}

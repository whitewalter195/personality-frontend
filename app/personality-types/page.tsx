"use client";

import { useState } from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

const tiposDePersonalidade = [
    {
        nome: "O Analista",
        descricao:
            "Pensadores estratégicos, inovadores e independentes com sede de conhecimento.",
        caracteristicas: ["Racional", "Analítico", "Independente", "Curioso"],
        pontosFortes: [
            "Resolução de problemas",
            "Planejamento estratégico",
            "Pensamento conceitual",
        ],
        desafios: [
            "Pode parecer distante",
            "Pode ser excessivamente crítico",
            "Dificuldade em expressar emoções",
        ],
        carreiras: ["Cientista", "Engenheiro", "Estrategista", "Pesquisador"],
    },
    {
        nome: "O Diplomata",
        descricao:
            "Indivíduos empáticos e idealistas focados em ajudar os outros e fazer mudanças positivas.",
        caracteristicas: ["Empático", "Idealista", "Criativo", "Perspicaz"],
        pontosFortes: [
            "Compreensão dos outros",
            "Mediação de conflitos",
            "Inspirar os outros",
        ],
        desafios: [
            "Pode ser excessivamente idealista",
            "Pode negligenciar as próprias necessidades",
            "Sensível a críticas",
        ],
        carreiras: [
            "Conselheiro",
            "Gerente de RH",
            "Escritor",
            "Assistente Social",
        ],
    },
    {
        nome: "O Sentinela",
        descricao:
            "Indivíduos práticos, leais e trabalhadores que valorizam a tradição e a segurança.",
        caracteristicas: ["Responsável", "Prático", "Leal", "Organizado"],
        pontosFortes: [
            "Atenção aos detalhes",
            "Confiabilidade",
            "Manutenção da ordem",
        ],
        desafios: [
            "Resistência à mudança",
            "Pode ser inflexível",
            "Pode ser julgador",
        ],
        carreiras: ["Contador", "Gerente", "Professor", "Policial"],
    },
    {
        nome: "O Explorador",
        descricao:
            "Indivíduos espontâneos, energéticos e solucionadores práticos de problemas, que prosperam em novas experiências.",
        caracteristicas: ["Adaptável", "Energético", "Aventureiro", "Prático"],
        pontosFortes: [
            "Gestão de crises",
            "Adaptabilidade",
            "Resolução prática de problemas",
        ],
        desafios: [
            "Pode se entediar facilmente",
            "Pode ser impulsivo",
            "Dificuldade em planejar a longo prazo",
        ],
        carreiras: ["Empreendedor", "Paramédico", "Artista", "Atleta"],
    },
];

export default function PaginaTiposDePersonalidade() {
    const [tipoSelecionado, setTipoSelecionado] = useState(
        tiposDePersonalidade[0].nome
    );

    const tipoAtual = tiposDePersonalidade.find(
        (tipo) => tipo.nome === tipoSelecionado
    );

    return (
        <div className="container mx-auto p-4 max-w-4xl">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-center">
                Tipos de Personalidade
            </h1>
            <div className="mb-6">
                <Select
                    onValueChange={setTipoSelecionado}
                    defaultValue={tipoSelecionado}
                >
                    <SelectTrigger className="w-full">
                        <SelectValue placeholder="Selecione um tipo de personalidade" />
                    </SelectTrigger>
                    <SelectContent>
                        {tiposDePersonalidade.map((tipo) => (
                            <SelectItem key={tipo.nome} value={tipo.nome}>
                                {tipo.nome}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>
            {tipoAtual && (
                <Card>
                    <CardHeader>
                        <CardTitle className="text-xl sm:text-2xl md:text-3xl">
                            {tipoAtual.nome}
                        </CardTitle>
                        <CardDescription className="text-sm sm:text-base">
                            {tipoAtual.descricao}
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ScrollArea className="h-[400px] w-full rounded-md border p-4">
                            <div className="space-y-4">
                                <div>
                                    <h3 className="font-semibold mb-2 text-base sm:text-lg">
                                        Principais Características:
                                    </h3>
                                    <ul className="list-disc list-inside text-sm sm:text-base">
                                        {tipoAtual.caracteristicas.map(
                                            (caracteristica, index) => (
                                                <li key={index}>
                                                    {caracteristica}
                                                </li>
                                            )
                                        )}
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="font-semibold mb-2 text-base sm:text-lg">
                                        Pontos Fortes:
                                    </h3>
                                    <ul className="list-disc list-inside text-sm sm:text-base">
                                        {tipoAtual.pontosFortes.map(
                                            (pontoForte, index) => (
                                                <li key={index}>
                                                    {pontoForte}
                                                </li>
                                            )
                                        )}
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="font-semibold mb-2 text-base sm:text-lg">
                                        Desafios:
                                    </h3>
                                    <ul className="list-disc list-inside text-sm sm:text-base">
                                        {tipoAtual.desafios.map(
                                            (desafio, index) => (
                                                <li key={index}>{desafio}</li>
                                            )
                                        )}
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="font-semibold mb-2 text-base sm:text-lg">
                                        Carreiras Adequadas:
                                    </h3>
                                    <ul className="list-disc list-inside text-sm sm:text-base">
                                        {tipoAtual.carreiras.map(
                                            (carreira, index) => (
                                                <li key={index}>{carreira}</li>
                                            )
                                        )}
                                    </ul>
                                </div>
                            </div>
                        </ScrollArea>
                    </CardContent>
                </Card>
            )}
        </div>
    );
}

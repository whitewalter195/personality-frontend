"use client";

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useRecoilValue } from "recoil";
import { resultState } from "@/atoms/atom";

export default function Component() {
    const personalityData = useRecoilValue(resultState);

    return (
        <div className="container mx-auto p-4">
            <Card className="w-full max-w-4xl mx-auto">
                <CardHeader className="text-center">
                    <div className="mx-auto w-32 h-32 mb-4">
                        <img
                            src={personalityData.avatarSrc}
                            alt={personalityData.avatarAlt}
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <CardTitle className="text-3xl font-bold">
                        {personalityData.personality}-
                        {personalityData.variant.charAt(0).toUpperCase()}{" "}
                        {personalityData.niceName}
                    </CardTitle>
                    <CardDescription>
                        Role: {personalityData.role} | Strategy:{" "}
                        {personalityData.strategy}
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid gap-6 mt-6">
                        {personalityData.traits.map((trait) => (
                            <Card key={trait.key}>
                                <CardHeader>
                                    <CardTitle className="text-xl font-semibold">
                                        {trait.label}: {trait.trait}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex justify-between mb-2">
                                        <span>{trait.titles[0]}</span>
                                        <span>{trait.titles[1]}</span>
                                    </div>
                                    <Progress
                                        value={trait.pct}
                                        className="h-2"
                                    />
                                    <p className="mt-4">{trait.snippet}</p>
                                    <div className="flex items-center mt-4">
                                        <img
                                            src={trait.imageSrc}
                                            alt={trait.imageAlt}
                                            className="w-16 h-16 mr-4"
                                        />
                                        <p className="text-sm text-gray-600">
                                            {trait.description}
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}

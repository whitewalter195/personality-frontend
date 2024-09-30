"use client";

import { useState } from "react";
import QuestionComponent from "./QuestionComponent";
import { Button } from "./ui/button";
import { question } from "@/types/type";
import axios from "axios";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { resultState, userInfoState } from "@/atoms/atom";
import UserInfo from "@/components/UserInfo";
import { useRouter } from "next/navigation";

type Answer = {
    value: number | null;
    id: string;
};

export default function PersonalityTest({
    questions,
}: {
    questions: question[];
}) {
    const router = useRouter();
    const [answers, setAnswers] = useState<Answer[]>(
        Array(questions.length).fill({ value: null, id: "" })
    );

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const userInfo = useRecoilValue(userInfoState);
    const resultSetter = useSetRecoilState(resultState);

    const handleAnswer = (answer: number) => {
        const updatedAnswers = [...answers];
        updatedAnswers[currentQuestion] = {
            value: answer,
            id: questions[currentQuestion].id,
        };
        setAnswers(updatedAnswers);

        console.log(updatedAnswers);
    };

    const handleNext = () => {
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion((prev) => prev + 1);
        }
    };

    const handlePrevious = () => {
        if (currentQuestion > 0) {
            setCurrentQuestion((prev) => prev - 1);
        }
    };

    const handleSubmit = async () => {
        if (answers.every((answer) => answer.value !== null)) {
            try {
                console.log("All answers:", answers);
                const res = await axios.post(
                    "https://personality-backend.onrender.com/personality/submit",
                    { answers, gender: userInfo.gender }
                );

                if (res.data) {
                    resultSetter(res.data);
                    router.push("/result");
                }
            } catch (error) {
                console.error("Error submitting the form", error);
            }
        } else {
            alert("Please answer all questions before submitting.");
        }
    };

    return (
        <>
            {userInfo.name !== "" && userInfo.gender !== "" ? (
                <div className="container mx-auto p-4 max-w-3xl">
                    <h1 className="text-3xl font-bold mb-6 text-center">
                        Olá {userInfo.name} 👋
                    </h1>
                    <QuestionComponent
                        selectedAnswer={answers[currentQuestion]?.value}
                        question={questions[currentQuestion]}
                        onAnswer={handleAnswer}
                    />
                    <div className="flex justify-between mt-6">
                        <Button
                            onClick={handlePrevious}
                            disabled={currentQuestion === 0}
                        >
                            Anterior
                        </Button>
                        {currentQuestion === questions.length - 1 ? (
                            <Button onClick={handleSubmit}>Submit</Button>
                        ) : (
                            <Button
                                onClick={handleNext}
                                disabled={
                                    answers[currentQuestion].value === null
                                }
                            >
                                Próximo
                            </Button>
                        )}
                    </div>
                    <div className="mt-4 text-center">
                        Pergunta {currentQuestion + 1} de {questions.length}
                    </div>
                </div>
            ) : (
                <div className="flex justify-center items-center">
                    <UserInfo />
                </div>
            )}
        </>
    );
}

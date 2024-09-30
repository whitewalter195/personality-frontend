import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { question } from "@/types/type";

interface QuestionProps {
    question: question;
    selectedAnswer: number | null;
    onAnswer: (answer: number) => void;
}

const options = [
    { label: "Discordo fortemente", value: -3 },
    { label: "Discordo moderadamente", value: -2 },
    { label: "Discordo um pouco", value: -1 },
    { label: "Nem concordo nem discordo", value: 0 },
    { label: "Concordo um pouco", value: 1 },
    { label: "Concordo moderadamente", value: 2 },
    { label: "Concordo fortemente", value: 3 },
];

export default function QuestionComponent({
    question,
    selectedAnswer,
    onAnswer,
}: QuestionProps) {
    return (
        <Card className="w-full mb-6">
            <CardHeader>
                <CardTitle className="text-xl font-semibold">
                    {question.text}
                </CardTitle>
            </CardHeader>
            <CardContent>
                <RadioGroup
                    value={
                        selectedAnswer !== null ? selectedAnswer.toString() : ""
                    }
                    onValueChange={(value) => onAnswer(parseInt(value, 10))}
                    className="space-y-2"
                >
                    {options.map((option, index) => (
                        <div
                            key={index}
                            className="flex items-center space-x-2 rounded-lg border p-3 transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
                        >
                            <RadioGroupItem
                                value={option.value.toString()}
                                id={`option-${index}`}
                                className="cursor-pointer"
                            />
                            <Label
                                htmlFor={`option-${index}`}
                                className="flex-grow cursor-pointer"
                            >
                                {option.label}
                            </Label>
                        </div>
                    ))}
                </RadioGroup>
            </CardContent>
        </Card>
    );
}

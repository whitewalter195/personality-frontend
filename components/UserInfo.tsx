import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useRecoilState } from "recoil";
import { userInfoState } from "@/atoms/atom";

export default function Component() {
    const [userInfo, setUserInfo] = useRecoilState(userInfoState);

    return (
        <Card className="w-full max-w-md mx-auto">
            <CardHeader>
                <CardTitle>Informações do Usuário</CardTitle>
            </CardHeader>
            <form>
                <CardContent className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="name">Nome</Label>
                        <Input
                            id="name"
                            placeholder="Digite seu nome"
                            value={userInfo.name}
                            onChange={(e) =>
                                setUserInfo((curr) => ({
                                    ...curr,
                                    name: e.target.value,
                                }))
                            }
                            required
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="gender">Gênero</Label>
                        <Select
                            value={userInfo.gender}
                            onValueChange={(value) =>
                                setUserInfo((curr) => ({
                                    ...curr,
                                    gender: value,
                                }))
                            }
                            required
                        >
                            <SelectTrigger id="gender">
                                <SelectValue placeholder="Selecione seu gênero" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="Male">Masculino</SelectItem>
                                <SelectItem value="Female">Feminino</SelectItem>
                                <SelectItem value="Other">Outro</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </CardContent>
            </form>
        </Card>
    );
}

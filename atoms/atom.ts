import { atom } from "recoil";

export const userInfoState = atom({
    key: "userInfo",
    default: {
        name: "",
        gender: "",
    },
});

interface Trait {
    key: string;
    label: string;
    color: string;
    score: number;
    pct: number;
    trait: string;
    link: string;
    reverse: boolean;
    reversed: boolean;
    titles: [string, string];
    description: string;
    snippet: string;
    imageAlt: string;
    imageSrc: string;
}

interface ResultState {
    avatarAlt: string;
    avatarSrc: string;
    avatarSrcStatic: string;
    personality: string;
    variant: string;
    niceName: string;
    profileUrl: string;
    traits: Trait[];
    role: string;
    strategy: string;
}

export const resultState = atom<ResultState>({
    key: "result",
    default: {
        avatarAlt: "",
        avatarSrc: "",
        avatarSrcStatic: "",
        personality: "",
        variant: "",
        niceName: "",
        profileUrl: "",
        traits: [],
        role: "",
        strategy: "",
    },
});

import PersonalityTest from "@/components/PersonalityTest";
import Spinner from "@/components/Spinner";
import axios from "axios";
import { Suspense } from "react";

async function page() {
    const res = await axios.get(
        "https://personality-backend.onrender.com/api/personality/questions"
    );
    const questions = res.data;

    return (
        <div>
            <Suspense fallback={<Spinner />}>
                <PersonalityTest questions={questions} />
            </Suspense>
        </div>
    );
}

export default page;

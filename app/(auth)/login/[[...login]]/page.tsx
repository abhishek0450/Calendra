import { SignIn } from "@clerk/nextjs";
import Image from "next/image";

export default function LoginPage() {
    return(
        <main className="flex flex-col items-center p-5 gap-10 animate-fade-in bg-gray-900 min-h-screen justify-center">
            

            <div className="mt-3">
                <SignIn />
            </div>
        </main>
    )
}
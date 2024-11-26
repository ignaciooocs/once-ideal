'use client'
import Template from "@/components/react-flow/Template";
import { useLocalStorage } from "@/hooks/useLocalStorage";

export default function CreateOnce() {
    useLocalStorage()

    return (
        <section className="h-full w-full flex flex-col">
            <Template />
        </section>
    );
}
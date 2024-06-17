'use client'

import {action} from "@/app/action";
import {useForm} from "react-hook-form";
import {useCallback} from "react";
import {useRouter} from "next/navigation";
import {v4} from "uuid";

export function Form() {
    const handler = useForm()
    const router = useRouter()

    const onSubmit = useCallback(async () => {
        await action();
        router.push(`?hello=${v4()}`)
    }, [router])

    return (
        <form onSubmit={handler.handleSubmit(onSubmit)}>
            <button type={'submit'}>Next</button>
        </form>
    )
}
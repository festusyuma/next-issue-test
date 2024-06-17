'use client'

import {useForm} from "react-hook-form";
import {useCallback} from "react";
import {useRouter} from "next/navigation";
import {v4} from "uuid";

export function Form() {
    const handler = useForm()
    const router = useRouter()

    const onSubmit = useCallback(async () => {
        await fetch('http://127.0.0.1:3075/oath/confirm_token/festus', {
          method: 'POST',
        });

        router.push(`?hello=${v4()}`)
    }, [router])

    return (
        <form onSubmit={handler.handleSubmit(onSubmit)}>
            <button type={'submit'}>Next</button>
        </form>
    )
}
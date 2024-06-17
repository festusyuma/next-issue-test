'use client'

import {action} from "@/app/action";
import {useFormState } from "react-dom";

export function Form() {
    const [state, formAction] = useFormState(action, {})

    return (
        <form action={formAction}>
            <button type={'submit'}>Next</button>
        </form>
    )
}
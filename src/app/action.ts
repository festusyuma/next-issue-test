'use server'

import {redirect} from "next/navigation";
import { v4 } from "uuid";

export async function action() {
    await new Promise(resolve => setTimeout(resolve, 5000))
    return redirect(`/?hello=${v4()}`)
}
import {ParsedUrlQuery} from "node:querystring";
import {Form} from "@/app/Form";

type Props = {
  searchParams: ParsedUrlQuery
}

export default function Home({ searchParams }: Props) {
  console.log("params :: ", searchParams)

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Form />
   </main>
  );
}

import { Suspense } from "react";
import WisataClient from "./WisataClient";

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <WisataClient />
    </Suspense>
  );
}

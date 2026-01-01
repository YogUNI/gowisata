import { Suspense } from "react";
import HasilClient from "./HasilClient";

export default function Page() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <HasilClient />
    </Suspense>
  );
}
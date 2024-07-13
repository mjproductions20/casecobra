import React, { Suspense } from "react";
import { ThankYou } from "./thank-you";

const ThankyouPage = () => {
  return (
    <Suspense>
      <ThankYou />
    </Suspense>
  );
};

export default ThankyouPage;

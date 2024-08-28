import { notFound } from "next/navigation";
import React from "react";

const Page = ({params}) => {
if (params.id > 10) notFound()
  return <div>This is id: {params.id} </div>;
};

export default Page;

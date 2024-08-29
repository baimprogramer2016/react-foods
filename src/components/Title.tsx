import React from "react";

export default function Title(props: { children: React.ReactNode }) {
  return (
    <h1 className="mb-4 text-xl font-semibold text-dark-600">
      {props.children}
    </h1>
  );
}

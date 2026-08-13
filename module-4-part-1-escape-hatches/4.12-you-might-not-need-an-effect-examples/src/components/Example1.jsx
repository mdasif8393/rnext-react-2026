import { useState } from "react";

export default function Example1() {
  const [firstName] = useState("Taylor");
  const [lastName] = useState("Swift");

  const fullName = firstName + " " + lastName;

  return (
    <div>
      <p>{fullName}</p>
    </div>
  );
}

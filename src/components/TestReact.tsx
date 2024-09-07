import { useState } from "react";

export const TestReact = () => {
  const [cnt, setCnt] = useState(0);

  return (
    <div>
      <p>cnt: {cnt}</p>
      <button
        type="button"
        onClick={() => {
          setCnt((p) => p + 1);
        }}
      >
        click
      </button>
    </div>
  );
};

import React, { useState } from "react";
import Dropdown from "./Dropdown";

const options = [
  {
    label: "Hindi",
    value: "hi",
  },
  {
    label: "Afrikans",
    value: "af",
  },
  {
    label: "Arbic",
    value: "ar",
  },
];
const Translate = () => {
  const [language, setLanguage] = useState(options[0]);

  return (
    <div>
      <Dropdown
        label='Select the language'
        options={options}
        selected={language}
        onSelectedChange={setLanguage}
      />
    </div>
  );
};

export default Translate;

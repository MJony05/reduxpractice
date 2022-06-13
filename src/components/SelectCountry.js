import { useEffect, useState } from "react";
const arr = ["UZB", "IRN", "USA", "BRZ"];

const SelectCountry = ({ func }) => {
  const [country, setCountry] = useState("");
  useEffect(() => {
    func(country);
  }, [country]);
  function renderHtml() {
    return arr.map((val) => (
      <li
        onClick={() => {
          setCountry(val);
        }}
      >
        {val}
      </li>
    ));
  }
  return (
    <div>
      <ul>{renderHtml()}</ul>
    </div>
  );
};
export default SelectCountry;

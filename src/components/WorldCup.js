import { compose } from "redux";
const WorldCup = ({ valCountry }) => {
  const qush = (val) => {
    return val + 10;
  };
  const kupay = (val) => {
    return val * 4;
  };
  const ayir = (val) => val - 7;
  const result = qush(kupay(ayir(2)));
  const mixFunc = compose(qush, kupay, ayir);
  const result2 = mixFunc(2);
  return (
    <h1>
      Winner:{result},{result2}
    </h1>
  );
};
export default WorldCup;

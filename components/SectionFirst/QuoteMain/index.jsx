import WaveText from "./../../../components/WaveText/index.jsx";

function QuoteMain({ isActive }) {
  const quote = "Our Advantages";

  return <WaveText textStyle={"main"} quote={quote} isActive={isActive} />;
}

export default QuoteMain;

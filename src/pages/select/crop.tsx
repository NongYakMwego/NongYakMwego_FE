import TextBalloon1 from "../../components/textBalloon1";
import characterLogo from "../../assets/characterLogo.svg";

export default function Crop() {
  return (
    <div className="flex flex-col items-center ">
      <TextBalloon1 />
      <img src={characterLogo} className="w-60 h-60" />
    </div>
  );
}

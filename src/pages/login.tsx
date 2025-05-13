import pullLogo from "../assets/pullLogo.svg";
import kakaoLogin from "../assets/kakao_login_large_wide.png";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="flex flex-col items-center min-h-screen pt-20">
      <img src={pullLogo} alt="Pull Logo" className="w-[30rem] h-[30rem]" />
      <Link to="" className="w-[22rem] mt-20 active:scale-95">
        <img src={kakaoLogin} alt="kakao login" />
      </Link>
    </div>
  );
}

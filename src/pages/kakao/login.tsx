import pullLogo from "../../assets/fullLogo.svg";
import kakaoLogin from "../../assets/kakao_login_large_wide.png";

export default function Login() {
  const REST_API_KEY = import.meta.env.VITE_KAKAO_REST_API_KEY;
  const REDIRECT_URI = import.meta.env.VITE_KAKAO_REDIRECT_URI;

  const link = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  const loginHandler = () => {
    window.location.href = link;
  };
  return (
    <div className="flex flex-col items-center min-h-screen pt-20">
      <img
        src={pullLogo}
        alt="Pull Logo"
        className="w-5/6 max-w-[30rem] h-5/6 max-h-[30rem]"
      />
      <button
        type="button"
        onClick={loginHandler}
        className="w-5/6 max-w-[22rem] mt-20 active:scale-95"
      >
        <img src={kakaoLogin} alt="kakao login" />
      </button>
    </div>
  );
}

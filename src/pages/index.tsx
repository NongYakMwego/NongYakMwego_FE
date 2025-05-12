import { Link } from "react-router-dom";

export default function Index() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="w-[26rem] h-[15rem] bg-gray-500 rounded-xl"></div>
      <div className="w-[26rem] my-10">
        우리앱은우리앱은우리앱은우리앱은우리앱은우리앱은우리앱은우리앱은우리앱은우리앱은우리앱은우리앱은우리앱은우리앱은우리앱은우리앱은
        우리앱은우리앱은우리앱은우리앱은우리앱은우리앱은우리앱은우리앱은우리앱은우리앱은우리앱은우리앱은우리앱은우리앱은우리앱은우리앱은
      </div>
      <Link
        to="/login"
        className="bg-[#613EEA] text-white w-48 h-12 flex items-center justify-center rounded-xl"
      >
        Get Started{" "}
      </Link>
    </div>
  );
}

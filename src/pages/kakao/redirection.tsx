import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Redirection() {
  // const code = new URL(document.location.toString()).searchParams.get("code");
  const navigate = useNavigate();

  // async function sendCode() {
  //   try {
  //     const response = await fetch("", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         code: code,
  //       }),
  //     });
  //     if (response.ok) {
  //       navigate("/select/crop");
  //     } else {
  //       const error = await response.json();

  //       alert("로그인을 다시 해주세요!");
  //       navigate("/login");
  //     }
  //   } catch (error: any) {
  //     alert("오류");
  //     navigate("/login");
  //   }
  // }
  useEffect(() => {
    // sendCode();
    navigate("/select/crop");
  }, []);
  return <div>hi</div>;
}

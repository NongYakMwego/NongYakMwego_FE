import { Link } from "react-router-dom";

export default function Index() {
  return (
    <div>
      <div>index</div>
      <Link to="/login">로그인 </Link>
    </div>
  );
}

import { Link, useNavigation } from "react-router-dom";

function Header() {

  const navigation = useNavigation();

  return (
    <div className="header">
      <Link to="/">
        Podcaster
      </Link>

    <div className={navigation.state === "loading" ? "loading" : ""} />
    </div>
  )
}

export default Header;

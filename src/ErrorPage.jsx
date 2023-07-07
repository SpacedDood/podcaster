import { useRouteError } from "react-router-dom";
import Footer from "./components/Footer";

export default function ErrorPage() {
  let error = useRouteError();

  return (
    <div className="errorPage">
      <img src="http://spaceddood.com/images/error.jpg" />
      <h1>Error</h1>
      <h2>You have found a page blessed by the spaghetti monster!</h2>
      <p>Yes, yes... I know. I didn't have to create an error page.</p>
      <p>But previous error page was ugly. So... Yeet</p>
      <p><i>FYI... error was: {error.message}</i></p>
      <Footer />
    </div>
  )
}

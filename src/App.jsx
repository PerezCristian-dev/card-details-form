import { useContext } from "react";
import { Banner } from "./components/Banner";
import { Form } from "./components/Form";
import { SuccessForm } from "./components/SuccessForm";
import { AppContext } from "./context/AppContext";

function App() {
  const { isValidForm } = useContext(AppContext);

  return (
    <section className="lg:flex lg:items-center lg:justify-center">
      <Banner />
      {isValidForm ? <SuccessForm /> : <Form />}
    </section>
  );
}

export default App;

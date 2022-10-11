import { Banner } from "./components/Banner";
import { Form } from "./components/Form";
import { AppProvider } from "./context/AppProvider";

function App() {
  return (
    <AppProvider>
      <section className="flex items-center">
        <Banner />
        <Form />
      </section>
    </AppProvider>
  );
}

export default App;

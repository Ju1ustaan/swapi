import AppRouters from "./routes/appRouters";
import Providers from "./providers";
const App = () => {
  return (
    <div className="App">
      <Providers>
        <AppRouters />
      </Providers>
    </div>
  );
}

export default App;

import HomePage from "./components/home";
import DataProvider from "./context/DataProvider";

export default function Home() {
  return (
    <DataProvider>
      <HomePage />
    </DataProvider>
  );
}

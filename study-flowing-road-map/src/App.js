import Dialog from "./components/Composition vs Inheritance/Dialog";
import SignUpDialog from "./components/Composition vs Inheritance/SignUpDialog";
import PakingList from "./components/ConditionalRedering/PackingList";

export default function App() {
  return (
    <h1 className="">
      <PakingList/>
      <Dialog/>
      <SignUpDialog/>
    </h1>
  )
}
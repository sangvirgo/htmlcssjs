import UseState from "./components/useState"
import UseState1 from "./components/useState1"
import TakeGift from "./components/TakeGift"
import OneWayBinding from "./components/One-way-binding"
import Radio from "./components/Radio"

export default function App() {
  return (
    <h1 className="text-3xl font-bold ">
      <UseState/>
      <UseState1/>
      <TakeGift/>
      <OneWayBinding/>
      <Radio/>
    </h1>
  )
}



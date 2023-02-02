import Card from "@/components/Card";
import InputForm from "@/components/InputForm";
import Counter from "@/redux/slices/Counter";



const index = () => {
  return (
    <div>
      <Counter />
      <InputForm />
      <Card />
    </div>
  )
}

export default index
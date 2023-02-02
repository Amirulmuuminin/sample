import Card from "@/components/Card";
import InputForm from "@/components/InputForm";
import Search from "@/components/Search";
import Counter from "@/redux/slices/Counter";




const index = () => {
  return (
    <div>
      <Counter />
      <InputForm />
      <Search />
    </div>
  )
}

export default index
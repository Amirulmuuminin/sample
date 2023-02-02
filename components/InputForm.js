import { useForm } from "react-hook-form"
import axios from "axios"
import { getPost } from "@/redux/slices/counterSlices"
import { useDispatch } from "react-redux"

const InputForm = () => {

    const { register, handleSubmit, reset} = useForm()

    const dispatch = useDispatch()

    const onSubmit = (data) => {
        console.log("created")
        axios.post("/api/pesan", data)
          .then(() => {
            dispatch(getPost())
            reset()
          })
          .catch((e) => console.log(e))   
      }

  return (
    <div>
        {/* fungsi onSubmit jangan diinvoke */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            // atribut wajib: name, {...register("name")}
            type="text"
            {...register("nama")}
          />
          <input
            type="text"
            {...register("email")}
          />
          <input
            type="text"
            {...register("pesan")}
          />
          <button type='submit'>submit</button>
        </form>
      </div>
  )
}

export default InputForm
import { getPost } from "@/redux/slices/counterSlices"
import axios from "axios"
import { useRouter } from "next/router"
import { useForm } from "react-hook-form"
import { useSelector, useDispatch } from "react-redux"

const editForm = () => {

    const {register, handleSubmit, reset} = useForm()
    const post = useSelector((state) => state.counter.post)
    const dispatch = useDispatch()

    const router = useRouter()
    const {id} = router.query

    const onSubmit = async(data) => {
        data._id = id
        await axios.patch("http://localhost:3000/api/pesan", data)
        dispatch(getPost())
        router.push("/")
    }

  return (
    <div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text"
                {...register("nama")}
            />
            <input type="text"
                {...register("email")}
            />
            <input type="text"
                {...register("pesan")}
            />
            <button type="submit">submit</button>
        </form>
    </div>
  )
}

export default editForm
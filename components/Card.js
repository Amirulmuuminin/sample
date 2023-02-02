import { useDispatch, useSelector } from "react-redux"
import Link from "next/link"
import { useEffect } from "react"
import { getPost } from "@/redux/slices/counterSlices"
import axios from "axios"

const Card = () => {

    const {post, isComplete} = useSelector((state => state.counter))
    const dispatch = useDispatch()

    useEffect(() => {
      dispatch(getPost())
      console.log("i fired this once")
    }, [dispatch])
    
    const deletePesan = (id) => {
        // parameter kedua untuk delete method bukan data req.body
        // gunakan req.query seperti dibawah ini untuk delete method
            axios.delete(`/api/pesan/?id=${id}`)
                .then(() => {
                dispatch(getPost())
                })
                .catch((e) => console.log(e))
            }

  return (
    <div>
        {isComplete && post.map((item,) => 
          <div key={item._id} className="border border-solid">
            <h1>{item.nama}</h1>
            <h4>{item.email}</h4>
            <p>{item.pesan}</p>
            {/* link this button to update page coz we need form for new data */}
            <Link href={"/edit/" + item._id}>Edit</Link>
            <button onClick={() => deletePesan(item._id)}>Delete</button>
          </div>
        )
        }
    </div>
  )
}

export default Card
import { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { getPost } from "@/redux/slices/counterSlices"
import Link from "next/link"
import axios from "axios"

const Search = () => {

    const [query, setQuery] = useState("")
    const {post, isComplete} = useSelector((state) => state.counter)
    const [filteredPost, setFilteredPost] = useState("")

    const dispatch =useDispatch()

    useEffect(() => {
        dispatch(getPost())
        console.log("i fired this once")
        }, [dispatch])

    //run setiap ketikan pada search
    useEffect(() => {
        setFilteredPost(
            post.filter((item) => {
                //karena string.includes case sensitive, kita ubah semua tolower dan upper case
                if(item.nama.toLowerCase().includes(query.toLowerCase()) || item.nama.toUpperCase().includes(query.toLowerCase()) || item.email.toLowerCase().includes(query.toLowerCase()) || item.email.toUpperCase().includes(query.toLowerCase()) || item.pesan.toLowerCase().includes(query.toLowerCase())|| item.pesan.toUpperCase().includes(query.toLowerCase()))  return true
            }))
        console.log(filteredPost)
    }, [query, post])


    const deletePesan = (id) => {
        // parameter kedua untuk delete method bukan data req.body
        // gunakan req.query seperti dibawah ini untuk delete method
        axios.delete(`/api/pesan/?id=${id}`)
            .then(() => {
            dispatch(getPost())
            })
            .catch((e) => console.log(e))
        }

    const Card = query? filteredPost.map((item) => {
        //ingat retuurrnn !!!!
        return(
            <div key={item._id} className="border border-solid">
                <h1>{item.nama}</h1>
                <h4>{item.email}</h4>
                <p>{item.pesan}</p>
                {/* link this button to update page coz we need form for new data */}
                <Link href={"/edit/" + item._id}>Edit</Link>
                <button onClick={() => deletePesan(item._id)}>Delete</button>
        </div>
        )
    }) :
    post.map((item) => {
        //ingat retuurrnn !!!!
        return(
            <div key={item._id} className="border border-solid">
                <h1>{item.nama}</h1>
                <h4>{item.email}</h4>
                <p>{item.pesan}</p>
                {/* link this button to update page coz we need form for new data */}
                <Link href={"/edit/" + item._id}>Edit</Link>
                <button onClick={() => deletePesan(item._id)}>Delete</button>
        </div>
        )
    })

  return (
    <div id="wrapper">
        <input
        type="text"
        name="search"
        id="search"
        placeholder="cari kata"
        value={query || ""} //bisa juga useState("") agar nilai awal tidak undefined
        onChange={(e) => setQuery(e.target.value)}
        />

        {Card}
        
        {/* {filteredPost && filteredPost.map((item) => {
            //ingat retuurrnn !!!!
            return(
                <div key={item._id} className="border border-solid">
                    <h1>{item.nama}</h1>
                    <h4>{item.email}</h4>
                    <p>{item.pesan}</p>
                    <Link href={"/edit/" + item._id}>Edit</Link>
                    <button onClick={() => deletePesan(item._id)}>Delete</button>
            </div>
            )
        })} */}
    </div>
  )
}

export default Search
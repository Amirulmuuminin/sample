import {useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, getPost} from './counterSlices'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import Link from 'next/link'

function Counter() {
  const count = useSelector((state) => state.counter.value)
  const {post, isComplete} = useSelector((state => state.counter))
  const dispatch = useDispatch()

  const { register, handleSubmit, reset } = useForm();

  useEffect(() => {
    dispatch(getPost())
    console.log("i fired this once")
  }, [])

  const onSubmit = (data) => {
    axios.post("/api/createPesan", data)
      .then(() => {
        dispatch(getPost())
        reset()
      })
      .catch((e) => console.log(e))   
  }

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>

      <div>
        {/* fungsi on submit jangan diinvoke */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            // atribut wajib: name, {...register("name")}
            type="text"
            name='nama'
            {...register("nama")}
          />
          <input
            type="text"
            name='email'
            {...register("email")}
          />
          <input
            type="text"
            name='pesan'
            {...register("pesan")}
          />
          <button type='submit'>submit</button>
        </form>
      </div>

      <div>
        <button onClick={() => {dispatch(getPost())}}>get name</button>
      </div>

      <div>
        {post && post.map((item, index) => 
          <div key={item._id} className="border border-solid">
            <h1>{item.nama}</h1>
            <h4>{item.email}</h4>
            <p>{item.pesan}</p>
            {/* link this button to update page coz we need form for new data */}
            <Link href={"/edit/" + item._id}>Edit</Link>
          </div>
        )
        }
      </div>
    </div>
  )
}

export default Counter
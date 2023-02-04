import Header from "@/components/todo/Header"
import Main from "@/components/todo/Main"

const index = () => {
  return (
    <div >
      <Header />
      {/* main */}
      <div className=' bg-[#fbeee5] p-5 rounded-t-3xl h-full'>
        <Main />
      </div>

    </div>
  )
}

export default index
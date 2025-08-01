import React, { useState } from 'react'

function ProfileGit() {
  
    const[data, setData] = useState("")
    const[user, setUser] = useState(null)
    const[loading, setLoading] = useState(false)

    function handleSearch(){

        setLoading(true);

          fetch(`https://api.github.com/users/${data}`)
          .then((res) => res.json())
          .then((result) => {
            console.log(result)
            setUser(result)
            setLoading(false)
          })
          .catch((error) => console.log(error))

    }

  return (
    <div className='max-w-lg bg-slate-800 text-white rounded-lg text-center m-auto space-y-4 py-4 px-5'>
        <h1 className='text-2xl font-bold'>Github Profile</h1>
      <input type="text" placeholder='search github profile' value={data} onChange={(e) => setData(e.target.value)} className='bg-white text-black w-10/12 focus:outline-none border-2 border-white rounded-l-lg px-3 py-1'/>
      <button onClick={handleSearch} className='bg-slate-800  px-5 py-1 cursor-pointer border-2 rounded-r-lg'>click</button>
     
     {loading && (
        <div className="flex justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      )}
    
      {
        user && !user.message && !loading &&(
            <div className='bg-slate-700 rounded-lg m-auto text-lg space-y-2 py-4'>
            <img src={user.avatar_url} alt="" className='w-70 mx-auto rounded-lg' />
            <h1>{user.name}</h1>
            <a href={`https://github.com/${user.login}?tab=repositories`} className='text-blue-700 underline'>Tab for view repositories</a>
            </div>
        ) 
      }
      {
        user && user.message === "Not Found" && (
            <p className='text-red-500'>User Not Found</p>
        )
      }
    </div>
  )
}

export default ProfileGit

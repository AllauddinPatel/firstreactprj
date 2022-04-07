import React, { useMemo } from 'react'
 function UseMemoDemo() {

  const users=[{
    id:1,
    name:"jhon"
  },
  {
    id:2,
    name:"peter"
  },
  {
    id:3,
    name:"Richard"
  }
]

  const [text,setText]=React.useState('')
  const [search,setSearch]=React.useState('')

  const handleInputChange=(event)=>{
    setText(event.target.value)
  }

  const handleSearch=()=>{
    setSearch(text)
  }

  //useMemo
  const filteredData=useMemo(()=> users.filter((user)=>{
  
    return user.name.toLowerCase().includes(search.toLowerCase())
  } ),[search])
  return (
    <div>
        <input type="text" onChange={handleInputChange}/>
        <button type='button' onClick={handleSearch}>search</button>
        <UserList userList={filteredData}/>
    </div>
  )
}

function UserList({userList}) {
  return (
    <ul>
      {userList.map((item)=>(
        <li key={item.id}>{item.name}</li>
      ))}
      </ul>
  )
  
}
export default UseMemoDemo
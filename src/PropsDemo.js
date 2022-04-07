

function PropsDemo() {

    const messege = "Hello react"

    const person = [{
        name: "Peter",
        city: "Pune"
    },
    {
        name: "John",
        city: "Mumbai"
    }
    ]
    


    return (
        <div>
            <h2>Props Parent</h2>
            <ChildProp person={person} />
        </div>
    )
}


function ChildProp({ person }) {
    // console.log(props.person)
    if (!person) {
        return <p>No Record Found...</p>
    }

    return (
        <div>
            <h2>in child class</h2>



            {person.map((a) => {
                return (
                    <ul key={a.name} >
                        <li >{a.name + "  " + a.city}</li>
                    </ul>
                )
                console.log(a)
            })}


            {/* <p>{props.person.name}</p> */}
        </div>
    )
}


export default PropsDemo
function List() {
    const numbers = [12,32,43,46,54,76]

    const numbers2 = numbers.map((value)=> value * 100)

    const people = [{name: "Jan", age:"12",},{name: "Maciek", age:"15",},{name: "Kacper", age:"18",}]

    console.log(numbers, numbers2)

    return <>
    <div>
        {numbers2.map((value, i)=> {return <span key={i}>{value}, </span>})} 
    </div>
    <div> 
        {people.map((val,i) => {return <div key={i}><p>Imię: {val.name}</p> <p>Wiek: {val.age}</p></div>})}
    </div>
        </>
}

export default List
function Button() {


    function handleClick() {
        console.log("Przycisk został naciśnięty")

    }
return <button className='btn'
        onClick={handleClick}
        onMouseEnter={()=> console.log('Najechanie myszką')} >
        Nacisnij mnie
        </button>

}

export default Button
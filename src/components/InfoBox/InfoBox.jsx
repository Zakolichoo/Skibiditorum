import './InfoBox.css'

function InfoBox() {

    const name = "AdrianSkibidi"
    let data = new Date().toUTCString()
    var czas = ""

    return <div className="infobox">
        <p>{name}</p>
        <p>{data}</p>
        <p>{czas}</p>
    </div>

}

export default InfoBox

// const InfoBox = () {

// }
import './Card.css'
import './helpers/calculateProductsSold.js'

function Card() {
    return (
        <>
            <article className={"card"}>
                <p>Aantal verkochte producten</p>
                <p><calculateProductsSold /></p>
            </article>
            <article className={"card"}>
                <p>Aantal ingekochte producten</p>
            </article>
            <article className={"card"}>
                <p>Aantal te verkopen producten</p>
            </article>
        </>
    )
}

export default Card
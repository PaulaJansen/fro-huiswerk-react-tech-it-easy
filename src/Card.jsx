import './Card.css';

function Card({title, variant, helperFn, data}) {
    return (
        <>
            <article className={`card ${variant}`}>
                <h3>{title}</h3>
                <p>{helperFn && data ? helperFn(data) : ""}</p>
            </article>
        </>
    )
}

export default Card
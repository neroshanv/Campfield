{/* goal is to output the data here */ }
{/* goal is to access the data not copy*/ }
{/* alt gives us access to "concepts" and title*/ }



{/* props will help us reuse this Concept component */ }

function Concept(props) {
    return (
        <li className="concept">
            <img src={props.image} alt={props.title} />
            <h2>{props.title}</h2>
            <p>{props.description}</p>
        </li>
    );
}

export default Concept;
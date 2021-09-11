const Person = ({ name, age, hobbies }) => {
    const info = age >= 18 ? "please go vote!" : "you must be 18.";
    const displayName = name.length >= 8 ? name.slice(0,6) : name;
    const hobbiesLis = hobbies.map(h => (<li>{h}</li>))

    return (
        <div>
            <p>"Learn some information about this person"</p> 
            <p>{ info }{ displayName }</p>
            <p>Hobbies</p>
            <ul>
                { hobbiesLis }
            </ul>
            </div>
    )
} 
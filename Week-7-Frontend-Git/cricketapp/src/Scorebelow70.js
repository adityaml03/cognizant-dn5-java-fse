function Scorebelow70({ players }) {

    const players70 = players.filter(
        (item) => item.score <= 70
    );

    return (
        <div>

            {
                players70.map((item) => (

                    <div key={item.name}>

                        <li>
                            Mr. {item.name} {item.score}
                        </li>

                    </div>

                ))
            }

        </div>
    );

}

export default Scorebelow70;
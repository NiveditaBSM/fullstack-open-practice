const Display = ({ list, onShow }) => {

    if (list) {
        if (list.length > 10) {
            return (
                <>
                    <p> Too many matches, specify another field</p>
                </>
            )
        }
        else {
            console.log('in else part:', list)
            return (
                <>
                    {list.map(country => (
                        <div key={country}>
                            <p> {country}  <button onClick={() => onShow(country)} > show </button> </p>
                        </div>

                    ))}
                </>
            )
        }
    }
}

export default Display
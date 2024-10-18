const Country = ({ countryField }) => {

    console.log(countryField)


    if (countryField) {
        const flagUrl = countryField.flags.svg;
        const altText = countryField.flags.alt;
        return (
            <div>
                <h2>{countryField.name.common}</h2>
                <p>
                    capital {countryField.capital[0]}
                </p>
                <p>
                    area {countryField.area}
                </p>
                <h3> Languages: </h3>
                <div>
                    <ul>
                        {Object.values(countryField.languages).map(
                            language => (
                                <li key={language}>{language}</li>
                            )
                        )}
                    </ul>

                </div>
                <img src={flagUrl} alt={altText} style={{ width: '150px', height: 'auto' }} />
            </div>
        )
    }
    return (
        <></>
    )
}

export default Country
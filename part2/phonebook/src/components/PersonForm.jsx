const PersonForm = (props) => {
    // console.log(props)
    return (
        <form onSubmit={props.onSubmitFunc}>
            <div>
                <p>Name: <input value={props.nameValue} onChange={props.onNameChange} /></p>
            </div>
            <div>
                <p>Number:<input value={props.numberValue} onChange={props.onNumberChange} /></p>
            </div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>
    )
}

export default PersonForm
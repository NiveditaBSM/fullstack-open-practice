const Filter = ({ fieldValue, onFieldChange }) => {

    return (
        <div>
            filter shown with: <input value={fieldValue} onChange={onFieldChange} />
        </div>
    )
}

export default Filter
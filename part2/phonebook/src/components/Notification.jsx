const Notification = ({ errorMessage, successMessage, onErrClose, onSuccClose }) => {
    if (errorMessage === null && successMessage === null)
        return
    if (errorMessage !== null && successMessage === null)
        return (
            <div className='message errorMessage'>
                <p>{errorMessage}</p>
                <button onClick={onErrClose}>Cancel</button>
            </div>
        )
    if (errorMessage === null && successMessage !== null)
        return (
            <div className='message successMessage'>
                <p>{successMessage}</p>
                <button onClick={onSuccClose}>Cancel</button>
            </div>
        )
    return (
        <div>
            <div className='message successMessage'>
                <p>{successMessage}</p>
                <button onClick={onSuccClose}>Cancel</button>
            </div>
            <div className='message errorMessage'>
                <p>{errorMessage}</p>
                <button onClick={onErrClose}>Cancel</button>
            </div>
        </div>
    )
}

export default Notification
const Persons = ({ phoneBook, onDelete }) => {
    return (
        <div>
            <table>
                <tbody>
                    {phoneBook.map((record) =>
                        <tr key={record.id}>
                            <td>{record.name} </td>
                            <td>{record.number}</td>
                            <td> <button value="delete" key={record.id} onClick={()=> onDelete(record.id)}></button></td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default Persons
import Part from './Part'

const Content = ({ parts }) => {
    // console.log(parts)
    const total = parts.reduce((sum, part) => sum = sum + part.exercises, 0)
    // console.log(total)
    return (
        <>
            {parts.map((part) => {
                console.log("Part in Content", part.exercises)
                return (
                    <Part key={part.id} partName={part.name} exercise={part.exercises} />
                )
            }
            )}
            <p><b>total of {total} exercises </b></p>
        </>
    )
}

export default Content

export const Counter = ({InitialValue= 0}) => {
 
    const handleIncrement = () => {
        console.log("+1 desde la función")
    }

    return (
        <>
    <h1>Counter {InitialValue=0}</h1>
    <button onClick={(event) => handleIncrement(event)}>+1</button>
    </>
)
}

export const Input = (props) => {
    return (
        <>
            <p>{props.header}</p>
            <input id={props.id} onInput={props.handleChange} placeholder={props.placeholder}></input>
        </>
    )
}
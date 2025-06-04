const Empdesign =(props)=>{
    return(
        <>
        <tr>
            <td>{props.eid}</td>
            <td>{props.nm}</td>
            <td>{props.dept}</td>
            <td>{props.sal}</td>
            <td>{props.age}</td>
            <td>{props.city}</td>
        </tr>
        </>
    )
}

export default Empdesign;
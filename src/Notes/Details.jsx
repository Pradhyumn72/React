const Details=(props)=>{
    return(
        <>
     <h1>Below is your student info </h1>
     <h3>Student name:{props.nm}</h3>
     <h3>Subject:{props.sub}</h3>
     <h3>address:{props.add}</h3>
     <h3>fees:{props.fees}</h3>
        </>
    )
}
export default Details;
export default function User({user}){
 
    return(
        <div className="card">
            <h1>Name:user: {user.name}</h1>
            <h1>Company Name: {user.company.name}</h1>
            <h1>City Name: {user.address.city}</h1>
        </div>
    )

}
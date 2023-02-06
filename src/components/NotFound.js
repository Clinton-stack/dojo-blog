const { Link } = require("react-router-dom")

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2>Oops!!</h2>
            <p>That page cannot be found</p>
            <Link to='/'>Back to homepage</Link>
        </div>
     );
}
 
export default NotFound;
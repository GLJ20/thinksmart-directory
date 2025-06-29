import { Link } from "react-router-dom"

const Program = ({program}) => {
    return(
        <>
        <Link to={`program/${program.id}`} className="program-card"> 
            <div>
                <img src={program.logo} alt={program.name} />
                <h3>{program.name}</h3>
            </div>
        </Link>
        </>
    )
}
export default Program
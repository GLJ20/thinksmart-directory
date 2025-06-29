import { Link } from "react-router-dom"

const Cert = ({certification, id}) => {
    return(
        <Link to={`/program/${id}/cert/${certification.id}`}>
        <div className="cert-card">
            <h4>{certification.name}</h4>
            <p><strong>Code:</strong> {certification.code}</p>

        </div>        
        </Link>

    )
}
export default Cert
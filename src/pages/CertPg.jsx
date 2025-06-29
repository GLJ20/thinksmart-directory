import { useParams, Link } from "react-router-dom"
import tsData from "../data/tsData.json"
import { Container, Card, CardContent, Typography } from '@mui/material'

const CertPg = () => {

    const { id, certid } = useParams()
    const program = tsData.programs.find((p) => p.id === parseInt(id))
    const cert = program.certifications.find((c) => c.id === certid)

    if (!cert) {
        return <h2>Certification not found.</h2>;
    }

    return(
        <>
            <div className="cert-detail">
                <h2>{cert.name}</h2>
                <p><strong>Code:</strong> {cert.code}</p>
                <p>{cert.description}</p>
                <p><em>{cert.benefits}</em></p>
           </div>
           <Link to={`/program/${id}`}><button>Back</button></Link>
        </>
    )

}
export default CertPg
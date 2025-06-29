import { Link, useParams } from "react-router-dom"
import Cert from "../components/Cert"
import tsData from "../data/tsData.json"

const ProgramPg = () => {
    const { id } = useParams()
    const program = tsData.programs.find((p) => p.id === parseInt(id))

    if (!program) {
        return <h2>Program not found.</h2>;
    }

    return(
        <>
        <div className="program-pg">
            <h1>{program.name}</h1>
            <p className="desc">{program.description}</p>

            <h3>Eligibility Requirements:</h3>
            <ul>
            {program.requirements.map((req, index) => (
                <li key={index}>{req}</li>
            ))}
            </ul>

            <h3>Certification</h3>
            <div className="cert-grid">
                {program.certifications.map((cert) => (
                    <Cert key={cert.id} certification={cert} id={program.id}/>
                ))}
            </div>
            <h3>Contact Us</h3>
            <p>{program.coordinator.name}</p>
            <p>{program.coordinator.phone}</p>
        </div>
        <Link to="/"><button>Back</button></Link>
        </>
    )
}
export default ProgramPg
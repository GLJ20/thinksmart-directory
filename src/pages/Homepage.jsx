import Program from "../components/ProgramCard"
import tsData from "../data/tsData.json"

const Home = () => {
    return(
        <>
        <div>
            <h1>Explore Our Programs!</h1>
            <div className="programs">
                {tsData.programs.map((program) => (
                    <Program key={program.id} program={program}/>
                ))}
            </div>
        </div>
        </>
    )
}
export default Home
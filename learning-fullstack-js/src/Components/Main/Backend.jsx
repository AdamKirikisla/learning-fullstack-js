import NodeJs from "./Backend/NodeJs"
import Databases from "./Backend/Databases"
import ExpressJs from "./Backend/ExpressJs"

export default function Backend(){
    return(
            <section className="phase">
              <div className="phase-desc">
                <p>PHASE 02</p>
                <h2>Backend</h2>
                <p>The server-side logic, databases, and infrastructure that power an app from behind the scenes.</p>
              </div>
              <div className="phase-grid">
                <NodeJs />
                <Databases />
                <ExpressJs />
                
              </div>
            </section>
        )
}
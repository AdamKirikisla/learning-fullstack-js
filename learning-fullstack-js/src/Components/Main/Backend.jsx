import NodeJs from "./Backend/NodeJs"

export default function Backend(){
    return(
            <section className="phase">
              <div className="phase-desc">
                <p>PHASE 02</p>
                <h2>Backend</h2>
                <p>Same language, no browser. Where the data lives.</p>
              </div>
              <div className="phase-grid">
                <NodeJs />
                
              </div>
            </section>
        )
}
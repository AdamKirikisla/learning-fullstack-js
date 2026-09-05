import HTML from "./Foundations/HTML"
import CSS from "./Foundations/CSS"
import JavaScript from "./Foundations/JavaScript"
import GitHub from "./Foundations/GitHub"

export default function Foundations(){
    return(
        <section className="phase">
          <div className="phase-desc">
            <p>PHASE 01</p>
            <h2>Foundations</h2>
            <p>The browser platform. Nothing you learn later replaces this.</p>
          </div>
          <div className="phase-grid">
            <HTML />
            <CSS />
            <JavaScript />
            <GitHub />
          </div>
        </section>
    )
}
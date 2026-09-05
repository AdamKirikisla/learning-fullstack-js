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
            <p>Obligatory no matter what stack you use — this is the fundamentals everything else sits on.</p>
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
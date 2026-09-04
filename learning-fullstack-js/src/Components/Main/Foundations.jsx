import HTML from "./Foundations/HTML"
import CSS from "./Foundations/CSS"
import JavaScript from "./Foundations/JavaScript"
import GitHub from "./Foundations/GitHub"

export default function Foundations(){
    return(
        <>
        <p>PHASE 01</p>
        <h2>Foundations</h2>
        <p>The browser platform. Nothing you learn later replaces this.</p>
        <div className="phase-grid">
          <HTML />
          <CSS />
          <JavaScript />
          <GitHub />
        </div>
        </>
    )
}
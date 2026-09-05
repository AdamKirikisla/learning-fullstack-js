import React from "./Frontend/React"
import TypeScript from "./Frontend/TypeScript"
export default function Frontend(){
    return(
                <section className="phase">
                  <div className="phase-desc">
                    <p>PHASE 03</p>
                    <h2>Frontend</h2>
                    <p>The tools real frontends are built with: React for structuring the interface, TypeScript for catching errors before they ship.</p>
                  </div>
                  <div className="phase-grid">
                    <React />
                    <TypeScript />

                    
                    
                  </div>
                </section>
            )
}
export default function TypeScript(){
    return(
        <div className="card">
            <div className="card-head">
                <p className="step">10</p>
                <h2>TypeScript</h2>
            </div>
            <p>TypeScript is a separate language that compiles down to plain JavaScript. It adds labels describing the shape of your data, so mistakes are caught by the compiler instead of by a user.</p>
            <div className="build">
                <span>Build</span>
                <p>Convert the store to TypeScript. Your React components go from .jsx to .tsx, your Express files from .js to .ts.</p>
            </div>
        </div>
    )
}
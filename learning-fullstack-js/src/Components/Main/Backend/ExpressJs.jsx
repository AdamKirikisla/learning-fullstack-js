export default function ExpressJs(){
    return(
        <div className="card">
            <div className="card-head">
                <p className="step">08</p>
                <h2>Express.js</h2>
            </div>
            <p>Express is a minimalist framework built on top of Node.js. It handles the repetitive parts of running a server — matching URLs to code, reading incoming requests, sending responses — so you write less code to do the same thing.</p>
            <div className="build">
                <span>Build</span>
                <p>Rewrite step 06's server in Express, keeping the database from step 07. Same app, same behaviour, a fraction of the code. Diff the two files and you'll see exactly what the framework is doing for you.</p>
            </div>
        </div>
    )
}
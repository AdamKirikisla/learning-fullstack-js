export default function NodeJs(){
    return(
        <div className="card">
            <div className="card-head">
                <p className="step">05</p>
                <h2>Node.js</h2>
            </div>
            <p>Node lets you run JavaScript outside the browser — 
                on a server or your own machine. It can read files, 
                install packages with npm, and answer web requests.</p>
            <div className="build">
                <span>Build</span>
                <p>Serve your step 03 to-do app from your own server. Use Node's built-in http module — no frameworks. Handle the URLs by hand, save tasks to a JSON file. Note how much code it takes to do very little.</p>
            </div>
        </div>
    )
}
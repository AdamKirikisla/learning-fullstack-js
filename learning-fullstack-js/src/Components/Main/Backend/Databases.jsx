export default function Databases(){
    return(
        <div className="card">
            <div className="card-head">
                <p className="step">07</p>
                <h2>Databases</h2>
            </div>
            <p>A database is where your app's data is saved permanently. 
                SQL databases store rows in tables with a fixed shape — 
                PostgreSQL, MySQL, SQLite. NoSQL databases store flexible documents — 
                MongoDB. You only need the concept now: pick one (Postgres or MySQL) and use it.</p>
            <div className="build">
                <span>Build</span>
                <p>Same app, same server. Delete the JSON file and put the tasks in Postgres instead. Write the queries yourself — INSERT, SELECT, UPDATE, DELETE — before you touch anything that writes them for you.</p>
            </div>
        </div>
    )
}
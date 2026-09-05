export default function HTTP(){
    return(
        <div className="card">
            <div className="card-head">
                <p className="step">05</p>
                <h2>HTTP & REST</h2>
            </div>
            <p>Every browser request carries a method saying what it wants — GET, POST, PUT, DELETE — and a URL saying where. The server answers with a status code and usually JSON. REST is the convention for organising those URLs around your data. Understand what a request and response actually contain before you write a server that produces them.</p>
            <div className="build">
                <span>Resources</span>
                <a>link</a>
            </div>
        </div>
    )
}
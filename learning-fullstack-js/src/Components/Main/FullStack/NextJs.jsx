export default function NextJs(){
    return(
        <div className="next">
            <div className="card-head">
                <p className="step">11</p>
                <h2>Next.js</h2>
            </div>
            <p>Next.js puts your React frontend and your backend in a single project — pages, routing, data loading and API endpoints together, deployed with one command. It runs on Node but replaces Express, handling routing and requests itself. Your database and your TypeScript setup carry over unchanged. It uses everything above, which is why it comes last.</p>
            <div className="build">
                <span>Build</span>
                <p id="next-p">Rebuild the store in Next.js: pages and API routes in one project, connected to a hosted Postgres database and deployed to Vercel.</p>
            </div>
        </div>
    )
}
function Battery() {

    return (
        <section className="container-fluid Battery">
            <div className="row row-cols-1 row-cols g-3">
                <div className="col-lg-8 Battery-card Battery-cardgreen">
                    <div className="card h-100">
                        <div className="card-body">
                            <h5 className="card-title">All-day battery life </h5>
                            <h1 className="card-text">Up to 18 hours of battery life. Go long — free of charge.2 </h1>
                        </div>

                    </div>
                </div>
                <div className="col-lg-4 Battery-card Battery-cardblue">
                    <div className="card h-100">
                        <div className="card-body">
                            <h5 className="card-title">Thermal efficiency</h5>
                            <p className="card-text text-muted">No fan. </p>
                            <p className="card-text text-muted">No noise.</p>
                            <p className="card-text">Just Air. </p>
                        </div>

                    </div>
                </div>

            </div>
        </section>

    );
}

export default Battery;
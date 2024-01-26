
import connectivity from "../images/connectivity.jpg"
import wifi from "../images/wifi.png"
import touchid_icon from "../images/touchid_icon.png"
import touchid_icon_app_store from "../images/touchid_icon_app_store.png"
import touchid_icon_protected from "../images/touchid_icon_protected.png"
import touchid_icon_appletv from "../images/touchid_icon_appletv.png"
function Connectivityintro() {

    return (
        <section className="container-fluid">
            <div className="Connectivityintro container   ">

                <div className="row">
                    <div className="col-lg-9">
                        <h1>
                            <br></br>
                            <span>
                                Connectivity<br></br>

                            </span>
                            Charges, chats, streams, works, and plays well with others.
                        </h1>

                    </div>

                    <div className="col-lg-12">
                        <img src={connectivity} className="card-img-top Connectivityintroimg" alt="..." />

                    </div>
                </div>




            </div>





            <section>
                <div className="row row-cols-1 row-cols g-2 container-fluid">
                    <div className="col-lg-6  Connectivitycardpink">
                        <div className="card h-100">
                            <div className="card-body">
                                <h5 className="card-title">Wi-Fi 6</h5>
                                <h1 className="card-text">Superfast Wi‑Fi 6 connection keeps MacBook Air going strong even as more and more devices join the network.</h1>
                                <img src={wifi} className="card-img-top" alt="..." />
                                <h2>Wi-Fi 6</h2>
                                <h4>up to 1.2Gb/s throughput4</h4>

                            </div>

                        </div>
                    </div>
                    <div className="col-lg-6 Connectivitycardpink">
                        <div className="card h-100">
                            <div className="card-body">
                                <div className="row row-cols-1 row-cols g-4 container-fluid">
                                    <div className="col-lg-6  Thunderboltcard  ">
                                        <div className="card h-100">
                                            <div className="card-body">
                                                <img src="https://www.apple.com/v/macbook-air-m1/f/images/overview/thunderbolt_icon_charging__9088ui3etiam_large.png" className="card-img-top" alt="..." />
                                                <p className="card-title">Charging</p>

                                            </div>

                                        </div>
                                    </div>
                                    <div className="col-lg-6  Thunderboltcard ">
                                        <div className="card h-100">
                                            <div className="card-body">
                                                <img src="https://www.apple.com/v/macbook-air-m1/f/images/overview/thunderbolt_icon_display__fc8ygzlxeu62_large.png" className="card-img-top" alt="..." />

                                                <p className="card-title">External display</p>

                                            </div>

                                        </div>
                                    </div>

                                </div>
                                <div className="row row-cols-1 row-cols g-4 container-fluid">
                                    <div className="col-lg-6 Thunderboltcard ">
                                        <div className="card h-100">
                                            <div className="card-body">
                                                <img src="https://www.apple.com/v/macbook-air-m1/f/images/overview/thunderbolt_icon_transfer__8tj1fj5cn1eq_large.png" className="card-img-top" alt="..." />
                                                <p className="card-title">Data transfer up to 40Gb/s</p>

                                            </div>

                                        </div>
                                    </div>
                                    <div className="col-lg-6 Thunderboltcard  ">
                                        <div className="card h-100">
                                            <div className="card-body">
                                                <img src="https://www.apple.com/v/macbook-air-m1/f/images/overview/thunderbolt_icon_connect__p26rhclzsduq_large.png" className="card-img-top" alt="..." />
                                                <p className="card-title">Connecting your devices</p>


                                            </div>

                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>

                    </div>
                </div>

            </section>





        </section>




    );
}

export default Connectivityintro;
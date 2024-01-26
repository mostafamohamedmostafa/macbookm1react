import Macosimg from "../images/macos.png"
import macosimage from "../images/macos_apps.png"
import applelogo from "../images/apple.png"
function Macos() {

    return (
        <section className="container-fluid acos">
            <div className="acos   ">

                <div class="    acos-card d-flex  flex-column flex-lg-row justify-content-center  align-items-center">

                    <div className=" col-lg-6 ">
                        <h5>macOS</h5>

                        <h1 className="card-title">The power of macOS on M1.</h1>
                        <p className="card-text">macOS unlocks the potential of the M1 chip and transforms Mac with all-new ways to work and play. Connect, share, and create like never before using FaceTime and Messages. Explore the web on the streamlined Safari, the fastest browser in the world.2 And work across Mac and your other Apple devices with Universal Control. macOS also includes industry-leading privacy features and best‑in‑class security. </p>

                    </div>

                    <div className=" col-lg-6 ">
                        <img src={Macosimg} className="card-img-top" alt="..." />


                    </div>
                </div>

                <section>
                    <div className="row row-cols-1 row-cols g-2 container-fluid">
                    <div className="col-lg-6 acos-card-macos">
                        <div className="card h-100">
                            <div className="card-body">
                                <h5 className="card-title">Speed and responsiveness </h5>
                                <h4 className="card-text">The M1 chip and macOS work together to make the entire system snappier. MacBook Air wakes instantly from sleep. Everyday tasks from flipping through photos to browsing Safari are faster. And your hardest-working apps all have access to the power they need.</h4>
                                <h1 className="card-text">More power.Wakes instantly.</h1>
                            </div>

                        </div>
                    </div>
                    <div className="col-lg-6 acos-card-macos">
                        <div className="card h-100">
                            <div className="card-body">
                                <h5 className="card-title">A massive collection of apps</h5>
                                <h4 className="card-text">All your go-to apps run lightning fast in macOS — including Microsoft 365 and many of your favorite iOS apps. And with thousands of apps optimized for Apple silicon, your creative future is wide open.</h4>
                                <img src={macosimage} className="card-img-top" alt="..." />

                            </div>

                        </div>
                    </div>

                </div>
                </section>


                <section>
                    <div className="row row-cols-1 row-cols g-2 container-fluid">
                        <div className="col-lg-4  card-macos-blue">
                            <div className="card h-100">
                                <div className="card-body">
                                    <h5 className="card-title">Unified memory</h5>

                                    <h4 className="card-text">The do‑it‑all notebook gets do‑the‑unbelievable memory. The M1 chip brings up to 16GB of superfast unified memory. This single pool of high‑bandwidth, low‑latency memory allows apps to share data between the CPU, GPU, and Neural Engine efficiently — so everything you do is fast and fluid.</h4>
                                </div>

                            </div>
                        </div>



                        <div className="col-lg-4 card-macos-light-blue">
                            <div className="card h-100">
                                <div className="card-body">
                                    <h5 className="card-title">SSD storage</h5>
                                    <h1 className="card-text">Up to
                                        2TB
                                        SSD storage3</h1>
                                    <p className="card-text"> Bring your photos, movies, music, and documents with you — and open them in a flash.</p>

                                </div>

                            </div>
                        </div>

                        <div className="col-lg-4 card-macos-light-black">
                            <div className="card h-100">
                                <div className="card-body">
                                    <h5 className="card-title">Security</h5>
                                    <img src={applelogo} className="card-img-top" alt="..." />

                                    <h4 className="card-text">Macbook Air can keep your secrect</h4>

                                </div>

                            </div>
                        </div>


                    </div>
                </section>


            </div>
        </section>

    );
}

export default Macos;
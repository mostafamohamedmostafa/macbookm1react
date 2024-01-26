import machine_learning from "../images/machine_learning.png"
function Machinelearning() {

    return (
        <section className="container-fluid Machinelearning">
            <div className="  Machinelearning-card    ">
                <h5>Machine learning</h5>
                <div class="    Machinelearning-card d-flex  flex-column flex-lg-row justify-content-center  align-items-center">

                    <div className=" col-lg-6 ">
                        <img src={machine_learning} className="card-img-top" alt="..." />


                    </div>
                    <div className=" col-lg-6 ">
                        <h1 className="card-title"><span> A 16-core Neural Engine capable of 11 trillion operations per second. Process that</span>
                            Apps on MacBook Air can use machine learning (ML) to automatically retouch photos like a pro, make smart tools such as magic wands and audio filters more accurate at auto‑detection, and so much more. That’s not just brainpower — that’s the power of a full stack of ML technologies.
                        </h1>

                    </div>


                </div>





            </div>
        </section>

    );
}

export default Machinelearning;
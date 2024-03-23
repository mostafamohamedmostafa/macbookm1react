import cpu from "../images/cpu.png"
function Cpu() {

    return (
        <section className="container-fluid Cpu">
            <div className="Cpu   ">

                <div class="    cpu-card d-flex  flex-column flex-lg-row justify-content-center  align-items-center">


                    <div className=" col-lg-6 ">
                        <h1 className="card-title">8-core CPU Devours tasks. Sips battery.</h1>
                        <p className="card-text"> The CPU on M1 isn’t just astonishingly fast — it balances high-performance cores with efficiency cores that crush everyday jobs while using far less energy. With that kind of processing power, MacBook Air can take on intensive tasks like professional-level video editing and action-packed gaming..</p>
 
                    </div>

                    <div className=" col-lg-6 ">
                        <img src={cpu} className="card-img-top" alt="..." />


                    </div>
                </div>





            </div>
        </section>

    );
}

export default Cpu;
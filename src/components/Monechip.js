

import m1icon from "../images/m1icon.png"
import m1chip from "../images/m1-chip.jpg"
function Monechip() {

    return (
        <section className="container Monechip">
            <div className="Monechip   ">
                <img className="    MonechipImage " src={m1icon}></img>

                <div className="    col-8">
                    <h1>Small chip. Giant leap.</h1>
                    <p>M1 is our first chip designed specifically for Mac. Apple silicon integrates the CPU, GPU, Neural Engine, I/O, and so much more onto a single tiny chip. Packed with an astonishing 16 billion transistors, M1 delivers exceptional performance, custom technologies, and unbelievable power efficiency — a major breakthrough for Mac.</p>



                </div>
                <img className="container-fluid  " src={m1chip}></img>



            </div>
        </section>

    );
}

export default Monechip;

import camera_hero from "../images/camera_hero.jpg"
import facetime from "../images/facetime.png"
import microphones from "../images/microphones.jpg"
function Cameraintro() {

    return (
        <section className="container-fluid">
            <div className="Cameraintro container   ">

                <div className="row">
                    <div className="col-lg-9">
                        <h1>
                        Camera and mics
                            <br></br>
                            <span>
                            You’re live on the Air.
                            <br></br>
                             </span>

                        </h1>

                        <h3> The image signal processor in the M1 chip helps you look your best for every FaceTime call and video conference. Three built-in microphones make sure what you say gets heard whether you’re on a call, dictating a note, or recording a Voice Memo.</h3>
                    </div>

                    <div className="col-lg-12">
                        <img src={camera_hero} className="card-img-top" alt="..." />

                    </div>
                </div>




            </div>


   

            <section>
                <div className="row row-cols-1 row-cols g-2 container-fluid">
                    <div className="col-lg-6  Camera-card ">
                        <div className="card h-100">
                            <div className="card-body">
                                <h5 className="card-title">FaceTime HD camera</h5>
                                <h2 className="card-text">Get clear, sharp images. See amazing detail in shadows and highlights. And face detection uses the Neural Engine to improve tone mapping and color accuracy for natural‑looking skin tones.</h2>
                                <img src={facetime} className="card-img-top" alt="..." />

                            </div>

                        </div>
                    </div>
                    <div className="col-lg-6 Camera-card ">
                        <div className="card h-100">
                            <div className="card-body">
                                <h5 className="card-title">Three-microphone array</h5>
                                <h1 className="card-text">Say “Hello” to mics that focus on your voice instead of what’s going on around you.</h1>
 
                                <img src={microphones} className="card-img-top" alt="..." />

                            </div>

                        </div>
                    </div>

                </div>
            </section>

        </section>




    );
}

export default Cameraintro;
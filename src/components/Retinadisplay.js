
import retina_hero from "../images/retina_hero.jpg"
import truetone_icon from "../images/truetone_icon.png"
import pixel_density from "../images/pixel_density.png"
function Retinadisplayintro() {

    return (
        <section className="container-fluid">
            <div className="Retinadisplayintro container   ">

                <div className="row">
                    <div className="col-lg-9">
                        <h1>
                            Retina display
                            <br></br>
                            <span>
                                Life like colors
                                <br></br>
                                for unreal beauty.
                            </span>

                        </h1>

                        <h3>Images take on new levels of detail and realism on the brilliant 13.3‑inch, 2560‑by‑1600-resolution Retina display. Text is sharp and clear. Colors are bright and vibrant. And the glass goes right to the edge of the enclosure, so nothing takes away from your gorgeous view</h3>
                    </div>

                    <div className="col-lg-12">
                        <img src={retina_hero} className="card-img-top" alt="..." />

                    </div>
                </div>




            </div>


            <section className="container-fluid color-gamut">
                <div className="    ">

                    <div class="    color-gamut-card d-flex  flex-column flex-lg-row justify-content-center  align-items-center">


                        <div className=" col-6 ">
                            <h1 className=" ">A wider palette of colors on display.</h1>


                        </div>

                        <div className="  col-6 ">

                            <h1 className=" ">
                                25%
                                <br />

                                <span> more colors than sRGB</span>
                            </h1>

                        </div>
                    </div>




                </div>
            </section>


            <section>
                <div className="row row-cols-1 row-cols g-4 container-fluid">
                    <div className="col-lg-6  Pixeldensitycard">
                        <div className="card h-100">
                            <div className="card-body">
                                <h5 className="card-title">Pixel density </h5>
                                <img src={pixel_density} className="card-img-top" alt="..." />
                                <h1 className="card-text">clarity.</h1>
                            </div>

                        </div>
                    </div>
                    <div className="col-lg-6 card-truetune">
                        <div className="card h-100">
                            <div className="card-body">
                                <h5 className="card-title">True Tone technology</h5>
                                <h4 className="card-text"><span>Good looking. And easy on the eyes. </span></h4>
                                <h4 className="card-text ">MacBook Air automatically adjusts the white point of your display to the color temperature of your environment for a more natural viewing experience</h4>

                                <img src={truetone_icon} className="card-img-top" alt="..." />

                            </div>

                        </div>
                    </div>

                </div>
            </section>

        </section>




    );
}

export default Retinadisplayintro;
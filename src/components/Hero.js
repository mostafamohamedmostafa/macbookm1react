
import Heroimage from "../images/Heroimage.jpg"
import Heroicon from "../images/hero_icon.jpg"
function Hero() {

    return (
        <section className="container-fluid">
            <div className="Hero   ">
                <video loop autoPlay className="container-fluid" src="https://www.apple.com/105/media/us/macbook-air-m1/2022/648bb92f-0bb4-452c-bfbc-2898641b22f5/anim/hero/large.mp4"></video>

                {/* <img className="container-fluid Hero-img" src={Heroimage}></img>*/}

                <div className="HeroText container">
                    <h5>MacBook Air</h5>
                    <h1>Power. It’s in the Air.</h1>
                    <p>MacBook Air with M1 is an incredibly portable laptop — it’s nimble and quick, with a silent, fanless design and a beautiful Retina display. Thanks to its slim profile and all‑day battery life, this Air moves at the speed of lightness.</p>
                    <div className="card mb-3" >
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={Heroicon} className="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className=" card-title">Supercharged by the Apple M1 chip</h5>

                                </div>
                            </div>
                        </div>
                    </div>


                </div>



            </div>
        </section>

    );
}

export default Hero;
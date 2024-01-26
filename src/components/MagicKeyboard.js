
import magic_keyboard from "../images/magic_keyboard.jpg"
import scissor_mechanism from "../images/scissor_mechanism.png"
import touchid_icon from "../images/touchid_icon.png"
import touchid_icon_app_store from "../images/touchid_icon_app_store.png"
import touchid_icon_protected from "../images/touchid_icon_protected.png"
import touchid_icon_appletv from "../images/touchid_icon_appletv.png"
function MagicKeyboardintro() {

    return (
        <section className="container-fluid">
            <div className="MagicKeyboardintro container   ">

                <div className="row">
                    <div className="col-lg-9">
                        <h1>
                            Magic Keyboard
                            <br></br>
                            <span>
                                Go ahead. Take the keys.<br></br>

                            </span>

                        </h1>

                        <h3>When a keyboard types like a dream and still does a whole lot more: that’s magic. With preprogrammed shortcuts, useful features are even easier to access. Switch keyboard languages, respond with the perfect emoji, find documents with Spotlight, quickly mute notifications with Do Not Disturb — there’s so much you can do with just a tap. And the backlit keys with ambient light sensor help you type in low-light settings.</h3>
                    </div>

                    <div className="col-lg-12">
                        <img src={magic_keyboard} className="card-img-top" alt="..." />

                    </div>
                </div>




            </div>





            <section>
                <div className="row row-cols-1 row-cols g-4 container-fluid">
                    <div className="col-lg-6  MagicKeyboardcardpink">
                        <div className="card h-100">
                            <div className="card-body">
                                <h5 className="card-title">Scissor mechanism</h5>
                                <h1 className="card-text">The refined scissor mechanism delivers the best typing experience ever on a Mac notebook.</h1>
                                <img src={scissor_mechanism} className="card-img-top" alt="..." />

                            </div>

                        </div>
                    </div>
                    <div className="col-lg-6 MagicKeyboardcardpinkbg">
                        <div className="card h-100">
                            <div className="card-body">
                                <h5 className="card-title">Force Touch trackpad</h5>
                                <h4 className="card-text">Precise control with plenty of room to swipe, pinch, or zoom.</h4>


                            </div>

                        </div>
                    </div>

                </div>
            </section>



            <section>
                <div class="    touchh-card d-flex  flex-column flex-lg-row justify-content-center  align-items-center">

                    <div className=" col-lg-6 ">
                        <h5>Touch ID</h5>

                        <h1 className="card-title">One touch is all it takes to lock or unlock MacBook Air. Use your fingerprint to rent a movie, buy an app, or access things like secure documents or system settings without having to reenter your password.</h1>

                    </div>

                    <div className=" col-lg-6 ">
                        <div className="row row-cols-1 row-cols g-4 container-fluid">
                            <div className="col-lg-6  touchcard  ">
                                <div className="card h-100">
                                    <div className="card-body">
                                        <img src={touchid_icon} className="card-img-top" alt="..." />
                                        <p className="card-title">Unlock your Mac</p>

                                    </div>

                                </div>
                            </div>
                            <div className="col-lg-6  touchcard ">
                                <div className="card h-100">
                                    <div className="card-body">
                                        <img src={touchid_icon_app_store} className="card-img-top" alt="..." />

                                        <p className="card-title">Make purchases on the App Store</p>

                                    </div>

                                </div>
                            </div>

                        </div>
                        <div className="row row-cols-1 row-cols g-4 container-fluid">
                            <div className="col-lg-6 touchcard  ">
                                <div className="card h-100">
                                    <div className="card-body">
                                        <img src={touchid_icon_protected} className="card-img-top" alt="..." />
                                        <p className="card-title">Open password-protected documents</p>

                                    </div>

                                </div>
                            </div>
                            <div className="col-lg-6 touchcard  ">
                                <div className="card h-100">
                                    <div className="card-body">
                                        <img src={touchid_icon_appletv} className="card-img-top" alt="..." />
                                        <p className="card-title">Make purchases
                                            on the Apple TV app </p>


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

export default MagicKeyboardintro;
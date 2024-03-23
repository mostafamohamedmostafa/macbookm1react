import { Link } from "react-router-dom";



function Nav() {

    return (
        <section>
            <div className="Nav ">
            

                <nav className="navbar       navbar-expand-lg bg-body-tertiary ">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">Macbook Air</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse " id="navbarNav">
                            <ul className="navbar-nav ms-auto p-2">
                                <li className="nav-item  active">
                                    <Link className="nav-link  " aria-current="page"  to="OldVersionPage">Old Version Page</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link"  to="NewVersionPage" >New Version Page</Link>
                                </li>
                         
                         
 

 
                            </ul>
                        </div>
                    </div>
                </nav>

            </div>
        </section>

    );
}

export default Nav;
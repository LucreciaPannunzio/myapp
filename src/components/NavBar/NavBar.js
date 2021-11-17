import './NavBar.css'

const NavBar = () => {
    return (
        <nav>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className="nav-link active" aria-current="page" href="#">PIPPERS</a>
                            <a className="nav-link active" aria-current="page" href="#">Pippers Comida Vegana</a>
                            <a className="nav-link active" aria-current="page" href="#">CowyPippers</a>
                            <a className="nav-link active" aria-current="page" href="#">Contacto</a>
                        </div>
                    </div>
                </div>
            </nav>  
        </nav>
    )
}

export default NavBar
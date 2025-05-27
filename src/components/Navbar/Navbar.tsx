import './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo">⭐</div>
            <ul className="menu">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">Sobre mim</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projetos</a></li>
                <li><a href="#contact">Contato</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;
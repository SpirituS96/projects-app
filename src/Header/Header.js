import './Header.css'
import Logo from '../Logo/Logo.js';

export default function Header() {
    return (
        <header className="header">
            <Logo />
            <nav className="header-nav">
                <ul className="nav-list">
                    <li className="nav-item">
                        <a className="nav-link" href="#1">Агенство</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#1">Услуги</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#1">Кейсы</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#1">Блог</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#1">Контакты</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
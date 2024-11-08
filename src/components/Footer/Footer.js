import './Footer.css';
import logo from '../../logo.svg';

export default function Footer() {
    return (
        <div className="footer">
            <div className="footer-logo-container">
                <img src={logo} className="logo" alt="logo" />
                <span>Веб-разработка и усиление IT-команд</span>
            </div>
            <div className="footer-info">
                <span>+7 999 123 45 67</span>
                <span>hello@cyberia.studio</span>
                <span>ул.Ярных, д.35, оф.10</span>
                <span>Агентство</span>
                <span>Услуги</span>
                <span>Кейсы</span>
                <span>Блог</span>
                <span>Контакты</span>
            </div>
        </div>
    )
}
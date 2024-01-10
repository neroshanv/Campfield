import logo from '../assets/investment-calculator-logo.png';

export default function Header() {
    return (
        <header id='Header'>
            <img src={logo} alt='logo showing money bad' />
            <h1>Investment Calculator</h1>
        </header>
    );
};
import goku_fondo from '../../../assets/images/goku_fondo.jpg';
import './header.css';

export function Header() {
  return (
      <header>
    <div className="fondo_goku">
      <img src={ goku_fondo } alt="goku ui"/>
    </div>
  </header>
  );
}

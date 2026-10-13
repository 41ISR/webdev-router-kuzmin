import { Link, NavLink } from "react-router-dom";

export default function Header() {
  function handleSearchKeyDown(e) {
    if (e.key === 'Enter' && e.target.value.trim()) {
      // onSearch(e.target.value.trim());
      e.target.value = '';
    }
  }

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link
          to="/"
          className="brand"
        >
          <div className="brand-mark">t</div>
          <div className="brand-name">Terra</div>
        </Link>

        <nav className="main-nav">
          <NavLink className={'nav-link'} to="/">Главная</NavLink>
          <NavLink className={'nav-link'} to="/catalog">Каталог</NavLink>
          <NavLink className={'nav-link'} to="/about">О нас</NavLink>
          <NavLink className={'nav-link'} to="/contacts">Контакты</NavLink>
        </nav>

        <div className="header-search">
          <input type="text" placeholder="Найти растение..." onKeyDown={handleSearchKeyDown} />
        </div>
      </div>
    </header>
  );
}

function NavItem({ label, page, currentPage, onNavigate }) {
  return (
    <a
      href={'/' + (page === 'home' ? '' : page)}
      className={'nav-link' + (currentPage === page ? ' active' : '')}
      onClick={e => { e.preventDefault(); onNavigate(page); }}
    >
      {label}
    </a>
  );
}

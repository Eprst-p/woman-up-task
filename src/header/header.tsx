import './header.less';

function Header(): JSX.Element {

    return (
        <header className="header">
            <h3 className="header-el header__title">TODO List</h3>
            <h4 className="header-el header__task_list_title">Список запланированных дел</h4>
        </header>
    );
}

export default Header;

import chefClaude from '../assets/chef-claude.svg';

export const Header = () => {
    return (
        <header>
            <nav className="navbar">
                <div className="logo-img">
                    <img src={chefClaude} alt='Chef Claude' className='logo' />
                </div>
                <span className="logo-text">Chef Claude</span>
            </nav>
        </header>
    )
}
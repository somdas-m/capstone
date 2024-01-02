export const Nav = (props) => {
    return <nav>
        <ul>
            <li data-testid="link-home"><a href="/">Home</a></li>
            <li data-testid="link-about"><a href="/about">About</a></li>
            <li data-testid="link-menu"><a href="/menu">Menu</a></li>
            <li data-testid="link-reservations"><a href="/reservations">Reservations</a></li>
            <li data-testid="link-order"><a href="/order">Order Online</a></li>
            <li data-testid="link-login"><a href="/login">Login</a></li>
        </ul>
    </nav>
}
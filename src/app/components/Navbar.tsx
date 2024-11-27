// import styled from 'styled-components';

// const NavbarContainer = styled.nav`
//     display: flex;
//     justify-content: space-between;
//     padding: 1rem 2rem;
//     background: #fff;
//     box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
// `;

const Navbar = () => {
    return (
        // <NavbarContainer>
        <>
            <div>MyCouchStore</div>
            <div>
                <a href="/">Home</a>
                <a href="/products">Products</a>
            </div>
        </>
        // </NavbarContainer>
    );
};

export default Navbar;

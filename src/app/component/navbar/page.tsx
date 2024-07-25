'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Button from '@mui/material/Button';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { styled } from '@mui/material/styles';
import BadgeAvatars from '@/app/profile/page';
import { ModeToggle } from '@/components/page';

const StyledNavbar = styled('div')({
  position: 'fixed',
  top: 0,
  width: '100%',
  height: '100px',
  marginBottom: '80px',
  zIndex: 1000,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '10px 50px',
  backgroundColor: 'white',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  '@media (max-width: 768px)': {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
});

const NavbarLinks = styled('div')({
  display: 'flex',
  gap: '5px',
  '@media (max-width: 768px)': {
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: '100%',
  },
});

const NavLinkButton = styled(Button)({
  textTransform: 'none',
  fontSize: '25px',
  color: '#333333',
  fontWeight: 'bold',
  padding: '8px 16px',
  backgroundColor: 'transparent',
  textDecoration: 'none',
  borderBottom: '1px solid transparent',
  '&:hover': {
    borderBottom: '2px solid #0077cc',
  },
});

const SignInButton = styled(Button)({
  backgroundColor: '#0033FF',
  textTransform: 'none',
  color: 'white',
  fontSize: '25px',
  fontWeight: 'bold',
  padding: '8px 16px',
  borderRadius: '4px',
  '&:hover': {
    backgroundColor: '#0022CC',
  },
});

const WelcomeText = styled('div')({
  fontSize: '1.2rem',
  fontWeight: 'bold',
  color: '#333333',
});

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [userImage, setUserImage] = useState<string | null>(null);
  const [cartCount, setCartCount] = useState<number>(0);

  useEffect(() => {
    const formData = localStorage.getItem('formData');
    if (formData) {
      try {
        const parsedData = JSON.parse(formData);
        setUserEmail(parsedData.email);
        setIsLoggedIn(true);
      } catch (error) {
        console.error('Invalid JSON in localStorage for key "formData":', error);
      }
    }

    const storedImageUrl = localStorage.getItem('urlImage');
    if (storedImageUrl) {
      setUserImage(storedImageUrl);
    }
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setCartCount(JSON.parse(storedCart).length);
    }
  }, []);

  const handleAddToCart = (product: { id: number, name: string, status: string }) => {
    if (product.status !== "Out Of Stock") {
      const storedCart = localStorage.getItem('cart');
      let cart = storedCart ? JSON.parse(storedCart) : [];
      cart.push(product);
      localStorage.setItem('cart', JSON.stringify(cart));
      setCartCount(cart.length);
    }
  };

  return (
    <StyledNavbar>
      {isLoggedIn ? (
<>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <WelcomeText>
              Welcome, {userEmail}
            </WelcomeText>
            {userImage && <BadgeAvatars imageUrl={userImage} />}
          </div>

          <NavbarLinks>
            <Link href="/home" passHref>
              <NavLinkButton>
                Home
              </NavLinkButton>
            </Link>
            <Link href="/productAPI" passHref>
              <NavLinkButton>
                Management Pet
              </NavLinkButton>
            </Link>
            <Link href="/service" passHref>
              <NavLinkButton>
                Service
              </NavLinkButton>
            </Link>
            <Link href="/purchase" passHref>
              <NavLinkButton>
                Purchase
              </NavLinkButton>
            </Link>
            <Link href="/sendEmail" passHref>
              <NavLinkButton>
                Contact us
              </NavLinkButton>
            </Link>
            <Link href="/productCard" passHref style={{marginTop:"20px"}}>
            <Button>
              <Badge badgeContent={cartCount} color="primary">
                <ShoppingCartIcon />
              </Badge>
            </Button>
            </Link>
          </NavbarLinks>
        </>
      ) : (
        <NavbarLinks>
          <Link href="/register" passHref>
            <NavLinkButton variant="contained">
              Sign up
            </NavLinkButton>
          </Link>
          <Link href="/login" passHref>
            <SignInButton variant="contained">
              Sign in
            </SignInButton>
          </Link>
        </NavbarLinks>
      )}
      <NavbarLinks>
        <ModeToggle />
      </NavbarLinks>
    </StyledNavbar>
  );
};

export default Navbar;
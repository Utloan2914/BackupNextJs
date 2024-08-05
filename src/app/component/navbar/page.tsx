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
  backgroundColor: '#062b63',
  '@media (max-width: 768px)': {
    alignItems: 'flex-start',
  },
});

const NavbarLinks = styled('div')({
  display: 'flex',
  justifyContent: 'center',  // Center the links
  alignItems: 'center',
  flex: 1,
  gap: '20px',
  '@media (max-width: 768px)': {
    
    alignItems: 'flex-start',
  },
});

const NavLinkButton = styled(Button)({
  textTransform: 'none',
  fontSize: '25px',
  color: 'white',
  fontWeight: 'bold',
  borderRadius:'0px',
  padding: '8px 10px',
  backgroundColor: 'transparent',
  textDecoration: 'none',
  borderBottom: '1px solid transparent',
  '&:hover': {
    borderBottom: '3px solid white',
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
  marginLeft: '15px',
  '&:hover': {
    backgroundColor: '#0022CC',
  },
});

const Logo= styled('div')({
  width: '200px',
  height: '100%',
  borderRadius: '5px',
  objectFit: 'cover', // Ensures the video fits within the bounds of the logo area
});

const RightSection = styled('div')({
  display: 'flex',
  alignItems: 'center',
  gap: '20px',
  marginLeft:'50px',
});

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [userImage, setUserImage] = useState<string | null>(null);
  const [cartCount, setCartCount] = useState<number>(0);
  const [refreshCount, setRefreshCount] = useState<number>(0);

  useEffect(() => {
    const fetchData = () => {
      const formData = localStorage.getItem('formData');
      if (formData) {
        try {
          const parsedData = JSON.parse(formData);
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
      setTimeout(() => {
        setRefreshCount(prevCount => prevCount + 1);
      }, 500);
    };

    fetchData();
  }, [refreshCount]);

  return (
    <StyledNavbar>
     <Link href="/home" passHref>
     <Logo>
      <img
        src="./img/logo.png"
        alt="Pet Shop Logo"
        style={{ width: '50%', height: '80%', objectFit: 'cover' }} 
      />
    </Logo>

  </Link>
      {isLoggedIn ? (
        <>
          <NavbarLinks>
            <Link href="/home" passHref>
              <NavLinkButton>
                HOME
              </NavLinkButton>
            </Link>
            <Link href="/productAPI" passHref>
              <NavLinkButton>
                MANAGEMENT PET
              </NavLinkButton>
            </Link>
            
            <Link href="/purchase" passHref>
              <NavLinkButton>
                PURCHASE
              </NavLinkButton>
            </Link>
            <Link href="/sendEmail" passHref>
              <NavLinkButton>
                CONTACT US
              </NavLinkButton>
            </Link>
            <Link href="/productCard" passHref>
            <Button>
      <Badge badgeContent={cartCount} color="primary">
      <ShoppingCartIcon
    sx={{
      color: 'white',
      transition: 'color 0.3s',
      '&:hover': {
        color: '#edb03f', 
      },
    }}
  />
      </Badge>
    </Button>
            </Link>
          </NavbarLinks>
          <RightSection>
            <ModeToggle />
            {userImage && <BadgeAvatars imageUrl={userImage} />}
          </RightSection>
        </>
      ) : (
        <RightSection>
          <Link href="/register" passHref>
            <NavLinkButton variant="contained">
              SIGN UP
            </NavLinkButton>
          </Link>
          <Link href="/login" passHref>
            <SignInButton variant="contained">
              SIGN IN
            </SignInButton>
          </Link>
        </RightSection>
      )}
    </StyledNavbar>
  );
};

export default Navbar;

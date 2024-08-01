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
  height: '150px',
  marginBottom: '80px',
  zIndex: 1000,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '10px 50px',
  backgroundColor: '#135ac5',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  '@media (max-width: 768px)': {
    flexDirection: 'column',
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
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
});

const NavLinkButton = styled(Button)({
  textTransform: 'none',
  fontSize: '25px',
  color: 'white',
  fontWeight: 'bold',
  borderRadius:'0px',
  padding: '8px 16px',
  backgroundColor: 'transparent',
  textDecoration: 'none',
  borderBottom: '1px solid transparent',
  '&:hover': {
    borderBottom: '2px solid black',
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

const Logo = styled('video')({
  width: '200px',
  height: '120px',
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
    <Logo autoPlay muted loop >
      <source src="https://cdn.create.vista.com/video-producer-script/3539069e-3803-4ff2-b7c7-058fdd6a8454.mp4" type="video/mp4" />
    </Logo>
  </Link>
      {isLoggedIn ? (
        <>
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
            <Link href="/productCard" passHref>
            <Button>
      <Badge badgeContent={cartCount} color="primary">
      <ShoppingCartIcon
    sx={{
      color: 'white',
      transition: 'color 0.3s',
      '&:hover': {
        color: '#000', // Black on hover
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
              Sign up
            </NavLinkButton>
          </Link>
          <Link href="/login" passHref>
            <SignInButton variant="contained">
              Sign in
            </SignInButton>
          </Link>
        </RightSection>
      )}
    </StyledNavbar>
  );
};

export default Navbar;

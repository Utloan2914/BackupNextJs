import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import LoginIcon from '@mui/icons-material/Login';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import BadgeAvatars from '@/app/profile/page';
import BuildIcon from '@mui/icons-material/Build';
import SendIcon from '@mui/icons-material/Send';
import HomeIcon from '@mui/icons-material/Home';
import { ModeToggle } from '@/components/page'; // assuming this is your custom component for mode toggle

const StyledNavbar = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '15px 30px',
  background: '#6666FF',
  color: 'white',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
});

const NavbarLinks = styled('div')({
  display: 'flex',
  gap: '20px',
});

const NavLinkButton = styled(Button)({
  textTransform: 'none',
  fontSize: '1rem',
  color: 'white',
  fontWeight: 'bold', // Added to make text bold
  padding: '8px 16px', // Corrected padding
  backgroundColor: '#00008B', // Corrected background color property
  borderRadius: '4px', // Corrected border radius property
  '&:hover': {
    backgroundColor: '#0033FF', // Blue color on hover
  },
});

const SignInButton = styled(Button)({
  backgroundColor: '#0033FF',
  textTransform: 'none',
  color: 'white',
  fontSize: '1em',
  fontWeight: 'bold', // Added to make text bold
  padding: '8px 16px', // Corrected padding
  borderRadius: '4px', // Corrected border radius property
  '&:hover': {
    backgroundColor: '#0033FF',
  },
});

const WelcomeText = styled('div')({
  fontSize: '1.2rem',
  fontWeight: 'bold',
});

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [userImage, setUserImage] = useState<string | null>(null);

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
  }, []);

  return (
    <StyledNavbar>
      {userEmail ? (
        <>
          <WelcomeText>Welcome, {userEmail}</WelcomeText>
          <NavbarLinks>
            <Link href="/home" passHref>
              <NavLinkButton startIcon={<HomeIcon />}>
                Home
              </NavLinkButton>
            </Link>
            <Link href="/productAPI" passHref>
              <NavLinkButton startIcon={<BuildIcon />}>
                CRUD product
              </NavLinkButton>
            </Link>
            <Link href="/sendEmail" passHref>
              <NavLinkButton startIcon={<SendIcon />}>
                Contact us
              </NavLinkButton>
            </Link>
          </NavbarLinks>
          {userImage && <BadgeAvatars imageUrl={userImage} />}
        </>
      ) : (
        <NavbarLinks>
          <Link href="/register" passHref>
            <NavLinkButton variant="contained" startIcon={<PersonAddIcon />}>
              Sign up
            </NavLinkButton>
          </Link>
          <Link href="/login" passHref>
            <SignInButton variant="contained" startIcon={<LoginIcon />}>
              Sign in
            </SignInButton>
          </Link>
        </NavbarLinks>
      )}
      <ModeToggle />
    </StyledNavbar>
  );
};

export default Navbar;

'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Button from '@mui/material/Button';
import Badge from '@mui/material/Badge';
import { ShoppingCartIcon } from 'lucide-react';
import { styled } from '@mui/material/styles';
import BadgeAvatars from '@/app/profile/page';
import { ModeToggle } from '@/components/page';
import { useLanguage } from '@/context/languageContext';

const StyledNavbar = styled('div')({
  top: 0,
  width: '100%',
  height: '100px',
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
  justifyContent: 'center',
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
  borderRadius: '0px',
  padding: '8px 10px',
  backgroundColor: 'transparent',
  textDecoration: 'none',
  borderBottom: '1px solid transparent',
  '&:hover': {
    borderBottom: '3px solid white',
  },
});

const SignInUpButton = styled(Button)({
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

const Logo = styled('div')({
  width: '200px',
  height: '100%',
  borderRadius: '5px',
  objectFit: 'cover',
});

const RightSection = styled('div')({
  display: 'flex',
  alignItems: 'center',
  marginRight: '100px',
  gap: '20px',
  justifyContent: 'flex-end',
});

const LanguageSelector = styled('select')({
  backgroundColor: 'transparent',
  color: 'white',
  fontSize: '25px',
  fontWeight: 'bold',
  border: 'none',
  outline: 'none',
});


const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [userImage, setUserImage] = useState<string | null>(null);
  const [cartCount, setCartCount] = useState<number>(0);
  const [refreshCount, setRefreshCount] = useState<number>(0);
  const { language, setLanguage } = useLanguage(); 
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const storedLanguage = localStorage.getItem('language') || 'en';
    setLanguage(storedLanguage);
    setLoading(false);
  }, [setLanguage]);

  useEffect(() => {
    if (!loading) {
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
    }
  }, [refreshCount, loading]);

  const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(event.target.value);
  };

  useEffect(() => {
    if (!loading) { 
      localStorage.setItem('language', language);
    }
  }, [language, loading]);

  if (loading) return null; 

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
      <NavbarLinks>
        <Link href="/home" passHref>
          <NavLinkButton>
            {language === 'en' ? 'HOME' : 'TRANG CHỦ'}
          </NavLinkButton>
        </Link>
        <Link href="/productAPI" passHref>
          <NavLinkButton>
            {language === 'en' ? 'FAVORITE LOVE' : 'THÚ CƯNG YÊU THÍCH'}
          </NavLinkButton>
        </Link>
        <Link href="/purchase" passHref>
          <NavLinkButton>
            {language === 'en' ? 'PURCHASE' : 'MUA HÀNG'}
          </NavLinkButton>
        </Link>
        <Link href="/sendEmail" passHref>
          <NavLinkButton>
            {language === 'en' ? 'CONTACT US' : 'LIÊN HỆ'}
          </NavLinkButton>
        </Link>
        <Link href="/productCard" passHref>
          <Button>
            <Badge badgeContent={cartCount} color="primary">
              <ShoppingCartIcon className="text-white transition-colors duration-300 hover:text-yellow-400" />
            </Badge>
          </Button>
        </Link>
      </NavbarLinks>
      <RightSection>
        {isLoggedIn ? (
          <>
            {userImage && <BadgeAvatars imageUrl={userImage} />}
          </>
        ) : (
          <>
            <Link href="/register" passHref>
              <SignInUpButton variant="contained">
                {language === 'en' ? 'SIGN UP' : 'ĐĂNG KÝ'}
              </SignInUpButton>
            </Link>
            <Link href="/login" passHref>
              <SignInUpButton variant="contained">
                {language === 'en' ? 'SIGN IN' : 'ĐĂNG NHẬP'}
              </SignInUpButton>
            </Link>
          </>
        )}
          <ModeToggle />
        <LanguageSelector value={language} onChange={handleLanguageChange}>
          <option className="text-black hover:text-white font-bold" value="en">
            English
          </option>
          <option className="text-black hover:text-white font-bold" value="vi">
            Tiếng Việt
          </option>
        </LanguageSelector>
      </RightSection>
    </StyledNavbar>
  );
};

export default Navbar;

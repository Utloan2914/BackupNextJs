

// 'use client'
// import React, { useState, useEffect } from 'react';
// import Link from 'next/link';
// import Button from '@mui/material/Button';
// import Badge from '@mui/material/Badge';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import { styled } from '@mui/material/styles';
// import BadgeAvatars from '@/app/profile/page';
// import { ModeToggle } from '@/components/page';

// // Styled components
// const StyledNavbar = styled('div')({
//   top: 0,
//   width: '100%',
//   height: '100px',
//   zIndex: 1000,
//   display: 'flex',
//   justifyContent: 'space-between',
//   alignItems: 'center',
//   padding: '10px 50px',
//   backgroundColor: '#062b63',
//   '@media (max-width: 768px)': {
//     alignItems: 'flex-start',
//   },
// });

// const NavbarLinks = styled('div')({
//   display: 'flex',
//   justifyContent: 'center',
//   alignItems: 'center',
//   flex: 1,
//   gap: '20px',
//   '@media (max-width: 768px)': {
//     alignItems: 'flex-start',
//   },
// });

// const NavLinkButton = styled(Button)({
//   textTransform: 'none',
//   fontSize: '25px',
//   color: 'white',
//   fontWeight: 'bold',
//   borderRadius: '0px',
//   padding: '8px 10px',
//   backgroundColor: 'transparent',
//   textDecoration: 'none',
//   borderBottom: '1px solid transparent',
//   '&:hover': {
//     borderBottom: '3px solid white',
//   },
// });

// const SignInButton = styled(Button)({
//   backgroundColor: '#0033FF',
//   textTransform: 'none',
//   color: 'white',
//   fontSize: '25px',
//   fontWeight: 'bold',
//   padding: '8px 16px',
//   borderRadius: '4px',
//   marginLeft: '15px',
//   '&:hover': {
//     backgroundColor: '#0022CC',
//   },
// });

// const Logo = styled('div')({
//   width: '200px',
//   height: '100%',
//   borderRadius: '5px',
//   objectFit: 'cover',
// });

// const RightSection = styled('div')({
//   display: 'flex',
//   alignItems: 'center',
//   marginRight: '100px',
//   gap: '20px',
//   justifyContent: 'flex-end',
// });

// const LanguageSelector = styled('div')({
//   display: 'flex',
//   alignItems: 'center',
//   gap: '10px',
//   color: 'white',
// });

// const Navbar = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
//   const [userImage, setUserImage] = useState<string | null>(null);
//   const [cartCount, setCartCount] = useState<number>(0);
//   const [refreshCount, setRefreshCount] = useState<number>(0);
//   const [language, setLanguage] = useState<string>('eng');

//   useEffect(() => {
//     const fetchData = () => {
//       const formData = localStorage.getItem('formData');
//       if (formData) {
//         try {
//           const parsedData = JSON.parse(formData);
//           setIsLoggedIn(true);
//         } catch (error) {
//           console.error('Invalid JSON in localStorage for key "formData":', error);
//         }
//       }

//       const storedImageUrl = localStorage.getItem('urlImage');
//       if (storedImageUrl) {
//         setUserImage(storedImageUrl);
//       }
//       const storedCart = localStorage.getItem('cart');
//       if (storedCart) {
//         setCartCount(JSON.parse(storedCart).length);
//       }
//       setTimeout(() => {
//         setRefreshCount(prevCount => prevCount + 1);
//       }, 500);
//     };

//     fetchData();
//   }, [refreshCount]);

//   const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
//     setLanguage(event.target.value);
//     // Here you would typically also handle changing the language of the app
//     // For example, you could call an API or update context/state related to language
//   };

//   return (
//     <StyledNavbar>
//       <Link href="/home" passHref>
//         <Logo>
//           <img
//             src="./img/logo.png"
//             alt="Pet Shop Logo"
//             style={{ width: '50%', height: '80%', objectFit: 'cover' }} 
//           />
//         </Logo>
//       </Link>
//       {isLoggedIn ? (
//         <>
//           <NavbarLinks>
//             <Link href="/home" passHref>
//               <NavLinkButton>
//                 HOME
//               </NavLinkButton>
//             </Link>
//             <Link href="/productAPI" passHref>
//               <NavLinkButton>
//                 MANAGEMENT PET
//               </NavLinkButton>
//             </Link>
//             <Link href="/purchase" passHref>
//               <NavLinkButton>
//                 PURCHASE
//               </NavLinkButton>
//             </Link>
//             <Link href="/sendEmail" passHref>
//               <NavLinkButton>
//                 CONTACT US
//               </NavLinkButton>
//             </Link>
//             <Link href="/productCard" passHref>
//               <Button>
//                 <Badge badgeContent={cartCount} color="primary">
//                   <ShoppingCartIcon
//                     sx={{
//                       color: 'white',
//                       transition: 'color 0.3s',
//                       '&:hover': {
//                         color: '#edb03f', 
//                       },
//                     }}
//                   />
//                 </Badge>
//               </Button>
//             </Link>
//           </NavbarLinks>
//           <RightSection>
//             <ModeToggle /> 
//             {userImage && <BadgeAvatars imageUrl={userImage} />}
//           </RightSection>
//         </>
//       ) : (
//         <div>
//           <Link href="/register" passHref>
//             <NavLinkButton variant="contained">
//               SIGN UP
//             </NavLinkButton>
//           </Link>
//           <Link href="/login" passHref>
//             <SignInButton variant="contained">
//               SIGN IN
//             </SignInButton>
//           </Link>
//         </div>
//       )}
//       <LanguageSelector>
//         <img className="lang-flag" src={`/assets/images/${language}.png`} alt="icon" loading="lazy"/>
//         <select name="lang-switch" value={language} onChange={handleLanguageChange} aria-label="Language Selector">
//           <option value="eng">English</option>
//           <option value="vie">Tiếng Việt</option>
//         </select>
//       </LanguageSelector>
//     </StyledNavbar>
//   );
// };

// export default Navbar;

'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Button from '@mui/material/Button';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { styled } from '@mui/material/styles';
import BadgeAvatars from '@/app/profile/page';
import { ModeToggle } from '@/components/page';

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
  fontSize: '16px',
  border: 'none',
  outline: 'none',
});

interface NavbarProps {
  language: string;
  onLanguageChange: (newLanguage: string) => void;
}

const Navbar = ({ language, onLanguageChange }: NavbarProps) => {
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

  const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onLanguageChange(event.target.value);
  };

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
                {language === 'en' ? 'HOME' : 'TRANG CHỦ'}
              </NavLinkButton>
            </Link>
            <Link href="/productAPI" passHref>
              <NavLinkButton>
                {language === 'en' ? 'MANAGEMENT PET' : 'QUẢN LÝ THÚ CƯNG'}
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
            <LanguageSelector value={language} onChange={handleLanguageChange}>
              <option value="en">English</option>
              <option value="vi">Tiếng Việt</option>
            </LanguageSelector>
          </RightSection>
        </>
      ) : (
        <div>
          <Link href="/register" passHref>
            <NavLinkButton variant="contained">
              {language === 'en' ? 'SIGN UP' : 'ĐĂNG KÝ'}
            </NavLinkButton>
          </Link>
          <Link href="/login" passHref>
            <SignInButton variant="contained">
              {language === 'en' ? 'SIGN IN' : 'ĐĂNG NHẬP'}
            </SignInButton>
          </Link>
        </div>
      )}
    </StyledNavbar>
  );
};

export default Navbar;

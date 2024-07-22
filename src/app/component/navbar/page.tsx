// // 'use client'
// // import React, { useState, useEffect } from 'react';
// // import Link from 'next/link';
// // import { styled } from '@mui/material/styles';
// // import BadgeAvatars from '@/app/profile/page';
// // import { ModeToggle } from '@/components/page'; // assuming this is your custom component for mode toggle

// // const StyledNavbar = styled('div')({
// //   display: 'flex',
// //   justifyContent: 'space-between',
// //   alignItems: 'center',
// //   padding: '10px 30px',
// //   '@media (max-width: 768px)': {
// //     flexDirection: 'column',
// //     alignItems: 'flex-start',
// //   },
// // });

// // const NavbarLinks = styled('div')({
// //   display: 'flex',
// //   gap: '15px',
// //   '@media (max-width: 768px)': {
// //     flexDirection: 'column',
// //     alignItems: 'flex-start',
// //     width: '100%',
// //   },
// // });

// // const NavLink = styled('h2')({
// //   textTransform: 'none',
// //   fontSize: '25px',
// //   fontWeight: 'bold',
// //   padding: '8px 16px',
// //   backgroundColor: 'transparent', // Transparent background
// //   textDecoration: 'none', // No underline
// //   borderBottom: '1px solid transparent', // Invisible border
// //   '&:hover': {
// //     borderBottom: '2px solid #0077cc', // Light blue border on hover
// //     cursor: 'pointer',
// //   },
// //   margin: 0,
// // });

// // const SignInButton = styled('h2')({
// //   backgroundColor: '#0033FF',
// //   textTransform: 'none',
// //   color: 'white',
// //   fontSize: '25px',
// //   fontWeight: 'bold',
// //   padding: '8px 16px',
// //   borderRadius: '4px',
// //   '&:hover': {
// //     backgroundColor: '#0022CC',
// //     cursor: 'pointer',
// //   },
// //   margin: 0,
// // });

// // const WelcomeText = styled('div')({
// //   fontSize: '1.2rem',
// //   fontWeight: 'bold',
  
// // });

// // const Navbar = () => {
// //   const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
// //   const [userEmail, setUserEmail] = useState<string | null>(null);
// //   const [userImage, setUserImage] = useState<string | null>(null);

// //   useEffect(() => {
// //     const formData = localStorage.getItem('formData');
// //     if (formData) {
// //       try {
// //         const parsedData = JSON.parse(formData);
// //         setUserEmail(parsedData.email);
// //         setIsLoggedIn(true);
// //       } catch (error) {
// //         console.error('Invalid JSON in localStorage for key "formData":', error);
// //       }
// //     }

// //     const storedImageUrl = localStorage.getItem('urlImage');
// //     if (storedImageUrl) {
// //       setUserImage(storedImageUrl);
// //     }
// //   }, []);

// //   return (
// //     <StyledNavbar>
// //       {isLoggedIn ? (
// //         <>
// //           <div style={{ display: 'flex', alignItems: 'center' }}>
// //             <WelcomeText>
// //               Welcome, {userEmail}
// //             </WelcomeText>
// //             {userImage && <BadgeAvatars imageUrl={userImage} />}
// //           </div>

// //           <NavbarLinks>
// //             <Link href="/home" passHref>
// //               <NavLink>
// //                 Home
// //               </NavLink>
// //             </Link>
// //             <Link href="/productAPI" passHref>
// //               <NavLink>
// //                 Product
// //               </NavLink>
// //             </Link>
// //             <Link href="/sendEmail" passHref>
// //               <NavLink>
// //                 Contact us
// //               </NavLink>
// //             </Link>
// //           </NavbarLinks>
// //         </>
// //       ) : (
// //         <NavbarLinks>
// //           <Link href="/register" passHref>
// //             <NavLink>
// //               Sign up
// //             </NavLink>
// //           </Link>
// //           <Link href="/login" passHref>
// //             <SignInButton>
// //               Sign in
// //             </SignInButton>
// //           </Link>
// //         </NavbarLinks>

// //       )}
      
// //           <ModeToggle />
       
     
// //     </StyledNavbar>
// //   );
// // };

// // export default Navbar;



// 'use client'
// import React, { useState, useEffect } from 'react';
// import Link from 'next/link';
// import { styled } from '@mui/material/styles';
// import BadgeAvatars from '@/app/profile/page';
// import { ModeToggle } from '@/components/page'; // assuming this is your custom component for mode toggle

// const StyledNavbar = styled('div')({
//   position: 'fixed',
//   top: 0,
//   width: '100%',
//   height:'100px',
//   zIndex: 1000, // Adjust as needed to ensure the navbar is on top of other content
//   display: 'flex',
//   justifyContent: 'space-between',
//   alignItems: 'center',
//   padding: '10px 50px',
//   backgroundColor: 'white', // Ensure the navbar has a background color
//   boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', // Add a subtle shadow for better separation
//   '@media (max-width: 768px)': {
//     flexDirection: 'column',
//     alignItems: 'flex-start',
//   },
// });

// const NavbarLinks = styled('div')({
//   display: 'flex',
//   gap: '15px',
//   '@media (max-width: 768px)': {
//     flexDirection: 'column',
//     alignItems: 'flex-start',
//     width: '100%',
//   },
// });

// const NavLink = styled('h2')({
//   textTransform: 'none',
//   fontSize: '25px',
//   fontWeight: 'bold',
//   padding: '8px 16px',
//   backgroundColor: 'transparent', // Transparent background
//   textDecoration: 'none', // No underline
//   borderBottom: '1px solid transparent', // Invisible border
//   '&:hover': {
//     borderBottom: '2px solid #0077cc', // Light blue border on hover
//     cursor: 'pointer',
//   },
//   margin: 0,
// });

// const SignInButton = styled('h2')({
//   backgroundColor: '#0033FF',
//   textTransform: 'none',
//   color: 'white',
//   fontSize: '25px',
//   fontWeight: 'bold',
//   padding: '8px 16px',
//   borderRadius: '4px',
//   '&:hover': {
//     backgroundColor: '#0022CC',
//     cursor: 'pointer',
//   },
//   margin: 0,
// });

// const WelcomeText = styled('div')({
//   fontSize: '1.2rem',
//   fontWeight: 'bold',
  
// });

// const Navbar = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
//   const [userEmail, setUserEmail] = useState<string | null>(null);
//   const [userImage, setUserImage] = useState<string | null>(null);

//   useEffect(() => {
//     const formData = localStorage.getItem('formData');
//     if (formData) {
//       try {
//         const parsedData = JSON.parse(formData);
//         setUserEmail(parsedData.email);
//         setIsLoggedIn(true);
//       } catch (error) {
//         console.error('Invalid JSON in localStorage for key "formData":', error);
//       }
//     }

//     const storedImageUrl = localStorage.getItem('urlImage');
//     if (storedImageUrl) {
//       setUserImage(storedImageUrl);
//     }
//   }, []);

//   return (
//     <StyledNavbar>
//       {isLoggedIn ? (
//         <>
//           <div style={{ display: 'flex', alignItems: 'center' }}>
//             <WelcomeText>
//               Welcome, {userEmail}
//             </WelcomeText>
//             {userImage && <BadgeAvatars imageUrl={userImage} />}
//           </div>

//           <NavbarLinks>
//             <Link href="/home" passHref>
//               <NavLink>
//                 Home
//               </NavLink>
//             </Link>
//             <Link href="/productAPI" passHref>
//               <NavLink>
//                 Product
//               </NavLink>
//             </Link>
//             <Link href="/sendEmail" passHref>
//               <NavLink>
//                 Contact us
//               </NavLink>
//             </Link>
//           </NavbarLinks>
//         </>
//       ) : (
//         <NavbarLinks>
//           <Link href="/register" passHref>
//             <NavLink>
//               Sign up
//             </NavLink>
//           </Link>
//           <Link href="/login" passHref>
//             <SignInButton>
//               Sign in
//             </SignInButton>
//           </Link>
//         </NavbarLinks>
//       )}
      
//       <ModeToggle />
//     </StyledNavbar>
//   );
// };

// export default Navbar;


'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import BadgeAvatars from '@/app/profile/page';
import { ModeToggle } from '@/components/page'; // assuming this is your custom component for mode toggle


const StyledNavbar = styled('div')({
  position: 'fixed',
  top: 0,
  width: '100%',
  height:'100px',
  marginBottom:'80px',
  zIndex: 1000, // Adjust as needed to ensure the navbar is on top of other content
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '10px 50px',
  backgroundColor: 'white', // Ensure the navbar has a background color
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', // Add a subtle shadow for better separation
  '@media (max-width: 768px)': {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
});
const NavbarLinks = styled('div')({
  display: 'flex',
  gap: '15px',
  '@media (max-width: 768px)': {
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: '100%',
  },
});

const NavLinkButton = styled(Button)({
  textTransform: 'none',
  fontSize: '25px',
  color: '#333333', // Dark text color
  fontWeight: 'bold',
  padding: '8px 16px',
  backgroundColor: 'transparent', // Transparent background
  textDecoration: 'none', // No underline
  borderBottom: '1px solid transparent', // Invisible border
  '&:hover': {
    borderBottom: '2px solid #0077cc', // Light blue border on hover
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
            <Link href="/sendEmail" passHref>
              <NavLinkButton>
                Contact us
              </NavLinkButton>
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
      <ModeToggle />
    </StyledNavbar>
  );
};

export default Navbar;
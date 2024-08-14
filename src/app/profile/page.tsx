
'use client'
import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { Menu, MenuItem, IconButton, ListItemIcon, ListItemText } from '@mui/material';
import Link from 'next/link';
import LogoutIcon from '@mui/icons-material/Logout';
import PersonIcon from '@mui/icons-material/Person';
import { useLanguage } from '@/context/languageContext';
const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}));

const SmallAvatar = styled(Avatar)(({ theme }) => ({
  width: 22,
  height: 22,
  border: `2px solid ${theme.palette.background.paper}`,
}));

interface BadgeAvatarsProps {
  imageUrl: string;
}

const BadgeAvatars: React.FC<BadgeAvatarsProps> = ({ imageUrl }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [avatarUrl, setAvatarUrl] = useState<string | null>(null);
  const { language } = useLanguage();
  useEffect(() => {
    const storedImageUrl = localStorage.getItem('urlImage');
    if (storedImageUrl) {
      setAvatarUrl(storedImageUrl);
    } else {
      setAvatarUrl(imageUrl);
    }
  }, [imageUrl]);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLogout = () => {
    localStorage.removeItem('formData'); 
    window.location.href = "/login"
  };

  const open = Boolean(anchorEl);

  return (
    <Stack direction="row" spacing={4}>
      <IconButton onClick={handleClick} size="small">
        <StyledBadge
          overlap="circular"
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          variant="dot"
        >
          <Avatar alt="User Image" src={avatarUrl || imageUrl} />
        </StyledBadge>
      </IconButton>
      <Menu
  anchorEl={anchorEl}
  open={open}
  onClose={handleClose}
  anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
  transformOrigin={{ vertical: 'top', horizontal: 'left' }}
  PaperProps={{
    sx: {
      width: '200px',
      marginLeft: '50px',
      boxShadow: 'none', 
      
    },
  }}
>
        <Link href="/viewProfile" passHref>
          <MenuItem  className="hover:bg-gray-200" onClick={handleClose}>
            <ListItemIcon>
              <PersonIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText
  primaryTypographyProps={{
    sx: {
      fontSize: 20,
    },
  }}
>
  {language === 'en' ? 'View Profile' : 'Xem thông tin'}
</ListItemText>
          </MenuItem>
        </Link>
        
        <Link href="/login" passHref>
          <MenuItem className="hover:bg-gray-200" onClick={() => { handleLogout(); handleClose(); }}>
            <ListItemIcon>
              <LogoutIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText primaryTypographyProps={{ style: { fontSize: 20 } }}>{language === 'en' ? 'Logout' : 'Đăng xuất'}</ListItemText>
          </MenuItem>
        </Link>
        
      </Menu>
    </Stack>
  );
};

export default BadgeAvatars;
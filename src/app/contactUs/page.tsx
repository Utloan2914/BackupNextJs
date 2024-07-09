import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import { Button, Container, Typography, Box, CircularProgress } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

const SendEmail: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      setLoading(true);

      const toInput = document.createElement('input');
      toInput.setAttribute('type', 'hidden');
      toInput.setAttribute('name', 'to');
      toInput.setAttribute('value', 'tonhuoctong@gmail.com');
      form.current.appendChild(toInput);

      emailjs.sendForm('service_y2bvsbg', 'template_1g7nav5', form.current, 'hXi5QM6kiYcFjgTfI')
        .then(
          (result) => {
            console.log('SUCCESS!', result.text);
            setStatus('Email sent successfully!');
            clearForm();
          },
          (error) => {
            console.error('FAILED...', error);
            setStatus(`Failed to send email: ${error.text || 'No error text available'}. Please try again later.`);
          }
        ).catch((err) => {
          console.error('Error:', err);
          setStatus('An error occurred. Please try again later.');
        }).finally(() => {
          setLoading(false);
          if (form.current) {
            form.current.removeChild(toInput);
          }
        });
    } else {
      console.error('Form reference is null');
    }
  };

  const clearForm = () => {
    if (form.current) {
      form.current.reset();
    }
  };

  return (
    <Container>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          gap: { xs: 2, md: 5 },
          mt: 5,
          ml: 'auto',
          mr: 'auto',
          p: 3,
          border: '2px solid #ccc',
          borderRadius: 6,
          boxShadow: 3,
          bgcolor: '#545ff6',
          maxWidth: '100%',
        }}
      >
        <Box sx={{ flex: 1 }}>
          <Typography variant="h4" component="h4" gutterBottom align="center">
            INFO
          </Typography>
          <Typography variant="body1" gutterBottom>
            We are very approachable and would love to speak to you. Feel free to call, send us an email or simply complete the enquiry form.
          </Typography>
          <Typography variant="body1" gutterBottom>
            <strong>Phone:</strong> 0877777584
          </Typography>
          <Typography variant="body1" gutterBottom>
            <strong>Email:</strong> loan@gmail.com
          </Typography>
          <Typography variant="body1" gutterBottom>
            <strong>Facebook:</strong> facebook.com/himynameisLoan
          </Typography>
        </Box>
        <Box sx={{ flex: 1 }}>
          <Typography variant="h4" component="h4" gutterBottom align="center">
            Contact Us
          </Typography>
          <Box
            component="form"
            ref={form}
            onSubmit={sendEmail}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
            }}
          >
            <div className="name-field" style={{ marginBottom: 16 }}>
              <label htmlFor="user_name">Name</label>
              <input
                id="user_name"
                name="user_name"
                required
                style={{ width: '100%', padding: 8, border: '1px solid #ccc', borderRadius: 4,  backgroundColor: '#f4eeee' }}
              />
            </div>
            <div className="email-field" style={{ marginBottom: 16 }}>
              <label htmlFor="user_email">Email</label>
              <input
                type="email"
                id="user_email"
                name="user_email"
                required
                style={{ width: '100%', padding: 8, border: '1px solid #ccc', borderRadius: 4 ,  backgroundColor: '#f4eeee'}}
              />
            </div>
            <div className="message-field" style={{ marginBottom: 16 }}>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                style={{ width: '100%', padding: 8, border: '1px solid #ccc', borderRadius: 4, backgroundColor: '#f4eeee', color:'black'}}
              />
            </div>
            <Button
              className="send-button"
              type="submit"
              variant="contained"
              color="primary"
              disabled={loading}
              sx={{
                mb: 2,
                ml: 'auto',
                mr: 'auto',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '8px 16px',
                width: 'fit-content',
              }}
            >
              {!loading && <SendIcon sx={{ marginRight: '6px' }} />}  
              Send  
              {loading && <CircularProgress size={24} />}  
            </Button>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default SendEmail;

import React, { useRef, useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import { Button, CircularProgress, TextField, Alert } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

const SendEmail: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (status) {
      const timer = setTimeout(() => {
        setStatus('');
      }, 15000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      setLoading(true);

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
    <section style={{marginTop:"100px", marginBottom:"100px"}} className=" h-[calc(100vh-20vh)] w-full" id="contact">

      <div className="mx-auto mb-3 max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20 rounded-[3px]">
        <div className="mb-3 max-w-3xl text-center sm:text-center md:mx-auto md:mb-12">
          <h3 className="text-base font-semibold uppercase tracking-wide">
            Contact
          </h3>
          <h2 className="font-heading mb-4 font-bold tracking-tight  text-4xl sm:text-5xl">
            Get in Touch
          </h2>
          <h3 className="mx-auto mt-4 max-w-3xl text-xl  mb-8">
            We look forward to hearing from you
          </h3>
        </div>

        <div className="flex items-stretch justify-center">
          <div className="grid md:grid-cols-2">
            <div className="h-full pr-3">
              <p className="mt-3 mb-12 text-lg ">
                We welcome your inquiries and feedback.
              </p>
              <ul className="mb-6 md:mb-0">
                <li className="flex">
                  <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-600 transition">
                    <HomeIcon className="text-white" />
                  </div>
                  <div className="ml-4 mb-4">
                    <h3 className="mb-2 text-lg font-medium leading-6 ">Our Address</h3>
                    <p className="">99 To Hien Thanh, Son Tra district, Da Nang city</p>
                    <p className="">Quang Nam, Viet Nam</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-600 transition">
                    <PhoneIcon className="text-white" />
                  </div>
                  <div className="ml-4 mb-4">
                    <h3 className="mb-2 text-lg font-medium leading-6 ">Contact</h3>
                    <p className="">Mobile: +84 878138854</p>
                    <p className="">Mail: loan@gmail.com</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-600 transition">
                    <EmailIcon className="text-white" />
                  </div>
                  <div className="ml-4 mb-4">
                    <h3 className="mb-2 text-lg font-medium leading-6 ">Working Hours</h3>
                    <p className="">Monday - Friday: 08:00 - 17:00</p>
                    <p className="">Saturday & Sunday: 08:00 - 12:00</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className=" card h-fit max-w-6xl p-5 md:p-12 shadow-lg rounded-lg" id="form">
              <h2 className="mb-6 text-3xl font-bold text-black text-center">Ready to Get Started?</h2>
              <form ref={form} onSubmit={sendEmail} className="space-y-10 ">
              <div className="mb-6">
  <TextField
    id="name"
    label="Your Name"
    variant="outlined"
    fullWidth
    name="name"
    style={{ marginBottom: '15px' }}
  />
  <TextField
    id="email"
    label="Your Email Address"
    variant="outlined"
    fullWidth
    name="email"
    style={{ marginBottom: '15px' }}
  />
  <TextField
    id="message"
    label="Write Your Message..."
    variant="outlined"
    fullWidth
    multiline
    rows={3}
    name="message"
  />
</div>

                <div className="text-center">
                  <Button
                    type="submit"
                    variant="contained"
                    className="w-full bg-blue-800 text-white px-6 py-3 font-xl rounded-md sm:mb-0"
                    disabled={loading}
                    style={{ fontSize: '1.1rem' }}
                  >
                    {loading ? <CircularProgress size={24} style={{ color: 'white' }} /> : 'Send Message'}
                  </Button>
                </div>
                {status && (
                  <Alert severity={status.includes('Failed') ? 'error' : 'success'} className="mt-6">{status}</Alert>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SendEmail;

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
    <section className="mt-20 bg-white dark:bg-slate-800 border rounded-[10px] border-gray-300 dark:border-gray-700" id="contact">
<div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20 rounded-[3px]">

      <div className="mb-4">
        <div className="mb-6 max-w-3xl text-center sm:text-center md:mx-auto md:mb-12">
          <p className="text-base font-semibold uppercase tracking-wide text-black">
            Contact
          </p>
          <h2 className="font-heading mb-4 font-bold tracking-tight text-black text-3xl sm:text-5xl">
            Get in Touch
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-xl text-black">
            We look forward to hearing from you
          </p>
        </div>
      </div>
      <div className="flex items-stretch justify-center">
        <div className="grid md:grid-cols-2">
          <div className="h-full pr-6">
            <p className="mt-3 mb-12 text-lg text-black">
              We welcome your inquiries and feedback.
            </p>
              <ul className="mb-6 md:mb-0">
                <li className="flex">
                  <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-500 hover:bg-blue-600 transition">
                    <HomeIcon className="text-white" />
                  </div>
                  <div className="ml-4 mb-4">
                    <h3 className="mb-2 text-lg font-medium leading-6 text-black">Our Address</h3>
                    <p className=" text-black">99 To Hien Thanh, Son Tra dictrict, Da Nang city</p>
                    <p className=" text-black">Quang Nam, Viet Nam</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-500 hover:bg-blue-600 transition">
                    <PhoneIcon className="text-white" />
                  </div>
                  <div className="ml-4 mb-4">
                    <h3 className="mb-2 text-lg font-medium leading-6 text-black">Contact</h3>
                    <p className=" text-black">Mobile: +84 878138854</p>
                    <p className=" text-black">Mail: loan@gmail.com</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-500 hover:bg-blue-600 transition">
                    <EmailIcon className="text-white" />
                  </div>
                  <div className="ml-4 mb-4">
                    <h3 className="mb-2 text-lg font-medium leading-6 text-black">Working Hours</h3>
                    <p className=" text-black">Monday - Friday: 08:00 - 17:00</p>
                    <p className=" text-black">Saturday & Sunday: 08:00 - 12:00</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 card h-fit max-w-6xl p-5 md:p-12 shadow-lg rounded-lg" id="form">
              <h2 className="mb-6 text-3xl font-bold text-white text-center">Ready to Get Started?</h2>
              <form ref={form} onSubmit={sendEmail} className="space-y-6 ">
                <div className="space-y-4">
                  <div >
                    <TextField
                      required
                      id="name"
                      name="name"
                      label="Your Name"
                      variant="outlined"
                      multiline
                      rows={1}
                      fullWidth
                      margin="normal"
                      InputProps={{
                        style: { borderRadius: '8px', backgroundColor: '#fff' }
                      }}
                    />
                  </div>
                  <div>
                    <TextField
                      required
                      id="email"
                      name="email"
                      label="Your Email Address"
                      variant="outlined"
                      multiline
                      rows={1}
                      fullWidth
                      margin="normal"
                      InputProps={{
                        style: { borderRadius: '8px', backgroundColor: '#fff' }
                      }}
                    />
                  </div>
                  <div>
                    <TextField
                      id="textarea"
                      name="message"
                      label="Write your message..."
                      variant="outlined"
                      multiline
                      rows={5}
                      fullWidth
                      margin="normal"
                      InputProps={{
                        style: { borderRadius: '8px', backgroundColor: '#fff' }
                      }}
                    />
                  </div>
                </div>
                <div className="text-center">
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    className="w-full py-3 rounded-md"
                    disabled={loading}
                    style={{ fontSize: '1.1rem', backgroundColor: '#1e40af', color: 'white' }}
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

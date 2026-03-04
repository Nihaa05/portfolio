import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Box, Container, Typography, Grid, Paper, TextField, Button, Alert } from '@mui/material';
import { Email, Phone, LocationOn, Send, GitHub, LinkedIn, Twitter, Instagram } from '@mui/icons-material';
import { SiMedium } from 'react-icons/si';
import { toast } from 'react-toastify';
import axios from 'axios';

const Contact = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [loader, setLoader] = useState(false);

  const validateForm = () => {
    if (!firstName) return 'First name is required';
    if (!lastName) return 'Last name is required';
    if (!email) return 'Email is required';
    if (!message) return 'Message is required';
    return null;
  };

  const handleSendEmail = (e) => {
    e.preventDefault();
    setLoader(true);
    const error = validateForm();
    if (!error) {
      const data = {
        firstName,
        lastName,
        email,
        phone,
        message,
      };
      sendEmail(data);
    } else {
      setLoader(false);
      toast.error(error, { position: 'top-right' });
    }
  };

  const sendEmail = (body) => {
    const data = {
      service_id: 'service_h0h0xie',
      template_id: 'template_kv6hu0t',
      user_id: 'user_UrSzNfk0Txv33rqJCC7uC',
      template_params: {
        to_address: 'niharikapendem99@gmail.com',
        message: body.message,
        to_name: 'Niharika',
        from_name: `${body.firstName} ${body.lastName}`,
        cc_address: body.email,
        phone: body.phone,
      },
    };
    axios({
      method: 'post',
      url: 'https://api.emailjs.com/api/v1.0/email/send',
      data: data,
    })
      .then(() => {
        toast.success('Thanks for reaching out!', {
          position: 'top-right',
        });
        setFirstName('');
        setLastName('');
        setEmail('');
        setPhone('');
        setMessage('');
      })
      .catch(() => {
        toast.error('Mailing servers are down. Please call or send us an email directly!', {
          position: 'top-right',
        });
      })
      .finally(() => setLoader(false));
  };

  const contactInfo = [
    {
      icon: <Email />,
      title: 'Email',
      value: 'niharikapendem99@gmail.com',
      link: 'mailto:niharikapendem99@gmail.com',
    },
    {
      icon: <Phone />,
      title: 'Phone',
      value: '+1 3616881729',
      link: 'tel:+13616881729',
    },
    {
      icon: <LocationOn />,
      title: 'Location',
      value: 'Carson City, NV, United States',
      link: null,
    },
  ];

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: <LinkedIn />,
      url: 'https://www.linkedin.com/in/niharika-pendem/',
      color: '#0077b5',
    },
    {
      name: 'Instagram',
      icon: <Instagram />,
      url: 'https://www.instagram.com/',
      color: '#E1306C',
    },
  ];

  return (
    <Box
      component="section"
      id="contact"
      sx={{
        py: { xs: 8, md: 12 },
        background: 'var(--bg-secondary)',
      }}
    >
      <Container maxWidth="lg">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Box sx={{ display: 'flex', justifyContent: 'center', mb: { xs: 6, md: 10 }, flexDirection: 'column', alignItems: 'center' }}>
            <Typography
              variant="h2"
              sx={{
                fontFamily: 'var(--font-display)',
                fontSize: { xs: '2rem', md: '3rem' },
                fontWeight: 700,
                mb: 2,
                color: 'var(--text-primary)',
                textAlign: 'center',
              }}
            >
              Get In Touch
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: '1.125rem',
                color: 'var(--text-secondary)',
                maxWidth: '600px',
                mx: 'auto',
                lineHeight: 1.7,
              }}
            >
              Open to Data Analytics and Data Engineering opportunities. If you're solving complex problems with data, I'd welcome the conversation.
            </Typography>
          </Box>
        </motion.div>

        <Grid container spacing={6}>
          {/* Contact Information */}
          <Grid item xs={12} md={5}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Typography
                variant="h4"
                sx={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 600,
                  mb: 4,
                  color: 'var(--text-primary)',
                  textAlign: 'left',
                }}
              >
                Let's Connect
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  fontSize: '1.125rem',
                  color: 'var(--text-secondary)',
                  mb: 4,
                  lineHeight: 1.7,
                  textAlign: 'left',
                }}
              >
                Prefer email? Reach me directly at{' '}
                <a
                  href="mailto:niharikapendem99@gmail.com"
                  style={{
                    color: 'var(--primary)',
                    textDecoration: 'none',
                    fontWeight: 600,
                  }}
                >
                  niharikapendem99@gmail.com
                </a>
              </Typography>

              {/* Contact Info Cards */}
              <Box sx={{ mb: 4 }}>
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Paper
                      elevation={2}
                      sx={{
                        p: 3,
                        mb: 2,
                        borderRadius: 'var(--border-radius)',
                        border: '1px solid var(--border)',
                        transition: 'var(--transition)',
                        '&:hover': {
                          transform: 'translateY(-2px)',
                          boxShadow: 'var(--shadow-lg)',
                        },
                      }}
                    >
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Box
                          sx={{
                            width: 50,
                            height: 50,
                            borderRadius: '50%',
                            backgroundColor: 'var(--primary)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'white',
                            mr: 2,
                          }}
                        >
                          {info.icon}
                        </Box>
                        <Box>
                          <Typography
                            variant="h6"
                            sx={{
                              fontWeight: 600,
                              color: 'var(--text-primary)',
                              mb: 0.5,
                              textAlign: 'left',
                            }}
                          >
                            {info.title}
                          </Typography>
                          {info.link ? (
                            <a
                              href={info.link}
                              style={{
                                color: 'var(--text-secondary)',
                                textDecoration: 'none',
                                '&:hover': {
                                  color: 'var(--primary)',
                                },
                              }}
                            >
                              {info.value}
                            </a>
                          ) : (
                            <Typography
                              variant="body2"
                              sx={{ color: 'var(--text-secondary)' }}
                            >
                              {info.value}
                            </Typography>
                          )}
                        </Box>
                      </Box>
                    </Paper>
                  </motion.div>
                ))}
              </Box>

              {/* Social Links */}
              <Box>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 600,
                    mb: 2,
                    color: 'var(--text-primary)',
                    textAlign: 'left',
                  }}
                >
                  Follow me on social media
                </Typography>
                <Box sx={{ display: 'flex', gap: 2 }}>
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -3 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Box
                        sx={{
                          width: 50,
                          height: 50,
                          borderRadius: '50%',
                          backgroundColor: 'var(--bg-primary)',
                          border: '1px solid var(--border)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: 'var(--text-secondary)',
                          transition: 'var(--transition)',
                          '&:hover': {
                            backgroundColor: social.color,
                            color: 'white',
                            borderColor: social.color,
                          },
                        }}
                      >
                        {social.icon}
                      </Box>
                    </motion.a>
                  ))}
                </Box>
              </Box>
            </motion.div>
          </Grid>

          {/* Contact Form */}
          <Grid item xs={12} md={7}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Paper
                elevation={2}
                sx={{
                  p: 4,
                  borderRadius: 'var(--border-radius)',
                  border: '1px solid var(--border)',
                  background: 'var(--bg-primary)',
                }}
              >
                <Typography variant="h4" sx={{ fontWeight: 600, mb: 3, color: 'var(--text-primary)', textAlign: 'left' }}>
                  Contact Form
                </Typography>
                <form onSubmit={handleSendEmail}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        label="First Name"
                        value={firstName}
                        onChange={e => setFirstName(e.target.value)}
                        fullWidth
                        required
                        variant="outlined"
                        margin="normal"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        label="Last Name"
                        value={lastName}
                        onChange={e => setLastName(e.target.value)}
                        fullWidth
                        required
                        variant="outlined"
                        margin="normal"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        label="Email"
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        fullWidth
                        required
                        variant="outlined"
                        margin="normal"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        label="Phone"
                        value={phone}
                        onChange={e => setPhone(e.target.value)}
                        fullWidth
                        variant="outlined"
                        margin="normal"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        label="Message"
                        value={message}
                        onChange={e => setMessage(e.target.value)}
                        fullWidth
                        required
                        multiline
                        minRows={4}
                        variant="outlined"
                        margin="normal"
                      />
                    </Grid>
                  </Grid>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    disabled={loader}
                    sx={{ mt: 2, minWidth: 120, display: 'block', marginRight: 'auto' }}
                  >
                    {loader ? 'Sending...' : 'Send'}
                  </Button>
                </form>
              </Paper>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact; 
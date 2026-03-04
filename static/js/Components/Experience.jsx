import React from 'react';
import { motion } from 'framer-motion';
import { Box, Container, Typography, Grid, Paper, Chip, Avatar } from '@mui/material';
import { Work, CalendarToday, LocationOn, Business } from '@mui/icons-material';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      company: "State of Nevada",
      position: "Application Developer",
      duration: "Aug 2025 – Present",
      location: "Carson City, NV",
      description: "Developed automated workflows and apps with Power Automate, Power Apps, SharePoint, and Forms, cutting manual effort 40%+. Enhanced Microsoft 365 operations by administering Teams, Outlook, and SharePoint. Built cloud-ready solutions on Azure using Functions, Logic Apps, App Service, and CI/CD.",
      technologies: ["Power Automate", "Power Apps", "SharePoint", "Azure", "CI/CD", "Logic Apps"],
      logo: null,
      featured: true
    },
    {
      id: 2,
      company: "Texas A&M University",
      position: "Programmer Analyst- Graduate Assistant",
      duration: "May 2024 – May 2025",
      location: "Corpus Christi, TX",
      description: "Automated data processing workflows using Python, SQL, and Apache Airflow. Optimized and maintained ETL pipelines using AWS S3, Snowflake, and Power BI. Designed and implemented interactive dashboards using Power BI, Tableau, and AWS QuickSight.",
      technologies: ["Python", "SQL", "Apache Airflow", "AWS S3", "Snowflake", "Power BI", "Tableau"],
      logo: null,
      featured: false
    },
    {
      id: 3,
      company: "Accenture plc",
      position: "Application Development Analyst",
      duration: "Jul 2021 – Jul 2023",
      location: "Hyderabad, India",
      description: "Accelerated ETL throughput by 30% using Apache Spark, PySpark, and Azure Data Factory. Boosted application responsiveness by 25–40% using Spring Boot and AngularJS. Raised code reliability by 45% with automated test suites. Reduced manual operational effort by 60% in Documentum.",
      technologies: ["Apache Spark", "PySpark", "Azure Data Factory", "Spring Boot", "AngularJS", "Selenium"],
      logo: null,
      featured: false
    }
  ];

  return (
    <Box
      component="section"
      id="experience"
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
          <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 10 }, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
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
              Professional Experience
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: '1.125rem',
                color: 'var(--text-secondary)',
                maxWidth: '600px',
                mx: 'auto',
                lineHeight: 1.7,
                textAlign: 'center',
              }}
            >
              Driving business growth through scalable data solutions, predictive analytics, and automated pipelines across finance, healthcare, and enterprise sectors.
            </Typography>
          </Box>
        </motion.div>

        {/* Experience Cards */}
        <Grid container spacing={4} alignItems="stretch">
          {experiences.map((experience, index) => (
            <Grid item xs={12} md={6} lg={4} key={experience.id} style={{ display: 'flex' }}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                style={{ flex: 1, display: 'flex' }}
              >
                <Paper
                  elevation={experience.featured ? 8 : 2}
                  sx={{
                    p: 4,
                    minHeight: 380, // Increased height to accommodate content
                    display: 'flex',
                    flex: 1,
                    flexDirection: 'column',
                    borderRadius: 'var(--border-radius)',
                    border: '1px solid var(--border)',
                    background: experience.featured
                      ? 'linear-gradient(135deg, var(--bg-primary) 0%, var(--bg-secondary) 100%)'
                      : 'var(--bg-primary)',
                    position: 'relative',
                    overflow: 'hidden',
                    transition: 'var(--transition)',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: 'var(--shadow-xl)',
                    },
                    ...(experience.featured && {
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        height: '4px',
                        background: 'linear-gradient(90deg, var(--primary) 0%, var(--secondary) 100%)',
                      },
                    }),
                  }}
                >
                  {/* Company Logo, Title, etc. */}
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    <Avatar
                      sx={{
                        width: 60,
                        height: 60,
                        mr: 2,
                        border: '2px solid var(--border)',
                        bgcolor: 'var(--primary)',
                      }}
                    >
                      <Business />
                    </Avatar>
                    <Box>
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 700,
                          color: 'var(--text-primary)',
                          mb: 0.5,
                          maxWidth: 200,
                          display: 'block',
                          lineHeight: 1.2,
                        }}
                      >
                        {experience.company}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: 'var(--primary)',
                          fontWeight: 600,
                        }}
                      >
                        {experience.position}
                      </Typography>
                    </Box>
                  </Box>

                  {/* Duration and Location */}
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 3, gap: 2, flexWrap: 'wrap' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                      <CalendarToday sx={{ fontSize: 16, color: 'var(--text-muted)' }} />
                      <Typography
                        variant="body2"
                        sx={{ color: 'var(--text-muted)', fontWeight: 500 }}
                      >
                        {experience.duration}
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                      <LocationOn sx={{ fontSize: 16, color: 'var(--text-muted)' }} />
                      <Typography
                        variant="body2"
                        sx={{ color: 'var(--text-muted)', fontWeight: 500 }}
                      >
                        {experience.location}
                      </Typography>
                    </Box>
                  </Box>

                  {/* Description */}
                  <Typography
                    variant="body1"
                    sx={{
                      color: 'var(--text-secondary)',
                      mb: 3,
                      lineHeight: 1.6,
                      fontSize: '0.95rem',
                      textAlign: 'left',
                    }}
                  >
                    {experience.description}
                  </Typography>

                  {/* Technologies */}
                  <Box sx={{ mt: 'auto' }}>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                      {experience.technologies.map((tech) => (
                        <Chip
                          key={tech}
                          label={tech}
                          size="small"
                          sx={{
                            backgroundColor: 'var(--bg-secondary)',
                            color: 'var(--text-primary)',
                            border: '1px solid var(--border)',
                            fontWeight: 500,
                            fontSize: '0.75rem',
                          }}
                        />
                      ))}
                    </Box>
                  </Box>

                  {/* Featured Badge */}
                  {experience.featured && (
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 16,
                        right: 16,
                        backgroundColor: 'var(--primary)',
                        color: 'white',
                        px: 1.5,
                        py: 0.5,
                        borderRadius: 'var(--border-radius-sm)',
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px',
                      }}
                    >
                      Latest
                    </Box>
                  )}
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Experience; 
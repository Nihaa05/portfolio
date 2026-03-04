import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Box, Container, Typography, Grid, Paper, Chip, IconButton, Dialog, DialogContent, DialogTitle } from '@mui/material';
import {
  Security,
  LocationOn,
  Code,
  ShoppingCart,
  Psychology,
  Storage,
  GitHub,
  Launch,
  Close,
  SmartToy,
  LocalHospital,
  EditNote,
  TrendingUp,
  CreditCard,
  Equalizer
} from '@mui/icons-material';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [isDark, setIsDark] = useState(false);

  // Detect theme from portfolio7-wrapper
  useEffect(() => {
    const checkTheme = () => {
      const wrapper = document.querySelector('.portfolio7-wrapper');
      if (wrapper) {
        const theme = wrapper.getAttribute('data-theme');
        setIsDark(theme === 'dark');

        // Update CSS variables for Dialog
        const root = document.documentElement;
        if (theme === 'dark') {
          root.style.setProperty('--portfolio7-bg-primary', '#0f172a');
          root.style.setProperty('--portfolio7-bg-secondary', '#1e293b');
          root.style.setProperty('--portfolio7-text-primary', '#f8fafc');
          root.style.setProperty('--portfolio7-text-secondary', '#cbd5e1');
          root.style.setProperty('--portfolio7-text-muted', '#94a3b8');
          root.style.setProperty('--portfolio7-border', '#334155');
        } else {
          root.style.setProperty('--portfolio7-bg-primary', '#fff');
          root.style.setProperty('--portfolio7-bg-secondary', '#f8fafc');
          root.style.setProperty('--portfolio7-text-primary', '#0f172a');
          root.style.setProperty('--portfolio7-text-secondary', '#475569');
          root.style.setProperty('--portfolio7-text-muted', '#64748b');
          root.style.setProperty('--portfolio7-border', '#e2e8f0');
        }
      }
    };

    checkTheme();

    // Watch for theme changes
    const observer = new MutationObserver(checkTheme);
    const wrapper = document.querySelector('.portfolio7-wrapper');
    if (wrapper) {
      observer.observe(wrapper, { attributes: true, attributeFilter: ['data-theme'] });
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      id: 1,
      title: "YouTube Trending Data Analytics Pipeline using AWS",
      subtitle: "Viral Trends Analysis",
      description: "Built an end-to-end AWS data pipeline to automate ingestion, ETL, querying, and visualization of YouTube trending video data.",
      fullDescription: `Built an end-to-end AWS data pipeline (S3, Glue, Lambda, Athena, QuickSight) to automate ingestion, ETL, querying, and visualization of YouTube trending video data, enabling analysis of engagement, category trends, and regional popularity.`,
      technologies: ["AWS S3", "AWS Glue", "AWS Lambda", "Athena", "QuickSight", "Python"],
      icon: <TrendingUp />,
      color: "#FF0000",
      gradient: "linear-gradient(135deg, #FF0000 0%, #CC0000 100%)",
      features: [
        "Automated Data Ingestion",
        "Serverless ETL",
        "Interactive Dashboards",
        "Trend Analysis"
      ],
      period: "Sep 2024– Oct 2024",
      institution: "Project"
    },
    {
      id: 2,
      title: "Amazon Web Scraping and ETL Pipeline",
      subtitle: "E-commerce Data Extraction",
      description: "Developed a Python-based scraping and ETL workflow to extract Amazon product data with optimized handling for pagination and dynamic content.",
      fullDescription: `Developed a Python-based scraping and ETL workflow using BeautifulSoup, Requests, CSV, and PostgreSQL to extract Amazon product data (title, price, ratings) with optimized handling for pagination, dynamic content, and rate limits.`,
      technologies: ["Python", "BeautifulSoup", "PostgreSQL", "ETL", "Web Scraping"],
      icon: <ShoppingCart />,
      color: "#FF9900",
      gradient: "linear-gradient(135deg, #FF9900 0%, #FF6600 100%)",
      features: [
        "Web Scraping",
        "Data Cleaning",
        "PostgreSQL Storage",
        "Rate Limit Handling"
      ],
      period: "Jul 2024– Aug 2024",
      institution: "Project"
    },
    {
      id: 3,
      title: "Real-Time Stock Market Data Processing",
      subtitle: "Streaming Data Architecture",
      description: "Engineered a real-time stock data platform using Apache Kafka, Python, and AWS to stream, process, and visualize market data.",
      fullDescription: `Engineered a real-time stock data platform using Apache Kafka, Python, and AWS (EC2, S3, Glue, Athena, QuickSight) to stream, process, store, and visualize market data with automated schema detection and SQL analytics.`,
      technologies: ["Apache Kafka", "AWS EC2", "Python", "AWS Glue", "Athena"],
      icon: <Equalizer />,
      color: "#00C853",
      gradient: "linear-gradient(135deg, #00C853 0%, #009624 100%)",
      features: [
        "Real-Time Streaming",
        "Kafka Integration",
        "Automated Schema Detection",
        "SQL Analytics"
      ],
      period: "Jun 2025– Jul 2025",
      institution: "Project"
    }
  ];

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedProject(null);
  };

  return (
    <Box
      component="section"
      id="projects"
      sx={{
        py: { xs: 8, md: 12 },
        background: 'var(--bg-primary)',
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
              Featured Projects
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
              High-impact production systems and strategic initiatives demonstrating capabilities in workflow automation, real-time analytics, and intelligent data engineering.
            </Typography>
          </Box>
        </motion.div>

        {/* Projects Grid */}
        <Grid container spacing={4} alignItems="stretch">
          {projects.map((project, index) => (
            <Grid item xs={12} md={6} lg={4} key={project.id} style={{ display: 'flex' }}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                style={{ flex: 1, display: 'flex' }}
              >
                <Paper
                  elevation={2}
                  sx={{
                    height: '100%',
                    minHeight: 340,
                    display: 'flex',
                    flexDirection: 'column',
                    borderRadius: 'var(--border-radius)',
                    border: '1px solid var(--border)',
                    overflow: 'hidden',
                    cursor: 'pointer',
                    transition: 'var(--transition)',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: 'var(--shadow-lg)',
                      '& .project-icon': {
                        transform: 'scale(1.1) rotate(5deg)',
                      },
                    },
                  }}
                  onClick={() => handleProjectClick(project)}
                >
                  {/* Project Header */}
                  <Box
                    sx={{
                      background: project.gradient,
                      p: 3,
                      position: 'relative',
                      overflow: 'hidden',
                    }}
                  >
                    <Box
                      className="project-icon"
                      sx={{
                        color: 'white',
                        fontSize: '2.5rem',
                        mb: 2,
                        transition: 'var(--transition)',
                      }}
                    >
                      {project.icon}
                    </Box>
                    <Typography
                      variant="h5"
                      sx={{
                        color: 'white',
                        fontWeight: 600,
                        mb: 1,
                        lineHeight: 1.2,
                      }}
                    >
                      {project.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: 'rgba(255, 255, 255, 0.9)',
                        fontWeight: 500,
                      }}
                    >
                      {project.subtitle}
                    </Typography>
                  </Box>

                  {/* Project Content */}
                  <Box sx={{ p: 3, flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <Typography
                      variant="body2"
                      sx={{
                        color: 'var(--text-secondary)',
                        mb: 3,
                        lineHeight: 1.6,
                        display: '-webkit-box',
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                      }}
                    >
                      {project.description}
                    </Typography>

                    {/* Technologies */}
                    <Box sx={{ mb: 3 }}>
                      <Typography
                        variant="caption"
                        sx={{
                          color: 'var(--text-muted)',
                          fontWeight: 600,
                          textTransform: 'uppercase',
                          letterSpacing: 0.5,
                          mb: 1,
                          display: 'block',
                        }}
                      >
                        Technologies
                      </Typography>
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                        {project.technologies.slice(0, 3).map((tech) => (
                          <Chip
                            key={tech}
                            label={tech}
                            size="small"
                            sx={{
                              backgroundColor: 'var(--bg-secondary)',
                              color: 'var(--text-primary)',
                              border: '1px solid var(--border)',
                              fontSize: '0.7rem',
                            }}
                          />
                        ))}
                        {project.technologies.length > 3 && (
                          <Chip
                            label={`+${project.technologies.length - 3}`}
                            size="small"
                            sx={{
                              backgroundColor: 'var(--primary)',
                              color: 'white',
                              fontSize: '0.7rem',
                            }}
                          />
                        )}
                      </Box>
                    </Box>

                    {/* Period & Institution */}
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 'auto' }}>
                      <Typography
                        variant="caption"
                        sx={{
                          color: 'var(--text-muted)',
                          fontWeight: 500,
                        }}
                      >
                        {project.period}
                      </Typography>
                      <Typography
                        variant="caption"
                        sx={{
                          color: 'var(--primary)',
                          fontWeight: 600,
                        }}
                      >
                        {project.institution}
                      </Typography>
                    </Box>
                  </Box>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Project Detail Dialog */}
      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        maxWidth="md"
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: '16px',
            background: isDark ? '#0f172a' : '#fff',
            border: isDark ? '1px solid #334155' : '1px solid #e2e8f0',
            boxShadow: isDark
              ? '0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 8px 10px -6px rgba(0, 0, 0, 0.2)'
              : '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
            overflow: 'hidden',
          },
        }}
        BackdropProps={{
          sx: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            backdropFilter: 'blur(4px)',
          },
        }}
      >
        {selectedProject && (
          <>
            <DialogTitle
              sx={{
                background: selectedProject.gradient,
                color: 'white',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '24px',
                margin: 0,
                maxWidth: '100%',
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Box sx={{ fontSize: '2rem' }}>
                  {selectedProject.icon}
                </Box>
                <Box>
                  <Typography variant="h5" sx={{ fontWeight: 600 }}>
                    {selectedProject.title}
                  </Typography>
                  <Typography variant="body2" sx={{ opacity: 0.9 }}>
                    {selectedProject.subtitle}
                  </Typography>
                </Box>
              </Box>
              <IconButton
                onClick={handleCloseDialog}
                sx={{ color: 'white' }}
              >
                <Close />
              </IconButton>
            </DialogTitle>
            <DialogContent sx={{
              p: 4,
              backgroundColor: isDark ? '#0f172a' : '#fff',
              color: isDark ? '#cbd5e1' : '#475569',
            }}>
              <Typography
                variant="body1"
                sx={{
                  color: isDark ? '#cbd5e1' : '#475569',
                  mb: 4,
                  lineHeight: 1.7,
                  textAlign: 'left',
                  maxWidth: '100%',
                }}
              >
                {selectedProject.fullDescription}
              </Typography>

              {/* Key Features */}
              <Box sx={{ mb: 4 }}>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 600,
                    mb: 2,
                    color: isDark ? '#f8fafc' : '#0f172a',
                  }}
                >
                  Key Features
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                  {selectedProject.features.map((feature, index) => (
                    <Box
                      key={index}
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                      }}
                    >
                      <Box
                        sx={{
                          width: 6,
                          height: 6,
                          borderRadius: '50%',
                          backgroundColor: selectedProject.color,
                          flexShrink: 0,
                        }}
                      />
                      <Typography
                        variant="body2"
                        sx={{
                          color: isDark ? '#cbd5e1' : '#475569',
                        }}
                      >
                        {feature}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Box>

              {/* Technologies */}
              <Box sx={{ mb: 3 }}>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 600,
                    mb: 2,
                    color: isDark ? '#f8fafc' : '#0f172a',
                  }}
                >
                  Technologies Used
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {selectedProject.technologies.map((tech) => (
                    <Chip
                      key={tech}
                      label={tech}
                      sx={{
                        backgroundColor: isDark ? '#1e293b' : '#f8fafc',
                        color: isDark ? '#cbd5e1' : '#0f172a',
                        border: isDark ? '1px solid #334155' : '1px solid #e2e8f0',
                        fontWeight: 500,
                      }}
                    />
                  ))}
                </Box>
              </Box>

              {/* Project Info */}
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  pt: 2,
                  borderTop: isDark ? '1px solid #334155' : '1px solid #e2e8f0',
                }}
              >
                <Box>
                  <Typography
                    variant="body2"
                    sx={{
                      color: isDark ? '#94a3b8' : '#64748b',
                      mb: 0.5,
                    }}
                  >
                    Period
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      fontWeight: 600,
                      color: isDark ? '#f8fafc' : '#0f172a',
                    }}
                  >
                    {selectedProject.period}
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    variant="body2"
                    sx={{
                      color: isDark ? '#94a3b8' : '#64748b',
                      mb: 0.5,
                    }}
                  >
                    Institution
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      fontWeight: 600,
                      color: '#6366f1',
                    }}
                  >
                    {selectedProject.institution}
                  </Typography>
                </Box>
              </Box>
            </DialogContent>
          </>
        )}
      </Dialog>
    </Box>
  );
};

export default Projects; 
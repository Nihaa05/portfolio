import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Box, Container, Typography, Grid, Paper, Chip } from '@mui/material';
import {
  Code,
  Storage,
  Cloud,
  Psychology,
  Equalizer,
  AutoGraph,
  DataObject,
  Terminal
} from '@mui/icons-material';

const Skills = () => {
  const [hoveredCategory, setHoveredCategory] = useState(null);

  const skillCategories = [
    {
      id: 'programming',
      title: 'Programming & Scripting',
      icon: <Code />,
      skills: ['Python', 'SQL', 'Shell Scripting', 'Java', 'JavaScript'],
    },
    {
      id: 'data_eng',
      title: 'Data Engineering & ETL',
      icon: <Storage />,
      skills: ['Azure Data Factory', 'AWS Glue', 'Apache Airflow', 'Databricks', 'dbt', 'Apache Spark', 'Kafka', 'Snowflake', 'BigQuery', 'PostgreSQL', 'MySQL', 'MongoDB', 'PyArrow'],
    },
    {
      id: 'cloud',
      title: 'Cloud Platforms',
      icon: <Cloud />,
      skills: ['AWS (S3, Lambda, Redshift)', 'Azure (Synapse Analytics)'],
    },
    {
      id: 'power_platform',
      title: 'Microsoft Power Platform',
      icon: <Psychology />,
      skills: ['Power Apps', 'Power Automate', 'SharePoint Online', 'Microsoft Forms'],
    },
    {
      id: 'viz',
      title: 'Visualization & BI',
      icon: <Equalizer />,
      skills: ['Power BI', 'Tableau', 'Excel (Data Validation, Automation, Connectors)'],
    },
    {
      id: 'tools',
      title: 'Dev Tools',
      icon: <Terminal />,
      skills: ['Git', 'VS Code', 'Postman', 'SQL Developer'],
    },
  ];

  return (
    <Box
      component="section"
      id="skills"
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
              Skills & Expertise
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
              A robust technical toolkit spanning data engineering, cloud infrastructure, and advanced analytics—refined through hands-on enterprise application.
            </Typography>
          </Box>
        </motion.div>

        {/* Skill Categories */}
        <Grid container spacing={4} alignItems="stretch">
          {skillCategories.map((category, index) => (
            <Grid item xs={12} md={6} lg={4} key={category.id} style={{ display: 'flex' }}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                style={{ flex: 1, display: 'flex' }}
              >
                <Paper
                  elevation={hoveredCategory === category.id ? 8 : 2}
                  onMouseEnter={() => setHoveredCategory(category.id)}
                  onMouseLeave={() => setHoveredCategory(null)}
                  sx={{
                    p: 4,
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    borderRadius: 'var(--border-radius)',
                    border: '1px solid var(--border)',
                    background: hoveredCategory === category.id
                      ? 'linear-gradient(135deg, var(--bg-primary) 0%, var(--bg-secondary) 100%)'
                      : 'var(--bg-primary)',
                    position: 'relative',
                    overflow: 'hidden',
                    transition: 'var(--transition)',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: 'var(--shadow-xl)',
                    },
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    <Box
                      sx={{
                        width: 54,
                        height: 54,
                        borderRadius: '50%',
                        backgroundColor: 'var(--primary)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        mr: 2,
                        boxShadow: '0 2px 8px 0 rgba(0,0,0,0.10)',
                      }}
                    >
                      {category.icon}
                    </Box>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 700,
                        color: 'var(--text-primary)',
                        lineHeight: 1.2,
                      }}
                    >
                      {category.title}
                    </Typography>
                  </Box>

                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {category.skills.map((skill) => (
                      <Chip
                        key={skill}
                        label={skill}
                        size="small"
                        sx={{
                          backgroundColor: 'var(--bg-secondary)',
                          color: 'var(--text-primary)',
                          border: '1px solid var(--border)',
                          fontWeight: 500,
                          fontSize: '0.8rem',
                          '&:hover': {
                            backgroundColor: 'var(--primary)',
                            color: 'white',
                            borderColor: 'var(--primary)',
                          },
                        }}
                      />
                    ))}
                  </Box>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* Learning Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Box sx={{ textAlign: 'center', mt: { xs: 6, md: 10 } }}>
            <Paper
              elevation={2}
              sx={{
                p: 4,
                borderRadius: 'var(--border-radius)',
                border: '1px solid var(--border)',
                background: 'linear-gradient(135deg, var(--bg-secondary) 0%, var(--bg-tertiary) 100%)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 600,
                  mb: 2,
                  color: 'var(--text-primary)',
                  textAlign: 'center',
                }}
              >
                Always Learning
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: 'var(--text-secondary)',
                  mb: 3,
                  maxWidth: '600px',
                  mx: 'auto',
                  lineHeight: 1.7,
                }}
              >
                The AI landscape moves fast. I stay current through continuous learning, research, and hands-on experimentation with emerging tools in generative AI, MLOps, and distributed systems.
              </Typography>
            </Paper>
          </Box>
        </motion.div>

      </Container>
    </Box>
  );
};

export default Skills;
import { Document, Page, Text, View, StyleSheet, Image, Font } from '@react-pdf/renderer';
import type { ProjectDetail } from '@/types/project';

Font.register({
  family: 'Inter',
  src: 'https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiA.woff2'
});

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#0a0a0a',
    padding: 30,
    color: '#ffffff',
    fontFamily: 'Inter'
  },
  section: {
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
    color: '#a855f7'
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 8,
    color: '#a855f7'
  },
  text: {
    fontSize: 12,
    marginBottom: 5,
    color: '#ffffff'
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 10
  },
  tag: {
    backgroundColor: '#3b0764',
    padding: '4 8',
    marginRight: 5,
    marginBottom: 5,
    borderRadius: 12,
    fontSize: 10,
    color: '#e9d5ff'
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: '#27272a',
    marginVertical: 15
  }
});

interface PDFTemplateProps {
  project?: ProjectDetail;
  isFullPortfolio?: boolean;
  projects?: ProjectDetail[];
}

export const PDFTemplate = ({ project, isFullPortfolio, projects }: PDFTemplateProps) => {
  if (isFullPortfolio && projects) {
    return (
      <Document>
        <Page size="A4" style={styles.page}>
          <View style={styles.section}>
            <Text style={styles.title}>Portfolio</Text>
            <View style={styles.divider} />
          </View>
          {projects.map((proj, index) => (
            <View key={proj.title} style={styles.section}>
              <Text style={styles.subtitle}>{proj.title}</Text>
              <Text style={styles.text}>{proj.period}</Text>
              <Text style={styles.text}>{proj.description}</Text>
              <View style={styles.grid}>
                {proj.techStack.frontend.map((tech) => (
                  <View key={tech} style={styles.tag}>
                    <Text>{tech}</Text>
                  </View>
                ))}
              </View>
              {index < projects.length - 1 && <View style={styles.divider} />}
            </View>
          ))}
        </Page>
      </Document>
    );
  }

  if (!project) return null;

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.title}>{project.title}</Text>
          <Text style={styles.text}>{project.period}</Text>
          <Text style={styles.text}>{project.team}</Text>
          <Text style={styles.text}>{project.role}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.subtitle}>Description</Text>
          <Text style={styles.text}>{project.description}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.subtitle}>Tech Stack</Text>
          {Object.entries(project.techStack).map(([category, techs]) => (
            techs.length > 0 && (
              <View key={category} style={{ marginBottom: 10 }}>
                <Text style={[styles.text, { color: '#a855f7' }]}>{category}:</Text>
                <View style={styles.grid}>
                  {techs.map((tech) => (
                    <View key={tech} style={styles.tag}>
                      <Text>{tech}</Text>
                    </View>
                  ))}
                </View>
              </View>
            )
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.subtitle}>Key Features</Text>
          {project.features.map((feature) => (
            <Text key={feature} style={styles.text}>• {feature}</Text>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.subtitle}>Challenges & Solutions</Text>
          {project.challenges.map((challenge, index) => (
            <View key={index} style={{ marginBottom: 10 }}>
              <Text style={[styles.text, { color: '#a855f7' }]}>Problem:</Text>
              <Text style={styles.text}>{challenge.problem}</Text>
              <Text style={[styles.text, { color: '#a855f7' }]}>Solution:</Text>
              <Text style={styles.text}>{challenge.solution}</Text>
              <Text style={[styles.text, { color: '#a855f7' }]}>Learned:</Text>
              <Text style={styles.text}>{challenge.learned}</Text>
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.subtitle}>Outcome</Text>
          <Text style={[styles.text, { color: '#a855f7' }]}>Achievements:</Text>
          {project.outcome.achievements.map((achievement) => (
            <Text key={achievement} style={styles.text}>• {achievement}</Text>
          ))}
          <Text style={[styles.text, { color: '#a855f7', marginTop: 10 }]}>Future Improvements:</Text>
          {project.outcome.improvements.map((improvement) => (
            <Text key={improvement} style={styles.text}>• {improvement}</Text>
          ))}
        </View>
      </Page>
    </Document>
  );
};

import type { Metadata } from 'next';
import ProjectsClient from './ProjectsClient';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'A selection of spaces developed through a balance of architecture, material and atmosphere.',
};

export default function ProjectsPage() {
  return <ProjectsClient />;
}

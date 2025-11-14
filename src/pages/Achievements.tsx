// import React from 'react'
import Timeline, { type TimelineItem } from '../components/Timeline'

// edit this array with real achievements
const sampleAchievements: TimelineItem[] = [
  {
    id: 1,
    title: 'Winner — Campus Hackathon 2024',
    organization: 'University Hackathon',
    date: 'Apr 2024',
    description:
      'Led a 4-person team to build a real-time collaboration app; awarded Best UX and Overall Winner.',
    tags: ['React', 'Socket.IO', 'Figma'],
    iconUrl: '/assets/projectPics/hackathon.jpg',
  },
  {
    id: 2,
    title: 'Google Summer of Code — Contributor',
    organization: 'Open Source Project',
    date: 'Summer 2023',
    description:
      'Implemented performance improvements and added TypeScript types to the core library, merged 6 PRs.',
    tags: ['Open Source', 'TypeScript', 'Performance'],
    iconUrl: '/assets/projectPics/gsoc.jpg',
  },
  {
    id: 3,
    title: "Dean's List",
    organization: 'B.Sc Computer Science',
    date: '2021 — 2023',
    description: 'Recognized for academic excellence across multiple semesters (GPA top 5%).',
    tags: ['Academics'],
    iconUrl: '/assets/projectPics/medal.jpg',
  },
  {
    id: 4,
    title: 'AWS Certified Developer — Associate',
    organization: 'Amazon Web Services',
    date: 'Jan 2024',
    description: 'Certification validating cloud-development skills and best practices on AWS.',
    tags: ['AWS', 'Cloud'],
    iconUrl: '/assets/projectPics/aws.jpg',
    link: 'https://www.yourcertificate.example',
  },
]

export default function Achievements() {
  return (
    <main className="min-h-screen px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-white">Achievements</h1>
          <p className="mt-3 text-gray-300">A curated timeline of awards, certifications and notable contributions.</p>
        </header>

        <section>
          <Timeline items={sampleAchievements} />
        </section>
      </div>
    </main>
  )
}

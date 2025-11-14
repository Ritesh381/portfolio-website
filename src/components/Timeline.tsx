import React from 'react';
import AchievementCard from './AchievementCard';

export interface TimelineItem {
  id: string | number;
  title: string;
  organization?: string;
  date?: string;
  description?: string;
  tags?: string[];
  iconUrl?: string;
  link?: string;
}

interface TimelineProps {
  items: TimelineItem[];
}

const Timeline: React.FC<TimelineProps> = ({ items }) => {
  return (
    <div className="relative">
      <div className="hidden md:block absolute left-6 top-0 bottom-0 w-px bg-gray-700/60" />

      <div className="flex flex-col gap-8">
        {items.map((item) => (
          <div key={item.id} className="flex items-start md:items-stretch md:gap-8">
            {/* Marker column for md+ */}
            <div className="md:w-12 md:flex md:flex-col md:items-center md:justify-start">
              <div className="md:mt-1 md:mb-0 flex items-center md:flex-col">
                <div className="w-4 h-4 rounded-full bg-blue-500 border-2 border-neutral-900 z-10 md:translate-x-0 translate-x-6" />
                <div className="hidden md:block flex-1 w-px bg-transparent" />
              </div>
            </div>

            <div className="flex-1">
              <AchievementCard
                title={item.title}
                organization={item.organization}
                date={item.date}
                description={item.description}
                tags={item.tags}
                iconUrl={item.iconUrl}
                link={item.link}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;

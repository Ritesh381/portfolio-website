import React from 'react';

interface AchievementCardProps {
  title: string;
  organization?: string;
  date?: string;
  description?: string;
  tags?: string[];
  iconUrl?: string;
  link?: string;
}

const AchievementCard: React.FC<AchievementCardProps> = ({
  title,
  organization,
  date,
  description,
  tags = [],
  iconUrl,
  link,
}) => {
  return (
    <article className="flex flex-col md:flex-row items-start gap-4 p-6 bg-gradient-to-br from-neutral-900/30 to-neutral-900/10 border border-gray-700 rounded-lg shadow-md">
      {iconUrl && (
        <img
          src={iconUrl}
          alt={title}
          className="w-16 h-16 rounded-md object-cover flex-shrink-0"
        />
      )}

      <div className="flex-1">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h4 className="text-xl font-semibold text-white">{title}</h4>
            {organization && (
              <div className="text-sm text-gray-300">{organization}</div>
            )}
          </div>

          {date && <time className="text-sm text-gray-400">{date}</time>}
        </div>

        {description && (
          <p className="mt-3 text-gray-300 text-sm">{description}</p>
        )}

        {tags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((t) => (
              <span
                key={t}
                className="text-xs px-2 py-1 rounded bg-gray-800/60 text-gray-200"
              >
                {t}
              </span>
            ))}
          </div>
        )}

        {link && (
          <div className="mt-4">
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-sm text-blue-400 hover:underline"
            >
              Learn more
            </a>
          </div>
        )}
      </div>
    </article>
  );
};

export default AchievementCard;

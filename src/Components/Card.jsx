import { Code2 } from 'lucide-react';

const Card = ({
  name,
  image,
  shortDesc,
  tags = [],
  theme = 'primary',
  link,
}) => {
  const gridCols = tags.length <= 6 ? 'grid-cols-3' : 'grid-cols-4';

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br from-base-100 to-base-200 shadow-lg hover:shadow-2xl transition-all duration-500 h-full flex flex-col hover:scale-105 hover:-translate-y-2`}
    >
      {/* Overlay gradient on hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />

      {/* Image or CSS fallback */}
      <figure className="relative aspect-video  w-full overflow-hidden bg-base-300 flex items-center justify-center">
        {image ? (
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
          />
        ) : (
          <div
            className={`w-full h-full flex items-center justify-center bg-gradient-to-br from-${theme} to-${theme}-content/30 text-base-100 text-lg font-semibold tracking-wide uppercase`}
          >
            {name}
          </div>
        )}
      </figure>

      {/* Card content */}
      <div className="flex-1 p-6 flex flex-col justify-between">
        <div className="space-y-3">
          <h2 className="card-title text-2xl font-bold bg-gradient-to-r from-base-content to-base-content/70 bg-clip-text text-transparent group-hover:from-primary group-hover:to-secondary transition-all duration-300 line-clamp-2 h-12">
            {name}
          </h2>
          <p className="text-base-content/70 text-sm leading-relaxed line-clamp-2 h-[4.5rem] group-hover:line-clamp-none transition-all duration-300">
            {shortDesc}
          </p>
        </div>

        {/* Tags */}
        {tags.length > 0 && (
          <div className={`grid ${gridCols} gap-1 mt-4 pt-4 border-t border-base-300 group-hover:border-base-400 transition-colors`}>
            {tags.map((tag, idx) => (
              <span
                key={idx}
                className={`badge badge-sm badge-outline badge-${theme} gap-1 w-full py-3 text-xs font-medium flex items-center justify-center`}
              >
                <Code2 className="w-3.5 h-3.5 shrink-0" />
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </a>
  );
};

export default Card;
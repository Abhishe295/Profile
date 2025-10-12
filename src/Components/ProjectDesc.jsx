import { useParams } from 'react-router';

const ProjectDesc = () => {
  const { name } = useParams();

  // You can manually define content for each project
  const content = {
    EmotionAI: {
      title: 'EmotionAI',
      desc: 'Full-stack emotion detection using FastAPI and MongoDB.',
      images: ['/images/emotionai1.png', '/images/emotionai2.png']
    },
    SpotifySync: {
      title: 'SpotifySync',
      desc: 'Spotify API integration with emotion-based playlist switching.',
      images: ['/images/spotify1.png', '/images/spotify2.png']
    }
  };

  const project = content[name];

  if (!project) return <div className="p-4">Project not found.</div>;

  return (
    <div className="p-4">
      <h1 className="text-4xl font-bold mb-2">{project.title}</h1>
      <p className="mb-4">{project.desc}</p>
      <div className="flex gap-4 flex-wrap">
        {project.images.map((img, idx) => (
          <img key={idx} src={img} alt={`${name}-${idx}`} className="w-64 h-40 object-cover rounded" />
        ))}
      </div>
    </div>
  );
};

export default ProjectDesc;
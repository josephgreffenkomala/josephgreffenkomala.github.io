import React, { useEffect, useRef, useState } from "react";

export default function Project_Wrap({ projects }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => 
        project.data.tags?.some(tag => 
          tag.toLowerCase().includes(selectedCategory.toLowerCase())
        )
      );

  const categories = ['All', 'AI', 'Software Development'];

  return (
    <div className=" m-10 px-4 py-12 border-2 border-black bg-base/70 rounded-4xl">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold font-itim text-gray-900 mb-4">
          My Projects
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Explore my latest work and projects that showcase my skills and passion for development.
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex justify-center gap-2 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
              selectedCategory === category
                ? 'bg-orange-500 text-white shadow-lg'
                : 'bg-orange-200 text-orange-800 hover:bg-orange-300'
            }`}
            style={{
              backgroundColor: selectedCategory === category ? '#FF984D' : '#FED363',
              color: selectedCategory === category ? 'white' : '#8E542B'
            }}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>

      <style jsx>{`
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          line-height: 1.3;
        }
        
        .card-shadow {
          box-shadow: 4px 4px 0px 0px #000000;
        }
        
        .card-shadow:hover {
          box-shadow: 6px 6px 0px 0px #000000;
          transform: translateY(-2px);
        }
        
        .transition-card {
          transition: all 0.3s ease;
        }
      `}</style>
    </div>
  );
}

function ProjectCard({ project, index }) {
  const { data, id } = project;
  
  // Array warna untuk setiap card
  const cardColors = [
    '#5189D3', // Kuning
    '#FED363', // Orange
    '#83D6E8', // Biru
    '#FF984D', // Cyan
    '#01BBB6', // Pink
    '#FE6B75', // Teal
  ];
  
  const cardColor = cardColors[index % cardColors.length];
  
  return (
    <div 
      className="relative border-2 border-black rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group cursor-pointer "
      style={{
        backgroundColor: cardColor,
        height: '320px',
      }}
      onClick={() => window.location.href = `/projects/${id}`}
    >
      {/* Background Image */}
      {data.image && (
        <div className="absolute inset-0 bottom-[20%] p-4">
          <img
            src={data.image}
            alt={data.title}
            className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-300 rounded-2xl"
          />
        </div>
      )}
      
      

      {/* Bottom Content Section */}
      <div className="absolute bottom-0 left-0 right-0 h-35 bg-white rounded-b-3xl  py-2 px-4 flex flex-col justify-center">
        <div className="flex items-center overflow-hidden relative">
          <div className="flex items-center animate-scroll whitespace-nowrap">
            {data.tags && data.tags.map((tag, tagIndex) => {
              const tagColors = [
                'text-white', // --color-first: #5189D3
                'text-gray-800', // --color-second: #FED363
                'text-gray-800', // --color-third: #83D6E8
                'text-white', // --color-fourth: #FF984D
                'text-white', // --color-fifth: #01BBB6
                'text-white', // --color-sixth: #FE6B75
              ];
              
              const tagBgColors = [
                    '#5189D3', // Kuning
                    '#FED363', // Orange
                    '#83D6E8', // Biru
                    '#FF984D', // Cyan
                    '#01BBB6', // Pink
                    '#FE6B75', // Teal //
              ];
              
              const tagColor = tagColors[tagIndex % tagColors.length];
              const tagBgColor = tagBgColors[tagIndex % tagBgColors.length];
              
              return (
                <span 
                  key={tagIndex} 
                  className={`text-xs border-2 border-black font-semibold font-lusitana rounded-full px-3 py-1 mr-2 flex-shrink-0 ${tagColor}`}
                  style={{ backgroundColor: tagBgColor }}
                >
                  {tag}
                </span>
              );
            })}
            {/* Duplicate tags for seamless loop */}
            {data.tags && data.tags.map((tag, tagIndex) => {
              const tagColors = [
                'text-white', // --color-first: #5189D3
                'text-gray-800', // --color-second: #FED363
                'text-gray-800', // --color-third: #83D6E8
                'text-white', // --color-fourth: #FF984D
                'text-white', // --color-fifth: #01BBB6
                'text-white', // --color-sixth: #FE6B75
              ];
              
              const tagBgColors = [
                    '#5189D3', // Kuning
                    '#FED363', // Orange
                    '#83D6E8', // Biru
                    '#FF984D', // Cyan
                    '#01BBB6', // Pink
                    '#FE6B75', // Teal //
              ];
              
              const tagColor = tagColors[tagIndex % tagColors.length];
              const tagBgColor = tagBgColors[tagIndex % tagBgColors.length];
              
              return (
                <span 
                  key={`duplicate-${tagIndex}`} 
                  className={`text-xs font-semibold font-lusitana rounded-full px-3 py-1 mr-2 flex-shrink-0 ${tagColor}`}
                  style={{ backgroundColor: tagBgColor }}
                >
                  {tag}
                </span>
              );
            })}
          </div>
        </div>
        <h3 className="text-lg font-bold text-gray-900 mb-1 truncate">
          {data.title}
        </h3>
        <p className="text-gray-600 text-xs line-clamp-2 leading-tight">
          {data.description}
        </p>
      </div>

      <style jsx>{`
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          line-height: 1.3;
        }
        
        .card-shadow {
          box-shadow: 4px 4px 0px 0px #000000;
        }
        
        .card-shadow:hover {
          box-shadow: 6px 6px 0px 0px #000000;
          transform: translateY(-2px);
        }
        
        .transition-card {
          transition: all 0.3s ease;
        }
        
        .animate-scroll {
          animation: scroll-right 30s linear infinite;
        }
        
        @keyframes scroll-right {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}

import React from 'react'
import Ecommerce from "../assets/ecommerce.jpg"
import Tinder from "../assets/tinder.jpg"
import Youtube from "../assets/youtube.jpg"

const projects = [
    {
        id:1,
        name:"Ecommerce App",
        technologies:"MERN Stack",
        image: Ecommerce

    },
    {
        id:2,
        name:"Dev Tinder App",
        technologies:"MERN Stack",
        image: Tinder

    },
    {
        id:3,
        name:"Video Streaming App",
        technologies:"React.JS",
        image: Youtube

    }
]


const Projects = () => {
  return (
    <div className='bg-black text-white py-20' id='project'>
    <div className='container mx-auto px-8 md:px-16 lg:px-24'>
      <h2 className='text-4xl font-bold text-center mb-12'>My Projects</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>

            {projects.map((project)=>(
                <div key={project.id} className='bg-gray-800 p-6 rounded-lg hover:shadow-lg
                transform transition-transform duration-300 hover:scale-105'>
                    <img src={project.image} alt={project.name} className='rounded-lg mb-4 w-full h-48 object-cover'/>
                    <h3 className='text-2xl font-bold mb-2'>{project.name}</h3>
                    <p className='text-gray-400 mb-4'>{project.technologies}</p>
                    </div>
            ))}
        </div>
        </div>
        </div>
  )
}

export default Projects

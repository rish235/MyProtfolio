import React from 'react'
import erp from "../assets/erp.jpg"
import plant from "../assets/plant.jpg"
import notes from "../assets/notes.jpg"
import dsa from "../assets/dsa.png"
import portfolio from "../assets/portfolio.jpg"

function Projects() {
    const cardItem=[
        {
            id: 1,
            logo: erp,
            name1: "UniversityERP",
            to: "https://github.com/rish235/UniversityERP"
        },
        {
            id: 2,
            logo: plant,
            name1: "Plant Disease Detection System",
            to: "https://github.com/rish235/AgroCare"
        },
        {
            id: 3,
            logo: notes,
            name1: "NotesGallery",
            to:"https://github.com/rish235/NotesGallery"
        },
        {
            id: 4,
            logo: portfolio ,
            name1: "MyPortfolio",
            to: "https://github.com/rish235/MyProtfolio"
        },
        {
            id: 5,
            logo: dsa,
            name1: "DSAlgorithms",
            to: "https://github.com/rish235/DSAlgorithms"
        },
        
    ]
  return (
    <>
    <div name='Projects' className='max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10' >
        <div className='pl-20'>
            <h1 className=' text-2xl font-bold mb-5'>Projects</h1>
            <div className='flex space-between'>
                {cardItem.map(({id,logo,name1,to})=>(
                    
                    <div className='p-20 pl-0 pt-5 w-1/5 cursor-pointer hover:scale-110 duration-300' key={id}>
                        <a href={to}><img className='w-[300] h-[300] rounded-lg border-[2px]' src={logo} alt={name1} /></a>
                        <div>
                            <span className='text-l font-bold'>{name1}</span>
                        </div>
                    </div>
                    
                ))}
            </div>
        </div>
    </div>
    </>
  )
}

export default Projects
import React from 'react'
import git from "../assets/git.png"
import cpp from "../assets/cpp.png"
import js from "../assets/js.png"
import html from "../assets/html.png"
import css from "../assets/css.jpg"
import python from "../assets/python.png"
import django from "../assets/django.jpg"
import mongodb from "../assets/mongodb.png"
import react from "../assets/react.png"
import php from "../assets/php.png"
function Skills() {
    const cardItem=[
        {
            id: 1,
            logo: html,
            name1: "HTML"
        },
        {
            id: 2,
            logo: css,
            name1: "CSS"
        },
        {
            id: 3,
            logo: js,
            name1: "JavaScript"
        },
        {
            id: 4,
            logo: cpp,
            name1: "C++"
        },
        {
            id: 5,
            logo: git,
            name1: "Git"
        },
        {
            id: 6,
            logo: python,
            name1: "Python"
        },
        {
            id: 7,
            logo: django,
            name1: "Django"
        },
        {
            id: 8,
            logo: mongodb,
            name1: "MongoDB"
        },
        {
            id: 9,
            logo: react,
            name1: "ReactJS"
        },
        {
            id: 10,
            logo: php,
            name1: "PHP"
        },
        
        
    ]
  return (
    <div className='max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10' >
        <div className='pl-20'>
            <h1 className=' text-2xl font-bold mb-5'>Skills</h1>
            <div className='flex flex-wrap space-between'>
                {cardItem.map(({id,logo,name1})=>(
                    <div className='p-20 pl-0 pt-5 w-1/5 cursor-pointer hover:scale-110 duration-300' key={id}>
                        <img className='w-20 h-20 rounded-full border-[2px]' src={logo} alt={name1} />
                        <div>
                            <span className='text-l font-bold'>{name1}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Skills
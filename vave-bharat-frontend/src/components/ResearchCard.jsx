import React from 'react';
const ResearchCard=({title,points,bg="bg-white"})=>{
    return(
        <div className={'rounded-xl shadow-md p-6 transition-all duration-300 hover:scale-[1.02] ${bg}'}>
            <h3 className="text-xl font-semibold text-green-700 mb-4">{title}</h3>
            <ul className="space-y-2 list-disc list-inside text-gray-800">
                {points.map((point,index)=>(
                    <li key={index}className="text-base">{point}</li>
                ))}
            </ul>
        </div>
    );
};
export default ResearchCard;
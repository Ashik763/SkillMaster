import React, { createContext, useState } from 'react';


export const MoodContext = createContext();
const Mood = ({children}) => {
    const [mood,setMood]  = useState('day');
    return (
        <div>
            <MoodContext.Provider value={{mood,setMood}}>
                {children}
            </MoodContext.Provider>
            
        </div>
    );
};

export default Mood;
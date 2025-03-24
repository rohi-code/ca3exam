// src/components/EventList.jsx
import EventItem from "./EventItem";
import EventForm from "./EventForm";

const list=[

    {name:"document",
    age:13,
    game:"cricket"
    },

    {
        name:"deffd",
        age:15,
        game:"football"
    },
   

    
]


function EventList() {
    return(
        <>
            {
            list.map((item,ind) =>
               <EventItem{...item}key = {ind} />)
            }
            
        </>
    );
}

export default EventList;

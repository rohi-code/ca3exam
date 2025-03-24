// src/components/EventForm.jsx
import EventItem from "./EventItem";
import EventList from "./EventList";

const form=[


    
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



function EventForm() {

    return (
        <>
            {
        form.map((item,ind)=>
        <EventItem{...item}key = {ind}/>)
            }
        </>
    );
}

export default EventForm;

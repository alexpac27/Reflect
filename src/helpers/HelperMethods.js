
export const changeDate = (date) =>{
    const split = date.split(/[.\-_:T]/)
    const month ={
        "01":"January",
        "02":"February",
        "03":"March",
        "04":"April",
        "05":"May",
        "06":"June",
        "07":"July",
        "08":"August",
        "09":"September",
        "10":"October",
        "11":"November",
        "12":"December"
    }

   function time(hour,minute){
       const newHour = Number(hour)
        if(newHour > 12){
           return (newHour - 12)+":"+minute+" "+ "pm"
        }else{
            return newHour+":"+minute+" "+ "am"
        }
    } 
    return month[split[1]]+ " " + split[2] + ", " + " " + split[0] + " " + "at" + " "+time(split[3],split[4])
    }

    
    export const prompt = [
        "How is today better than yesterday?",
        "What are you grateful for today?", 
        "What inspired you today?", 
        "What made you smile or laugh today?", 
        "What's something you're looking forward to in the future?", 
        "Who made a positive impact in your life recently?",
        "What relationships are you thankful for today?",
        "Where did you find beauty today?"
    ]


    export const samplePrompt = () =>{
        const num = Math.floor(((Math.random()) * (prompt.length)))
    }

    export const moodLogConverter = (obj) =>{
        const moods = {
            1: "Happy",
            2:"Excited",
            3: "Grateful",
            4:"Relaxed",
            5:"Content",
            6:"Tired",
            7:"Unsure",
            8:"Bored",
            9:"Anxious",
            10:"Angry",
            11:"Stressed",
            12:"Sad"
        }
        
        function getKeyByValue(moods, obj) {
            const newNum = parseInt(Object.keys(moods).find(key => moods[key] === obj.mood))
            return newNum
        }

        const newObject = {
            mood: getKeyByValue(moods,obj),
            user: 1,
            tag1: (obj.tagArray[0] ? obj.tagArray[0] : null),
            tag2: (obj.tagArray[1] ? obj.tagArray[1] : null),
            tag3: (obj.tagArray[2] ? obj.tagArray[2] : null),
            tag4: (obj.tagArray[3] ? obj.tagArray[3] : null),
            tag5: (obj.tagArray[4] ? obj.tagArray[4] : null),
        }
        return newObject
    }
    
const btn = document.querySelector('.talk')
const content = document.querySelector('.content')


function speak(text){
    const text_speak = new SpeechSynthesisUtterance(text);

    text_speak.rate = 1;
    text_speak.volume = 2;
    text_speak.pitch = 0.5;

    window.speechSynthesis.speak(text_speak);
}

function wishMe()
{
    var day = new Date();
    var hour = day.getHours();

    if(hour>=0 && hour<12){
        speak("Good Morning sir...")
    }

    else if(hour>12 && hour<17){
        speak("Good Afternoon sir...")
    }

    else{
        speak("Good Evenining Sir...")
    }

}

window.addEventListener('load', ()=>{
    speak("Initializing Tras..");
    wishMe();
});

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition =  new SpeechRecognition();

recognition.onresult = (event)=>{
    const currentIndex = event.resultIndex;
    const transcript = event.results[currentIndex][0].transcript;
    content.textContent = transcript;
    takeCommand(transcript.toLowerCase());

}

btn.addEventListener('click', ()=>{
    content.textContent = "Listening...."
    recognition.start();
})


function takeCommand(message){
    if(message.includes('hey') || message.includes('hello')){
        speak("Hello Sir, How May I Help You?");
    }
   

    else if(message.includes("open google")){
        window.open("https://google.com", "_blank");
        speak("Opening Google...")
    }
    else if(message.includes("open youtube")){
        window.open("https://youtube.com", "_blank");
        speak("Opening Youtube...")
    }
    else if(message.includes("open facebook")){
        window.open("https://facebook.com", "_blank");
        speak("Opening Facebook...")
    }

    else if(message.includes('what is') || message.includes('who is') || message.includes('what are')) {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "This is what i found on internet regarding " + message;
	    speak(finalText);
  
    }

    else if(message.includes('wikipedia')) {
        window.open(`https://en.wikipedia.org/wiki/${message.replace("wikipedia", "")}`, "_blank");
        const finalText = "This is what i found on wikipedia regarding " + message;
        speak(finalText);
    }

    else if(message.includes('time')) {
        const time = new Date().toLocaleString(undefined, {hour: "numeric", minute: "numeric"})
        const finalText = time;
        speak(finalText);
    } 

    else if(message.includes('date')) {
        const date = new Date().toLocaleString(undefined, {month: "short", day: "numeric"})
        const finalText = date;
        speak(finalText); 
        println(finalText);
       
    }
   
    else if(message.includes("one")){
        window.open("https://youtu.be/3nHgx6lhcQY?si=-4l1lwGMYS-69KvS", "_blank");
        speak("playing onedirection songs......")
    }

    else if(message.includes('calculator')) {
        window.open('Calculator:///')
        const finalText = "Opening Calculator";
        speak(finalText);
    }

    else if(message.includes('code')) {
        window.open("C:\Users\ganes\OneDrive\Documents\Desktop\Visual Studio Code.lnk")
        const finalText = "Opening vs code";https
        speak(finalText);
    }

    else if(message.includes("linkedin")){
        window.open("https://www.linkedin.com/feed/", "_blank");
        speak("opening linkedin......")
    }
    
    else if(message.includes("mail")){
        window.open("https://mail.google.com/mail/u/0/#inbox", "_blank");
        speak("opening mail......")
    }
    else if(message.includes("music")){
        window.open("https://www.youtube.com/watch?v=CCSGelSCPGE", "_blank") ;
        speak("playing music......")
    }
    
    else if(message.includes('plus ') || message.includes('five && two ') || message.includes('what is 4 plus 3 ')){
        window.open("https://www.youtube.com/watch?v=Dg9DNQ_iuYY", "_blank") ;
        speak("playing song ......")
    }
    
    

    else {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "I found some information for " + message + " on google";
        speak(finalText);
    }
    
   
}



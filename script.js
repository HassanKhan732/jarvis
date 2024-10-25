const btn = document.querySelector(".talk") 
const content = document.querySelector(".content")
function speak(text){
 const text_speak = new SpeechSynthesisUtterance(text);
 text_speak.rate = 1 ;
 text_speak.volume = 1 ;
 text_speak.pitch = 1 ;
 window.speechSynthesis.speak(text_speak)
}
function wishMe(){
    const day = new Date();
    const hour = day.getHours();
    if (hour>=0 && hour<12){
        speak("Good Morning sir...")
    }
    else if (hour>12 && hour<17){
        speak("Good evening mr...")
    }
else{
        speak("Good afternoon boss...")
    }
}
window.addEventListener('load',()=>{
    speak("initializing JARVIS...")
    wishMe();
})

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
const recognition = new SpeechRecognition();
recognition.onresult = (event)=>{
   const currentIndex =  event.resultIndex
   const transcript =  event.results[currentIndex][0].transcript
   content.textContent = transcript
   takeCommand(transcript.toLowerCase())
}
 btn.addEventListener('click', ()=>{
    content.textContent = "listining..."
    recognition.start();
 })
 function takeCommand(message){
    if (message.includes('hello')){
        speak("hello how may i help you")
    }
if(message.includes('how are you')){
    speak("i'm fine and i hope you will also fine")
}
if(message.includes('are you crazy')){
    speak(" you too")
}
if (message.includes('who is jarvis')){
    speak ("jarvis is a virtual assistant and it is developed by hassan")
}
if (message.includes('who is hiba')){
    speak ("hiba is a dog")
}
if (message.includes('jarvis')){
    speak ("yes sir how can i assist you")
}
if (message.includes("what's date today")||message.includes("what is date today")|| message.includes("what's day today")||message.includes("what is day today")){
    const dat = new Date().toDateString();
    speak ("today is "+ dat)
}

if(message.includes("aap kaise hain")){
speak("mai bilkul theek hun ")
}
if(message.includes("open google")){
    window.open("https://google.com" ,"_blank")
speak("opening google");
}

if(message.includes("open youtube")){
    window.open("https://youtube.com" ,"_blank")
speak("opening youtube");
}
if(message.includes("open insta")|| message.includes("open instagram")){
    window.open("https://instagram.com" ,`_blank`)
speak("opening instagram");
}
if(message.includes("open fb")|| message.includes("open facebook")){
    window.open("https://facebook.com")
speak("opening facebook");
}
if(message.includes("open spotify")){
    window.open("https://open.spotify.com/" ,"_blank")
speak("opening spotify");
}
else if(message.includes("search on google")){
    window.open(`https://www.google.com/search?q=${message.replace("search on google","+")}`, `_blank`)
const finalText = "this is what i found on internet"+ message 
speak(finalText);
}

else if(message.includes("wikipedia")){
    window.open(`https://www.wikipedia.org/wiki/${message.replace("wikipedia","+")}`, `_blank`)
const finalText = "this is what i found "+ message 
speak(finalText)
}

else if(message.includes("search on youtube")){
    window.open(`https://www.youtube.com/results?search_query=${message.replace("search on youtube","+") }`, `_blank`)
const finalText = "this is what i found "
speak(finalText)
}

else if(message.includes("search on instagram")){
    window.open(`https://www.instagram.com/${message.replace("search on youtube","+") }`, `_blank`)
const finalText = "this is what i found "
speak(finalText)
}

 else if(message.includes("what is time now")){
const time = new Date().toLocaleString(undefined,{hour:"numeric", minute:"numeric"})
speak("time is" + time) ;
}
}
/*(`https://www.youtube.com/results?search_query=${message.replace("search on youtube","+") */

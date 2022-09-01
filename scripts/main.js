
const app = document.querySelector("#app");
const delay = ms => new Promise(res => setTimeout(res, ms));
    
    
app.addEventListener("keypress", async function(event){
  if(event.key === "Enter"){
    await delay(150);
   getInputValue();
   
    removeInput();
    await delay(150);
    new_line();
  }
});

app.addEventListener("click", function(event){
  const input = document.querySelector("input");
  input.focus();
})


async function open_terminal(){
  createText("Welcome to GDSC GNITS Web Dev Team");
  await delay(700);
  createText("Starting the server...");
  await delay(1000);
  createText("Creating new user...");
  await delay(800);
  createText("Enter all to see list of all commands");
  createText("Warning: Commands are case sensitive and are in lower case");
 
  //createCode("about me", "Who am i and what do i do.");
  //createCode("all", "See all commands.");
  //createCode("social -a", "All my social networks.");

  await delay(500);
  new_line();
}


function new_line(){
  
  const p = document.createElement("p");
  const span1 = document.createElement("span");
  const span2 = document.createElement("span");
  p.setAttribute("class", "path")
  p.textContent = "user";
  span1.textContent = " in";
  span2.textContent = " ~/GDSC-GNITS";
  p.appendChild(span1);
  p.appendChild(span2);
  app.appendChild(p);
  const div = document.createElement("div");
  div.setAttribute("class", "type")
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-angle-right icone")
  const input = document.createElement("input");
  div.appendChild(i);
  div.appendChild(input);
  app.appendChild(div);
  input.focus();
  
}

function removeInput(){
  const div = document.querySelector(".type");
  app.removeChild(div);
}

async function getInputValue(){
  
  const value = document.querySelector("input").value;
  if(value === "all"){
    trueValue(value);
    
    createCode("about", "All about the GDSC GNITS Web Development Team of 2022");
    createCode("team", "List of all members and positions in the Team");
    createCode("about name", "Replace name with any members first name to find details of the member");
    createCode("contact name", "Replace name with any members name to find all social links of member");
    createCode("join gdsc", "Links to GDSC GNITS official handles");
    createCode("learn", "Recommended Links to learn Web Development");
    createCode("clear", "Clean the terminal.");
    
  }
  else if(value === "team"){
    trueValue(value);
    createText("<span class='blue'>Lead: </span>keerthana pravallika")
    createText("<span class='blue'>Co-Lead: </span>meghana ayyala somayajula")
  }
  else if(value === "about"){
    trueValue(value);
    createText("We are the <span class='blue'>web dev team of GDSC GNITS </span> and we are so excited to embark on this new journey.")
    createText("We aim to learn and enjoy together as the official web developers of this wonderful club and create a lot of new events for you.")
  }
 else if(value === "about keerthana"){
    trueValue(value);
    createText("Hello I am Keerthana. I am the web dev team lead. Click to find a few of my best projects.")
    createText("<a href='https://github.com/KeerthanaPravallika/Travel-Pool' target='_blank'><span class='blue'>Travel Pool</span></a>")
    createText("<a href='https://github.com/KeerthanaPravallika/SportsResourceBooking' target='_blank'><span class='blue'>Sports Resource Booking</span></a>")
    
  }
else if(value === "about meghana"){
    trueValue(value);
    createText("Hello I am Meghana. I am the web dev team co-lead. Click to find a few of my best projects.")
    createText("<a href='https://github.com/meghanaayyala/Auto-Advice' target='_blank'><span class='blue'>Auto Advice</span></a>")
    createText("<a href='https://github.com/meghanaayyala/QCSimulator' target='_blank'><span class='blue'>QCSimulator++</span></a>")
    
  }
  
  else if(value === "contact keerthana"){
    trueValue(value);
    createText("<a href='https://github.com/KeerthanaPravallika' target='_blank'><i class='fab fa-github white'></i> @keerthanapravallika</a>")
    createText("<a href='https://www.linkedin.com/in/keerthana-pravallika-samudrala' target='_blank'><i class='fab fa-linkedin-in white'></i> Keerthana Pravallika Samudrala</a>")
  }
	
else if(value === "contact meghana"){
    trueValue(value);
    createText("<a href='https://github.com/meghanaayyala' target='_blank'><i class='fab fa-github white'></i> @meghanaayyala</a>")
    createText("<a href='https://www.linkedin.com/in/meghana-ayyala-somayajula/' target='_blank'><i class='fab fa-linkedin-in white'></i> Meghana Ayyala Somayajula</a>")
  }
else if(value === "join gdsc"){
    trueValue(value);
    createText("Join us at")
    createText("<a href='https://gdsc.community.dev/g-narayanamma-institute-of-technology-science-hyderabad/' target='_blank'><span class='blue'>Official Website</span></a>")
    createText("<a href='https://www.instagram.com/gdsc_gnits/?hl=en' target='_blank'><span class='blue'>Instagram</span></a>")
  }
else if(value === "learn"){
    trueValue(value);
    createText("Here are a few links to get you started!")
    createText("<a href='https://www.freecodecamp.org/' target='_blank'><span class='blue'>FreeCodeCamp</span></a>")
    createText("<a href='https://fullstackopen.com/en/' target='_blank'><span class='blue'>Helsinki Full Stack</span></a>")
    createText("<a href='https://www.youtube.com/playlist?list=PLzvhQUIpvvuj5KPnyPyWsvgyzNkX_ACPA' target='_blank'><span class='blue'>Neogcamp</span></a>")
    createText("<a href='https://www.youtube.com/playlist?list=PLlasXeu85E9cQ32gLCvAvr9vNaUccPVNP' target='_blank'><span class='blue'>Namaste Javascript</span></a>")

    createText("<a href='https://www.youtube.com/watch?v=6mbwJ2xhgzM&list=PLu0W_9lII9agiCUZYRsvtGTXdxkzPyItg' target='_blank'><span class='blue'>Code With Harry</span></a>")
    
  }
  
  else if(value === "clear"){
    document.querySelectorAll("p").forEach(e => e.parentNode.removeChild(e));
    document.querySelectorAll("section").forEach(e => e.parentNode.removeChild(e));
  }
  else{
    falseValue(value);
    createText(`command not found: ${value}`)
  }
}

function trueValue(value){
  
  const div = document.createElement("section");
  div.setAttribute("class", "type2")
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-angle-right icone")
  const mensagem = document.createElement("h2");
  mensagem.setAttribute("class", "sucess")
  mensagem.textContent = `${value}`;
  div.appendChild(i);
  div.appendChild(mensagem);
  app.appendChild(div);
}

function falseValue(value){
  
  const div = document.createElement("section");
  div.setAttribute("class", "type2")
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-angle-right icone error")
  const mensagem = document.createElement("h2");
  mensagem.setAttribute("class", "error")
  mensagem.textContent = `${value}`;
  div.appendChild(i);
  div.appendChild(mensagem);
  app.appendChild(div);
}

function createText(text, classname){
  const p = document.createElement("p");
  
  p.innerHTML =
  text
  ;
  app.appendChild(p);
}

function createCode(code, text){
  const p = document.createElement("p");
  p.setAttribute("class", "code");
  p.innerHTML =
 `${code} <br/><span class='text'> ${text} </span>`;
  app.appendChild(p);
}

open_terminal();

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
  await delay(800);
  createText("Creating new user...");
  await delay(800);
  createText("Enter <span class='blue'>all</span> to see list of all commands");
  createText("<span style='color:red'>Warning:</span> Commands are case sensitive and are in lower case");
 
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
    createCode("see cool art", "Self explanatory. For the Computer Geeks");
    createCode("clear", "Clean the terminal.");
    
  }
  else if(value === "team"){
    trueValue(value);
    createText("Use the name mentioned in brakets for accessing details about team members.")
    createText("<span class='blue'>Lead: </span>Keerthana Pravallika Samudrala (keerthana pravallika)")
    createText("<span class='blue'>Co-Lead: </span>Meghana Ayyala Somayajula (meghana)")
    createText("<span class='blue'>Coordinator: </span>Kacham Satwika (satwika)")
    createText("<span class='blue'>Member: </span>Nishitha Makam (nishitha)")
    createText("<span class='blue'>Coordinator: </span>Vaishnavi Vangaveti (vaishnavi vangaveeti)")
    createText("<span class='blue'>Coordinator: </span>Vaishnavi Jilla (vaishnavi jilla)")
    createText("<span class='blue'>Coordinator: </span>Rucha (rucha)")
    createText("<span class='blue'>Coordinator: </span>Nikitha (nikitha)")
    //createText("<span class='blue'>Position: </span>name")
  }
  else if(value === "about"){
    trueValue(value);
    createText("We are the <span class='blue'>web dev team of GDSC GNITS </span> and we are so excited to embark on this new journey.")
    createText("We aim to learn and enjoy together as the official web developers of this wonderful club and create a lot of new events for you.")
  



  }
 else if(value === "about keerthana pravallika"){
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
  
  else if(value === "about satwika"){

    trueValue(value);
    
    createText("Hello I am Satwika. I am the web dev team co-ordinator. Click to find a few of my best projects.")
    
    createText("<a href='https://codesup-component-library.netlify.app/’><span class='blue'>Component Library</span></a>")
    
    //createText("<a href='https://github.com/meghanaayyala/QCSimulator' target='_blank'><span class='blue'>QCSimulator++</span></a>")
    
    }
    else if(value === "about nishitha"){

      trueValue(value);
      
      createText("Hello I am Nishitha Makam. I am the web dev team Member.I am a self-motivated and highly passionate Learner.Looking forward to learning many more with Gdsc.")
      
      }
  
      else if(value === "about vaishnavi vangaveeti"){

        trueValue(value);
        
        createText("Hello I am Vaishnavi Vangaveti. I am the web dev team Coordinator.")
        
        }
        else if(value === "about vaishnavi jilla"){

          trueValue(value);
          
          createText("Hello I am Vaishnavi Jilla. I am the web dev team Coordinator.")
          
          }
          else if(value === "about nikitha"){

            trueValue(value);
            
            createText("Hello I am Nikitha. I am the web dev team Coordinator.")
            
            }
            else if(value === "about rucha"){

              trueValue(value);
              
              createText("Hello I am Rucha. I am the web dev team Coordinator.")
              
              }
        
    
  else if(value === "contact keerthana pravallika"){
    trueValue(value);
    createText("<a href='https://github.com/KeerthanaPravallika' target='_blank'><i class='fab fa-github white'></i> @keerthanapravallika</a>")
    createText("<a href='https://www.linkedin.com/in/keerthana-pravallika-samudrala' target='_blank'><i class='fab fa-linkedin-in white'></i> Keerthana Pravallika Samudrala</a>")
  }
	
else if(value === "contact meghana"){
    trueValue(value);
    createText("<a href='https://github.com/meghanaayyala' target='_blank'><i class='fab fa-github white'></i> @meghanaayyala</a>")
    createText("<a href='https://www.linkedin.com/in/meghana-ayyala-somayajula/' target='_blank'><i class='fab fa-linkedin-in white'></i> Meghana Ayyala Somayajula</a>")
  }

  else if(value === "contact nishitha"){

    trueValue(value);
    
    
    createText("<a href='https://www.linkedin.com/in/nishithamakam1209' target='_blank'><i class='fab fa-linkedin-in white'></i> Nishitha Makam</a>")
    
    }
    else if(value === "contact vaishnavi vangaveeti"){
    
    trueValue(value);
    
    
    createText("<a href='https://www.linkedin.com/in/vaishnavi-vangaveti-477aa8229/' target='_blank'><i class='fab fa-linkedin-in white'></i> Vaishnavi Vangaveti</a>")
    
    }
    else if(value === "contact vaishnavi jilla"){
    
      trueValue(value);
      
      
      createText("<a href='https://www.linkedin.com/in/vaishnavijilla09' target='_blank'><i class='fab fa-linkedin-in white'></i> Vaishnavi Jilla</a>")
      
      }
      else if(value === "contact rucha"){
    
        trueValue(value);
        
        
        createText("<a href='www.linkedin.com/in/rucha-dhodapkar-2a831a1ab' target='_blank'><i class='fab fa-linkedin-in white'></i> Rucha</a>")
        
        }
        else if(value === "contact nikitha"){
    
          trueValue(value);
          
          
          createText("<a href='https://www.linkedin.com/in/nikita-reddy-047b23200' target='_blank'><i class='fab fa-linkedin-in white'></i> Nikitha</a>")
          
          }
          else if(value === "contact satwika"){
    
            trueValue(value);
            
            
            createText("<a href='https://www.linkedin.com/in/satwika-kacham-70aa4b200' target='_blank'><i class='fab fa-linkedin-in white'></i> Satwika Kacham</a>")
            
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
  else if(value === "see cool art")
  {
    
createText("<h6><pre>               dP                                          dP                dP                      </pre></h6>")
createText("<h6><pre>               88                                          88                88                      </pre></h6>")
createText("<h6><pre>.d8888b. .d888b88 .d8888b. .d8888b.    dP  dP  dP .d8888b. 88d888b.    .d888b88 .d8888b. dP   .dP    </pre></h6>")
createText("<h6><pre>88   `88 88   `88 Y8ooooo. 88   `88    88  88  88 88ooood8 88   `88    88   `88 88ooood8 88   d8    </pre></h6>")
createText("<h6><pre>88.  .88 88.  .88       88 88.  ...    88.88b.88' 88.  ... 88.  .88    88.  .88 88.  ... 88 .88'     </pre></h6>")
createText("<h6><pre>`8888P88 `88888P8 `88888P' `88888P'    8888P Y8P  `88888P' 88Y8888'    `88888P8 `88888P' 8888P'      </pre></h6>")
createText("<h6><pre>     .88                                                                                             </pre></h6>")
createText("<h6><pre> d8888P                                                                                              </pre></h6>")



                                                                                                                            
createText("<h6><pre>                                   88  88                               88                   ad88                            </pre></h6>")
createText("<h6><pre>                                   88  oo                               oo                  d8                              </pre></h6>")
createText("<h6><pre>                                   88                                                       88                               </pre></h6>")
createText("<h6><pre>  ,adPPYba,   ,adPPYba,    ,adPPYb,88  88  8b,dPPYba,    ,adPPYb,d8     88  ,adPPYba,     MM88MMM  88       88  8b,dPPYba,   </pre></h6>")
createText("<h6><pre> a8      88  a8       8a  a8     `Y88  88  88P    ` 8a  a8     `Y88     88  I8[    88      88      88       88  88P    ` 8a  </pre></h6>")
createText("<h6><pre> 8b          8b       d8  8b       88  88  88       88  8b       88     88   ` Y8ba,        88     88       88  88       88  </pre></h6>")
createText("<h6><pre>  8a,   ,aa   8a,   ,a8    8a,   ,d88  88  88       88   8a,   ,d88     88  aa    ]8I       88      8a,   ,a88  88       88  </pre></h6>")
createText("<h6><pre>  ` Ybbd8     ` YbbdP      ` 8bbdP Y8  88  88       88   ` YbbdP Y8     88  ` YbbdP         88      ` YbbdP Y8  88       88  </pre></h6>")
createText("<h6><pre>                                                         aa,    ,88                                                          </pre></h6>")
createText("<h6><pre>                                                           Y8bbdP                                                            </pre></h6>")


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
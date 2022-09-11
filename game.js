const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('button-option')

const welcomeSection = document.getElementById('welcome')
const enterButton = document.getElementById('enter')

const audio = document.getElementById('bgAudio')
audio.volume = 0.05;

function fadeOut(el) {
            el.style.opacity = 1;
            (function fade() {
                if ((el.style.opacity -= .075) < 0) {
                    el.style.display = "none";
                } else {
                    requestAnimationFrame(fade);
                }
            })();
        };

updateVisitorCount();

function updateVisitorCount() {
  axios.get('https://api.countapi.xyz/update/Steins-Gate/counter/?amount=1')
  .then(response => {
    console.log(response);
  });
}

enterButton.addEventListener('click', ()=> {
  audio.play();
  fadeOut(welcomeSection);
  document.getElementById('accLogo').style.zIndex = "-1";
  document.getElementById('nitwLogo').style.zIndex = "-1";
})

function startGame() {
  showTextNode('0')
}

function showTextNode(textNodeIndex) {
  const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
  textElement.innerText = textNode.text
  while (optionButtonsElement.firstChild) {
    optionButtonsElement.removeChild(optionButtonsElement.firstChild)
  }

  textNode.options.forEach(option => {
    const button = document.createElement('button')
    button.innerText = option.text
     button.classList.add('btn')
    button.addEventListener('click', () => selectOption(option))
    optionButtonsElement.appendChild(button)
  })
}

function selectOption(option) {
  const nextTextNodeId = option.nextText
  showTextNode(nextTextNodeId)
}

const textNodes = [
  {
    id: '0',
    text: 'Sunlight slips in through a slight crack in curtains, climbs up your bed and lands on your face, the tender warmth makes you smile and you open your eyes. You feel a slight zinging on the back of your head, regardless you make your way to the washroom. It’s awfully quiet, you try to remember what happened last night. *thud* You fall in agony, screaming - your head feels like it’s being taken apart, split in two *silence* The ringing, the pain, it’s gone. You somehow feel lighter. You collect yourself and get up, raising your head, you catch a glimpse of the mirror. You are …',
    options: [
      {
        text: 'Wolfram Thomas, 17M, angsty teen(High School - Senior Year), doesn’t have many friends, schizophrenic',
        nextText: 'B1'
      },
      {
        text: '… can’t remember, but why?',
        nextText: 'G1'
      }
    ]
  },
   {
    id: 'B1',
    text: 'You stare into the mirror and suddenly everything that happened last night flashes before you - You were returning home. "Please let me go" screamed a girl. You were watching silently when in no time, the girl was lying on the road dead! "MURDER, IT\'S A MURDER", you thought to yourself as you regained your senses. You feel devastated looking at yourself.\n\
\n\
You rushed to the place where you saw the girl. There is a crime scene going on with police, media and a lot of people surrounding.\n\
I could have saved the girl. But how can I? I was the only one there. No, at least I could have tried. What if someone comes to know? Does someone already know? What will become of me? How did I get myself into this? Questions are eating your head. What would you do now?',
    options: [
      {
        text: 'I\'ll take a step, tell the police, I\'m the eye witness and help them throughout the case',
        nextText: 'B2'
      },
      {
        text: 'Taking a chance now, I\'ll try to prepare myself to face such situations next time',
        nextText: 'B3'
      }
    ]
  },
  {
    id: 'B2',
    text: 'Now that you\'ve decided to help the cops, you run towards the Sheriff... “Anyone with whatsoever knowledge linked to this murder please come forward, you have our protection.” says the sheriff... [Dead Silence] … you make your way through the crowd “MOVE! I\'VE SEEN THEM! I\'VE SEEN WHAT THEY DID TO HER, IT WAS HORRIBLE!”. Everyone\'s shocked to their core. All the cameras turn towards you, now the world knows you\'re an eye witness to this cold-blooded murder. You take a look at the corpse; it\'s surrounded by flies and the foulest of smell. “Son, we need you to come down to the station with us.” says the sheriff, wearing the grimmest expression you\'ve ever seen... what would you do?',
    options: [
      {
        text: 'Get in the car with the sheriff and head down to the police station for further investigation',
        nextText: 'B4'
      },
      {
        text: 'Convince the sheriff and stay back at the crime scene to help the crime scene investigator',
        nextText: 'B5'
      }
    ]
  },
  {
    id: 'B3',
    text: 'Now that you\'ve decided to take a chance, you buy yourself a coffee and walk back to your apartment with the same guilt in your heart “Maybe... I could\'ve saved her; it is my fault she\'s lying dead on the road”. You\'ve arrived at the door and you reach out for keys in your pocket. “Wait, what!” you think to yourself as you find the door\'s open. You open the door slowly; you feel the creaking sound of the door amplifying the fear down your spine. Suddenly a man wearing a black hood jumps from behind the door and points a gun towards you. A quick memory flashes from last night. “IT\'S HIM! IT\'S THE SAME GUY FROM LAST NIGHT.” you gotta respond fast before he takes a shot at you... what would you do now? ',
    options: [
      {
        text: 'Take the risk and use brute force to grab the gun from him',
        nextText: 'B6'
      },
      {
        text: 'Throw the hot coffee on his face and kick his hand isolating him from the gun',
        nextText: 'B7'
      }
    ]
  },
  {
    id: 'B4',
    text: 'You agree on going to the station. You find yourself drenched in sweat, going to a police station as a witness to a murder, is not a dream-come-true. The worst part is that you have no one from your contacts whom you can trust, bad experiences with friends and high school didn\'t help. You reach the station and the sheriff asks that you tell him everything you saw that night. You clear your throat and start narrating, “I happened to go to a nearby grocery store for some essentials at around 10:00 pm. And as soon as I was done with my shopping, I took some time to take a breather. That\'s when I saw a girl with two guys, arguing, one of them left frustrated. As soon as I felt the vibe ain\'t right, I got into the car and plugged in the key. And then I heard the girl screaming, I got out of the car and I saw her in a pool of blood. I ran away from there like anyone else would do, worried that I would be accused of it and went back home”. As soon as you end the conversation, the sheriff asks you if you can identify the men. What would you do?',
    options: [
      {
        text: 'Tell the sheriff that you can identify both of them',
        nextText: 'B8'
      },
      {
        text: 'Lie to the sheriff that I couldn\'t see them in the dark, just to get over this case',
        nextText: 'B9'
      }
    ]
  },
  {
    id: 'B5',
    text: 'As you were really afraid to go to the police station all by yourself, you ask the sheriff if it would be okay to describe the scene of the crime in front of all people. The sheriff nods and you tell him that you happened to visit a nearby store for some essentials and the victim along with two other guys were talking with each other and the tone of argument seemed a bit too off. You lied to the sheriff that you went back home as soon as you took your needs. You don\'t tell anything about the blood you saw and the murder committed. The sheriff asks you if you heard anyone screaming or asking for help, but you deny it. You are told you may be called back for further questioning. After returning home, tired, you drop onto your bed and pass out. You feel cold air blowing on your skin, and you wake up traumatized. You closed the door after coming in and you have that inkling of someone else in your house. You hear things crashing right outside your house. You close the curtains and rush to your kitchen to see your back door opened. What would you do?',
    options: [
      {
        text: 'Close the door and call the emergency number',
        nextText: 'B10'
      },
      {
        text: 'Trust your intuition, and search your house',
        nextText: 'B11'
      }
    ]
  },
  {
    id: 'B6',
    text: 'You finally risk grabbing the gun; however, the gun falls and he runs away. Though all this seems to be a bit too far from your capability you still don\'t want to call the sheriff, and you close the door. You take the gun and hide it in the drawer. You take some pills for your heart thumping so hard and fast and you go and take a nice warm shower to relieve your stress. You get into the shower, the cubicle all misted by the hot water from the shower. You see through the glass and find a shady figure. You clear your eyes and he is in front of you with his knife already stabbed inside you.  Who is he? He is not the guy who murdered the girl. Your vision slowly blurs and you lose your consciousness… forever.',
    options: [
      {
        text: 'Start Over',
        nextText: '0'
      }
    ]
  },
  {
    id: 'B7',
    text: 'You dare to spill the coffee on his face and he goes fazed. As soon as you spill the coffee you take his gun and point it to him. With a gun in your hand, you could shoot him or call the police. You take your phone to call the emergency number with your finger on the trigger. As soon as you reach your phone, the guy stands up to attack you and you press the trigger just to find him dead. Your hands are trembling and he is dead on the floor. You close all your doors and curtain your windows and turn off all the lights. You are stuck at the moment and you are still trembling. You go all weak and numb at once. A lot of thoughts running in your mind but you don\'t want to be prisoned. You take the gun, hide it under your bed temporarily and clean up the blood. You are left with the body right now. You grab the body, put it in a garbage bag and tie it. As soon as you complete tying and raise your head, you see someone staring at you in a black hood from the corner of your window. He ran away as soon as he saw you. What would you do?',
    options: [
      {
        text: 'Call someone close to you immediately and tell everything to them',
        nextText: 'B12'
      },
      {
        text: 'Sort this out yourself',
        nextText: 'B13'
      }
    ]
  },
  {
    id: 'B8',
    text: 'You choose to side with the law and describe the both of them you had seen. You are taken to the precinct and sat down. A professional caricature artist is brought to you. She sits down and gets her tools out - ready to sketch. You give a dubious description and the artist turns the sketch around to you, asking for confirmation. You nod in affirmation and -',
    options: [
      {
        text: 'Run your hand over sketch',
        nextText: 'B14'
      },
      {
        text: 'Ask permission to take a photo',
        nextText: 'B15'
      }
    ]
  },
  {
    id: 'B9',
    text: 'You tell the sheriff that the incident took place in the dark and their faces weren\'t visible. The sheriff, though sceptical, appreciates you coming down here and walks away. Early in the morning the next day, your phone rings. \'Sheriff\', reads the caller ID. You -',
    options: [
      {
        text: 'Accept the call and proceed to talk',
        nextText: 'B16'
      },
      {
        text: 'Ignore the call',
        nextText: 'B17'
      },
      {
        text: 'Decline the call',
        nextText: 'B18'
      }
    ]
  },
  {
    id: 'B10',
    text: 'You shut the door, sprint to take cover behind the shelf and dial the emergency number. With adrenalin-filled blood pumping, you manage to convey your location to the operator. 4 minutes in, you hear faint siren sounds. You sigh in relief only to hear footsteps approaching. “..This is the end of me”, you whisper to yourself. The sirens get louder but they may just be too late. You aren\'t sure if the person is armed but you are quivering regardless. You -',
    options: [
      {
        text: 'Lunge toward the basement door and hide till cover arrives',
        nextText: 'B19'
      },
      {
        text: 'Try to take the person down by surprise',
        nextText: 'B20'
      }
    ]
  },
  {
    id: 'B11',
    text: 'You think to yourself,” alright. This is now or never. Instead of waiting for him to spot me, I will spot him first and wait for the right moment to take him down.” You grab a knife from the kitchen and tip-toe through the hallway. You hear birds fly away from where they usually camp on your balcony (you live on the 1st floor). “Bingo”, you said to yourself as you lunge forward to take him/her down. \n\
“It\'s a...it\'s a CAT…”, you say with a sigh of relief. You feel a sharp pain in the back of your neck as your vision starts to get blurry. You-',
    options: [
      {
        text: 'Try to jump off the balcony',
        nextText: 'B21'
      },
      {
        text: 'Accept fate and pass out',
        nextText: 'B22'
      }
    ]
  },
  {
    id: 'B12',
    text: 'You take the phone onto your trembling hands and manage to dial the number of a trustworthy friend. He picks up and you briefly describe the situation while panting and ask him to rush to your place. A few minutes later, somebody rings your doorbell. Terrified, you hide the body with sheets and cover the blood up. You gently move towards the door as they yell,” Open up! It\'s me!” You collapse onto the floor with your hands on your forehead. “What have I done? What must I further endure?” You open the door and let your friend in. Those 10 minutes of you being stuck with the body felt like an hour. You rush him in and shut the door and give an elaborate explanation. “Don\'t you worry, Hand this over to me. No biggie”, he says. You feel relieved but confused at the same time. You-',
    options: [
      {
        text: 'Give the body away to him',
        nextText: 'B23'
      },
      {
        text: 'Tell him that you are in this too and work together',
        nextText: 'B24'
      }
    ]
  },
  {
    id: 'B13',
    text: 'You have decided to keep this to yourself. You rush to a nearby convenience store to get the materials & chemicals required for neutralizing the situation. The cashier looks at you with suspicion while billing the items. You manage to pass this by hiding behind the mask. You painstakingly carry the bags and stuff them in your car and drive off. You reach home and stare at the body for a good 10 seconds, thinking back to what you had done. You set the body in the tub and pour acid, a technique the internet had taught you to dissolve a human body. The fumes produced were unbearably smelly and toxic. You finish the procedure, lay on your bed and instantly doze off. You wake up at 3 AM to the sound of your window smashing. You walk up to it to find a stone with a note tagged to it. It read,\'7AM, St. Lukesberg, 12/29\'. Puzzled, you-',
    options: [
      {
        text: 'Peek out of the broken window',
        nextText: 'B25'
      },
      {
        text: 'Grab your phone and look up the address',
        nextText: 'B26'
      }
    ]
  },
  {
    id: 'B14',
    text: 'As you run your hand over the sketch, something bright lights up. In an instant, you have been put in a trance state with a bright avatar coming to life in front of you. You gather yourself to ask who you are but a tap on your forehead leads to your eyes shutting and your body going numb as you fall on the floor with a \'THUD\' and feel your sense slipping away from you…',
    options: [
      {
        text: 'Start Over',
        nextText: '0'
      }
    ]
  },
  {
    id: 'B15',
    text: 'The artist turns to the sheriff to which he replies with a nod. You snap a pic of the sketch, to share it online later, “Every bit helps” you think to yourself. The sheriff informs you that you might be called in later for further questioning and identification, you smile and assure him that you are willing to cooperate. You thank him and leave the prescient for home, it\'s gotten quite late and one of the deputies asks to drop you, you humbly oblige and follow him to his car. You get in the car and give him your address. He makes small talk to you, who wouldn\'t awkward silences are the worst, he drops you off and you thank him. You turn to the front door, he isn\'t leaving, you turn back and wave at him, he waves back but he doesn\'t move an inch. “It\'s just my anxiety acting up, he\'s probably just observing some protocol.” to tell yourself. Suddenly, the engine stops roaring, you feel a chill run down your spine. You -',
    options: [
      {
        text: 'turn around to check on him',
        nextText: 'B27'
      },
      {
        text: 'rush in and lock the door behind you',
        nextText: 'B28'
      }
    ]
  },
  {
    id: 'B16',
    text: '“Wolfram? This is the sheriff speaking. I need you to come down to the precinct now! We might have a lead on yesterday\'s case-” What do they know? Why is it so urgent? You put on the first thing your hands grab from the closet and jet off. As you exit the house, you have an eerie feeling, a chill runs down your spine, you haven\'t got time to worry about the small stuff so you shrug it off and make your way to the car. That\'s weird the tires are slashed, they were fine yesterday when you drove back from the station. You think to yourself, “Must have been those drunk frats from down the street, ugh how annoying! I\'ll call the mechanic later, it\'s already gotten late.” You turn around and there is a person in a hoodie and mask in front of you, holding an axe. You -',
    options: [
      {
        text: 'stand there frozen',
        nextText: 'B29'
      },
      {
        text: 'bolt forward, head first',
        nextText: 'B30'
      },
      {
        text: 'reach for your phone',
        nextText: 'B31'
      }
    ]
  },
  {
    id: 'B17',
    text: 'You have just about enough of this bullshit. You wanted it to be over, to be able to put it past you, just f***ing move on. You reach the phone and lock it to silence the call and go. *BOOM* \n\
7News: “We are just getting a note from 1st responders that the house on 13th Street, Boldmere Avenue belonging to Mr Thomas has been set ablaze, possibly due to a gas leak- What\'s that? Are you sure? We regret to inform you of this but there are no survivors. I repeat NO SURVIVORS. ”\n\
So this is how it ended? A gas leak huh. Was it an accident? What was the sheriff going to tell me? Tsk, now I\'d never know...',
    options: [
      {
        text: 'Start Over',
        nextText: '0'
      }
    ]
  },
  {
    id: 'B18',
    text: 'What could be so important that you\'d call someone this early? You decline the call, but then it hits you: What if it\'s a break in the case? You think about calling him back but you get another call this time from an unknown number. You are hesitant but what if it\'s just the sheriff again? You pick up and let out a “Hello, who\'s this?” -no response- “Is this the sheriff\'s office?” -again no response- You hang and redial the sheriff but he\'s on another call. You begin to freak out. Who was that? Did they mean to scare me off the case? You get a weird feeling in your gut so you decide to get up, something\'s off, the air feels heavy. You drag the window open but it doesn\'t help much, it\'s getting nauseating. You rush -',
    options: [
      {
        text: 'outside to get some fresh air',
        nextText: 'B32'
      },
      {
        text: 'to the bathroom for your anxiety medication',
        nextText: 'B33'
      }
    ]
  },
  {
    id: 'B19',
    text: 'This is it if you can lock yourself in the basement and wait out till the authorities arrive. You lunge yourself to the basement door and lock yourself in, you were too scared to look back - to check if they were chasing you. Silence - no banging on the door, no more footsteps but the air feels dense, hard to breathe in, you tell yourself “I did it, I got away, now all I have to do is wait.” The air is getting musty and thick, you hear the sirens, they must be close, you pass out...\n\
“We got a report of a break-in and came as soon as we could but it was too late, the house was already ablaze when we turned into the street. The fire had started in the kitchen and spread from there. Unfortunately, we don\'t have any confirmation if anyone is or was inside, the fire doesn\'t pose as big of a threat as the smoke, the monoxide released from contained combustion such as this is can kill in a few mins for giving breathed in” - First responder to the local press',
    options: [
      {
        text: 'Start Over',
        nextText: '0'
      }
    ]
  },
  {
    id: 'B20',
    text: 'Realizing that you just have the element of surprise, you muster all of your remaining courage, close your eyes and jump in the direction of the footstep. You land head first onto the floor, confused, you look up to see a person in a joker mask staring down at you. They smack you across your face - one, two, three - harder with every hit. “Hussshhh, it will soon be over, all those questions eating you away will be eaten away when you meet her in heaven.” they grab you by your hair and drag you across the room “Now where did I leave my axe? Oh, I know I\'ll just grab something from the kitchen” they drop you and larks to the kitchen. You don\'t have much strength left, your vision is getting blurry, this is your last chance. You -',
    options: [
      {
        text: 'scream, scream as loud as you can - your life depends on it',
        nextText: 'B34'
      },
      {
        text: 'lie on the ground, playing dead, in wait for one last ambush attempt',
        nextText: 'B35'
      }
    ]
  },
  {
    id: 'B21',
    text: 'You manage to jump off the balcony but that\'s the last thing you can think of as you slowly lose your consciousness. Luckily one of the tenants in your building notices you falling, gets down quickly and calls an ambulance. The neck injury turns out to be severe resulting in paralysis.\n\
SPENDS DAYS IN HOSPITAL AND GETS VISITED BY FAMILY WHO FILES COMPLAINT.  POLICE TRY TO INVESTIGATE THE CASE BUT FIND NO IMPORTANT CLUES. CASE REMAINS PENDING. \n\
 You recover after a few months and wonder what happened with the old case. The murder mystery wasn\'t solved and the police never came to a concrete conclusion regarding the murderer. You never see the killer again',
    options: [
      {
        text: 'Start Over',
        nextText: '0'
      }
    ]
  },
  {
    id: 'B22',
    text: 'You accept fate and turn around, only to find out that it\'s the killer himself who hit your neck, before passing out. The injury is too severe and results in your death. The killer ensures no traces are left and leaves the building.',
    options: [
      {
        text: 'Start Over',
        nextText: '0'
      }
    ]
  },
  {
    id: 'B23',
    text: 'You give the body away to him. He loads the body in a car, and just before he leaves you to ask him how he would handle the situation. He tells you that he\'s going to dump it in an old abandoned house he knows and acts like it\'s all fine, but in reality, he\'s still sceptical of your story and doesn\'t let you know about his doubts. Just as planned, he dumps the body and gets back to you, only to find police at your home and gets arrested. They realize that they were tipped off to the police, most probably by the person who was watching through the window. Both land in jail after being proven guilty of the crime and trying to cover it up instead of informing the police.',
    options: [
      {
        text: 'Start Over',
        nextText: '0'
      }
    ]
  },
  {
    id: 'B24',
    text: 'Still being concerned with the body, you tell your friend that you too would be helping him and he\'s fine with it. Then while discussing possibilities of being tracked by the police, both of you now are convinced that the guy who watched the scene and escaped might tip the police about the incident and the best way is to escape the house for some time until finding more leads related to the killer. Just as you guys leave in your car, you hear the police siren and indeed they are approaching your home, but you don\'t know if the police are at your place for assistance in the previous case or to arrest you. Not wanting to take any chances, both of you rush immediately and do things just as planned. Now you have two options left on your mind-',
    options: [
      {
        text: 'stay low for a few days and stop investigating',
        nextText: 'B36'
      },
      {
        text: 'stay low but keep investigating the crime',
        nextText: 'B37'
      }
    ]
  },
  {
    id: 'B25',
    text: 'You peek out of the broken window and find a person moving suspiciously. Building up courage, you run behind him and he starts running too once he notices you. After a few seconds of chasing, the person seems to have disappeared and you reach a fork in the road. Now you\'re confused about choosing the path.  You turn left, then right, left again, wandering around with no clue where the guy went. Just as you turn around a speeding car rams into you directly. The collision being too severe results in instant death.',
    options: [
      {
        text: 'Start Over',
        nextText: '0'
      }
    ]
  },
  {
    id: 'B26',
    text: 'You grab your phone and look up the address with a question- “who\'s this guy and why he wants to meet me?” You do realize he\'s probably someone who knows some important information and not a guy who wants to kill you, as had that been the reason he would have done that at your home itself. You prepare yourself for going to the address.  There\'s nothing mentioned in the note to come alone. You think if you should be going alone or with your trusted friend. You-',
    options: [
      {
        text: 'call your friend, tell him nothing about the incident and ask him to assist to the place',
        nextText: 'B38'
      },
      {
        text: 'go alone',
        nextText: 'B39'
      }
    ]
  },
  {
    id: 'B27',
    text: 'You sense a vicious presence behind you while your heart has almost exploded. You turn back to see a pleasant smile on his face. You try to ask the most obvious question. Shockingly, he melts down into a slime. As you cannot believe what you saw, the slime expands and doubles its size. “What the f-”. You attempt to make a run but the slime had no intention of letting you go. It quickly charged forward and engulfed you. You spend those few seconds trying to process what just happened as you were being dissolved by its juices...',
    options: [
      {
        text: 'Start Over',
        nextText: '0'
      }
    ]
  },
  {
    id: 'B28',
    text: 'You accelerate in an instant into the house and lock yourself in. Not knowing what was following, you sprint upstairs, hoping you would lose him. You turn back to check on a door cracking sound and see two hook-like arms have impaled the wooden door. You sprint to the top floor and enter a room that you think may be the best possible escape route. You look out the window and see a swimming pool. Without further ado, you shut your eyes, close your nose and jump into the water. “Heh? This feels weird...What the-”, you open your eyes to see a place with a brightly shining sun and a large grassland. “Have I been teleported or something?” You then see a couple wearing a particular type of clothes. What shocks you the most is you see a number over their heads. With questions overwhelming your brain, you-',
    options: [
      {
        text: 'Approach the couple',
        nextText: 'B40'
      },
      {
        text: 'Turn and run',
        nextText: 'B41'
      }
    ]
  },
  {
    id: 'B29',
    text: '“The best code of conduct right now is no resistance”, he said in a stern hoarse voice. He takes you to a dim-lit gully. ”Cooperate with me and you may live”, he says while tying your hands behind your back. *You are knocked out by a punch on your face*. You wake up with a throbbing head and a bleeding nose. “Well well, let\'s start with your fingers shall we?” he asks rhetorically as he makes a small incision. “HUH, WHAT THE F***?! UGH AAH! Please, leave me. What have I done to you? I- I don\'t even know you-”. “Oh yeah. You may not know me. But I sure know you.” You-',
    options: [
      {
        text: 'Ask him what he wants',
        nextText: 'B42'
      },
      {
        text: 'Spit at him and tell him you have reinforcements coming your way',
        nextText: 'B43'
      }
    ]
  },
  {
    id: 'B30',
    text: '“No other way. I see no other way. He has a melee weapon, doesn\'t he? All I have to do is bolt forward, head first assuring a miss from his potential swing.” You had your plan established. You counted down ”3...2...1” and burst as fast as you could. With a single swing, he axed your right foot and immobilized you. All that was left for him to do was eliminate evidence and you could do nothing but wait for those excruciating moments of pain to pass away.',
    options: [
      {
        text: 'Start Over',
        nextText: '0'
      }
    ]
  },

  {
    id: 'B31',
    text: '“I have seen them do this in movies. I can pull this off. All I have to do is slide one finger into my pocket and-”   \n\
[evil laughter]\n\
Puzzled, you ask, “I\'m sorry, what?”; “Hey, do you like movies?”, he asks.\n\
Astounded, you reply with a stammer. “M- movies... Aah...YES! I- I love them. W- why do you ask?”; “I love movies too. You aren\'t trying to do anything stupid, are you?” he asks while clutching his axe harder. You are bewildered and are not thinking straight. He asks you to take your phone out and place it on the floor. You bending down to place your phone was the last thing you remember as he dismembers your head from the rest of your body.',
    options: [
      {
        text: 'Start Over',
        nextText: '0'
      }
    ]
  },
  {
    id: 'B32',
    text: '“This suffocation, my mind- ugh! I need some fresh air.” You open the balcony door and breathe in the fresh air. But what is this feeling? You hear dogs barking, furiously. In your neighbourhood, this is unusual. Those dogs are friendly and licked at anyone that came by their ken. Next instant, the power goes off. You panic. Your breathing starts to get irregular and your vision starts to blur. You gape into the streets and see a man wearing a black robe firing electric jolts at the dogs, their barking silences. You-',
    options: [
      {
        text: 'Run down to investigate',
        nextText: 'B44'
      },
      {
        text: 'Throw something at him',
        nextText: 'B45'
      },
      {
        text: 'Call the sheriff',
        nextText: 'B46'
      }
    ]
  },
  {
    id: 'B33',
    text: 'You desperately need your anxiety medication. You run in pushing everything in your way, open the pill bottle and shove in a few down your throat. Your throat begins to tickle and the next thing you know is you are coughing out blood. “Huh? Wh-” baffled, you look at your hands in disbelief and then at the pill. You were certain that that was your medication only. What had happened is a mystery. You cough out too much blood and die from pulmonary fibrosis. Rest in peace.',
    options: [
      {
        text: 'Start Over',
        nextText: '0'
      }
    ]
  },
  {
    id: 'B34',
    text: '“HELP! SOMEBODY… PLEASE HELP!@#$” screaming as loud as you can... People nearby hear them and rush towards your apartment.. “Close the door!” the man in the mask yells. His associate closes the door and shuts your mouth “You think these people are gonna save you? No one\'s gonna save you, not from us..”, [manic laughter] and BANGG!!',
    options: [
      {
        text: 'Start Over',
        nextText: '0'
      }
    ]
  },
  {
    id: 'B35',
    text: 'They return from the kitchen with a butchering knife, but you lie on the ground playing possum... “BOSS! I think he\'s dead, he isn\'t moving, lemme check his pulse..” the associate places his forefinger near your nose to check your breath, thanks to your swimming classes you can hold your breath long enough. The associate looks at his boss “He\'s dead! Dead for good..”. They shut the doors and close the curtains. The sirens finally approached. “we shouldn\'t have killed the girl, we shouldn\'t have killed him too.. This was a mistake” “SHUT THAT FUCKING HOLE OF YOURS! We\'re surrounded, let me think in peace”. All this time you\'ve been hearing their conversation and planning your next attack. You notice that the knife is left on the table and they\'re yelling at each other standing near a window in the kitchen. What would you do?',
    options: [
      {
        text: 'Take that knife and attack one of them from the behind using your stealth skills',
        nextText: 'B47'
      },
      {
        text: 'Take that knife and take guard behind the wall in the hall and wait for the authorities to come up',
        nextText: 'B48'
      }
    ]
  },
  {
    id: 'B36',
    text: 'Decided to stay low and stop investigating, you drive away from the house to get rid of the corpse, “WOLFRAM! Wait..” suddenly you hear someone calling you from the footpath, it\'s the sheriff, your body goes numb, you have a corpse in your car... “If I get caught it\'s done! My life will be ruined… oh god what have I got dragged myself into..” you take a deep breath and accelerate insanely to get away from the sheriff. “Hey, kid!! STOP!!” yells the sheriff. In the middle of this chaos, you take a right turn without judging the speed you\'re at, “DUDE!! LOOK...” BANG !! your car hits a truck and then your car somersaults in the air…',
    options: [
      {
        text: 'Start Over',
        nextText: '0'
      }
    ]
  },
  {
    id: 'B37',
    text: 'Decided to stay low you drive away from your home, to get rid of the body.”OH, SHIT!!@#” You come across a few cops on the road. “Dude!! Are you fucking insane?? Drive the fuck away from them, I don\'t wanna end up in jail for the rest of my life”, says your friend.”I know!! I know..” You try to drive away from them in a hustle. The cops see you hustled driving and ask you to pull over. You don\'t have another option but to pull over so you pull over in the middle of the street. A cop arrives at your window “Oh… you\'re down at the station yesterday right, we\'re actually on our way to your home to pick you up, there\'s a man who claims to have seen the murderer… now c\'mon let\'s go..”. “Oh, umm.. ” you sweat immensely, “Is everything alright son!?” the officer asks. The officer suspects your behaviour and looks back inside your car, “what\'s in that bag?” asks the officer... “Nothing officer.. Ahem!”... “Let\'s take a look at it!”, the officer opens the door and grabs the bag to find it dripping with blood... And you hear from the back “Step out of the car son, you\'re under ARREST!”',
    options: [
      {
        text: 'Start Over',
        nextText: '0'
      }
    ]
  },
  {
    id: 'B38',
    text: 'You call your friend. He answers, “Yo, what\'s up my man?”. “Dave.. listen up, I\'ve got something to take care of downtown, I was just wondering if you could help me with it”. “ [silence] what\'s up man? Is everything okay?”. “Yeah, just come down I\'ll explain… and also bring the Mustang.” Your friend arrives at your house. “DAMNN!! What\'s that smell? Is something dead in here?”... “Just ignore that, let\'s go”. You and your friend drive to St. Lukesberg, 12/29. You see a guy standing near a coffee shop with a rugged look... “Who\'s that man? Looks like he\'s just standing there idle.. Yeah maybe it\'s him.” you think to yourself... Now you can do two things:',
    options: [
      {
        text: 'Ask your friend to stay in the car and go to the man to talk',
        nextText: 'B49'
      },
      {
        text: 'Tell your friend to stay cautious and take him with you to talk with that man',
        nextText: 'B50'
      }
    ]
  },
  {
    id: 'B39',
    text: 'Decided to go alone, you go into the bathroom to take a bath. But you couldn\'t, going inside the bathroom reminds you of the CORPSE that you dissolved in acid. Ughhh... You lock your apartment and hire a taxi. “Good morning, so..where are we going today?” asks the driver with a smile. “St. Lukesberg, 12/29”, you reply in a low tone. “Ohh, okay..”. You reach the destination. You pay the driver and get down from the car. Your look around. There\'s no one, it\'s completely deserted... All the shops are closed and you look at your watch, it\'s 6:50 AM. You wait under the street light for someone to show up. It\'s cold and you feel something\'s not right around you… suddenly you feel someone\'s presence behind you… within no time there\'s a hand on your shoulder. What would you do?',
    options: [
      {
        text: 'Reach out for the gun, the one you killed the black hooded guy with, turn back and scare him by aiming at him and know everything you wanna know',
        nextText: 'B51'
      },
      {
        text: 'Stay calm and ask who he is and why he called you to meet him there without turning back',
        nextText: 'B52'
      }
    ]
  },
  {
    id: 'B40',
    text: 'You approach them and introduce yourself “Hi, I\'m Wolf-” the one in red pushes his index finger to your lips and the one in blue points upward. You look up to see the number 1229 floating above your head “Welcome 1229” you stumble back as you hear the voice, you look around only to see that their lips aren\'t moving “Don\'t be afraid 1229. This is Paradise and yes we don\'t need to talk here, our minds are connected to The One. Let\'s start with a tour, shall we?” “This is crazy, I\'m not dead, I can\'t be dead, not yet” “My boy, Paradise, is but a new virtual juvenile prison system, a chance at ... redemption.” Your surroundings go dark',
    options: [
      {
        text: 'Start Over',
        nextText: '0'
      }
    ]
  },
  {
    id: 'B41',
    text: 'You turn around and run, the blades of grass glide across your feet, you feel the sunshine on your skin, the wind in your hair, your hearts racing, out of fear but you feel alive. What is this place? Who were those people? All those questions, the fear starts drifting away. You begin to slow down and finally stop “What am I running from?” you think to yourself. You turn to see an empty grassland, not a creature in sight. Beep, beep, beeeeep You look down to see the ground flashing red. “What the fu-” The ground cracks to swallow you whole. The wind blows across the desolate grassland as the grass swings rhythmically.',
    options: [
      {
        text: 'Start Over',
        nextText: '0'
      }
    ]
  },
  {
    id: 'B42',
    text: '“Tf you want?” “Just need you to forget something real quick and if you can\'t well...I\'ll have to make your stay in the ground for good” He completes the incision he made earlier and peels off the fingerprints from your right index finger “Just in case you do die, I wouldn\'t want you to be recognised until I\'m far far away from this place” “I promise to seal my lips, please spare me, please” “Huh, a plea I hear. I saw you that day the girl died and I know you saw me too. I followed you that day, would have let you off but you ended up at the precinct that\'s when I knew something had to be done.” “I beg you, please let me go, I\'ll lie, I\'ll give them false testimony. Please let me go” “Enough! I heard enough. Now that you know why you are here, it\'s time to shut you up” He drops the scalpel and picks up the axe and prepares for a swing. You close your eyes, angry, anxious but prepared to die. Bang The hooded man drops on your lap, blood pouring from this head. “Kid, kid, are you ok? Medic! Take a look at the boy” The sirens, the officers mumbling, the lights flashing, everything fades, diluting into nothingness - silence. You look down and all you see is blood, blood everywhere \'WOLFRAM!“ the sheriff\'s voice rings you back to reality - the noises and lights are back - “Son, did the man tell you anything about him or why he targeted you?” You open your mouth and mutter in a slow squeaky voice “The girl”. You look down at your finger, the medic treated it and now it\'s bandaged, this scar will remain, serving as a constant reminder of the incident. You survived, right? Or did you..',
    options: [
      {
        text: 'Start Over',
        nextText: '0'
      }
    ]
  },
  {
    id: 'B43',
    text: 'You spit at him and remark “I was supposed to at the precinct, the sheriff knows something is up if I don\'t show up, he\'ll be here any second” He drops the scalpel from his hand and starts laughing “You do know that I am the one in control here. While you were having your knock-out nap, I texted the sheriff from your phone that you weren\'t feeling well and could come by tomorrow. Haaa Haa ha. By that time, I\'d be long gone and so will you, Lil Wolfram. Hmmm, Wolfram as in wolf-ram, clearly you are the ram and I the wolf that\'s gonna hound you down and to pieces” He picks up his axe and goes in for the swing. You close your eyes, hoping it would mask the pain of death but you feel the cold blade kiss your neck, the area around it feels warm as the blood begins to trickle out of the now open wound. Everything fades to black all that\'s left is his chuckle…',
    options: [
      {
        text: 'Start Over',
        nextText: '0'
      }
    ]
  },
  {
    id: 'B44',
    text: 'You can\'t take it anymore, all this can\'t be real “It must be my Schizophrenia acting up” you think to yourself while trying to breathe steadily. “Probably just a misunderstanding, one of those fart boys, from across the street,  must have tased the dogs.” You decide to go down and clear things up with the \'electric man\', you run down and into your lawn, arms flailing, calling out for the man. You open your mouth, to call him, to grab his attention Zap before you could react, you were hit by a bolt of lightning. Who was the man? What was he doing here? Why me? As the light fades from your eyes, your questions die with you - unanswered.',
    options: [
      {
        text: 'Start Over',
        nextText: '0'
      }
    ]
  },
  {
    id: 'B45',
    text: 'What was going on? Whatever it was, it wasn\'t right so you pick up whatever is next to you, which happens to be an old alarm clock and fling it at the man. The moment the clock leaves your hand, you see a tiny spark appear by the man\'s fingers and before you knew it the clock that you threw was gone, almost like it was vaporized. You stumble back in shock, he is looking at you. You see another spark form, you turn and run but it\'s too late. Your lifeless body lies on the floor of your bedroom - a fate too cruel?',
    options: [
      {
        text: 'Start Over',
        nextText: '0'
      }
    ]
  },
  {
    id: 'B46',
    text: 'You stumble back. What The Fuck was going on? You decide that it\'s best if the cops handle this, you pick up your phone and dial the sheriff\'s number. While the call connects your curiosity makes you peak outside “Just a glimpse” you tell yourself. “Alice… Alice… Where are you, Alice? You shouldn\'t be running the streets while daddy at work. There are some bad people out there but, daddy\'s here now and he\'s got a gun, a taser and a baton.” Who was this crazy man and who\'s \'Alice\'? “The number you have called is not answering, please try again later...” the phone didn\'t connect. “Damn it, I have a lunatic on the street, the call isn\'t going through. What could make it worse?” Ring The sheriff is calling you back but your ringtone grabs more than just your attention. The man turns his head in the direction of the sound and you can now see his face but all that you notice is his wide grin. You freeze and drop your phone still ringing, he fires a shot but not at you at your kitchen window. KABOOM Your house is on fire but you can\'t move you are stuck in place and it hits you the murder, Alice, the man, the grin, nausea, the gas; all the pieces fit - so perfectly, it\'s a shame you won\'t live to tell the tale.',
    options: [
      {
        text: 'Start Over',
        nextText: '0'
      }
    ]
  },
  {
    id: 'B47',
    text: 'You take the knife and attack one of them from behind. Bad for you, you miss to take a good shot and that alerts both of them. They finally kill you with the knife with a single stab, not wasting any time for police to reach them.',
    options: [
      {
        text: 'Start Over',
        nextText: '0'
      }
    ]
  },
  {
    id: 'B48',
    text: 'You take that knife and take guard, slowly getting behind the wall and waiting for authorities to come up. Unknown to you, you\'ve been observed all this time by the associate and he didn\'t want to panic once he noticed the knife in your hand. He starts getting to you from behind, grabs the knife and punches you in the gut. Unable to even shout, you collapse to the ground. They soon realize there\'s no way to escape and kill you. As soon as the police see both of them near the bloody body, the killers are shot. Identifying the killers, the police finally manage to solve the case, but that means nothing to you, who had been killed for only one reason, “being present at the wrong place at the wrong time”.',
    options: [
      {
        text: 'Start Over',
        nextText: '0'
      }
    ]
  },
  {
    id: 'B49',
    text: 'You go alone to the location and stand in front of the idle guy, but he doesn\'t respond. A hand pulls you from behind and when you turn, he reveals himself as the guy who asked you to come. He takes you to a truck parked near and gives you a deal, ”Due to an internal conflict one of us had to eliminate the girl that night. But you did kill one of our own, and in any other case, we wouldn\'t have left you. But since we don\'t want another murder to happen “again”, we are giving you the only chance. Stay calm and get out of this matter completely. Another wrong move from your side, believe me, you will be tracked down and killed”. Scared and not wanting to involve in the issue, you do just as he instructs and leaves the case entirely, yourself being involved in a murder case!\n\
Life passes by and the case remains unsolved.',
    options: [
      {
        text: 'Start Over',
        nextText: '0'
      }
    ]
  },
  {
    id: 'B50',
    text: 'You take your friend along with you. The guy notices both of you, and mistaking your friend for an officer, gets alarmed and sends a signal through his phone. Just as you try to cross a road a truck hits both of you, resulting in your demise.',
    options: [
      {
        text: 'Start Over',
        nextText: '0'
      }
    ]
  },
  {
    id: 'B51',
    text: 'You reach out for the gun and aim at him. He was indeed prepared for that and was having a gun already aimed at you. He goes on to take a quick shot and receiving it you pull your trigger but missing the target. He goes on to take a headshot.\n\
You die on the spot. The guy flees the scene',
    options: [
      {
        text: 'Start Over',
        nextText: '0'
      }
    ]
  },
  {
    id: 'B52',
    text: 'You stay calm and ask who he is. He starts telling you, “Due to an internal conflict one of us had to eliminate the girl that night. But you did kill one of our own, and in any other case, we wouldn\'t have left you. But since we don\'t want another murder to happen “again”, we are giving you the only chance. Stay calm and get out of this matter completely. Another wrong move from your side, believe me, you will be tracked down and killed”. Not wanting to drag the issue any further and you being involved in a murder, you agree to whatever he asks. The case never gets solved.',
    options: [
      {
        text: 'Start Over',
        nextText: '0'
      }
    ]
  },
  {
    id: 'G1',
    text: 'You feel like you\'re forgetting something very important and can\'t let go of that feeling. Reluctantly, you collect yourself and move to the bedroom window. It\'s winter, a cool morning breeze flows in and fills the room, giving an appealing vibe. You see snow slowly falling, the streets are filled with snow. A striking realisation dawns on you, the place where you used to live doesn\'t get a snowfall, not an inch. But, here you see snow on the streets, unfamiliar people in the neighbourhood. You don\'t know what is happening “Aaron!” You hear a voice behind you, you turn to see a woman in her late 20\'s in formal attire, wearing a handbag "You aren\'t ready yet!? Aren\'t you going to be late for your 1st day at the beach? I\'m leaving for the office" You don\'t know what she\'s talking about so you just nod your head as she leaves the house. You look out the window again, what’s this? It’s no longer snowing, it’s peak summer, the glare from the sun hurts your eyes and causes you to squint. Confused, you pick your phone and see an email from Baywatch.Inc subject lined: Welcome to the Baywatch Family...\n\
\n\
You get to the beach, sit on the lifeguard chair(that email really helped) and gaze at the ocean. It was a cloudy day you see people playing on the sand, swimming, surfing. You notice a middle-aged man in shorts, with gold plated sunglasses chilling on the beach. Not be bothered by all the commotion, you decide to listen to some music, feel of the sea breeze and try to relax. Suddenly, you catch the sight of a person flailing and receding underwater. It was a little girl and her mom is screaming for help "Someone please save my daughter" she shouted. You get your thoughts straight and begin running towards her. It was your duty to save this person.\n\
As you start running, you see the another woman pointing at a figure in the water, this time it\'s a man. Now you have 2 people who are seemingly going to die in a few minutes unless you rush in. But...there\'s a catch..it\'s high tide and if you go for saving one, it\'s most likely that other will die.  Who will you choose:',
    options: [
      {
        text: 'The little girl, an 8yr old, may hold unbound potential',
        nextText: 'G2'
      },
      {
        text: 'The man in his 40\'s, chairman of some company, maybe reward you with a hefty sum',
        nextText: 'G3'
      }
    ]
  },
  {
    id: 'G2',
    text: 'After thinking for a minute, I decided that I\'m going to save that little girl. Because I was able to hear his father\'s screaming voice ”Help! Help, somebody, please save my daughter, please help”\n\
(I forgot to tell you all that, I don\'t know how to swim, a few days ago just started to take the course on it) I started running towards her, in the direction of heavily running storms now; I\'m very close to her, just the distance an arm\'s length away. *slip* I lost my balance, I was drowning deep into that sea, I felt like all the gravity was concentrated on my legs and pulling me deep into it. It\'s been a minute since I was being pulled inside, and now I\'m so deep in that I can see is darkness.\n\
Suddenly, I felt the touch of something smooth, it was very different somehow I could connect with it. A sharp current started running into my body, I felt energised and I remembered I have to save that girl. I started moving towards her, much faster this time.\n\
(Two minutes later) I was able to save both of them. After bringing them to the surface, I noticed something familiar about the man. It stikes me he was none other than the most WANTED Bankrupt. He recently did the scam of 100 billion dollars in his country and took shelter here. Having gained consciousness, he coughs and whisphers something to me. Now, it\'s time for my decision',
    options: [
      {
        text: 'Call the police, and be awarded a prize of $30000, which I will get for catching him',
        nextText: 'G4'
      },
      {
        text: 'Accept the proposal of 40% shares in his company which he offered me for saving his life, a life-changing offer',
        nextText: 'G5'
      }
    ]
  },
  {
    id: 'G3',
    text: 'That woman, I felt like I had seen her before, but I could not recall who she was.\n\
*splash* I dive into the sea, the cold water shocks my body and it hits me she is Mrs Amane. Mr Amane, my dad\'s boss, he\'d been working with him the last 30 years. He is a kind person, he funded my father when mom was undergoing cancer treatment. Without thinking any further, I swim towards him, I didn\'t want to miss any opportunity to thank him.Luckily, I saved him and managed to bring him towards the shore, and then I went looking for the girl but it was too late, the sea had claimed her. I returned, guilty-ridden. After that, I called the rescue force to handle the situation once the weather came in control. I completed the formalities and asked Mr Amane and his wife to go back home. \n\
       It\'s 5:30 pm. I did my job. I was ready to go home; I took my bag and went home. After that incident, I had a throbbing headache, so I thought of taking a nap. I could hear my grandpa call for me (He died two years back), he asked, "What happened my child, why are you so upset?" I told him about the incident. He said this is life, and here nothing goes as per our wish, we have to learn to live life with the changing condition, we lose our loved ones, we have to learn how to overcome the sadness. If you want to learn all these, Let\'s play one game. I asked excitedly,"What game?" he said, this is the game of life; if you win the game, you will get the solution for all your problems, and if you lose, that will be the end of your life. I will give you these specs, remember these are not ordinary, they are special ones. Whichever book you will read while wearing those specs, you will become the desired character from that book. You will get all the power and skill that the author has given to said character.\n\
Remember that, Once you entered that character, you will no longer remember your previous life. Once the tale is complete, you will be returned to your original self. Now, you have to decide:',
    options: [
      {
        text: 'Whether you will, risk your life and won the game and get a solution for all your problems',
        nextText: 'G6'
      },
      {
        text: 'You don\'t want to risk your life; you just want to live it as an ordinary person',
        nextText: 'G7'
      }
    ]
  },
  {
    id: 'G4',
    text: 'I decided to call the police, this was surely the right thing to do. I went back to my lifeguard chair to get my phone and contacted the local police while keeping a close eye on Walter. The police arrived quickly, arrested him and asked me to come with them to the station to record some details. I was elated, knowing that I was going to receive a huge amount for my good actions. But I was naive. \n\
We were gradually drifting away from the city and to a deserted area, so I asked "Weren\'t we going to the station?". There was a scary silence, no one answered, Walter chuckled. I had now realised something was wrong. The car stopped, doors were opened and I was thrown out and held at gunpoint by the same officers who I had called. "Sorry kid, but these are my men and they do what I tell them to do. Nothing personal, but you messed with the wrong person." \n\
"WHY? WHYYY? PLEASE DON\'T DO THIS! PLEA-" *bang* I opened my eyes, the bullet appeared to move at an extremely slow and it wasn\'t just the bullet,  the flying birds, dunes and even the people in front of me were reacting too slowly. As much as I was shocked, I knew I had to make a decision:',
    options: [
      {
        text: 'Run as far as possible and towards the city with the hope that your power lasts till then',
        nextText: 'G8'
      },
      {
        text: 'Snatch the gun from the person and use Walter as a hostage to get away in the car',
        nextText: 'G9'
      },
      {
        text: 'Snatch the gun from the person and shoot every single one. How many people may have been murdered by them? They deserve death',
        nextText: 'G10'
      }
    ]
  },
  {
    id: 'G5',
    text: 'At first, I felt doubtful about accepting the offer, but with that much money, I could live a much easier life. And so, blinded by my greed, I accepted Mr Green\'s offer. "Why don\'t we meet at my mansion tonight for dinner? My wife and I will be happy to have you." "Sure Sir " I replied. I reached home at 5:30 pm,  overjoyed with the fact that not only had I saved the lives of 2 people,  but also that I was rewarded greatly for it.\n\
I got myself ready for the night, wearing my best attire and left the house. \n\
After arriving at the mansion, I noticed how tightly guarded it was. Mr Green and his wife were waiting for me at the hall, "Welcome Aaron. It\'s great to have you here." We sat and started to have a conversation. I was impressed by Mr Green, with the way he executed his plans, in such a swift manner, and how perfectly it worked out for him. "My entire life has been so boring. I always went along with the system and never rebutted what was given to me. It has been so long since I have been excited while doing something" I announced \n\
He chuckled and replied, "I had a small business in my hometown but I always felt too bound to it. The struggles were harsh and I stopped feeling happy with what I was doing. I started to hate this system and wanted to escape from it. That\'s when I came up with my plan and my life took a 180 turn forever". He then continued, "Why don\'t you work along with me? You will live an unforgettable life, no strings attached! If you do well, I might even make you my successor."\n\
Now it\'s decision time:',
    options: [
      {
        text: 'Work with Mr Green and have a life with no strings attached',
        nextText: 'G11'
      },
      {
        text: 'Refuse his offer. As much as you don\'t like your current lifestyle, you do not want to get too involved with Mr Green',
        nextText: 'G12'
      }
    ]
  },
  {
    id: 'G6',
    text: 'As he was talking more about those aspects, I was getting very excited. I was bored of following the clock, I wasn\'t happy with what I was doing in my life.\n\
I wanted some KICK in life. I was very much excited to try out those specs, so I accepted the challenge. I put on the glasses and started reading one of the most bestseller books\n\
"Search of "I", in this book the author wrote in a very amazing way how a 30-year-old, world\'s best shooter, who lost his memory in a car accident; tackled his mental condition, how his friends and family supported him. and how one day he was able to recover and re-established himself.\n\
          I started getting the same feeling. I felt like my brain gave me some shock, and all the past incidents started rewinding in flashback. I took off the glasses and cried loudly\n\
"Mona" and started crying. Who\'s this "Mona"? You reccollect Mrs Misa Amane, the lady at the beach, you remember was the same womam with the handbag at homw\n\
They were the same prson. Yes, yes my name is Aaron and she is my mom. and that little girl whom I was not able to save that girl is "Mona", my only little sister. but I don\'t understand what she was doing there, she has hydrophobia and what she was doing there. I started blaming myself, what\'s the point of being a pro swimmer? I wasn\'t even good enough to save her. I started crying again.\n\
             *Knock* Someone knocked on the door *Knock* I dried my tears and opened the door. Before I could react she hugged me tightly. I looked down and it was "Mona"; I was amazed, I was surprisingly happy. What\'s happening? Why is see here?\n\
        She whispered, "Calm down, big bro. I will tell you everything, just calm down and sit".\n\
  It\'s been 2 years, since this incident. We all were going on a trip along with dad\'s colleagues. We all were playing and while playing, accidentally Mr Amane was killed because of that ball, which you have thrown. and this made you very depressed and guilty. You even tried suicide but, luckily you were saved but you lost all your memory and you started considering mom and dad as Mr and Mrs Amane. We tried a lot, we consulted many doctors but alas we failed every time. Then we thought to give the last try by giving you the mental shock treatment. Gettting that lifeguard job, those two people drowning, that heavy rain" everything was planned. And you know the rest of the story.....\n\
(And this is how my search for "I" concluded.)',
    options: [
      {
        text: 'Start Over',
        nextText: '0'
      }
    ]
  },
  {
    id: 'G7',
    text: 'I was scared to lose my life on a useless game whose memories I wouldn\'t even remember. Moreover, guilt-ridden from the fact that I couldn\'t save a life, a child, I had to live with that for the rest of my life. I refused grandpa\'s offer and opened my eyes, looking around and I told myself that it was just another stupid dream of mine. Later that night, reporters were flocking outside of our house as the news had spread around of my actions, and people wanted answers as to why I couldn\'t save the child. I felt traumatised and couldn\'t eat or sleep. Dad and mom insisted I ignore them for now and just go to sleep, but even my dreams were haunting me. "Why didn\'t you save me? Was I not meant to be in this world?" This voice kept creeping in my head and the whole night I was filled with regret. \n\
The next day, I was called by my manager to meet him in his office. He informed me that I was fired from my job for not following basic lifeguard procedures, due to which a young life was lost, and was surprised that my decision making was so bad. I had no power to speak for myself and just simply accepted the decision and left for home. My parents were unhappy with the decision the manager had made but knew we just had to accept it. Once they left for work, I was all alone at home just staring at the ceiling with an empty mind, not knowing what to do. Time just passed by and it was 3 pm in no time. That\'s when I received a call from dad asking me how I was doing. He said Mr Amane wanted to speak with me regarding a matter and passed the phone to him. He asked "Hi son, how have been doing? Your father has informed me that you lost your job today and you havn\'t been feeling well since yesterday. I wanted to say that I am grateful that you had saved my life and I know how hard of a decision that may have been for you. And this is why I want to repay you for it in this humble manner. Your father has worked 30 years in my company with complete dedication and will be retiring soon and so I have decided to hire you to fill his place. The job won\'t be easy, but we will teach you everything and surely your father too will help you in your training. I would be really happy if you would accept my decision. I will wait till tomorrow for your reply. Goodbye and take care." Now it\'s decision time :',
    options: [
      {
        text: 'Accept the humble offer by Mr Amane and join his company. This will help you keep your mind focused on a task',
        nextText: 'G13'
      },
      {
        text: 'Decline Mr Amane\'s offer as you don\'t feel like doing anything right now and just want to be by yourself',
        nextText: 'G14'
      }
    ]
  },
  {
    id: 'G8',
    text: 'I started running in the direction of the city, away from those incidentally known criminals.\n\
I was just running, running, and running; after a few minutes when lactic acid in my legs reached its peak level; I was no more able to move.\n\
I felt as if my left leg was floating in the air. Shocked, I opened my eyes and turned around to see where I was\n\
That was the last point of that 60 feet high mountain and my left leg was slipping from the soft sand, and I lost my balance and started living Newton\'s law of gravity.\n\
Ironically, the first day at the job was going to turn into the last day of my life. I closed my eyes, took one long, long breath and shouted "GOODBYE".......and it echoed back to me "Good Bye"....."Goodbye"......."Good by..."........"goooooooooooooooo...................eeeeeeeeeeeeee...."',
    options: [
      {
        text: 'Start Over',
        nextText: '0'
      }
    ]
  },
  {
    id: 'G9',
    text: 'Luckily I became normal ME within seconds. Everything around was the same as before. I was confused about how to get out of this situation. Something awoken within me, I lost control, I grabbed the gun from that so-called "Police" and put Mr Walter at gunpoint, and took him along with me in the car and started driving it with utmost speed, breaking all the driving laws and crashed one jeep in between. The owner of that jeep was Head of Police Department Mr Juzo Megure.\n\
I was puzzled about what I should do...',
    options: [
      {
        text: 'Drive continuously, and at some deserted place, close the chapter of Mr Walter forever',
        nextText: 'G15'
      },
      {
        text: 'Get out of the car and hand over Mr Walter to Mr Juzo and hope for justice for me',
        nextText: 'G16'
      }
    ]
  },
  {
    id: 'G10',
    text: 'After a few minutes of slow-motion drama, I came back to normal. Somehow, I managed to get a gun from that officer, my hands were trembling with that fear\n\
        I didn\'t know what I was going to do with it. I held the gun with both hands tightly, kept my right index finger on the trigger, and started firing *dishhhhhhhhhhhhhh*\n\
That police, Mr Walter, his daughter, and his wife all feel to the ground bleeding. Everyone was finished, and now it was my turn and the last bullet of the gun was eager to finish me *Bang*\n\
I had punished myself for my cruel creul behaviour.',
    options: [
      {
        text: 'Start Over',
        nextText: '0'
      }
    ]
  },
  {
    id: 'G11',
    text: 'The offer sounded great. I could finally move out. I\'ve always wanted to live in a huge bungalow, drive expensive cars. I gladly accepted it.\n\
(A month later)\n\
I\'m living the best time of my life working with Mr Green. He had a gem importing business, he used to go on frequent trips to dockyard every Tuesday night and when he went, he went alone, in his private car. Once, I insisted that I tag along but he becomes ferocious, I sensed something wrong was happening at the dockyard.\n\
  Curious, I followed him to the dockyard on one fine Tuesday, sneaked into the godown and what I saw, I couldn\'t believe my eyes.\n\
They were talking about that week\'s collection and how beautiful the black opals were. It finally struk me "Ship carrying a cargo of precious gems was attacked on Friday and all cargo was stolen." the headline in Sunday\'s paper. These are the ones responsible and Mr Green is one of them. Chills ran through my body and I took a step back and accidentally made a sound *creak* everyone turned in my direction, I could hear them scream "Catch him!" "Do not let him escape at any cost!" I started running 🏃 I had to get away from here. I bolted out of the godown, got on my car, was about to leave...thud thud thud... bullets rained down on me. Death\'s kiss was as cold as steel',
    options: [
      {
        text: 'Start Over',
        nextText: '0'
      }
    ]
  },
  {
    id: 'G12',
    text: 'The offer sounded like I\'ve just hit the jackpot, if I accept it, I would get rich.\n\
Then I remembered the words of my grandpa "Never accept easy money or the money earned from inflicting pain to others."\n\
My mind beacme clear "I appreciate your gratitude but, sorry I have to decline your offer"\n\
I walked out of the house and gladly got back to my daily life as a lifeguard “Ahh, people better not drown today" I sighed and got back to Baywatch.',
    options: [
      {
        text: 'Start Over',
        nextText: '0'
      }
    ]
  },
  {
    id: 'G13',
    text: 'It has already been a week since I\'ve talked with Mr Amane. My mind was gloomy all day. I know I couldn\'t live like this forever. I have to move on and get back to my life someday. So, I accepted the offer and joined their company.\n\
It was hard at first, but I slowly got accustomed to my new job, people and slowly the worst experience of my life began to fade away. I was a better person now, I live a simple life and search for happiness in it.\n\
One thing was clear in my mind whatever I do, I wouldn\'t be able to pay Mr Amane\'s debt\n\
(20 years later)\n\
I\'m a board member in the company now, and I\'ve started indulging in charitable services, and I\'m leading an NGO to help teen suffering from mental trauma.\n\
"Time is the greatest healer. Time can heal anything and everything." they say, maybe it\'s true\n\
Maybe it was my fate to go through such trauma to become the person that I am now...',
    options: [
      {
        text: 'Start Over',
        nextText: '0'
      }
    ]
  },
  {
    id: 'G14',
    text: 'I rejected the offer.\n\
How could I live happily after what all that happened? "I couldn\'t just move on!"\n\
My guilt took over and I couldn\'t get eat or sleep for a week. My body was in a deep stage of trauma and depression and I locked up myself in my room. I didn\'t want to talk to anyone. Slowly the guilt grew into depression, my skin had become pale.\n\
\n\
Slowly my family began pressuring me to get out of the room and go outside, do something. I couldn\'t bear their nagging and reluctantly went to the market.\
(some time later)It was getting colder and darker.\n\
"Ahh it\'s autumn already"\n\
I was done with the grocery shopping and was walking towards my home, there was some construction going on my usual route to home, so I took a detour.\n\
I started walking down the road, it was not well maintained and a decent sized car could barely fit in it. I saw a bunch of kids Playing on the road, memories of my childhood flashed in my mind "Good old days" I murmured and continued walking.\n\
Just when I was passing the kids, a black honda speeded up along the road, pacing towards the kids...In few seconds it will hit the little boy...there was no time to waste.\n\
I threw my grocery bag and ran towards the kid and pushed him away, but ...thud...\n\
I was hit by the car and in that few seconds, my life flashed before my eyes...\n\
\'it was a good life\' I thought "At least I saved one life albeit not mine."',
    options: [
      {
        text: 'Start Over',
        nextText: '0'
      }
    ]
  },
  {
    id: 'G15',
    text: 'I saw Mr Juzo come out of his car, he looked dizzy from the crash. The first thing that came to mind was to explain to him about the situation, but it then struck me "What could be the reason that he drove in my direction? Did those men call him here? Is he also involved with this scumbag?" I immediately stepped on the gas and went ahead to the abandoned house, on the corner of the street. I threw Walter to the ground and shot a bullet to his leg, to keep him from moving. He kept screaming and pleaded, "NO, NO. I AM SORRY. PLEASE FORGIVE ME. I KNOW WHAT I DID WAS WRONG, I WON\'T DO IT AGAIN. PLEASE DON\'T KILL ME. I HAVE A FAMILY." "And what about the other people you have murdered? Did they not have a family? And the crime you committed in your country no less" I responded with disgust in my eyes. That moment rage consumed me and I pulled the trigger, there was blood everywhere. I had killed Walter. \n\
Just when I was going to leave the house, I heard the sound of a police siren. I knew the only person it could be is Mr Juzo, who might have followed my car\'s tracks. What should I do now? ',
    options: [
      {
        text: 'Hide somewhere and see how he reacts to the dead Walter. If he is an accomplice, gun him down as well; if not, surrender yourself and explain everything to him. You don\'t want your family to get involved if it\'s the real Police',
        nextText: 'G17'
      },
      {
        text: 'Flee from the scene while you can. You don\'t trust him and escaping could get hard if he has already called for backup',
        nextText: 'G18'
      }
    ]
  },
  {
    id: 'G16',
    text: 'I didn\'t want to take the law into my hands, so I get out of the car, keeping Mr Green in it.\n\
And started walking towards Mr Juzo. After seeing him, I apologized to him for the jeep incident and then told him about Mr Green and the incident in brief.\n\
He asked me the address of that place and asked one of his officers to go there and catch all the people from there, and bring them to the police station. and then he asked me to come to \n\
police station along with Mr Green in their jeep.\n\
After going there they kept Mr Green in lock-up and filed FIR against him. After all the formal work, he praised me for my bravery, informed me that if they need any help they will call me and me to go home. Then, I went home and got back to my daily routine.\n\
(Five days later) In the afternoon I got a call from an unknown number, I picked the call and he asked: "Hello, am I talking to Aaron?", \n\
I replied:" Yes, yes this is Aaron speaking."\n\
He said:"Ok, I\'m Officer Juzo. please come to Time Square quickly" and he hung up the phone.\n\
I can\'t explain it but I felt like they kept some award ceremony for me, regarding Mr Green and for that. I felt excited.\n\
I made my hair, wore one of my favourite formals and got ready for the function. I called the Taxi quickly and asked to go towards Time Square. We reached there and saw a huge crowd but, nothing was pleasant out of this. Sound of an ambulance siren, police officers were making announcements,people were crying. I was shocked after seeing all this, I took the phone from my pocket and called that officer.\n\
"Hello officer this is Aaron, I reached here in TS. Where are you?"\n\
"If you can see any other officer over there, tell them your name, they will hand over the bodies. Good Luc-"\n\
Before I could say a word, he cut the call.\n\
I saw many dead bodies over there, but I didn\'t understand what happened. I saw one of the officers standing, so I called him and asked what was happening here. "I got a call from officer Juzo and he asked me to come here; can you please tell me what\'s the matter."\n\
"This morning, central mall suddenlly caught the fire and in that many people got injured and some died as well, and in that your parents-"\n\
 He pointed his hand towards the south and asked me to go towards that side.\n\
I ran towards that direction, two bodies were there lying on that bed, I removed the sheet covering their faces. I was shocked after seeing it and kept my head on mom\'s.\n\
Fate had just added more names added to the death list.',
    options: [
      {
        text: 'Start Over',
        nextText: '0'
      }
    ]
  },
  {
    id: 'G17',
    text: 'Mr Juzo entered the building and was alerted by seeing the corpse, nonetheless noticing it was Walter. He immediately called for support and after looking around, started examining the scene. Seeing them operate, it took me no time to realise that they were the real deal. I had made up my mind: came out of the cover, with my arm raised, kneeling on the ground, and surrender."I am the one who killed Walter. I surrender myself, please don\'t fire at me." They took no time to handcuff me and I was taken to the station. I was interrogated for hours and hours, beaten, but all I gave them was the truth. \n\
\n\
As the investigation continued, many shocking things were revealed. The cops who met me at the beach were real and were bought out by Walter. Just as I had predicted, I wasn\'t the only one who was brought to near death by him. Several other people had been killed by Walter and this was easily covered up because of his connections, all just to keep himself safe.\n\
My actions were all over the news, not only about killing Walter but also about the life of that little girl, Anna, who I had been saved at the beach. People started to hail me as a hero after they came to know what kind of a monster Walter was. As my court hearing approached, countless people, came forward pleading that the verdict to be \'innocent\'. But I knew I had taken the law into my own hands that day, and as the judge gave me a 5-year jail sentence, I accepted it with no hesitance. \n\
5 years later, I was released. At the exit of the prison, a whole crowd was gathered, among which, were the family members of Anna, and my parents. Dad and Mom were filled with tears and gave me a tight hug. Everyone was happy and cheered on my release. I simply looked to the sky and smiled "Wow. What a ride this was huh..."',
    options: [
      {
        text: 'Start Over',
        nextText: '0'
      }
    ]
  },
  {
    id: 'G18',
    text: 'Juzo was coming in quick, so I decided to flee from the back. The city wasn\'t too far, so I just kept running and running. After finally arriving at the city, police cars were running all around the city. "Are they in search of me? But how would they know I killed Walter?" And then I remembered, could Juzo have seen my face when I crashed into him? I had to get back home and meet dad and mom and talk to them. I reached our alley, and what I saw just brought me terror. \n\
Mom and dad were on the ground with their hand raised while the police pointed their guns at them. This was all my fault, and so without a second thought, I came out and surrendered myself. Dad and mom were shocked, crying and asking me what I had done that led to this. We were immediately handcuffed and taken to the station, where we were interrogated for hours. Juzo was pissed that I had not handed over Walter to him when I had the chance to not only that I had fled the scene too. \n\
\n\
My actions were all over the news, not only about killing Walter but also about the life of that little girl, Anna, who I had saved at the beach. People started to hail me as a hero after they came to know what kind of a monster Walter was. Had I given him what he deserved? As my court hearing approached, people came forward and pleaded the verdict be not be too harsh, but I knew I had taken the law into my own hands that day. The judge gave me a 10-year jail sentence, and I accepted it with no hesitance. Those years were hard, but I survived.\n\
\n\
10 years later, I was released. At the exit of the prison, Dad and Mom were waiting, filled with tears. Dad slapped me and then gave me a tight hug. We cried but were all happy and relieved that my suffering was finally over.',
    options: [
      {
        text: 'Start Over',
        nextText: '0'
      }
    ]
  }
]

/*
 {
    id: '',
    text: '',
    options: [
      {
        text: '',
        nextText: ''
      },
      {
        text: '',
        nextText: ''
      }
    ]
  },
*/

startGame()
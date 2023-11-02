const compliments = [
"Distance can't stop me from loving you with all my heart.",
"I'm grateful for the moments we've had and excited for those to come.",
"Your laughter is my favorite melody, even when it's miles away.",
"You turn ordinary moments into extraordinary memories.",
"I may be in Boise, and you may be in San Jose, but our love knows no boundaries.",
"No matter how many miles separate us, you're always close to my heart.",
"Each day without you is a reminder of how much I cherish you.",
"You're my sunshine, even on the cloudiest days of this long-distance journey.",
"No distance can ever change the way I feel about you; it's a love that lasts.",
"You're the love of my life, no matter how many miles are between us.",
"Distance is just a temporary test of our love, and I know we'll pass with flying colors.",
"You're my constant source of inspiration, even from afar.",
"You're my favorite destination, no matter the distance.",
"The thought of your smile keeps me going through the miles.",
"You're the missing piece of my puzzle, and I can't wait to be complete.",
"Our love is the bridge that connects us, no matter how far apart.",
"I may be in Idaho, but my heart is always in San Jose with you.",
"Your love is my guiding star, no matter how far apart we are.",
"I'll cross any distance for the chance to see your beautiful smile.",
"I miss you more every day, but I also love you more every day.",
"Distance may test us, but it only strengthens our bond.",
"I'm grateful for our love, no matter the distance, because it's real and enduring.",
"I'm counting down the days until we can be in each other's arms again.",
"The miles only make me appreciate you more.",
"The miles between us are just markers on the road to our happily ever after.",
"Our love story is the best adventure I've ever embarked on.",
"Distance may test us, but it can't break us because our love is unbreakable.",
"You make every mile between us feel like a small, manageable distance.",
"Each day without you reminds me of how much I cherish our time together.",
"You're the reason my heart smiles every day, even from miles away.",
"Our love story is a beautiful journey, even when the path is long and winding.",
"With you in my heart, I'm never truly far from home.",
"Distance can't dull the shine of your smile in my life.",
"I carry you in my heart, no matter where I am, and you make me complete.",
"I'm counting down the days until I can hold you in my arms again.",
"I'd cross oceans just to be with you, my love.",
"The thought of you is a ray of sunshine on even the cloudiest days.",
"You're the reason I look forward to tomorrow, no matter where we are.",
"You're the reason why I believe in forever, even when we're far apart.",
"You're the one who makes my heart skip a beat, even from afar.",
"Each moment we spend apart makes our reunion even sweeter.",
"You're my greatest adventure, no matter where it leads.",
"The miles don't matter; what matters is the love we share.",
"I carry your love with me in my heart, no matter where I am.",
"You're the fire that warms my heart on the coldest of nights.",
"Every night, I count the stars, knowing you're beneath the same sky, and it warms my heart.",
"Every day with you in my life is a day worth waiting for.",
"Every day without you reminds me of how precious you are in my life.",
"Your presence in my life, even from afar, fills my days with joy.",
"You're the dream I wake up to every morning, no matter where I am.",
"Your voice on the phone is a melody I could listen to forever.",
"Even though we're miles apart, you're always close to my heart.",
"You make every mile worth the effort, my love.",
"Your love is my constant, no matter where life takes us.",
"Our love is like a beautiful story unfolding, and I can't wait to see where it goes.",
"Every message from you is like a love note from the heart.",
"Every text and call from you is a ray of sunshine in my day.",
"I cherish every moment we've spent together and look forward to the moments ahead.",
"I love your smile",
"I love that we sleep perfect together when we are together",
"I love that you like beer and sports",
"I love that you are tall",
"I love that you are always down for whatever",
"I love that you push me to be nicer and a better person",
"I love that you bring me a drink every time I go see you",
"I love that you let me work and you cuddle next to me",
"You are the best cuddler",
"You are my favorite adventure buddy",
"You make the boring things fun",
"You are the best meal prep partner",
"I love that you consult me before you paint your nails",
"Everytime we talk on the phone its the best part of my day",
"You smell like a peach at any given moment",
"You make me want to do better always",
"I love you long beautiful hair",
"I love when you give me the death stare when you don't know what I'm about to say next",
"I love that we laugh together",
"I love the inside jokes we have yet to develop",
"I love that you and I can be so far but still feel so close",
"I love that even though you are tall you still fit around me easy",
"I love seeing you smile it means that the day has been good",
"You are the best person I know inside and out",
"I love that you love all animals and are nice to every living creature",
"I love that you and your family are so close",
"I love that you accept me for who I am",
"I love that you keep me grounded",
"You are very good at sports and that is attractive",
"Your competitiveness is attractive",
"You have a great family",
"Your pets are amazing",
"I love how you shorten words to make them cute",
"I love that I can always can count on you for an adventure",
"I love that you push me to be better in all situations",
"I love that you dance when you eat",
"I love that you are pursuing your career based on what you'll like instead of just what makes the most money",
"I love your taste in movies",
"I love that you don't care about material possesions",
"I love that you also like beer",
"I can always count on you to eat my cheese",
"I love that you don't need anything fancy you are just fine with a chilis diner",
"I love that you wrote 24 things about me on my birthday",
"I love that when I was feeling down you bought me beer and candy",
"I love that you already know me better than I know myself",
"You are very athletic and that is amazing",
"I love that you are silly just like me",
"Sleeping next to you is the best sleep I'll ever have",
"I love our tradition of in an out before my flight home",
"I love that even though we are far away its so easy to get to you in San Jose",
"Your hair is so long and beautiful",
"Your drive for work and for life is what keeps me going",
"I love when you let me be vulnerable with you",
"Your breakfast skills are amazing",
"Life with you is great and I hope for many more days to come of just you and me",
"Nothing is better than waking up next to you and the animals",
"Your infectious energy keeps me going and brings life into these old bones",
"You have the ability to turn anyone around you into a part of team Mel",
"You make the ordinary extraordinary",
"I want to ride into the sunset with you on belugas to our island paradise with all your favorite animals",
"Sleeping with you is like having my favorite dream every night",
"Your the only person who could have convinced me to go to australia and brave 12 hour flights because traveling with you is the best",
"I love that you always clean up everything wherever place we stay and make everything looks so nice",
"I love that we got to live together for a year and was able to become the best of friends",
"You make time slow down and help me enjoy whats now",
"Looking at you makes me realize I never wan't to lose you",
"You would be the perfect wife for me and the perfect best friend to spend the rest of our lives together",
"Ordering food with you is the best because you like all food",
"ERROR: MEL IS TOO AWESOME",
"ERROR: MEL BROKE THE COMPLIMENT GENERATOR",
"I love that you also like sports and we can watch it together",
"Your fantasy skills need work but for your first year you did pretty amazing",
"You amaze me with your knowledge of animal facts",
"Your appetite for fun is larger than anyone I've ever seen",
"You make life for me easy because I know my Girlfriend is the best",
"Stargazing with you was one of the best nights of my life",
"The way you cheers for every time a drink is had is amazing",
"You are my best sidekick and I am your best sidekick",
"I can't wait to do more travel with you and explore places I've never been to",
"I can't wait to explore all the new states on your map you have yet to go to",
"I love your friends and our friendgroup",
"Having sex with you is the best",
"Holding you down while we bang is the hottest thing ever",
"Making you cum should be my full time job",
"Watching you get ready for bed makes me realize how lucky I am",
"I love your family",
"I love our drink tradition before the airport and that your family buys me kona's because they know I love it",
"I love that you are so confident",
"Making you breakfast is my favorite part of the mornings",
"Your pathetic hangovers make me chuckle (but also lets work on those lol)",
"Your new love for costco makes me happy",
"Making this for you has been the easiest thing because there's millions of reasons to love you",
"I love that you don't care a lot about material items",
"I love that you never judge people and help me understand that as well",
"Lotioning you after a shower is my favorite activity",
"Your pictures beside your bed of us makes my heart smile",
"I am sitting here writing these with a picture of us and you are my inspiration",
"The world is a better place with you in it",
"I love that you like to snowboard so we can go on the mountains together",
"I love that you care about the environment and its your first priority people",
"I love when we go to the beach and bask in the sun",
"I love how tan you get, I even love you when you are white",
"I love your perfect body",
"I love you",
"I love the smell that is left behind on the pillow you use to sleep on",
"I can't wait for the day we are both in our careers and doing what we love while loving each other",
"I believe that you are great at everything you set your mind on doing",
"I love that you are confident and shy at the same time",
"You are as funny as it gets",
"I love that you mostly don't wear makeup because you are so naturally pretty",
"Living with you showed me just how good of a friend you really are to people",
"Going on trips with you has become my new favorite hobby because you are so fun",
"Traveling the world with you is my dream and we will make it happen",
"Brown eyes are just brown eyes until you love someone with brown eyes",
"I think we are meant to be and I think our dogs are meant to be best friends",
"I love how accepting your family is and how they let me in their home anytime",
"I love going to you for advice becuase you always know the right thing to do",
"I love that you like alaska better in the winter because thats my favorite too",
"I love how easily you blend in and accept my friends and how they instantly love you",
"I love that you don't care how fast I finish...for the most part",
"I love how easy it is to make you laugh and how much we laugh together",
"I love that you always know what I'm thinking",
"I love that you and I sent Australia with no hesistation",
"I love the positivity you bring into my life even from afar",
"I love that when we have a problem we talk about it and get it resolved and don't linger",
"You make my day with just the thought that I have you as my lover",
"Everyday isn't complete without a goodmorning, goodnight and how was your day text from you",
"Texting you is the only reason to have a phone",
"Our sports bet make games way more interesting and fun",
"Having you as a girlfriend is a flex and I get elated to show you off to anyone",
"Your persistance is inspiring and motivates me to keep going on any task",
"I've never seen you truly give up which is inspiring to me",
"Working on this project has been the most fulfilling thing because I know it will make you happy",
];

const uniqueCompliments = [...new Set(...compliments)];


function generateCompliment() {
    // Get the current date and time in UTC
    const currentDate = new Date();
    
    // Adjust for Pacific Standard Time (PST) which is UTC - 8 hours
    const pstOffset = -8 * 60 * 60 * 1000;
    currentDate.setTime(currentDate.getTime() + pstOffset);
    
    // Check if it's 8 am PST or later and if the compliment has not been shown today
    if (currentDate.getUTCHours() >= 8) {
      // Check if the user has already been shown a compliment today
      if (!hasComplimentBeenShownToday()) {
        // Show a compliment
        const randomIndex = Math.floor(Math.random() * uniqueCompliments.length);
        const compliment = uniqueCompliments[randomIndex];
        document.getElementById("compliment").textContent = compliment;
        
        // Set a cookie to mark that a compliment has been shown today
        setComplimentShownCookie();
      }
      else {
        document.getElementById("compliment").textContent = "You've already used your compliment today!";
        refreshElement("",2000);
        refreshElement(compliment,1000);
      }
    }
    else document.getElementById("compliment").textContent = "It's not 8am yet babe, I'm still waking up!"
  }
  
  // Function to add delay to an element and refresh the text
  function refreshElement(text, delay){
    setTimeout(function(){
      document.getElementById("compliment").textContent = text;
    },delay);
  }
  // Function to check if a compliment has been shown today
  function hasComplimentBeenShownToday() {
    const currentDate = new Date();
    const todayDate = currentDate.toISOString().split("T")[0]; // Get the date portion
    const complimentShownDate = getComplimentShownDateCookie();
  
    return todayDate === complimentShownDate;
  }
  
  // Function to set a cookie to mark that a compliment has been shown today
  function setComplimentShownCookie() {
    const currentDate = new Date();
    const todayDate = currentDate.toISOString().split("T")[0]; // Get the date portion
    document.cookie = `complimentShown=${todayDate}; expires=Sun, 31 Dec 9999 23:59:59 GMT; path=/`;
  }
  
  // Function to get the date from the complimentShown cookie
  function getComplimentShownDateCookie() {
    const cookies = document.cookie.split("; ");
    for (const cookie of cookies) {
      const [name, value] = cookie.split("=");
      if (name === "complimentShown") {
        return value;
      }
    }
    return null;
  }
  
  // Call generateCompliment when the page loads
  window.onload = generateCompliment;

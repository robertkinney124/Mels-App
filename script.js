const compliments = [
    "Even though we're miles apart, you're always close to my heart.",
    "Distance can't dull the shine of your smile in my life.",
    "Each day without you reminds me of how much I cherish our time together.",
    "No matter the miles, your love bridges the gap effortlessly.",
    "You're my sunshine, even on the cloudiest days of this long-distance journey.",
    "Every night, I count the stars, knowing you're beneath the same sky, and it warms my heart.",
    "Distance is just a test of how far love can travel, and ours travels beautifully.",
    "I may be in Boise, and you may be in San Jose, but our love knows no boundaries.",
    "Your voice on the phone is a melody I could listen to forever.",
    "The miles don't matter; what matters is the love we share.",
    "You're my constant source of inspiration, even from afar.",
    "Each moment we spend apart makes our reunion even sweeter.",
    "I'm grateful for our love, no matter the distance, because it's real and enduring.",
    "Distance is just a reminder of how strong our connection is.",
    "You're the reason my heart smiles every day, even from miles away.",
    "The space between us only makes our love grow stronger.",
    "I look forward to the day when we can close the gap and be together.",
    "I carry your love with me in my heart, no matter where I am.",
    "Our love story is the best adventure I've ever embarked on.",
    "Your presence in my life, even from afar, fills my days with joy.",
    "Distance can't diminish the love we share; it only makes it stronger.",
    "I'm counting down the days until we can be in each other's arms again.",
    "You're my anchor, keeping me grounded even when we're apart.",
    "Your love is my guiding star, no matter how far apart we are.",
    "The love I feel for you transcends the miles that separate us.",
    "Every day with you in my life is a day worth waiting for.",
    "No distance can ever change the way I feel about you; it's a love that lasts.",
    "I'll cross any distance for the chance to see your beautiful smile.",
    "Distance may test us, but it can't break us because our love is unbreakable.",
    "Even though we're apart, you're always in my thoughts and in my heart.",
    "You're the light at the end of my long-distance tunnel, and I can't wait to be with you.",
    "Our love story is like a beautiful song, and even the distance can't stop the music.",
    "Every moment without you feels like an eternity, but it's worth it for your love.",
    "No matter how many miles separate us, you're always in my dreams and in my heart.",
    "Distance is just a temporary test of our love, and I know we'll pass with flying colors.",
    "The thought of you is a ray of sunshine on even the cloudiest days.",
    "You're the missing piece of my puzzle, and I can't wait to be whole again.",
    "Distance can't steal the love and happiness you bring to my life.",
    "Our love is like a strong bond that even distance can't break.",
    "I cherish every moment we've spent together, no matter how far apart we are now.",
    "Distance may keep us physically apart, but our hearts are always connected.",
    "You're the love of my life, no matter where life takes us.",
    "With you in my life, even the miles can't keep me down.",
    "I miss you more every day, but I also love you more every day.",
    "You're my constant thought, no matter how far away you are.",
    "Distance may separate us, but it can't diminish the love we share.",
    "Each day without you is a reminder of how much you mean to me.",
    "I long for the day when we can bridge the gap and be together again.",
    "No distance can diminish the love I feel for you; it only makes it stronger.",
    "You're the reason I look forward to tomorrow, no matter where we are.",
    "Our love story is a beautiful journey, even when the path is long and winding.",
    "The miles between us are just markers on the road to our happily ever after.",
    "I carry you in my heart, no matter where I am, and you make me complete.",
    "Distance can't stop me from loving you with all my heart.",
    "You're my North Star, guiding me through the darkness of this long-distance night.",
    "Our love is the thread that keeps us connected, no matter how far apart.",
    "I'd cross any distance just to be with you, even for a moment.",
    "Every day without you reminds me of how precious you are in my life.",
    "Distance can't take away the love we share; it only makes it more special.",
    "You're the missing piece of my heart, and I can't wait to be whole again.",
    "No matter how far apart we are, you're always on my mind and in my heart.",
    "Our love is like a beautiful story unfolding, and I can't wait to see where it goes.",
    "Distance is just a reminder of how strong our love is, and it's unbreakable.",
    "You're the love of my life, no matter how many miles are between us.",
    "Distance may test us, but it can't break us because we're meant to be.",
    "Every day without you feels like a chapter missing from our love story.",
    "No distance can ever change the way I feel about you; it's a love that lasts.",
    "You're the light at the end of my long-distance journey, and I can't wait to be with you.",
    "Our love is like a beautiful melody, and even the miles can't silence the music.",
    "Every moment without you feels like an eternity, but it's worth it for your love.",
    "No matter how many miles separate us, you're always in my dreams and in my heart.",
    "Distance is just a temporary obstacle in our love story, and I can't wait to overcome it.",
    "The thought of you is a ray of sunshine on even the cloudiest days.",
    "You're the missing piece of my heart, and I can't wait to be complete again.",
    "Distance may keep us apart for now, but our love will always bring us together.",
    "Our love is like a strong bridge that even the longest distance can't break.",
    "I cherish every moment we've spent together and look forward to the moments ahead.",
    "Distance may separate us physically, but our hearts remain connected.",
    "You're the love of my life, no matter how many miles are between us.",
    "With you in my heart, even the distance can't keep me down.",
    "I miss you more every day, but I also love you more every day.",
    "Your laughter is my favorite melody, even when it's miles away.",
    "Distance may separate us, but our love knows no bounds.",
    "You are the star that brightens up my nights, no matter how far apart.",
    "Every text and call from you is a ray of sunshine in my day.",
    "I may be in Idaho, but my heart is always in San Jose with you.",
    "You turn ordinary moments into extraordinary memories.",
    "The thought of your smile keeps me going through the miles.",
    "Our love story is like a beautifully written letter, and I can't wait to read every chapter.",
    "You make every mile between us feel like a small, manageable distance.",
    "Distance may test us, but it only strengthens our bond.",
    "No matter how many miles separate us, you're always close to my heart.",
    "You're the reason why I believe in forever, even when we're far apart.",
    "Every day with you, even from afar, is a day well spent.",
    "You're the missing piece of my puzzle, and I can't wait to be complete.",
    "Distance can't steal the warmth of your love from my heart.",
    "You're my favorite thought, no matter how many miles away you are.",
    "You're my greatest adventure, no matter where it leads.",
    "The miles only make me appreciate you more.",
    "With you in my heart, I'm never truly far from home.",
    "Distance can't diminish the love and respect I have for you.",
    "You're my reason to smile every morning, no matter the distance.",
    "I'm counting down the days until I can hold you in my arms again.",
    "Every day without you reminds me of how lucky I am to have you.",
    "No distance can erase the beautiful moments we've shared.",
    "You're the light of my life, no matter where you are.",
    "Distance is just a temporary challenge on our journey together.",
    "You make every mile worth the effort, my love.",
    "I carry your love with me, no matter where I go.",
    "Distance can't change the way I feel about you; it only makes me love you more.",
    "Your love is my strength, even when we're apart.",
    "I'm grateful for the moments we've had and excited for those to come.",
    "No matter how many miles are between us, you're always in my thoughts.",
    "Distance can't alter the depth of my feelings for you.",
    "You're the fire that warms my heart on the coldest of nights.",
    "Our love is the bridge that connects us, no matter how far apart.",
    "Each day without you is a reminder of how much I cherish you.",
    "Your love is my constant, no matter where life takes us.",
    "You're my favorite destination, no matter the distance.",
    "Distance can't change the fact that you complete me.",
    "You're the one who makes my heart skip a beat, even from afar.",
    "No matter how many miles are between us, you're always my priority.",
    "You're the dream I wake up to every morning, no matter where I am.",
    "Distance may test us, but it can't break us because our love is unbreakable.",
    "I carry your love with me like a secret treasure, no matter the distance.",
    "You're my daily dose of happiness, even from miles away.",
    "Distance can't stop me from loving you with all my heart.",
    "You're my guiding star on this long-distance journey.",
    "Every message from you is like a love note from the heart.",
    "No matter how many miles separate us, you're always on my mind.",
    "Distance can't steal the love and joy you bring to my life.",
    "Our love is like a rare gem, shining even from a distance.",
    "I'd cross oceans just to be with you, my love.",
    "Every day without you reminds me of how precious you are in my life.",
    "Distance can't take away the love and happiness you bring to my life.",
    "Our love is like a strong bond that even distance can't break.",
    "I cherish every moment we've spent together, no matter how far apart we are now.",
    "Distance may keep us physically apart, but our hearts are always connected.",
    "You're the love of my life, no matter where life takes us.",
    "With you in my life, even the miles can't keep me down.",
    "I miss you more every day, but I also love you more every day.",
    "You're my constant thought, no matter how far away you are.",
    "Distance may separate us, but it can't diminish the love we share.",
    "Each day without you is a reminder of how much you mean to me.",
    "I long for the day when we can bridge the gap and be together again.",
    "No distance can diminish the love I feel for you; it only makes it stronger.",
    "You're the reason I look forward to tomorrow, no matter where we are.",
    "Our love story is a beautiful journey, even when the path is long and winding.",
    "The miles between us are just markers on the road to our happily ever after.",
    "I carry you in my heart, no matter where I am, and you make me complete.",
    "Distance can't stop me from loving you with all my heart.",
    "You're my North Star, guiding me through the darkness of this long-distance night.",
    "Our love is the thread that keeps us connected, no matter how far apart.",
    "I'd cross any distance just to be with you, even for a moment.",
    "Every day without you reminds me of how precious you are in my life.",
    "Distance can't take away the love and happiness you bring to my life.",
    "Our love is like a strong bond that even distance can't break.",
    "I cherish every moment we've spent together, no matter how far apart we are now.",
    "Distance may keep us physically apart, but our hearts are always connected.",
    "You're the love of my life, no matter where life takes us.",
    "With you in my life, even the miles can't keep me down.",
    "I miss you more every day, but I also love you more every day.",
    "You're my constant thought, no matter how far away you are.",
    "Distance may separate us, but it can't diminish the love we share.",
    "Each day without you is a reminder of how much you mean to me.",
    "I long for the day when we can bridge the gap and be together again.",
    "No distance can diminish the love I feel for you; it only makes it stronger.",
    "You're the reason I look forward to tomorrow, no matter where we are.",
    "Our love story is a beautiful journey, even when the path is long and winding.",
    "The miles between us are just markers on the road to our happily ever after.",
    "I carry you in my heart, no matter where I am, and you make me complete.",
    "Distance can't stop me from loving you with all my heart.",
    "You're my North Star, guiding me through the darkness of this long-distance night.",
    "Our love is the thread that keeps us connected, no matter how far apart.",
    "I'd cross any distance just to be with you, even for a moment.",
    "Every day without you reminds me of how precious you are in my life.",
    "Distance can't take away the love and happiness you bring to my life.",
    "Our love is like a strong bond that even distance can't break.",
    "I cherish every moment we've spent together, no matter how far apart we are now.",
    "Distance may keep us physically apart, but our hearts are always connected.",
    "You're the love of my life, no matter where life takes us.",
    "With you in my life, even the miles can't keep me down.",
    "I miss you more every day, but I also love you more every day."
];
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
        const randomIndex = Math.floor(Math.random() * compliments.length);
        const compliment = compliments[randomIndex];
        document.getElementById("compliment").textContent = compliment;
        
        // Set a cookie to mark that a compliment has been shown today
        setComplimentShownCookie();
      }
      else {
        document.getElementById("compliment").textContent = "You've already used your compliment today!";
      }
    }
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

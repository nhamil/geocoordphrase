const INDEX_TO_ANIMAL = ["a lungfish", "a cow", "a parrot", "a seal", "a hippopotamus", "a slug", "a polar bear", "a goldfish", "a bass", "a hamster", "a vulture", "a frog", "a buffalo", "a hornet", "a cheetah", "a toad", "a scorpion", "a flamingo", "an otter", "a cat", "a squirrel", "a penguin", "a flying fish", "a snail", "a moose", "a raccoon", "an anglerfish", "an elephant", "an ostrich", "a rattlesnake", "a silkworm", "an eagle", "a squid", "a lemur", "a cobra", "a capybara", "a clownfish", "a gecko", "a bear", "a hawk", "a tiger", "a mite", "a swordtail", "a peacock", "a sparrow", "an elk", "a sloth", "a reindeer", "a lobster", "a pheasant", "a donkey", "a camel", "a stingray", "a panda", "a kangaroo", "a chicken", "a leech", "a pig", "a ferret", "a bat", "a wasp", "an alligator", "a crab", "a mole", "a shark", "a falcon", "a manatee", "a toucan", "a dolphin", "a grasshopper", "an octopus", "a salmon", "a mouse", "an aardvark", "a dog", "a lion", "a horse", "a lynx", "a beetle", "a crow", "an ant", "a worm", "a jellyfish", "an iguana", "a beaver", "a pelican", "an orangutan", "a mollusk", "a turtle", "a llama", "a whale", "a rabbit", "a narwhal", "a giraffe", "a woodpecker", "an eel", "a chimpanzee", "a wildcat", "a bluejay", "a hyena"]; 
const ANIMAL_TO_INDEX = toLowerDict(INDEX_TO_ANIMAL); 

const INDEX_TO_ACTION = ["laughing at", "sleeping on", "punching", "typing on", "rambling to", "selling", "joking about", "playing with", "shaking", "eating", "boxing", "singing about", "stealing", "taking care of", "filming", "presenting", "disintegrating", "waving at", "cooking", "teaching", "fighting", "wiring", "constructing", "speaking to", "slamming into", "insulting", "cutting", "looking at", "smoking", "praying for", "dangling", "driving", "dodging", "jumping on", "impaling", "smiling at", "thinking about", "guarding", "squeezing", "swinging", "acting with", "knitting", "petting", "drinking", "tripping over", "sitting on", "complaining about", "mimicing", "dancing with", "forgetting", "burning", "running from", "licking", "holding", "crushing", "electrocuting", "stretching", "scaring", "searching for", "mentioning", "juggling", "following", "grunting at", "squeaking at", "knocking over", "stomping on", "reaching for", "kicking", "balancing", "slapping", "wanting", "hoarding", "calming", "swimming to", "carving", "aiming at", "writing about", "yelling at", "biting", "hiding", "flying towards", "blowing up", "shrinking", "injecting", "avoiding", "teleporting", "analyzing", "complimenting", "coughing at", "grabbing", "breathing on", "repairing", "throwing", "polishing", "buying", "reading about", "organizing", "dreaming about", "drenching", "bending"]; 
const ACTION_TO_INDEX = toLowerDict(INDEX_TO_ACTION); 

const INDEX_TO_PROG = ["laughs at", "sleeps on", "punches", "types on", "rambles to", "sells", "jokes about", "plays with", "shakes", "eats", "boxes", "sings about", "steals", "takes care of", "films", "presents", "disintegrates", "waves at", "cooks", "teaches", "fights", "wires", "constructs", "speaks to", "slams into", "insults", "cuts", "looks at", "smokes", "prays for", "dangles", "drives", "dodges", "jumps on", "impales", "smiles at", "thinks about", "guards", "squeezes", "swings", "acts with", "knits", "pets", "drinks", "trips over", "sits on", "complains about", "mimics", "dances with", "forgets", "burns", "runs from", "licks", "holds", "crushes", "electrocutes", "stretches", "scares", "searches for", "mentions", "juggles", "follows", "grunts at", "squeaks at", "knocks over", "stomps on", "reaches for", "kicks", "balances", "slaps", "wants", "hoards", "calms", "swims to", "carves", "aims at", "writes about", "yells at", "bites", "hides", "flies towards", "blows up", "shrinks", "injects", "avoids", "teleports", "analyzes", "compliments", "coughs at", "grabs", "breathes on", "repairs", "throws", "polishes", "buys", "reads about", "organizes", "dreams about", "drenches", "bends"]; 
const PROG_TO_INDEX = toLowerDict(INDEX_TO_PROG); 

const INDEX_TO_OBJECT = ["keys", "hand sanitizer", "legos", "feathers", "a cannon", "a resume", "a guitar", "a Rubik's cube", "fur", "a burger", "a glove", "a microphone", "a scroll", "a mug", "a tea cup", "a GPU", "a projector", "a disc", "pasta", "a beaker", "a shield", "a calculator", "a Tesla coil", "a podium", "a wig", "a chalkboard", "an axe", "a telescope", "a cigar", "a shamrock", "a ring", "a motorcycle", "a lamppost", "a mushroom", "goggles", "a suit", "a pipe", "a staff", "a helmet", "a web", "a pencil", "a board game", "a bird feeder", "a computer", "a compass", "a hat", "cash", "armor", "jewelry", "a sword", "a torch", "a sports jersey", "a crown", "a globe", "a rover", "a throne", "a clock", "an inkwell", "a trident", "a skull", "an ice cube", "a vacuum", "a club", "cheese", "a trash bin", "a tusk", "leaves", "a purse", "a TV", "honey", "a door", "gems", "wings", "a seashell", "meat", "a longbow", "an apple", "a sign", "a blanket", "a boat", "a UFO", "a hammer", "a button", "a cookie", "a power plant", "water", "a boot", "a flag", "a mask", "a car", "a flipper", "a stethoscope", "a shuriken", "a pickaxe", "a phone", "a book", "a mop", "a keyboard", "a hose", "a dumbbell"]; 
const OBJECT_TO_INDEX = toLowerDict(INDEX_TO_OBJECT); 

const INDEX_TO_RELATION = ["leaving", "behind", "next to", "far away from", "in front of", "on top of", "approaching", "under"]; 
const RELATION_TO_INDEX = toLowerDict(INDEX_TO_RELATION); 

const MUL1 = 234753943; 
const MUL2 = 348524453; 
const ADD1 = 151245593; 
const ADD2 = 164002057; 

const IMUL1 = 1576807; 
const IMUL2 = 563117; 
const IADD1 = 1754407; 
const IADD2 = 1597943; 

const N_SCRAMBLE = 5; 

const INVALID_COORDS = "invalid coordinates"; 
const INVALID_PHRASE = "invalid phrase"; 

/**
 * @param {string[]} list 
 * @returns {Object<string, number>}
 */
function toLowerDict(list) {
    let out = {}; 

    for (let i = 0; i < list.length; i++) {
        out[list[i].toLowerCase()] = i; 
    }

    return out 
}

/**
 * @param {number} x 
 * @param {number} places 
 * @returns {number}
 */
function roundDecimalPlaces(x, places) {
    places = Math.pow(10, places); 
    return Math.round(x * places) / places; 
}

/**
 * @param {number} x 
 * @param {number} y 
 * @param {number} ndigits 
 */
function scramble(x, y, ndigits) { 
    let place = 1; 
    let x_out = 0; 
    let y_out = 0; 
    const rem = ndigits % 2 == 1 ? 1 : 0; 

    for (let i = 0; i < ndigits; i++) {
        let xi = Math.floor(x / place) % 10 * place; 
        let yi = Math.floor(y / place) % 10 * place; 
        if (i % 2 == rem) {
            x_out += xi;  
            y_out += yi;  
        } 
        else {
            y_out += xi;  
            x_out += yi;  
        }

        place *= 10; 
    }

    x_out += Math.floor(x / place) * place;  
    y_out += Math.floor(y / place) * place;  

    return [x_out, y_out];  
}

/**
 * @param {number} lat 
 * @param {number} lon 
 * @returns {string} 
 */
function toGeoPhrase(lat, lon) {
    if (lat < -90 || lat > 90) {
        return INVALID_COORDS; 
    }
    if (lon < -180 || lon > 180) {
        return INVALID_COORDS; 
    }

    if (lat === 90) {
        lat = 89.9999; 
    }
    if (lon === 180) {
        lon = 179.9999; 
    }

    lat = Math.round((lat + 90 ) * 10000) % 1800000; 
    lon = Math.round((lon + 180) * 10000) % 3600000; 

    lat = (lat * MUL1 + ADD1) % 1800000; 
    lon = (lon * MUL2 + ADD2) % 3600000; 

    [lat, lon] = scramble(lat, lon, N_SCRAMBLE); 

    lat = (lat * MUL1 + ADD1) % 1800000; 
    lon = (lon * MUL2 + ADD2) % 3600000; 

    const animal1 = INDEX_TO_ANIMAL[Math.floor(lat / 10000) % 100]; 
    const action1 = INDEX_TO_PROG  [Math.floor(lat / 100) % 100]; 
    const object1 = INDEX_TO_OBJECT[Math.floor(lat) % 100]; 
    const animal2 = INDEX_TO_ANIMAL[Math.floor(lon / 10000) % 100]; 
    const action2 = INDEX_TO_ACTION[Math.floor(lon / 100) % 100]; 
    const object2 = INDEX_TO_OBJECT[Math.floor(lon) % 100]; 
    const relation = INDEX_TO_RELATION[4 * Math.floor(lat / 1000000) + Math.floor(lon / 1000000)]; 

    return animal1 + 
        ' ' + action1 + 
        ' ' + object1 + 
        ' ' + relation + 
        ' ' + animal2 + 
        ' ' + action2 + 
        ' ' + object2; 
}

/**
 * @param {string} phrase 
 * @returns {[number, number]|string}
 */
function toGeoCoords(phrase) {
    /**
     * 
     * @param {string} text 
     * @param {Object<string, number>} wordsToIndex 
     * @returns {[number, string]}
     */
    function findStartingIndex(text, wordsToIndex) {
        for (let i = text.length; i > 0; i--) {
            let key = text.substring(0, i); 
            if (key in wordsToIndex) {
                return [wordsToIndex[key], text.substring(i).trim()]; 
            }
        }
        return [null, text]; 
    }

    phrase = phrase.toLowerCase().trim(); 

    let animal1, action1, object1, relation, animal2, action2, object2; 

    [animal1, phrase] = findStartingIndex(phrase, ANIMAL_TO_INDEX); 
    if (animal1 === null) {
        return INVALID_PHRASE; 
    }

    [action1, phrase] = findStartingIndex(phrase, PROG_TO_INDEX); 
    if (action1 === null) {
        return INVALID_PHRASE; 
    }

    [object1, phrase] = findStartingIndex(phrase, OBJECT_TO_INDEX); 
    if (object1 === null) {
        return INVALID_PHRASE; 
    }

    [relation, phrase] = findStartingIndex(phrase, RELATION_TO_INDEX); 
    if (relation === null) {
        return INVALID_PHRASE; 
    }

    [animal2, phrase] = findStartingIndex(phrase, ANIMAL_TO_INDEX); 
    if (animal2 === null) {
        return INVALID_PHRASE; 
    }

    [action2, phrase] = findStartingIndex(phrase, ACTION_TO_INDEX); 
    if (action2 === null) {
        return INVALID_PHRASE; 
    }

    [object2, phrase] = findStartingIndex(phrase, OBJECT_TO_INDEX); 
    if (object2 === null) {
        return INVALID_PHRASE; 
    }

    let lat = Math.floor(relation / 4) * 1000000 + animal1 * 10000 + action1 * 100 + object1; 
    let lon = Math.floor(relation % 4) * 1000000 + animal2 * 10000 + action2 * 100 + object2; 

    lat = IMUL1 * (lat + IADD1) % 1800000; 
    lon = IMUL2 * (lon + IADD2) % 3600000; 

    [lat, lon] = scramble(lat, lon, N_SCRAMBLE); 

    lat = IMUL1 * (lat + IADD1) % 1800000; 
    lon = IMUL2 * (lon + IADD2) % 3600000; 

    lat = roundDecimalPlaces(lat / 10000 - 90, 4); 
    lon = roundDecimalPlaces(lon / 10000 - 180, 4); 

    return [lat, lon]; 
}

for (let i = 0; i < 100; i++) {
    let coord = [
        roundDecimalPlaces(Math.random() * 180.0001 - 90.0001, 4), 
        roundDecimalPlaces(Math.random() * 360.0001 - 180.0001, 4) 
    ]; 
    let phrase = toGeoPhrase(coord[0], coord[1]); 
    let output = toGeoCoords(phrase); 

    if (output == INVALID_PHRASE || coord[0] != output[0] || coord[1] != output[1]) {
        console.log("ERROR: " + JSON.stringify(coord) + " -> " + JSON.stringify(output) + ": '" + phrase + "'"); 
    }
    else {
        console.log(JSON.stringify(coord) + " -> " + JSON.stringify(output) + ": '" + phrase + "'"); 
    }
}

function toPhrase() {
    let coordsText = document.getElementById("coords"); 
    let phraseText = document.getElementById("phrase"); 

    let coordsTextList = coordsText.value.split('\n'); 

    let output = ""; 

    for (let coordsText of coordsTextList) {
        coordsText = coordsText.trim(); 
        if (coordsText == "") {
            output += '\n'; 
            continue; 
        }
        try {
            coordsText = coordsText.split(','); 
            if (coordsText.length !== 2) {
                output += INVALID_COORDS + '\n'; 
                continue; 
            }
            let [x, y] = coordsText; 
            x = parseFloat(x.trim()); 
            y = parseFloat(y.trim()); 
            output += toGeoPhrase(x, y) + '\n'; 
        }
        catch (e) {
            output += INVALID_COORDS + '\n'; 
        }
    }

    phraseText.value = output; 
}

function toCoords() {
    let coordsText = document.getElementById("coords"); 
    let phraseText = document.getElementById("phrase"); 

    let phraseTextList = phraseText.value.split('\n'); 

    let output = ""; 

    for (let phraseText of phraseTextList) {
        phraseText = phraseText.trim(); 
        if (phraseText == "") {
            output += '\n'; 
            continue; 
        }
        try {
            output += toGeoCoords(phraseText) + '\n'; 
        }
        catch (e) {
            output += INVALID_COORDS + '\n'; 
        }
    }

    coordsText.value = output; 
}

function addUserLocation() {
    let coordsText = document.getElementById("coords"); 

    output = coordsText.value.trimEnd(); 
    if (!(output.length == 0 || output.endsWith('\n'))) {
        output += '\n'; 
    }

    try {
        navigator.geolocation.getCurrentPosition(function(position) {
            output += position.coords.latitude + ',' + position.coords.longitude + '\n'; 
            coordsText.value = output; 
        }); 
    }
    catch (e) {
        output += "unknown location\n"; 
        coordsText.value = output; 
    }
}

function clearText() {
    document.getElementById("coords").value = ""; 
    document.getElementById("phrase").value = ""; 
}
(() => {
  let store = {};
  const ASSISTANT_SRCS = {
    IDLE_1: "./resources/idle_1.webm",
    IDLE_2: "./resources/idle_2.webm",
    LISTENING: "./resources/listening.webm",
    THINKING: "./resources/thinking.webm",
    POINTING: "./resources/pointing.webm",
  }

  const hardcodedPlaces = [
    {
      id: 1,
      name: "Iskrivska St, 11",
      type: "Dual-Purpose",
      form: "House",
      details: {
        wifi: true,
        water: true,
        food: false,
        power: true
      },
      url: "https://maps.google.com/maps?q=iskrivska%2011&t=&z=13&ie=UTF8&iwloc=&output=embed",
    },
    {
      id: 2,
      name: "Mykhaila Dontsya St, 16",
      type: "Dual-Purpose",
      form: "School",
      details: {
        wifi: false,
        water: true,
        food: true,
        power: true
      },
      url: "https://maps.google.com/maps?q=kyiv%20school%2052&t=&z=13&ie=UTF8&iwloc=&output=embed",
    },
    {
      id: 3,
      name: "Maksyma Kryvonosa St, 5/1",
      type: "Dual-Purpose",
      form: "Building",
      details: {
        wifi: true,
        water: false,
        food: false,
        power: true
      },
      url: "https://maps.google.com/maps?q=Maksyma%20Kryvonosa%20St,%205/1,%20Kyiv&t=&z=13&ie=UTF8&iwloc=&output=embed",
    },
    {
      id: 4,
      name: "Henerala Henadiia Vorobiova St, 10",
      type: "Dual-Purpose",
      form: "Building",
      details: {
        wifi: false,
        water: true,
        food: true,
        power: true
      },
      url: "https://maps.google.com/maps?q=Henerala%20Henadiia%20Vorobiova%20St,%2010&t=&z=13&ie=UTF8&iwloc=&output=embed",
    },
    {
      id: 5,
      name: "Vatslava Havela Blvd, 16",
      type: "Dual-Purpose",
      form: "Building",
      details: {
        wifi: false,
        water: true,
        food: false,
        power: false
      },
      url: "https://maps.google.com/maps?q=Vatslava%20Havela%20Blvd,%2016&t=&z=13&ie=UTF8&iwloc=&output=embed",
    },
    {
      id: 6,
      name: "Liubomyra Huzara Ave, 3",
      type: "Dual-Purpose",
      form: "Medical Center",
      details: {
        wifi: true,
        water: true,
        food: false,
        power: true
      },
      url: "https://maps.google.com/maps?q=Liubomyra%20Huzara%20Ave,%203&t=&z=13&ie=UTF8&iwloc=&output=embed",
    },
    {
      id: 7,
      name: "Vadyma Hetmana St, 6",
      type: "Dual-Purpose",
      form: "Trade Mall",
      details: {
        wifi: true,
        water: true,
        food: true,
        power: true
      },
      url: "https://maps.google.com/maps?q=Vadyma%20Hetmana%20St,%206&t=&z=13&ie=UTF8&iwloc=&output=embed",
    },
    {
      id: 8,
      name: "Borshchahivska St, 152Б",
      type: "Dual-Purpose",
      form: "Building Basement",
      details: {
        wifi: false,
        water: false,
        food: false,
        power: false
      },
      url: "https://maps.google.com/maps?q=Borshchahivska%20St,%20152%D0%91&t=&z=13&ie=UTF8&iwloc=&output=embed",
    },

  ];

  const randomJokes = [
    "Why did an old man fall in a well?\nBecause he couldn’t see that well!",
    "Why did a scarecrow win a Nobel prize?\nHe was outstanding in his field!",
    "What do you call a fake noodle?\nAn impasta!",
    "What’s red and smells like blue paint?\nRed paint!",
    "What did the mama cow say to the calf?\nIt’s pasture bedtime!"
  ];

  const hardcodedFaqs = [
    {
      title: "Here is what you want to take to the shelter...",
      text: "Emergency personal do their best to keep people comfortable, but the best course of action is to be entirely self-sufficient. If you find you have to evacuate to a shelter, you’ll be a lot more comfortable if you have everything you need for a few days. And, if you have to evacuate you probably won’t have a lot of time to gather supplies, which is why it’s a good idea to keep an old duffle or suitcase packed and ready with these 13 critical supplies in it or next to it:\n" +
        "\n" +
        "Bedding: pillows, sleeping bags or a blanket.\n" +
        "Reclining lawn loungers – you may or may not get a cot. Reclining lawn loungers mean you’re off the (Cold? Hard? Wet? Nasty?) floor.\n" +
        "Rubber flip-flops – so you don’t have to walk barefoot, anywhere, ever.\n" +
        "Towels and washcloths – and don’t underestimate the utility of a new or very clean car-washing chamois for use as a towel!\n" +
        "Toilet paper – Take the cardboard tubes out and you can crush an entire package of toilet paper rolls into a single gallon Ziploc bag.\n" +
        "Comfort medicines - such as sleep aids and aspirin\n" +
        "Earplugs and an eye mask – Emergency shelters rarely shut off all the lights.\n" +
        "Entertainment - a deck of cards can keep you busy for days. And, a big, dull paperback like War and Peace or Moby Dick gets a lot more interesting when there’s nothing else to do.\n" +
        "Solar cell phone charger and earphones – if you can keep your smartphone charged you’ll have access to music and games, not to mention being findable by concerned loved ones!\n" +
        "Bicycle lock – Keep your duffle and your chair together in one place.\n" +
        "Emergency hand crank radio – don’t count on emergency personnel to keep everyone constantly updated.\n" +
        "Pets and pet supplies – Never leave your pets behind. Check back in the next post when we share a list of emergency items for pets.\n" +
        "Dehydrated meals – Yes, shelters likely provide food. But there’s no guarantee how much or what kind. If you forget to bring some pet food, keep in mind that ReadyWise dehydrated meals come in small Metallyte envelopes and don’t require anything but water to rehydrate and enjoy. And, they make excellent bartering tools! (We’ve heard our dehydrated fruit with caramel sauce will get you nearly anything you need when supplies are tight.)\n",
      images: [
        "http://orig14.deviantart.net/95d8/f/2013/067/8/4/elementary_school_supplies_by_therealmrfriday-d5xcki7.jpg",
        "https://cdn.kpbs.org/dims4/default/c475581/2147483647/strip/true/crop/3682x2268+175+0/resize/880x542!/quality/90/?url=http%3A%2F%2Fkpbs-brightspot.s3.amazonaws.com%2Fimg%2Fphotos%2F2019%2F11%2F05%2FIMG_7789.jpg",
        "https://s.hdnux.com/photos/01/27/45/56/22961042/3/1200x0.jpg"
      ]
    }
  ];

  const hardcodedResponses = {
    didnt_understand: {
      assistantState: 2,
      screen: "didnt-understand",
    },
    some_stupid_ass_question1: {
      assistantState: 3,
      screen: "question",
      text: "Do you want to take a taxi to the nearest shelter?",
      stage: 42
    },
    show_nearest_shelter: {
      assistantState: 2,
      screen: "showmap",
      text: "Here is the nearest shelter:",
      location: [hardcodedPlaces[1]],
      stage: 22
    },
    what_to_take_to_shelter: {
      assistantState: 3,
      screen: "showfaq",
      faq: hardcodedFaqs[0],
      stage: 23,
    },
    to_start: {
      screen: "question",
      text: 'Hi, what do you want to ask? Here are some options:\n - Show me the nearest shelter\n - Show me all shelters\n - Filter shelter by [wifi/power/water/food] \n - Read info',
      stage: 0,
      assistantState: 1
    },

    step_1: { // show nearest shelter
      screen: "showmap",
      text: "Here is your nearest shelter",
      location: [hardcodedPlaces[0]],
      assistantState: 3,
    },
    step_2: { // show all shelters
      screen: "showmap",
      text: "Here are all shelters",
      location: [...hardcodedPlaces],
      assistantState: 3,
    },
    step_3: { // filter shelters only with wifi
      screen: "showmap",
      text: "Here are shelters filtered by: wifi",
      location: hardcodedPlaces.filter(p => p.details.wifi),
      assistantState: 3,
    },
    step_4: { // filter shelters only with water
      screen: "showmap",
      text: "Here are shelters filtered by: water",
      location: hardcodedPlaces.filter(p => p.details.water),
      assistantState: 3,
    },
    step_5: { // tell a joke
      screen: "question",
      text: "Here is a joke...",
      stage: 0,
      assistantState: 1
    },
    step_6: { // ask what faq to display
      screen: "question",
      text: "You can read about:\n- What to take to the shelter\n- Dangers of bombardment\n- Where to get emergency help",
      stage: 0,
      assistantState: 2
    },
    step_7: { // what to take to shelter faq
      assistantState: 1,
      screen: "showfaq",
      faq: hardcodedFaqs[0],
      stage: 23,
    },

  };

  init();

  function setStore() {
    store.activeScreen = "question";
    store.currentStage = 0;
    store.currentText = "";
    store.currentLocations = [];
    store.selectedLocationId = null;
    store.lastServerResponse = null;
    store.mediaRecorder = null;
    store.isSpeaking = false;
    store.isFetching = false;
    store.audioBlobToSend = null;
    store.serverUrl = localStorage.getItem("debugServerUrl") || "https://httpbin.org/post";
    store.userPosition = null;
    // DEBUG
    store.debug = {
      nextServerResponse: null
    }
  }

  function setEventListeners() {
    const speakButton = document.querySelector("#speak-button");
    speakButton.addEventListener("click", handleSpeakButtonClick);

    const didntUnderstandDebugButton = document.querySelector("#debug-didnt-understand");
    didntUnderstandDebugButton.addEventListener("click", () => {
      store.debug.nextServerResponse = hardcodedResponses.didnt_understand
    });

    const stupidAssQuestionDebugButton = document.querySelector("#debug-some-stupid-ass-question");
    stupidAssQuestionDebugButton.addEventListener("click", () => {
      store.debug.nextServerResponse = hardcodedResponses.some_stupid_ass_question1
    });

    const nearestShelterDebugButton = document.querySelector("#debug-show-nearest-shelter");
    nearestShelterDebugButton.addEventListener("click", () => {
      store.debug.nextServerResponse = hardcodedResponses.show_nearest_shelter
    });

    const whatToTakeDebugButton = document.querySelector("#debug-faq-what-to-take-to-shelter");
    whatToTakeDebugButton.addEventListener("click", () => {
      store.debug.nextServerResponse = hardcodedResponses.what_to_take_to_shelter
    });

    const toStartDebugButton = document.querySelector("#debug-go-to-start");
    toStartDebugButton.addEventListener("click", () => {
      store.debug.nextServerResponse = hardcodedResponses.to_start
    });

    const debugServerUrl = document.querySelector("#debug-server-url");
    debugServerUrl.addEventListener("input", handleSetServerUrl);

    const assistantContainer = document.querySelector("#assistant-container");
    assistantContainer.addEventListener("click", handleAssistantClick);

    document.addEventListener("keydown", handleSecretKeyDown);

  }

  function handleSecretKeyDown(e) {
    console.log(e.keyCode);

    if (e.keyCode === 48) { // 0 start
      store.debug.nextServerResponse = hardcodedResponses.to_start;
    }
    if (e.keyCode === 49) { // 1 neares shelter
      store.debug.nextServerResponse = hardcodedResponses.step_1;
    }
    if (e.keyCode === 50) { // 2 all shelters
      store.debug.nextServerResponse = hardcodedResponses.step_2;
    }
    if (e.keyCode === 51) { // 3 filter by wifi
      store.debug.nextServerResponse = hardcodedResponses.step_3;
    }
    if (e.keyCode === 52) { // 4 filter by water
      store.debug.nextServerResponse = hardcodedResponses.step_4;
    }
    if (e.keyCode === 53) { // 5 tell joke
      hardcodedResponses.step_5.text = randomJokes[getRandomIntInclusive(0, randomJokes.length - 1)];
      store.debug.nextServerResponse = hardcodedResponses.step_5;
    }
    if (e.keyCode === 54) { // 6 all faqs
      store.debug.nextServerResponse = hardcodedResponses.step_6;
    }
    if (e.keyCode === 55) { // 7 what to take to  shelter
      store.debug.nextServerResponse = hardcodedResponses.step_7;
    }
    if (e.keyCode === 78) { // n didn't understand
      store.debug.nextServerResponse = hardcodedResponses.didnt_understand;
    }
  }

  function handleAssistantClick() {
    const assistantContainer = document.querySelector("#assistant-container");
    assistantContainer.classList.toggle("assistant-container-stash");
  }

  function handleSetServerUrl(e) {
    store.serverUrl = e.target.value;
    localStorage.setItem("debugServerUrl", e.target.value);
  }

  function handleSpeakButtonClick() {
    if (!store.isSpeaking) {
      store.isSpeaking = true;
      store.mediaRecorder.start();
    } else {
      store.isSpeaking = false;
      store.mediaRecorder.stop();
    }
    updateSpeaking();
    updateAssistant();
  }

  function updateSpeaking() {
    const speakButton = document.querySelector("#speak-button-text");
    if (store.isSpeaking) {
      speakButton.innerText = "I'm listening...";
    } else {
      speakButton.innerText = "Press to speak";
    }
  }

  function initMediaRecorder() {
    navigator.mediaDevices.getUserMedia({audio: true})
      .then(stream => {
        const options = {
          // mimeType: 'audio/wav'
        }
        const mediaRecorder = new MediaRecorder(stream, options);
        store.mediaRecorder = mediaRecorder;
        // mediaRecorder.start();

        let audioChunks = [];
        mediaRecorder.addEventListener("dataavailable", event => {
          audioChunks.push(event.data);
        });

        mediaRecorder.addEventListener("stop", () => {
          const audioBlob = new Blob(audioChunks, {'type': 'audio/wav;'});
          audioChunks = [];
          store.audioBlobToSend = audioBlob;
          sendServerRequest();
          // const audioUrl = URL.createObjectURL(audioBlob);
          // const audio = new Audio(audioUrl);
          // audio.controls = true;
          // document.body.appendChild(audio);
          // audio.play();
        });

        // setTimeout(() => {
        //   mediaRecorder.stop();
        // }, 3000);
      });
  }

  function sendServerRequest() {
    const xhr = new XMLHttpRequest();
    xhr.onload = function (e) {
      if (this.readyState === 4) {
        // console.log("Server returned: ", e.target.responseText);
      }
    };
    const fd = new FormData();
    fd.append("audio_data", store.audioBlobToSend, "audio");
    fd.append("stage", store.currentStage);
    try {
      fd.append("position", JSON.stringify(
        {
          latitude: store.userPosition.coords.latitude,
          longitude: store.userPosition.coords.longitude
        }));
    } catch (e) {
    }
    xhr.open("POST", store.serverUrl);
    xhr.send(fd);

    // hardcoded response
    store.isFetching = true;
    updateAssistant();
    setTimeout(() => {
      store.lastServerResponse = store.debug.nextServerResponse;
      handleGotServerResponse();
      store.isFetching = false;
      updateAssistant();
    }, getRandomIntInclusive(100, 1500));

  }

  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  function changeLocationToCurrent() {
    const nextLocation = store.currentLocations.find(l => l.id === store.selectedLocationId);
    const mapIframe = document.querySelector("#gmap_canvas");
    console.log("nextLocation: ", nextLocation.url);
    mapIframe.src = nextLocation.url;
  }

  function updateMapHeading() {
    const heading = document.querySelector("#map-screen-heading");
    heading.innerText = store.currentText;
  }

  function updateLocationsList() {
    const oldPlacesList = document.querySelector("#map-places-list");
    const newPlacesList = document.createElement("div");
    newPlacesList.id = "map-places-list";
    newPlacesList.className = "map-places-list";
    console.log("store.currentLocations in update", store.currentLocations);
    const detailList = {
      wifi: "wifi",
      power: "bolt",
      water: "water_drop",
      food: "restaurant_menu",
    };
    for (let i = 0; i < store.currentLocations.length; i++) {
      const currLoc = store.currentLocations[i];
      const item = document.createElement("div");
      item.className = "place-item";
      if (currLoc.id === store.selectedLocationId) {
        setTimeout(() => item.classList.add("place-item--selected"), 0);
      }
      item.setAttribute("data-id", currLoc.id);
      item.addEventListener("click", () => handleLocationItemClick(currLoc.id));
      const itemName = document.createElement("div");
      itemName.className = "place-item-name";
      itemName.innerText = currLoc.name;
      const itemDetails = document.createElement("div");
      itemDetails.className = "place-item-details";
      for (let det in detailList) {
        if (detailList.hasOwnProperty(det)) {
          const detailIcon = document.createElement("div");
          detailIcon.className = "place-item-details-icon";
          if (!currLoc.details[det]) {
            detailIcon.classList.add("place-item-details-icon--inactive");
          }
          const icon = document.createElement("span");
          icon.className = "material-icons";
          icon.innerText = detailList[det];
          detailIcon.appendChild(icon);
          itemDetails.appendChild(detailIcon);
        }
      }
      const itemForm = document.createElement("div");
      itemForm.className = "place-item-form";
      itemForm.innerText = currLoc.form;
      const itemType = document.createElement("div");
      itemType.className = "place-item-type";
      itemType.innerText = currLoc.type;

      item.append(itemName, itemDetails, itemForm, itemType);
      newPlacesList.appendChild(item);
    }
    oldPlacesList.parentNode.replaceChild(newPlacesList, oldPlacesList);
  }

  function handleLocationItemClick(id) {
    store.selectedLocationId = id;
    updateLocationsList();
    changeLocationToCurrent();
  }

  function switchToActiveScreen() {
    const allScreens = [...document.querySelectorAll(".screen")];
    allScreens.forEach(screen => screen.classList.add("d-none"));
    const activeScreen = document.querySelector(`.screen#screen-${store.activeScreen}`);
    activeScreen.classList.remove("d-none");
  }

  function updateActiveScreen() {
    if (store.activeScreen === "question") {
      const questionScreen = document.querySelector("#screen-question");
      const questionHeadline = questionScreen.querySelector(".question-headline");
      questionHeadline.innerText = store.currentText;
    } else if (store.activeScreen === "didnt-understand") {

    } else if (store.activeScreen === "showmap") {
      updateMapHeading();
      updateLocationsList();
      changeLocationToCurrent();
    } else if (store.activeScreen === "showfaq") {
      renderFaq();
    }
  }

  function renderFaq() {
    if (!store.currentFaq) {
      return;
    }
    const faqTitle = document.querySelector("#faq-title");
    faqTitle.innerText = store.currentFaq.title;
    const faqBodyEl = document.querySelector("#faq-body");
    faqBodyEl.innerText = store.currentFaq.text;
    const oldFaqImagesContainer = document.querySelector("#faq-photos");
    const newFaqImagesContainer = document.createElement("div");
    newFaqImagesContainer.className = "faq-photos";
    newFaqImagesContainer.id = "faq-photos";
    for (let i = 0; i < store.currentFaq.images.length; i++) {
      const imageContainer = document.createElement("div");
      imageContainer.className = "faq-image-container";
      imageContainer.addEventListener("click", () => {
        console.log(imageContainer);
        imageContainer.classList.toggle("faq-image-container--zoomed");
      });
      const newImage = document.createElement("img");
      newImage.className = "faq-image-img";
      newImage.src = store.currentFaq.images[i];
      imageContainer.appendChild(newImage);
      newFaqImagesContainer.appendChild(imageContainer);
    }
    oldFaqImagesContainer.parentNode.replaceChild(newFaqImagesContainer, oldFaqImagesContainer);
  }

  function handleGotServerResponse() {
    console.log("store.lastServerResponse: ", store.lastServerResponse);
    store.assistantState = store.lastServerResponse?.assistantState || 0;
    store.activeScreen = store.lastServerResponse?.screen || "question";
    store.currentText = store.lastServerResponse?.text || "";
    store.currentFaq = store.lastServerResponse?.faq;
    store.currentStage = store.lastServerResponse?.stage || store.currentStage;
    store.currentLocations = store.lastServerResponse?.location;
    if (store.currentLocations) {
      store.selectedLocationId = store.currentLocations[0].id;
    }
    switchToActiveScreen();
    updateActiveScreen();
    updateAssistant();
  }

  function updateAssistant() {
    const videoEl = document.querySelector("#assistant-container video");
    const sourceEl = document.querySelector("#assistant-container video source");
    // console.log("store.assistantState", store.assistantState);
    if (store.isSpeaking) {
      sourceEl.src = ASSISTANT_SRCS.LISTENING;
    } else if (store.isFetching) {
      sourceEl.src = ASSISTANT_SRCS.THINKING;
    } else if (store.assistantState === 1) {
      sourceEl.src = ASSISTANT_SRCS.IDLE_1;
    } else if (store.assistantState === 2) {
      sourceEl.src = ASSISTANT_SRCS.IDLE_2;
    } else if (store.assistantState === 3) {
      sourceEl.src = ASSISTANT_SRCS.POINTING;
    }
    videoEl.load();
  }

  function setStart() {
    store.lastServerResponse = hardcodedResponses.to_start;
    handleGotServerResponse();
  }

  function syncDebugServerUrl() {
    const debugServerUrl = document.querySelector("#debug-server-url");
    debugServerUrl.value = store.serverUrl;
  }

  function askForLocation() {
    var geoSettings = {
      enableHighAccuracy: false,
      maximumAge: 30000,
      timeout: 20000
    };
    navigator.permissions.query({name: 'geolocation'}).then(function (result) {
      if (result.state === 'granted') {
        console.log(result.state);
      } else if (result.state === 'prompt') {
        console.log(result.state);
        navigator.geolocation.getCurrentPosition((position) => {
          console.log(position);
          store.userPosition = position;
        }, () => {
        }, geoSettings);
      } else if (result.state === 'denied') {
        console.log(result.state);
      }
      result.onchange = function () {
        console.log(result.state);
      }
    });

  }

  function init() {
    setStore();
    // setChangeLocationEach5Seconds();
    askForLocation();
    setEventListeners();
    syncDebugServerUrl();
    initMediaRecorder();
    setStart();
  }
})();
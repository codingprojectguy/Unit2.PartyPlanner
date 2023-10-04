const API_URL_EVENT = `https://fsa-crud-2aa9294fe819.herokuapp.com/api/2309-FSA-ET-WEB-FT-SF/events`;

const state = {
  guests: [],
  rsvps: [],
  events: [],
};
//class
const partyList = document.querySelector(".showParties");

const addInput = document.querySelector(".addInput");
//ID
const nameInput = document.querySelector("#name");
const localInput = document.querySelector("#location");
const dateInput = document.querySelector("#date");
const desInput = document.querySelector("#description");

async function getPartiesAPI(url) {
  try {
    const getData = await fetch(url);
    const json = await getData.json();
    return json.data;
  } catch (error) {
    console.error(error);
  }
}

async function dataInput() {
  state.events = await getPartiesAPI(API_URL_EVENT);
}

async function render() {
  await dataInput();
  renderParties();
  deleteEvent();
}
render();

//Function RENDER() !
function renderParties() {
  if (state.events.length > 0) {
    const partyCards = state.events.map((event) => {
      const li = document.createElement("li");
      li.innerHTML = `
              <h2>${event.name}<h2>
              <h3>${event.date}</h3>
              <h4>${event.location}<h4>
              <p>${event.description}</p>
              <button class='delete'>Delete</button>
            `;
      return li;
    });
    partyList.replaceChildren(...partyCards);
  }
}

//----------------------------------------------------------------------

function addParty() {
  addInput.addEventListener("click", async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(API_URL_EVENT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: nameInput.value,
          description: desInput.value,
          date: new Date(dateInput.value),
          location: localInput.value,
        }),
      });

      console.log("POST", response);
      render();
    } catch (error) {
      console.error("fix the error", error);
    }
  });
}

function deleteEvent() {
  const btnDel = document.querySelectorAll(".delete");
  if (state.events.length > 0) {
    btnDel.forEach((btn, i) => {
      btn.addEventListener("click", async () => {
        await delCard(state.events[i].id);
        render();
      });
    });
  }
}
async function delCard(id) {
  try {
    const response = await fetch(`${API_URL_EVENT}/${id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    });
    console.log("del");
  } catch (err) {
    console.error(err);
  }
}

addParty();

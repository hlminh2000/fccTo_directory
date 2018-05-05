const appContainer = document.getElementById("app");

// be nice or else!!! :D
const users = [
  // example. Copy everything from line 7 to 11. Paste it after the last person.
  /*
  {
    name: "someone",
    bio: "I am an awesome person",
    github: "@johndoe",
  },
  */
  {
    name: "Pulkit Kumar",
    bio: "Full Stack developer and learning Android and iOS development also",
    github: "@droidpulkit",
  },
  {
    name: "Minh Ha",
    bio: "I am an awesome person",
    github: "@hlminh2000",
  },
  {
    name: "Justin Sane",
    bio:
      "⚛️ Senior JS Developer @TelusDigital || @FreeCodeCamp core || Working on my own garden. Cannot care if your side of the hedge seems greener. || INTJ-A Úlfhéðin",
    github: "@hallaathrad"
  }
];

const toHtml = users =>
  users.map(
    user =>
      `<div class="card box">
        <div class="is-size-2"> ${user.name} </div>
        <div class="is-size-4">
          <img class="octocat" src="${"https://assets-cdn.github.com/images/modules/logos_page/GitHub-Mark.png"}"/>
          <a href="http://github.com/${user.github.substr(1)}" target="_blank">${
        user.github
      }</a>
        </div>
        <div class="is-size-6">${user.bio}</div>
      </div>
      `
  );

const render = users => {
  appContainer.innerHTML = toHtml(users).join("\n");
};

render(users);

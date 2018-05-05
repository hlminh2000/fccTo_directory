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
    name: "Minh Ha",
    bio: "I am an awesome person",
    github: "@hlminh2000",
  },
  {
    name: "Justin Sane",
    bio:
      "⚛️ Senior JS Developer @TelusDigital || @FreeCodeCamp core || Working on my own garden. Cannot care if your side of the hedge seems greener. || INTJ-A Úlfhéðin",
    github: "@hallaathrad"
  },
  {
    name: "Sylvain Junca",
    bio: "I am canelés baker and I want to become a Developer",
    github: "@SylvainJunca",
  },
  {
    name: "Andrew",
    bio: "Jr Front-end web developer; Student of @FreeCodeCamp; Coffee Drinker",
    github: "@andrew-mcintosh",
  },
  {
    name: "Mayank Suchade",
    bio:
      "Entry-Level Developer || Working towards being the one of greatest js wizards.",
    github: "@mayanksuchde"
  },
  {
    name: "Adam Rogers",
    bio: "Professional wizard. Harry Potter has nothing on me.",
    github: "@aroger7",
  },
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

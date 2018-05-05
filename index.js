const appContainer = document.getElementById("app");

// be nice or else!!! :D
const users = [
  // example.
  /*
  {
    name: "someone",
    bio: "I am an awesome person",
    github: "@johndoe",
  },
  */
  {
    name: "Justin Sane",
    bio:
      "⚛️ Senior JS Developer @TelusDigital || @FreeCodeCamp core || Working on my own garden. Cannot care if your side of the hedge seems greener. || INTJ-A Úlfhéðin",
    github: "@hallaathrad"
  },
  {
    name: "Mayank Suchade",
    bio:
      "Entry-Level Developer || Working towards being the one of greatest js wizards.",
    github: "@mayanksuchde"
  }
];

const toHtml = users =>
  users.map(
    user =>
      `<div class="card box">
        <div class="is-size-2"> ${user.name} </div>
        <div class="is-size-4">
          <img class="octocat" src="${"https://assets-cdn.github.com/images/modules/logos_page/GitHub-Mark.png"}"/>
          <a href="http://github.com/${user.github.substr(1)}">${
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

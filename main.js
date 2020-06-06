var projects = [
  {
    name: "SwarmTalk",
    authors:
      "Yihan Zhang, Lyon Zhang, Hanlin Wang, Fabián E. Bustamante, Michael Rubenstein",
    time_period: "Sep 2018 - May 2020",
    img: "images/swarmtalk_img_1.png",
    description: "",
    abstract: "",
  },
  {
    name: "SDN Mini Router",
    authors: "Yihan Zhang",
    time_period: "Mar 2017",
    img: "images/sdn_img.png",
    description: "",
    abstract: "",
  },
];

function test(projects) {
  console.log("test log");
  for (let project of projects) {
    console.log(project.name);
  }
}

function two_project_abstract(projects, projectSelector) {
  let project_list = document.querySelector(projectSelector);
  if (project_list) {
    if (projects instanceof Array) {
      let counter = 0;
      for (let project of projects) {
        let html = `
              <img class="project_pic" src="${project.img}"/>
              <div class="project_txt">
                  <div class="project_name">${project.name}</div>
                  <div class="project_auth">${project.authors}</div>
                  <div class="project_time">${project.time_period}</div>
                  <div class="project_abst">${project.abstract}</div>
              </div>`;
        let container = document.createElement("div");
        container.className = "project";
        container.innerHTML = html;
        project_list.append(container);
        counter++;
        if (counter >= 2) break;
      }
    }
  }
}

function all_project_abstract(projects, projectSelector) {
  let project_list = document.querySelector(projectSelector);
  if (project_list) {
    if (projects instanceof Array) {
      for (let project of projects) {
        let html = `
            <img class="project_pic" src="${project.img}"/>
            <div class="project_txt">
                <div class="project_name">${project.name}</div>
                <div class="project_auth">${project.authors}</div>
                <div class="project_time">${project.time_period}</div>
                <div class="project_abst">${project.abstract}</div>
            </div>`;
        let container = document.createElement("div");
        container.className = "project";
        container.innerHTML = html;
        project_list.append(container);
      }
    }
  }
}

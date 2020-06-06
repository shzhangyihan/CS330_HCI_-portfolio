var projects = [
  {
    name: "SwarmTalk",
    link: "proj_swarmtalk.html",
    authors:
      "Yihan Zhang, Lyon Zhang, Hanlin Wang, Fabián E. Bustamante, Michael Rubenstein",
    time_period: "Sep 2018 - May 2020",
    img: "images/swarmtalk_img_1.png",
    description:
      'With nearly every new swarm robotic platform built, the designers\
    develop its software stack, from low-level drivers to high-level algorithmic \
    implementations. And while the different software stacks\
    frequently share components, especially in robot-to-robot communication, \
    these common components are also developed from\
    scratch time and again. We present SwarmTalk, a new communication \
    library that can be quickly ported to new and existing swarm\
    hardware. SwarmTalk adopts a publish-subscribe communication\
    model that satisfies the severe hardware constraints found in many\
    swarms, and provides an easy-to-use programming interface. We\
    port our SwarmTalk prototype to two hardware swarm platforms\
    and two simulator-based platforms, and implement commonly-used\
    swarm algorithms on these four platforms. We present the design\
    and implementation of SwarmTalk, discuss some of the system challenges \
    in implementation and cross-platform porting, and report\
    on our initial experiences as a common communication abstraction\
    for a community benchmarking suite.<br><br>\
    The project is hosted at: <a href="https://github.com/shzhangyihan/SwarmTalk">\
    https://github.com/shzhangyihan/SwarmTalk</a>.<br>\
    The AAMAS 2020 paper can be found at \
    <a href="https://robotics.northwestern.edu/documents/publications/2020aamas_yzhang.pdf">here</a>',
    abstract:
      'SwarmTalk is an open source communication middleware. \
      It is designed to help easing the effort for writing Swarm robotics programs,\
       and to support cross-platform developments. The result is published at \
       <a href="https://robotics.northwestern.edu/documents/publications/2020aamas_yzhang.pdf">AAMAS 2020</a>.',
  },
  {
    name: "SDN Mini Router",
    link: "index.html",
    authors: "Yihan Zhang",
    time_period: "Mar 2017",
    img: "images/sdn_img.png",
    description: "",
    abstract:
      'A software router implementation on Mininet SDN. It handles ARP, ICMP and IP packets, \
      with a custom firewall protection. The software router design won the \
      <a href="http://cns.ucsd.edu/cns-espresso-prize-for-excellence-in-networking-2017-awardee/">\
      CNS Espresso Prize for Excellence in Networking at 2017</a>.',
  },
  {
    name: "Robot Self-Other Differentiation",
    link: "index.html",
    authors: "Yihan Zhang, Yukie Nagai",
    time_period: "Apr 2017 - Sep 2017",
    img: "images/self_other_img.png",
    description: "",
    abstract:
      'Developed a Recurrent Neural Network model that predicts the proprioceptive perception of an \
      robot agent, as its imaginary body scheme, from visual inputs. The result shows, after learning the\
      mapping between its proprioceptive feedback against its visual feedback, robots can start to differenciate\
      the actions caused by its own actions. This work is published at \
      <a href="https://ieeexplore.ieee.org/abstract/document/8761042">ICDL-EpiRob 2018</a>.',
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
            <a href="${project.link}">
            <img class="project_pic" src="${project.img}"/>
            </a>
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
            <a href="${project.link}">
            <img class="project_pic" src="${project.img}"/>
            </a>
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

function load_project_info(project, projectSelector) {
  let project_content = document.querySelector(projectSelector);
  if (project_content) {
    let html = `
              <img class="project_pic" src="${project.img}"/>
              <div class="project_txt">
                  <div class="project_name">${project.name}</div>
                  <div class="project_auth">${project.authors}</div>
                  <div class="project_time">${project.time_period}</div>
              </div>`;
    let container = document.createElement("div");
    container.className = "project";
    container.innerHTML = html;
    project_content.append(container);
  }
}

function load_project_detail(project, projectSelector) {
  let project_content = document.querySelector(projectSelector);
  if (project_content) {
    let html = `<div class="project_detail">${project.description}</div>`;
    let container = document.createElement("div");
    container.className = "project";
    container.innerHTML = html;
    project_content.append(container);
  }
}

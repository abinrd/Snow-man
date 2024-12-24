function createSnowfall() {
    const snowfall = document.querySelector(".snowfall");
    const fragment = document.createDocumentFragment();

    for (let i = 0; i < 60; i++) {
        const span = document.createElement("span");
        const size = 8 + Math.random() * 16;
        
        span.style.cssText = `
            --i: ${i};
            --opacity: ${0.2 + Math.random()};
            --size: ${size}px;
            --pos: ${Math.random() * 100}%;
            --delay: ${Math.random() * 10}s;
            --duration: ${8 + Math.random() * 10}s;
        `;
        
        fragment.appendChild(span);
    }

    snowfall.appendChild(fragment);
}

createSnowfall();


document.addEventListener("mousemove", (e) => {
   
    const snowflake = document.createElement("div");
    snowflake.classList.add("snowflake");
    document.body.appendChild(snowflake);

       snowflake.style.left = `${e.pageX}px`;
    snowflake.style.top = `${e.pageY}px`;

   
    setTimeout(() => {
        snowflake.style.opacity = "0";
        snowflake.style.transform = "scale(0.5)";
    }, 50);
    setTimeout(() => {
        snowflake.remove();
    }, 1000);
});


function createStars() {
    const section = document.querySelector('section');
    for (let i = 0; i < 50; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.animationDelay = `${Math.random() * 5}s`;
        section.appendChild(star);
    }
}

createStars();

const treeContainer = document.getElementById("tree-container");
const tree = document.getElementById("tree");

const treeLength = tree.getTotalLength();
const step = treeLength / (60 * 4);

const starColors = ["#bae6fd", "#fde68a", "#d9f99d", "#fbcfe8"];

let progress = 0;
let position = 0;
let progressAtLastStarCreated = 0;

function ease(t) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

function createStar() {
  const star = document.createElementNS("http://www.w3.org/2000/svg", "path");
  star.setAttribute(
    "d",
    "M22.6715 1.87078C21.7629 -0.623594 18.2371 -0.623594 17.3285 1.87078L13.2055 13.2055L1.87078 17.3285C-0.623594 18.2371 -0.623594 21.7629 1.87078 22.6715L13.2055 26.7945L17.3285 38.1292C18.2371 40.6236 21.7629 40.6236 22.6715 38.1292L26.7945 26.7945L38.1292 22.6715C40.6236 21.7629 40.6236 18.2371 38.1292 17.3285L26.7945 13.2055L22.6715 1.87078Z"
  );
  star.classList.add("star");
  star.setAttribute(
    "style",
    `--x: ${position.x - 20}px;
    --y: ${position.y - 20}px;
    --offset-x: ${Math.random() * 30 - 15}px;
    --offset-y: ${Math.random() * 30 - 15}px;
    --scale: ${Math.random() * 0.5 + 0.7};
    --color: ${starColors[Math.floor(Math.random() * starColors.length)]};`
  );
  treeContainer.appendChild(star);

  setTimeout(() => {
    star.remove();
  }, 1600);
}

function drawTreeWithStars() {
  progress = 0;
  position = 0;
  progressAtLastStarCreated = 0;

  const interval = setInterval(() => {
    const progressPercent = progress / treeLength;

    position = tree.getPointAtLength(ease(progressPercent) * treeLength);

    if (progressPercent - progressAtLastStarCreated > 1 / 40) {
      createStar();
      progressAtLastStarCreated = progressPercent;
    }

    progress += step;
    if (progress > treeLength) {
      clearInterval(interval);
    }
  }, 1000 / 60);
}

drawTreeWithStars();
setInterval(drawTreeWithStars, 16000);

window.onmousemove = (event) => {
  const clientRect = document.body.getBoundingClientRect();
  const x = event.clientX;
  const y = event.clientY;

  document.body.style.setProperty(
    "--mouse-x",
    `${(x / clientRect.width) * 4 - 2}px`
  );
  document.body.style.setProperty(
    "--mouse-y",
    `${(y / clientRect.height) * 4 - 2}px`
  );
};

function createSparkles() {
    const section = document.querySelector('section');
    const maxSparkles = 30;

    for (let i = 0; i < maxSparkles; i++) {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';    
        sparkle.style.left = Math.random() * 100 + '%';
        sparkle.style.top = Math.random() * 40 + '%';
        sparkle.style.animationDelay = Math.random() * 2 + 's';
        
        section.appendChild(sparkle);
    }
}

createSparkles();





const anchorTagNames = ["Home", "About", "Contact", "Services", "Sales"];


const articleList = [ {
title: "title1",
paragraphOne: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti ipsum quaerat eius 
corporis aliquid doloribus cupiditate, sit perferendis. Eos iste, 
nesciunt accusamus repudiandae quasi debitis perferendis dignissimos 
ratione delectus quam?`,
paragraphTwo: `ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti ipsum quaerat eius 
corporis aliquid doloribus cupiditate, sit perferendis. Eos iste, 
nesciunt accusamus repudiandae quasi debitis perferendis dignissimos 
ratione delectus quam?`
}, {
    title: "title2",
    paragraphOne: ` repudiandae Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti ipsum quaerat eius 
    corporis aliquid doloribus cupiditate, sit perferendis. Eos iste, 
    nesciunt accusamus repudiandae quasi debitis perferendis dignissimos 
    ratione delectus quam?`,
    paragraphTwo: `quasi ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti ipsum quaerat eius 
    corporis aliquid doloribus cupiditate, sit perferendis. Eos iste, 
    nesciunt accusamus repudiandae quasi debitis perferendis dignissimos 
    ratione delectus quam?`
}, {
    title: "title3",
    paragraphOne: `cupiditate Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti ipsum quaerat eius 
    corporis aliquid doloribus cupiditate, sit perferendis. Eos iste, 
    nesciunt accusamus repudiandae quasi debitis perferendis dignissimos 
    ratione delectus quam?`,
    paragraphTwo: ` dignissimos ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti ipsum quaerat eius 
    corporis aliquid doloribus cupiditate, sit perferendis. Eos iste, 
    nesciunt accusamus repudiandae quasi debitis perferendis dignissimos 
    ratione delectus quam?`
}];


function navCreator (array) {
    const nav = document.createElement('nav');
    array.forEach(anchor => {
        const a = document.createElement('a');
        a.textContent = anchor;
        nav.appendChild(a);
    });

    return nav;
}

function createHeader () {
 const header = document.createElement("header");
 const h2 = document.createElement("h2");

 h2.textContent = "Site Logo";

 const nav = navCreator(anchorTagNames);

 header.appendChild(h2);
 header.appendChild(nav);

 return header;
}

function createTopMiddleSection () {
    const section = document.createElement('section');
    section.id = "top-middle-section";

    const div1 = document.createElement('div');
    const div2 = document.createElement('div');
    const div3 = document.createElement('div');

    const h4 = document.createElement('h4');
    h4.textContent = "Title Text";
    const h4Two = document.createElement('h4');
    h4Two.textContent = "Title Text";

    const p = document.createElement('p');
    p.textContent = `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Accusamus dicta quo assumenda enim unde rem exercitationem qui 
    debitis possimus ea!`;

    const img1 = document.createElement('img');
    img1.src = "./images/photo-1589549841711-d3098e89385a.jpg";
    const img2 = document.createElement('img');
    img2.src = "./images/photo-1590944666583-42f79031f596.jpg";

    div1.appendChild(h4);
    div1.appendChild(img1);

    div2.appendChild(p);

    div3.appendChild(h4Two);
    div3.appendChild(img2);

    section.appendChild(div1);
    section.appendChild(div2);
    section.appendChild(div3);

    return section;
}


function createMiddleMiddleSection () {
const section = document.createElement('section');

articleList.forEach(article => {
    const articleContainer = document.createElement('section');
    
    const title = document.createElement('h2');
    const pOne = document.createElement('p');
    const pTwo = document.createElement('p');
    const button = document.createElement('button');

    title.textContent = article.title;
    pOne.textContent = article.paragraphOne;
    pTwo.textContent = article.paragraphTwo;

    button.addEventListener('click', _ => {

        if (pOne.style.display === "none") {
            pOne.style.display = "block";
            pTwo.style.display = "block";
        } else {
            pOne.style.display = "none";
            pTwo.style.display = "none";
    }
    });

    articleContainer.appendChild(title);
    articleContainer.appendChild(pOne);
    articleContainer.appendChild(pTwo);
    articleContainer.appendChild(button);

    section.appendChild(articleContainer);
});

return section;

}


function createBottomMiddleSection () {
    const section = document.createElement('section');
    section.id = "bottom-middle-section";

    const h3 = document.createElement('h3');
    h3.textContent = "Sub Header";

    const p = document.createElement('p');
    p.textContent = `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis 
    nisi vitae porro ducimus maxime voluptatibus.`;

    const p2 = document.createElement('p');
    p2.textContent = `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis 
    nisi vitae porro ducimus maxime voluptatibus.`;


    section.appendChild(h3);
    section.appendChild(p);
    section.appendChild(p2);
   
    return section;
}

function createFooter () {
    const footer = document.createElement('footer');
    
    const nav = navCreator(anchorTagNames);
    
    const cp = document.createElement('copyright');
    cp.textContent = "2020";

    footer.appendChild(nav);
    footer.appendChild(cp);

    return footer;
}

function addToDOM () {
    const body = document.querySelector('body');

    const header = createHeader();
    const topSection = createTopMiddleSection();
    const middleSection = createMiddleMiddleSection();
    const bottomSection = createBottomMiddleSection();
    const footer = createFooter();

    body.appendChild(header);
    body.appendChild(topSection);
    body.appendChild(middleSection);
    body.appendChild(bottomSection);
    body.appendChild(footer);
}

addToDOM();
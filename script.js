
// main content

const main = document.getElementById("main");
main.innerHTML = home();

const proclick = document.getElementById("project");
const homeclick = document.getElementById("home");
const socialclick = document.getElementById("social");
const skillclick = document.getElementById("skill");
const contactclick = document.getElementById("contact");
const array = [proclick, homeclick, socialclick, skillclick, contactclick];

function remove() {
    for (let i = 0; i < 5; i++)
        array[i].classList.remove("liactive");
}
homeclick.addEventListener("click", () => {
    remove();
    // darkcnt();
    homeclick.classList.toggle("liactive");
    main.innerHTML = home();
    var typed = new Typed('#element', {
        strings: ['Student at NIT Silchar.', 'Tech-Enthusiast.', 'Front-End Developer.'],
        typeSpeed: 50,
    });
    darkcnt();
    // darkcnt();
});
proclick.addEventListener("click", () => {
    remove();
    proclick.classList.toggle("liactive");
    main.innerHTML = project();
    // if(count<999)
    darkcnt();
});
socialclick.addEventListener("click", () => {
    remove();
    socialclick.classList.toggle("liactive");
    main.innerHTML = social();
    darkcnt();
});
skillclick.addEventListener("click", () => {
    remove();
    skillclick.classList.toggle("liactive");
    main.innerHTML = skill();
    darkcnt();
});
contactclick.addEventListener("click", () => {
    remove();
    contactclick.classList.toggle("liactive");
    main.innerHTML = contact();
    darkcnt();
});

// change of inner contetnt

function home() {
    const inner = `<aside class="flex">
    <h3>Nav-bar</h3>
    <ul>
        <a href="#info">
            <li>Main</li>
        </a>
        <a href="#dls">
            <li>Life skills</li>
        </a>
        <a href="#ass">
            <li>Association</li>
        </a>
        <a href="#footer">
            <li>Footer</li>
        </a>
    </ul>
    <div class="menu flex"></div>
</aside>
<div id="info" class="intro container ">
    <div class="info flex">
        <h1>Hi,I am </h1>
        <h2>Sahin Alam</h2>
        <h3>
            <!-- Student At NIT Silchar <br>
            Front-end Web-Developer -->
            <span id="element"></span>
        </h3>
            <!-- <span id="#element">

            </span> -->
        <br>
        <h4 style="padding-block: 8px;">Motivated mechanical engineering under-graduate with a passion for web
            development. Strong
            foundation and
            proficiency in HTML, CSS, and JavaScript. Eager to
            contribute to innovative web development projects and expand technical expertise.</h4>
        <div class="button flex">
            <a target="_blank"
                href="https://drive.google.com/file/d/1TT7s4--dllTCPzNsbETeZXLfbFVVPCVT/view?usp=drivesdk">
                <div class="btn flex">Download Resume<i class="fa-solid fa-download"></i></div>
            </a>
            <a href="mailto:sahina_ug_22@nits.ac.in">
                <div class="btn flex">Contact me<i class="fa-regular fa-envelope"></i></div>
            </a>
        </div>
    </div>
    <div class="pic flex"></div>
</div>
<div id="dls" class="dskills container">
    <h2> Daily Life Skills</h2>
    <div class="com dskill flex">
        <div class="img img1"></div>
        <div class="desc flex">
            <h3>Communication Skills</h3>
            <p>Active listening and empathetic understanding of others' perspectives. Skilled in conflict
                resolution, finding mutually beneficial solutions. Strong interpersonal skills, fostering
                positive
                relationships with team members and clients.Adaptability in communication style for diverse
                audiences.Experienced in delivering impactful presentations and facilitating discussions.</p>
        </div>
    </div>
    <div class="cam dskill flex">
        <div class="desc flex">
            <h3>Photography Skills</h3>
            <p>Proficient in capturing high-quality photographs with a keen eye for composition, lighting, and
                timing.Strong understanding of different photography genres, including landscape, portrait,
                product,
                and event photography.Knowledgeable in utilizing various photography techniques, such as long
                exposure, HDR, and depth of field.Continuous passion for learning and keeping up with the latest
                trends and advancements in photography.</p>
            <a href="">
                <div class="btn flex">Learn more<i class="fa-solid fa-arrow-right"></i></div>
            </a>
        </div>
        <div class="img2 img"></div>

    </div>
    <div class="act dskill flex">
        <div class="img3 img"></div>
        <div class="desc flex">
            <h3>On-Screen Skills</h3>
            <p>Profound acting skills on and off the camera and stage.Displaying self confidence and excellent
                verbal skills on the stage. Member of Advay(Dramatics club of NIT Silchar).</p>
            <a href="">
                <div class="btn flex">Learn more<i class="fa-solid fa-arrow-right"></i></div>
            </a>
        </div>
    </div>
</div>
<div id="ass" class="ass container">
    <h2>Associations</h2>
    <div class="inst dskill flex">
        <div class="desc flex">
            <h3>Student at NIT Silchar</h3>
            <p> At Mechanical Engineering department(Batch of 2026).
                <br>
                <br>
                <b>National Institute Of Technology, Silchar (राष्ट्रीय प्रौद्योगिकी संस्थान, सिलचर)</b> is one
                of the 31 National Institutes of Technology of India and was established in 1967 as a Regional
                Engineering College in Assam.
            </p>
        </div>
        <a target="_blank" href="http://www.nits.ac.in/">
            <div class="img img4"></div>
        </a>

    </div>
    <div class="gyan dskill flex">
        <a target="_blank" href="https://www.facebook.com/Gyansagar.NITS">
            <div class="img img5"></div>
        </a>
        <div class="desc flex">
            <h3>Member of Gyansagar</h3>
            <p> Active member of Gyansagar's Teaching Team. Also associated with the Marketing and Animal-Care
                wing.
                <br><br>
                <a target="_blank" href="http://www.nits.ac.in/campuslife/gyansagar.php">
                    <b>About Gyansagar:</b></a>

                Gyansagar is a social service wing of NIT Silchar, volunteered by the students of institute
                which is encouraged and approved by Prof. (Dr) N.V.Deshpander, Director, NIT Silchar. Since last
                five years, Gyansagar has put its effort towards the development of the society.
            </p>
        </div>
    </div>
    <div class="ti dskill flex">
        <div class="desc flex">
            <h3>Member of Think India NIT Silchar</h3>
            <p>
                <a target="_blank" href="https://www.thinkindiaorg.in/">About Think India:</a> We at Think India
                have felt the need to bind the students with an Indian nationalistic string to harness this part
                of national treasure in furthering our aim of national reconstruction.Students from IISc, IIMB,
                NIMHANS and NLSIU joined together to create a joint forum for the students from premier
                institutes of India in 2006.
            </p>
        </div>
        <a target="_blank" href="https://www.facebook.com/ThinkindiaNITS">
            <div class="img img6">
            </div>
        </a>
    </div>
    <div class="adv dskill flex">
        <a target="_blank" href="https://www.facebook.com/advay.nitsilchar">
            <div class="img img7"></div>
        </a>
        <div class="desc flex">
            <h3>Member Of Advay</h3>
            <p> Active member of Advay.Has been a part of various events such as Nukkad Natak(26 Jan 2023), Advay Farewell Mime etc.
                <br><br>
            </p>
        </div>
    </div>

</div> 
`;
    return inner;
}

function project() {
    const inner = ` <div class="pro flex container">
    <h1>Projects</h1><br>
   
        <div class="project p1 flex">
            <h2>Favicon.io homepage copy.</h2>
            <a target="_blank" href="https://ruler45.github.io/favicon/"><div class="thumb thumb1 flex">
            </div></a>
            <div class="desc flex">
                <p>This is the copy of the favicon.io homepage that I tried to replicate.
                    This is the first proper project that I had worked on.At first it proved to be difficult but
                    as
                    a continued working on it I kept on learning and it became easier to work on CSS.This was
                    the
                    first responsive page that I created. Working on it I leaned about CSS Grid, Media-Querry
                    etc.
                </p>
                <a target="_blank" href="https://github.com/Ruler45/news-app.git">
                    <div class="btn flex">Learn more<i class="fa-solid fa-arrow-right"></i></div>
                </a>

            </div>
        </div>
        <div class="project p2 flex">
            <h2>Demo news website</h2>
            <a  href="
            #"><div class="thumb thumb2 flex">
            </div></a>
            <div class="desc flex">
                <p>TThis is a demo news website project I created to learn the use of API and its use. Though the design is not completely original yet it taught me to effectively use JavaScript.
                </p>
                <a target="_blank" href="https://github.com/Ruler45/favicon.git">
                    <div class="btn flex">Learn more<i class="fa-solid fa-arrow-right"></i></div>
                </a>

            </div>
        </div>
   
</div>`;
    return inner;
}
function social() {
    const inner = `
    <div class="dskill container flex grid">
        <a target="_blank" href="https://www.facebook.com/sahin.alam.9216778?mibextid=ZbWKwL">
            <div class="soc flex">
                <div class="face face1 flex"></div>
                <div class="desc">
                    <h3><i class="fa-brands fa-square-facebook"></i>Facebook</h3>
                
                </div>
            </div>
        </a>
        <a target="_blank" href="https://www.linkedin.com/in/sahin-alam-96250324a/">
            <div class="soc flex">
                <div class="face face2 flex"></div>
                <div class="desc">
                    <h3><i class="fa-brands fa-linkedin"></i>LinekdIn</h3>
                </div>
            </div>
        </a>
        <a target="_blank" href="https://www.instagram.com/sahinisboss/">
            <div class="soc flex">
                <div class="face face3 flex"></div>
                <div class="desc">
                    <h3><i class="fa-brands fa-instagram"></i>Instagram</h3>
                </div>
            </div>
        </a>
        <a target="_blank" href="https://twitter.com/sahin0945?t=z3RGc6kQte-piuuFQiQvCA&s=08">
            <div class="soc flex">
                <div class="face face4 flex"></div>
                <div class="desc">
                    <h3><i class="fa-brands fa-twitter"></i>Twitter</h3>
                </div>
            </div>
        </a>
 `;
    return inner;
}
function skill() {
    const inner = `
    <div class="dskill container">
        <h2 class="heading">Skills</h2>
        <div class="skill flex">
            <div class="title1 title flex">
                HTML5
            </div>
           <div class="barcnt flex"> <div class="bar bar1 flex"></div></div>
        </div>
        <div class="skill flex">
            <div class="title2 title flex">
                CSS
            </div>
            <div class="barcnt flex"> <div class="bar bar2 flex"></div></div>
        </div>
        <div class="skill flex">
            <div class="title3 title flex">
                JavaScript
            </div>
            <div class="barcnt flex"> <div class="bar bar3 flex"></div></div>
        </div>
        <div class="skill flex">
            <div class="title4 title flex">
                JAVA(Basics)
            </div>
            <div class="barcnt flex"> <div class="bar bar4 flex"></div>
                
            </div>
        </div>
        <div class="skill flex">
            <div class="title5 title flex">
                C(Programming Language).
            </div>
            <div class="barcnt flex"> <div class="bar bar5 flex"></div></div>
        </div>
    </div>
    <div class="dskill hobby container">
            <h2 class="heading">Hobbies</h2>
            <ul>
                <li>Speed Cubing</li>
                <li>Football</li>
                <li>Mobile Gaming</li>
                <li>Photography</li>
            </ul>
        </div>
 `;
    return inner;
}
function contact() {
    const inner = `
    <div class="contact container flex">
        <h2>Contact me for general enquiry/hiring.</h2>
        <div class="form-cont flex">
            <form action="https://formspree.io/f/xdovqjkd" method="POST" >
                <div class="mb-3 flex">
                    <label for="mail" class="form-label">Email address:</label>
                    <input placeholder="demo@gmail.com" autocomplete="off" required name="email" type="email" class="form-control" id="InputEmail1" aria-describedby="emailHelp">
                    <div id="emailHelp" class="form-text">We'll never share your email and mobile number with anyone else.</div>
                </div>
                <div class="mb-3 flex">
                    <label for="name">Name:</label>
                    <input autocomplete="off" name="Name" placeholder="Sahin Alam" type="text">
                </div>
                <div class="mb-3 flex">
                    <label for="InputPhone" class="form-label">Mobile No:</label>
                    <input required autocomplete="off" placeholder="9800000012" pattern="[0-9]{10}"  type="tel" class="form-control" id="InputPhone">
                </div>
                <div class="mb-3 flex">
                    <label for="message">Leave a Message:</label>
                    <input autocomplete="off" name="message" placeholder="Message" type="text">
                </div>
                <div class="mb-3 form-check flex">
                    <input name="checkbox" type="checkbox" class="form-check-input" id="Check">
                    <label class="form-check-label" for="Check">Work with me.</label>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
                <button type="reset" class="btn">Reset</button>
            </form>
        </div>
    </div>
 `;
    return inner;
}


// darkcnt starts

const l1 = document.getElementById("l1");
const l2 = document.getElementById("l2");
const l3 = document.getElementById("l3");
const ham = document.getElementById("ham");
ham.addEventListener("click", () => {
    l1.classList.toggle("l1active");
    l2.classList.toggle("l2active");
    l3.classList.toggle("l3active");
    document.querySelector('.top').classList.toggle('topgo');

});
// darkmode starts
document.querySelector('.fa-sun').addEventListener("click", () => {
    setTimeout(() => {
        document.querySelector('.fa-sun').classList.toggle('fa-moon');
    }, 200);
    document.body.classList.toggle("darkbody");
    darkcnt();
});

function darkcnt() {
    const cnt = document.querySelectorAll(".container");

    for (let i = 0; i < cnt.length; i++) {
        console.log(i);
        if (document.body.classList.contains("darkbody")) {
            cnt[i].classList.add("darkcnt");
        }
        else {
            cnt[i].classList.remove("darkcnt");
        }
    }
}
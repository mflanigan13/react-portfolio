import React from 'react';


export default function About() {
    return (
        <section id="about">
            <div class="bgimg">
                <h1 class="display-1 ">About Me</h1>
                <hr></hr>
                <img src="/images/IMG_3080.jpg" class="rounded-circle mx-auto d-block" width={200} alt="Mallorie Flanigan" />
                <div class="container">
                    <p class="z-index-1 position-relative">Hello, my name is Mallorie Flanigan. I recently graduated a Full Stack Web Developer program at Southern Methodist University and recieved a certificate of completion. I currently live in Dallas, TX. I am actively looking for job opportunties as a entry level Web Developer in the DFW area.</p>
                    <p class="blockquote">When I am not creating websites, some of my hobbies include cross stitching, practicing guitar, and enjoying the great outdoors.</p>
                </div>
            </div>
        </section>
    );
}
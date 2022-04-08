import React from 'react';

export default function Home() {
    return (
        <section>
            <div class="bgimg">
                <h1 class="display-1">Howdy!</h1>
                <hr></hr>
                <div class="banner-text">
                    <h1 class="responsive-headline">
                        Mallorie Flanigan
                    </h1>
                    <h3>Full Stack Web Developer</h3>
                    <div class="contactIcons">
                        <a href="tel:14693238980"><img src="/images/phoneicon.png" alt="phone" /></a>
                        <a href="mailto: mflanigantwualumn@gmail.com"><img src="/images/email.png" alt="e-mail" /></a>
                        <a href="https://www.linkedin.com/in/mallorie-flanigan-54a32a224?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BtJu0bIA%2BRsOtzjf0vGl0jw%3D%3D"
                            target="_blank" rel="noopener noreferrer"><img src="images/linkedin.png" alt="linkedin" /></a>
                        <a href="https://github.com/mflanigan13" target="_blank" rel="noopener noreferrer"><img
                            src="/images/git-hub.png" alt="github" /></a>
                    </div>
                </div>
            </div>
        </section>
    );
}
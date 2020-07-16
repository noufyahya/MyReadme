    particlesJS.load("particles-js", "particles.json", function () {
        console.log("callback - particles.js config loaded");
    });
    const instance = new Typewriter('#typewriter', {
        loop: true
    });

    instance.typeString("Hello There 😃<br/>")
        .typeString('I am Nouf Yahya.')
        .pauseFor(300)
        .deleteChars(11)
        .typeString('an aspiring<br> web developer.')
        .pauseFor(300)
        .deleteChars(31)
        .typeString('Check out my work at<br> github.com/noufyahya')
        .deleteAll()
        .start();
    const instance2 = new Typewriter('#secondline', {
        loop: true
    });
    instance2.typeString("Follow me on Instagram <br/> @nouf.codes")
        .pauseFor(5000).deleteAll().start();
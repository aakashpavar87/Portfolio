console.log("Animation File is Loaded");

// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
    // GSAP animation code
    gsap.registerPlugin(ScrollTrigger);
    console.log("REGISTERED PLUGIN");
    gsap.from(".nav-logo", {
        duration: 1,
        opacity: 0,
        y: -50,
        ease: "bounce"
    });

    gsap.from(".nav-item", {
        duration: 1,
        opacity: 0,
        y: 50,
        ease: "power4.out",
        stagger: 0.2
    });

    gsap.from(".nav-btns i", {
        duration: 1,
        opacity: 0,
        scale: 0,
        ease: "back",
        delay: 1
    });

    gsap.from(".nav-toggle", {
        duration: 1,
        opacity: 0,
        scale: 0,
        ease: "back",
        delay: 1.2
    });

    // Home section animations
    gsap.from(".home-social-icon", {
        duration: 1,
        opacity: 0,
        y: -50,
        ease: "back",
        stagger: 0.2,
        delay: 0.5
    });

    gsap.from(".home-img", {
        duration: 1.5,
        opacity: 0,
        scale: 0,
        ease: "elastic",
        delay: 1
    });

    gsap.from(".home-title", {
        duration: 1,
        opacity: 0,
        y: 50,
        ease: "power4.out",
        delay: 1.5
    });

    gsap.from(".home-subtitle", {
        duration: 1,
        opacity: 0,
        y: 50,
        ease: "power4.out",
        delay: 1.8
    });

    gsap.from(".home-description", {
        duration: 1,
        opacity: 0,
        y: 50,
        ease: "power4.out",
        delay: 2.1
    });

    gsap.from(".button", {
        duration: 1,
        opacity: 0,
        scale: 0,
        ease: "back",
        delay: 2.4
    });

    gsap.from(".home-scroll-button", {
        duration: 1,
        opacity: 0,
        y: 50,
        ease: "power4.out",
        delay: 2.7
    });

    // About section animations
    gsap.from(".section-title", {
        scrollTrigger: {
            trigger: ".section-title",
            start: "top 80%",
            scroller: "body",
            toggleActions: "play none none none"
        },
        duration: 1,
        opacity: 0,
        y: 50,
        ease: "power4.out"
    });

    gsap.from(".section-subtitle", {
        scrollTrigger: {
            trigger: ".section-subtitle",
            start: "top 80%",
            toggleActions: "play none none none"
        },
        duration: 1,
        opacity: 0,
        y: 50,
        ease: "power4.out",
        delay: 0.2
    });

    gsap.from(".about-img", {
        scrollTrigger: {
            trigger: ".about-img",
            start: "top 80%",
            toggleActions: "play none none none"
        },
        duration: 1,
        opacity: 0,
        scale: 0,
        ease: "elastic"
    });

    gsap.from(".about-description", {
        scrollTrigger: {
            trigger: ".about-description",
            start: "top 80%",
            toggleActions: "play none none none"
        },
        duration: 1,
        opacity: 0,
        y: 50,
        ease: "power4.out",
        delay: 0.5
    });

    gsap.from(".about-info", {
        scrollTrigger: {
            trigger: ".about-info",
            start: "top 80%",
            toggleActions: "play none none none"
        },
        duration: 1,
        opacity: 0,
        y: 50,
        ease: "power4.out",
        delay: 0.8
    });

    gsap.from(".about-buttons", {
        scrollTrigger: {
            trigger: ".about-buttons",
            start: "top 80%",
            toggleActions: "play none none none"
        },
        duration: 1,
        opacity: 0,
        y: 50,
        ease: "power4.out",
        delay: 1.1
    });

    // Skills section animations
    gsap.from(".skills-content", {
        scrollTrigger: {
            trigger: ".skills-content",
            start: "top 80%",
            toggleActions: "play none none none",
        },
        duration: 1,
        opacity: 0,
        y: 50,
        ease: "power4.out"
    });

    // Qualification section animations
    gsap.from(".qualification-container", {
        scrollTrigger: {
            trigger: ".qualification-container",
            start: "top 80%",
            toggleActions: "play none none none"
        },
        duration: 1,
        opacity: 0,
        y: 50,
        ease: "power4.out"
    });

    // Define animations for services section
    gsap.from(".services-content", {
        scrollTrigger: {
            trigger: ".services-content",
            start: "top 80%",
            end: "bottom 60%",
            toggleActions: "play none none reverse",
        },
        // opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.2
    });

    // Define animations for portfolio section
    gsap.from(".portfolio-content", {
        scrollTrigger: {
            trigger: ".portfolio-content",
            start: "top 80%",
            end: "bottom 60%",
            toggleActions: "play none none reverse",
        },
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.2
    });

    // Define animations for project contact section
    gsap.from(".project-data", {
        scrollTrigger: {
            trigger: ".project-data",
            start: "top 80%",
            end: "bottom 60%",
            toggleActions: "play none none reverse",
        },
        opacity: 0,
        y: 50,
        duration: 1,
    });

    gsap.from(".project-img", {
        scrollTrigger: {
            trigger: ".project-img",
            start: "top 80%",
            end: "bottom 60%",
            toggleActions: "play none none reverse",
        },
        opacity: 0,
        x: -50,
        duration: 1,
    });

    // Define animations for testimonial section
    gsap.from(".testimonial-content", {
        scrollTrigger: {
            trigger: ".testimonial-content",
            start: "top 80%",
            end: "bottom 60%",
            toggleActions: "play none none reverse",
        },
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.2
    });

    // Define animations for contact section
    gsap.from(".contact-info", {
        scrollTrigger: {
            trigger: ".contact-info",
            start: "top 80%",
            end: "bottom 60%",
            toggleActions: "play none none reverse",
        },
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.2
    });

    gsap.from(".footer-links", {
        scrollTrigger: {
            trigger: ".footer-links",
            start: "top 80%",
            end: "bottom 60%",
            toggleActions: "play none none reverse",
        },
        opacity: 0,
        y: 50,
        duration: 1
    });

    gsap.from(".footer-socials", {
        scrollTrigger: {
            trigger: ".footer-socials",
            start: "top 80%",
            end: "bottom 60%",
            toggleActions: "play none none reverse",
        },
        opacity: 0,
        y: 50,
        duration: 1
    });
});

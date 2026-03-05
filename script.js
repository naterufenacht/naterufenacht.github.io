// Dark mode toggle

const darkToggle = document.getElementById("dark-toggle")

if (darkToggle) {

    darkToggle.addEventListener("click", () => {

        document.body.classList.toggle("dark-mode")

        const isDark = document.body.classList.contains("dark-mode")

        localStorage.setItem("darkMode", isDark)

    })

}


// Load saved theme

if (localStorage.getItem("darkMode") === "true") {

    document.body.classList.add("dark-mode")

}


// Hero typing effect

const typingText = document.getElementById("typing-text")

if (typingText) {

    const phrases = [
        "Junior Web Developer",
        "JavaScript & API Projects",
        "Building Practical Applications"
    ]

    let phraseIndex = 0
    let letterIndex = 0
    let deleting = false

    function typeEffect() {

        const currentPhrase = phrases[phraseIndex]

        if (!deleting) {

            typingText.textContent = currentPhrase.substring(0, letterIndex + 1)
            letterIndex++

            if (letterIndex === currentPhrase.length) {
                deleting = true
                setTimeout(typeEffect, 1200)
                return
            }

        } else {

            typingText.textContent = currentPhrase.substring(0, letterIndex - 1)
            letterIndex--

            if (letterIndex === 0) {
                deleting = false
                phraseIndex = (phraseIndex + 1) % phrases.length
            }

        }

        setTimeout(typeEffect, deleting ? 40 : 80)

    }

    typeEffect()

}


// Scroll reveal animation

const sections = document.querySelectorAll("section")

if (sections.length > 0) {

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("section-visible")

                observer.unobserve(entry.target)

            }

        })

    }, {
        threshold: 0.15
    })

    sections.forEach(section => observer.observe(section))

}


// Console message for developers

console.log(`
Hello 👋

This portfolio demonstrates:

• Semantic HTML structure
• Responsive CSS layout
• JavaScript interactivity
• API based projects

GitHub:
github.com/naterufenacht
`)
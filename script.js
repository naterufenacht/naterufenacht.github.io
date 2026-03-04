// Dark mode toggle

const toggle = document.getElementById("dark-toggle")

if (toggle) {

    toggle.addEventListener("click", () => {

        document.body.classList.toggle("dark-mode")

        localStorage.setItem(
            "darkMode",
            document.body.classList.contains("dark-mode")
        )

    })

}


// Load saved theme

if (localStorage.getItem("darkMode") === "true") {
    document.body.classList.add("dark-mode")
}



// Hero typing effect

const textElement = document.getElementById("typing-text")

if (textElement) {

    const phrases = [
        "Junior Web Developer",
        "JavaScript & API Projects",
        "Building Practical Applications"
    ]

    let i = 0
    let j = 0
    let current = []
    let deleting = false

    function typeLoop() {

        textElement.innerHTML = current.join("")

        if (!deleting && j < phrases[i].length) {
            current.push(phrases[i][j])
            j++
        }

        else if (deleting && j > 0) {
            current.pop()
            j--
        }

        else if (!deleting && j === phrases[i].length) {
            deleting = true
            setTimeout(typeLoop, 1000)
            return
        }

        else if (deleting && j === 0) {
            deleting = false
            i = (i + 1) % phrases.length
        }

        setTimeout(typeLoop, deleting ? 40 : 80)
    }

    typeLoop()
}



// Scroll reveal animation

const sections = document.querySelectorAll("section")

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("section-visible")
        }

    })

}, { threshold: 0.2 })

sections.forEach(section => observer.observe(section))



// Console message for curious recruiters

console.log(`
Hi 👋

This portfolio demonstrates:

• Semantic HTML
• Responsive CSS
• JavaScript interactivity
• API based projects

GitHub:
github.com/naterufenacht
`)
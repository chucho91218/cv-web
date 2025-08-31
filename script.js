// Resume Web - Interactive Features
document.addEventListener("DOMContentLoaded", () => {
  // Smooth scrolling for internal links (if any are added later)
  const smoothScroll = (target) => {
    document.querySelector(target).scrollIntoView({
      behavior: "smooth",
    })
  }

  // Add fade-in animation on scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1"
        entry.target.style.transform = "translateY(0)"
      }
    })
  }, observerOptions)

  // Initialize animations
  const sections = document.querySelectorAll(".section")
  sections.forEach((section) => {
    section.style.opacity = "0"
    section.style.transform = "translateY(20px)"
    section.style.transition = "opacity 0.6s ease, transform 0.6s ease"
    observer.observe(section)
  })

  // Add typing effect to the role
  const roleElement = document.querySelector(".role")
  const roleText = roleElement.textContent
  roleElement.textContent = ""

  let i = 0
  const typeWriter = () => {
    if (i < roleText.length) {
      roleElement.textContent += roleText.charAt(i)
      i++
      setTimeout(typeWriter, 100)
    }
  }

  // Start typing effect after a short delay
  setTimeout(typeWriter, 1000)

  // Add click effect to contact links
  const contactLinks = document.querySelectorAll(".contact-link")
  contactLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      // Add a subtle click animation
      this.style.transform = "scale(0.95)"
      setTimeout(() => {
        this.style.transform = "scale(1)"
      }, 150)
    })
  })

  // Add hover effect to sections
  sections.forEach((section) => {
    section.addEventListener("mouseenter", function () {
      this.style.borderLeftColor = "#1d4ed8"
    })

    section.addEventListener("mouseleave", function () {
      this.style.borderLeftColor = "#1e3a8a"
    })
  })

  // Print functionality
  const addPrintButton = () => {
    const printButton = document.createElement("button")
    printButton.textContent = "Imprimir CV"
    printButton.style.cssText = `
            position: fixed;
            bottom: 20px;
            right: 20px;
            background-color: #1e3a8a;
            color: white;
            border: none;
            padding: 12px 20px;
            border-radius: 25px;
            cursor: pointer;
            font-family: inherit;
            font-weight: 500;
            box-shadow: 0 4px 12px rgba(30, 58, 138, 0.3);
            transition: all 0.3s ease;
            z-index: 1000;
        `

    printButton.addEventListener("mouseenter", function () {
      this.style.backgroundColor = "#1d4ed8"
      this.style.transform = "translateY(-2px)"
      this.style.boxShadow = "0 6px 16px rgba(30, 58, 138, 0.4)"
    })

    printButton.addEventListener("mouseleave", function () {
      this.style.backgroundColor = "#1e3a8a"
      this.style.transform = "translateY(0)"
      this.style.boxShadow = "0 4px 12px rgba(30, 58, 138, 0.3)"
    })

    printButton.addEventListener("click", () => {
      window.print()
    })

    document.body.appendChild(printButton)
  }

  // Add print button
  addPrintButton()

  // Console message for developers
  console.log("🚀 Resume Web loaded successfully!")
  console.log("💼 Built with HTML, CSS & JavaScript")
})

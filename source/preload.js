window.addEventListener('DOMContentLoaded', () => {
  const replaceText = (selector, text) => {
    const element = document.getElementById(selector)
    if (element) element.innerText = text
  }

  const technologies = [
    'chrome',
    'node',
    'electron'
  ]

  technologies.forEach(tech => replaceText(`${tech}-version`, process.versions[tech]))
})
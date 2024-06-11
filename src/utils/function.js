export const scrollToSection = sectionId => {
  const element = document.querySelector(`#${sectionId}`)
  if (element) {
    const marginTop = 0
    const scrollToY =
      element.getBoundingClientRect().top + window.scrollY - marginTop
    window.scrollTo({ top: scrollToY, behavior: 'smooth' })
  }
}

export const transition = {
  type: 'spring',
  duration: 0.7,
  bounce: 0.2,
}

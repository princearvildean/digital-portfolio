const initPortfolioMoments = () => {
  const moments = document.querySelectorAll('[data-moment]')
  if (!moments.length) return

  const activate = (element) => element.classList.add('moment-ready')
  if (!('IntersectionObserver' in window)) {
    moments.forEach(activate)
    return
  }

  const observer = new IntersectionObserver((entries, currentObserver) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        activate(entry.target)
        currentObserver.unobserve(entry.target)
      }
    })
  }, { threshold: 0.2 })

  moments.forEach((element) => observer.observe(element))
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initPortfolioMoments, { once: true })
} else {
  initPortfolioMoments()
}

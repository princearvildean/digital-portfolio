import { useEffect, useRef } from 'react'

export function QuickIndex({ sections, onJump, onClose }) {
  const dialogRef = useRef(null)
  const closeRef = useRef(null)

  useEffect(() => {
    closeRef.current?.focus()
    const dialog = dialogRef.current
    if (!dialog) return undefined
    const handleTab = (event) => {
      if (event.key !== 'Tab') return
      const focusable = [...dialog.querySelectorAll('button')]
      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus() }
      if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus() }
    }
    dialog.addEventListener('keydown', handleTab)
    return () => dialog.removeEventListener('keydown', handleTab)
  }, [])

  return <div className="index-overlay" role="presentation" onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
    <div className="index-dialog" ref={dialogRef} role="dialog" aria-modal="true" aria-labelledby="index-title">
      <div className="dialog-top"><span id="index-title">QUICK INDEX</span><button ref={closeRef} onClick={onClose} aria-label="Close quick index">ESC</button></div>
      <p>Jump to a section. Your keyboard works here too.</p>
      <div className="dialog-links">{sections.map((section) => <button key={section.id} onClick={() => onJump(section.path)}><span>{section.index}</span>{section.label}<b>↘</b></button>)}</div>
    </div>
  </div>
}

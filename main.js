navigator.serviceWorker.register('sw.js').then(() => {
  importShim('./entry.js')
})

self.addEventListener('fetch', function (event) {
  if (event.request.url.endsWith('.vue')) {
    event.respondWith(
      fetch(event.request)
        .then(r => r.text())
        .then(body => new Response( // TODO: use @vue/compiler-sfc here and transform sfc to render func
          `import {h} from 'vue'
          export default {render: () => h('div', 'run from service worker')}`,
          {
            headers: new Headers({
              'Content-Type': 'application/javascript'
            })
          }
        ))
    )
  }
})

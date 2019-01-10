const express = require('express')
const next = require('next')
const LRUCache = require('lru-cache')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const ssrCache = new LRUCache({
  max: 100,
  maxAge: dev ? 5 : 1000 * 60 * 60,
})

app
  .prepare()
  .then(() => {
    const server = express()

    server.get('/home', (req, res) => renderAndCache(req, res, '/'))

    server.get('/assortment', (req, res) =>
      renderAndCache(req, res, '/assortment'),
    )
    server.get('/authenticate', (req, res) =>
      renderAndCache(req, res, '/authenticate'),
    )

    server.get('/category/:name', (req, res) => {
      const actualPage = '/category'
      const queryParams = { name: req.params.name }
      renderAndCache(req, res, actualPage, queryParams)
    })

    server.get('/contact', (req, res) => renderAndCache(req, res, '/contact'))
    server.get('/', (_, res) => res.redirect(301, '/home'))
    server.get('/offers', (req, res) => renderAndCache(req, res, '/offers'))

    server.get('/products/:category/:id', (req, res) => {
      const actualPage = '/product'
      const queryParams = { category: req.params.category, id: req.params.id }
      renderAndCache(req, res, actualPage, queryParams)
    })

    server.get('/*', (req, res) => handle(req, res))

    server.listen(port, err => {
      if (err) throw err
      console.info(`> Ready on http://localhost:${port}`)
    })
  })
  .catch(ex => {
    console.error(ex.stack)
    process.exit(1)
  })

function getCacheKey(req) {
  return `${req.url}`
}

async function renderAndCache(req, res, pagePath, queryParams) {
  const key = getCacheKey(req)

  if (ssrCache.has(key)) {
    res.setHeader('x-cache', 'HIT')
    res.send(ssrCache.get(key))
    return
  }

  try {
    const html = await app.renderToHTML(req, res, pagePath, queryParams)

    if (res.statusCode !== 200) {
      res.send(html)
      return
    }

    ssrCache.set(key, html)

    res.setHeader('x-cache', 'MISS')
    res.send(html)
  } catch (err) {
    app.renderError(err, req, res, pagePath, queryParams)
  }
}

const express = require('express')
const next = require('next')
const routes = require('./routes')
const app = next({ dev: process.env.NODE_ENV !== 'production' })
const handler = routes.getRequestHandler(app)
const LRUCache = require('lru-cache')

const ssrCache = new LRUCache({
  max: 100,
  maxAge: process.env.NODE_ENV !== 'production' ? 5 : 1000 * 60 * 60,
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

    server.get('/contact', (req, res) => renderAndCache(req, res, '/contact'))
    server.get('/offers', (req, res) => renderAndCache(req, res, '/offers'))

    server.get('/category/:name', (req, res) => {
      const actualPage = '/category'
      const queryParams = { name: req.params.name }
      renderAndCache(req, res, actualPage, queryParams)
    })

    server.get('/:category/:id', (req, res) => {
      const actualPage = '/product'
      const queryParams = { category: req.params.category, id: req.params.id }
      renderAndCache(req, res, actualPage, queryParams)
    })

    server.get('*', (req, res) => {
      return handler(req, res)
    })

    server.listen(3000, err => {
      if (err) throw err
      console.log('> Ready on http://localhost:3000')
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

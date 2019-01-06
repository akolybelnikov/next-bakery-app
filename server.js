const express = require('express')
const next = require('next')
const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
const LRUCache = require('lru-cache')

const ssrCache = new LRUCache({
  max: 100,
  maxAge: dev ? 5 : 1000 * 60 * 60,
})

app
  .prepare()
  .then(() => {
    const server = express()

    server.get('/home', (req, res) => renderAndCache(req, res, '/'))
    server.get('/', (req, res) => res.redirect(301, '/home'))

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

  function getCacheKey (req) {
	  return `${req.url}`
  }

  async function renderAndCache (req, res, pagePath, queryParams) {
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

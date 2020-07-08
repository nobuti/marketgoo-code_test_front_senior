import fetch from 'isomorphic-unfetch'

export default async ({ method, url, body }) => {
  const fetchParams = {
    method,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  }

  if (body) {
    Object.assign(fetchParams, {
      body: JSON.stringify(body)
    })
  }

  const endpoint = `${url}`
  try {
    const response = await fetch(endpoint, fetchParams)
    const data = await response.json()

    console.group('fetch operation')
    console.log('endpoint', endpoint)
    console.log('fetchParams', fetchParams)
    console.log('response', response)
    console.log('response data', data)
    console.groupEnd()

    return {
      response,
      status: response.status,
      data,
      headers: response.headers
    }
  } catch (error) {
    return { error: error.message }
  }
}

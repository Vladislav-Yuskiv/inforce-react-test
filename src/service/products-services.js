
const BASE_URL = 'http://localhost:3010' ;

export function fetchAllProducts() {
    return fetch(`${BASE_URL}/products` , {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      }).then(r => {
        if (r.ok) {
            return r.json()
        }
        return Promise.reject(new Error('Error 404'))
    })
}

export function fetchDeleteProduct( id ) {
    return fetch(`${BASE_URL}/products/${id}`, {
        method: 'DELETE',
      }).then(r => {
        if (r.ok) {
            return r.json()
        }
        return Promise.reject(new Error('Error 404'))
    })
}
export function fetchPostProduct(product) {
    return fetch(`${BASE_URL}/products` , {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(product)
      }).then(r => {
        if (r.ok) {
            return r.json()
        }
        return Promise.reject(new Error('Error 404'))
    })
}

export function fetchProductById(id) {
    return fetch(`${BASE_URL}/products/${id}` , {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      }).then(r => {
        if (r.ok) {
            return r.json()
        }
        return Promise.reject(new Error('Error 404'))
    })
}


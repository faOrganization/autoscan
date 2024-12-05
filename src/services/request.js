const request = (url, data = false, method = 'GET') => {
    return new Promise( async (resolve, reject) => {
        const options = {
            method,
            headers: {
                "Content-Type": "application/json",
              }
        }
        
        if (data && method == 'POST') {
            options.body = JSON.stringify(data);
            console.log(options);
            
            console.log(data);
            
        }

       const response = await fetch(import.meta.env.VITE_REACT_APP_API_URL + url, options);
       const result = await response.json();
       console.log(result);
       
       if (response.ok) {
        resolve(result)
       } else {
        reject(result)
       }
    })
}

export const post = (url, data) => request(url, data, "POST");
export const get = url => request(url);
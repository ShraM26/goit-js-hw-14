

export function processHttpRequest(searchQuery) {

  axios.get(`https://pixabay.com/api`, {
    params: {
     key: '44309654-823a8ee5bf9a3cfe17e257280',
       q: searchQuery,
       image_type: 'photo',
       orientation: 'horizontal',
       safesearch: 'true',
   }
 })
    
 
   
   
   .then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
      throw error;
    });
}
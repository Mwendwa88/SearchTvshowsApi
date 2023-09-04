  // const getStarWars = async (id) =>{
  //   const res = await axios.get(`https://swapi.dev/api/people/${id}/`);
  //   console.log(res.data);
  // }
  // getStarWars(5);
  // getStarWars(15);
  //   const jokes = document.querySelector('#joke',);
  // const getJoke = async () =>{
  //   try{
  //       const config ={headers:{ Accept:'application/json'}}
  //       const res = await axios.get('https://icanhazdadjoke.com/', config);
       
  //       const newLi = document.createElement('LI');
  //       newLi.append(res.data.joke);
  //       jokes.append(newLi);
  //   }catch (e){
  //       console.log("errrrr",e)
  //   }
  // }

  // getJoke();
  // 
  const form = document.querySelector('#searchForm');
  form.addEventListener('submit', async function (e) {
        e.preventDefault();
        const searchTerm = form.elements.query.value;
        const config = {params:{q:  searchTerm}}
        const res = await  axios.get(`https://api.tvmaze.com/search/shows`,config);
        makeImages(res.data);
        form.elements.query.value = '';
  })

  const makeImages = (shows) =>{
    for (let result of shows){
          if ( result.show.image){
            const img = document.createElement('IMG')
            img.src = result.show.image.medium;
            document.body.append(img);
         }
     }
  }
 
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
   



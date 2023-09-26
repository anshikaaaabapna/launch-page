import axios from "axios";

const API_KEY='85bb3c4f90mshb58451343e5ed01p19890fjsn078ff6d78ade'
const API_BASE_URL="https://rapidapi.com/developer/authorization/moviedatabase";

const client = axios.create({
    baseURL:API_BASE_URL,
    params: API_KEY
});

// export const searchMovies=async(query:string) =>{
//     try{
//         const response=await client.get("/search/movies",{
//             params: {query,},
//         });
//         if(response.data && response.data.results){
//             return response.data.results
//         }
//         else{
//             console.error("couldn't get the data");
//         }
//     } catch(error){
//         console.error("error");
//         return[];
//     }
// }
export const searchMovies = async (query: string) => {
    try {
      const response = await axios.get(
        'https://cors-anywhere.herokuapp.com/https://rapidapi.com/developer/authorization/moviedatabase/search/movies',
        {
          params: {
            query,
          },
          headers: {
            'X-RapidAPI-Key': 'YOUR_API_KEY', // Add your API key here
          },
        }
      );
      if (response.data && response.data.results) {
        return response.data.results;
      } else {
        console.error("Couldn't get the data");
      }
    } catch (error) {
      console.error("Error:", error);
      return [];
    }
  };
  
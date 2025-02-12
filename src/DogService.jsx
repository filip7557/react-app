import axios from 'axios';

class DogService {

    currentPage = 1;

    async getDogs() {
        const response = await axios.get("http://localhost:5259/api/Dog", { params: { currentPage: this.currentPage } });
        return response.data;
    }

    async getDogById(id) {
        const response = await axios.get(`http://localhost:5259/api/Dog/${id}`)
        return response.data;
    }

    async getBreeds() {
        const response = await axios.get("http://localhost:5259/api/Breed");
        return response.data;
    }

    async deleteDogById(id) {
        await axios.delete(`http://localhost:5259/api/Dog/${id}`)
    }

    async SaveDog(dog) {
        const response = await axios.post("http://localhost:5259/api/Dog", dog)
        console.log(response.status);
        return response
    }

    async UpdateDog(id, dog) {
        const response = await axios.put(`http://localhost:5259/api/Dog/${id}`, dog);
        console.log(response.status);
        return response;
    }
}

const dogService = new DogService();
export default dogService
import axios from "axios";

class DogService {
  currentPage = 1;
  isAsc = true;
  currentSort = "Name";
  sortOrder = "ASC";
  breedFilter = "";
  nameFilter = "";

  async getDogs() {
    this.sortOrder = this.isAsc ? "ASC" : "DESC";
    try {
      const response = await axios.get("http://localhost:5259/api/Dog", {
        params: {
          currentPage: this.currentPage,
          sortOrder: this.sortOrder,
          orderBy: this.currentSort,
          breed: this.breedFilter,
          name: this.nameFilter,
        },
      });
      return response.data;
    } catch (error) {
      alert(error.message);
      return {};
    }
  }

  async getDogById(id) {
    try {
      const response = await axios.get(`http://localhost:5259/api/Dog/${id}`);
      return response.data;
    } catch (error) {
      alert(error.message);
      return {};
    }
  }

  async getBreeds() {
    try {
      const response = await axios.get("http://localhost:5259/api/Breed");
      return response.data;
    } catch (error) {
      alert(error.message);
    }
  }

  async deleteDogById(id) {
    try {
      await axios.delete(`http://localhost:5259/api/Dog/${id}`);
    } catch (error) {
      alert(error.message);
    }
  }

  async SaveDog(dog) {
    try {
      const response = await axios.post("http://localhost:5259/api/Dog", dog);
      console.log(response.status);
      return response;
    } catch (error) {
      alert(error.message);
    }
  }

  async UpdateDog(id, dog) {
    try {
      const response = await axios.put(
        `http://localhost:5259/api/Dog/${id}`,
        dog
      );
      console.log(response.status);
      return response;
    } catch (error) {
      alert(error.message);
    }
  }
}

const dogService = new DogService();
export default dogService;

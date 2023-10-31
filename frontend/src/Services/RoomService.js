import axios from 'axios';

const baseUrl = "http://localhost:8080";

class RoomService {
    static async getRooms() {
        return await axios.post(`${baseUrl}/api/room/getAll`)
    }

}


export default RoomService;
import axios from "axios";

export async function getRecurrings() {
    const { data } = await axios.get("/api/v2/recurrings");
    return data;
}

export async function createRecurring(recurring) {
    const { data } = await axios.post("api/v2/recurrings", recurring);
    return data;
}

export async function getRecurringById(id) {
    const { data } = await axios.get(`/api/v2/recurrings/${id}`);
    return data;
}

export async function editRecurring({recurring, id}) {
    const { data } = await axios.patch(`/api/v2/recurrings/${id}`, recurring);
    return data;
}

export async function deleteRecurring(id) {
    const { data } = await axios.delete(`/api/v2/recurrings/${id}`);
    return data;
}

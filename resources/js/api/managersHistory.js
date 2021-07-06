import axios from "axios";

export async function getManagersHistory() {
    const { data } = await axios.get("/api/v2/managers-history");
    return data;
}

export async function createManagerHistory(history) {
    const { data } = await axios.post("api/v2/managers-history", history);
    return data;
}

export async function getManagerHistoryById(id) {
    const { data } = await axios.get(`/api/v2/managers-history/${id}`);
    return data;
}

export async function editManagerHistory(history) {
    const { data } = await axios.patch(
        `/api/v2/managers-history/${history.id}`,
        history
    );
    return data;
}

export async function deleteManagerHistory(id) {
    const { data } = await axios.delete(`/api/v2/managers-history/${id}`);
    return data;
}

import axios from "axios";

export async function getManagers() {
    const { data } = await axios.get("/api/v2/managers");
    return data;
}

export async function createManager(manager) {
    const { data } = await axios.post("api/v2/managers", manager);
    return data;
}

export async function getManagerById(id) {
    const { data } = await axios.get(`/api/v2/managers/${id}`);
    return data;
}

export async function editManager(manager) {
    const { data } = await axios.patch(
        `/api/v2/managers/${manager.id}`,
        manager
    );
    return data;
}

export async function deleteManager(id) {
    const { data } = await axios.delete(`/api/v2/managers/${id}`);
    return data;
}

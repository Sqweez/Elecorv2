import axios from "axios";

export async function getSources() {
    const { data } = await axios.get("/api/v2/sources");
    return data;
}

export async function createSource(source) {
    const { data } = await axios.post("api/v2/sources", source);
    return data;
}

export async function getSourceById(id) {
    const { data } = await axios.get(`/api/v2/sources/${id}`);
    return data;
}

export async function editSource(source) {
    const { data } = await axios.patch(`/api/v2/sources/${source.id}`, source);
    return data;
}

export async function deleteSource(id) {
    const { data } = await axios.delete(`/api/v2/sources/${id}`);
    return data;
}

import axios from "axios";

export async function getCertificates() {
    const { data } = await axios.get("/api/v2/certificates");
    return data;
}

export async function createCertificate(certificate) {
    const { data } = await axios.post("api/v2/certificates", certificate);
    return data;
}

export async function getCertificateById(id) {
    const { data } = await axios.get(`/api/v2/certificates/${id}`);
    return data;
}

export async function editCertificate(certificate) {
    const { data } = await axios.patch(
        `/api/v2/certificates/${certificate.id}`,
        certificate
    );
    return data;
}

export async function deleteCertificate(id) {
    const { data } = await axios.delete(`/api/v2/certificates/${id}`);
    return data;
}

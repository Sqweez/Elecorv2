import axios from "axios";

export async function getPromoCodes() {
    const { data } = await axios.get("/api/v2/promo-codes");
    return data;
}

export async function createPromoCode(promoCode) {
    const { data } = await axios.post("api/v2/promo-codes", promoCode);
    return data;
}

export async function getPromoCodeById(id) {
    const { data } = await axios.get(`/api/v2/promo-codes/${id}`);
    return data;
}

export async function editPromoCode(promoCode) {
    const { data } = await axios.patch(
        `/api/v2/promo-codes/${promoCode.id}`,
        promoCode
    );
    return data;
}

export async function deletePromoCode(id) {
    const { data } = await axios.delete(`/api/v2/promo-codes/${id}`);
    return data;
}

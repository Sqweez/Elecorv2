import axios from "axios";

export async function getPromoCodesPackages() {
    const { data } = await axios.get("/api/v2/promo-codes-packages");
    return data;
}

export async function createPromoCodePackage(promoCodePackage) {
    const { data } = await axios.post(
        "api/v2/promo-codes-packages",
        promoCodePackage
    );
    return data;
}

export async function getPromoCodePackageById(id) {
    const { data } = await axios.get(`/api/v2/promo-codes-packages/${id}`);
    return data;
}

export async function editPromoCodePackage(promoCodePackage) {
    const { data } = await axios.patch(
        `/api/v2/promo-codes-packages/${promoCodePackage.id}`,
        promoCodePackage
    );
    return data;
}

export async function deletePromoCodePackage(id) {
    const { data } = await axios.delete(`/api/v2/promo-codes-packages/${id}`);
    return data;
}

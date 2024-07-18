import requestWithCommonHeaders from "@/services/apiClient.js";

export async function testRequest(param) {
    return (await requestWithCommonHeaders({
        method: "post",
        maxBodyLength: Infinity,
        url:`/api`,
        data: param
    })).data
}
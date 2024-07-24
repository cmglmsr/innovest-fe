import requestWithCommonHeaders from "@/services/apiClient.js";

export async function sendPrompt(params) {
    return (await requestWithCommonHeaders({
        data: params,
        method: 'post',
        maxBodyLength: Infinity,
        url:`/query`,
    })).data
}
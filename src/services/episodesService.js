import {apiService} from "./apiService";
import {urls} from "../constans";

const episodesService = {
    getAll: (page) => apiService.get(urls.episodes, {params: {page}})
}

export {
    episodesService
}
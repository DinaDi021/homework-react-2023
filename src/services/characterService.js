import {apiService} from "./apiService";
import {urls} from "../constans";

const characterService = {
    getByIds: (iDs) => apiService.get(urls.characters.byIds(iDs))
}

export {
    characterService
}

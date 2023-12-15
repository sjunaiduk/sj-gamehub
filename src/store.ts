import { create} from "zustand";
import GameQuery from "./models/GameQuery";
interface GameQueryStore {
    gameQuery: GameQuery
    setPlatformId: (id: number) => void 
    setGenreId: (id: number) => void 
    setSearchText: (text: string) => void
    setSortOrder: (text: string) => void

}
const useGameQueryStore = create<GameQueryStore>(set => ({
    gameQuery: {} as GameQuery,
    setPlatformId: (platformId) => set(store => ({gameQuery: {...store.gameQuery, platformId}})),
    setGenreId: (genreId) => set(store => ({gameQuery: {...store.gameQuery, genreId}})),
    setSearchText: (searchText) => set(store => ({gameQuery: {...store.gameQuery, searchText}})),
    setSortOrder: (sortOrder) => set(store => ({gameQuery: {...store.gameQuery, sortOrder}}))
}))

export default useGameQueryStore;
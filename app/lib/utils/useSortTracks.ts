import { DocumentData } from "@firebase/firestore"
import { SongOrderType, SortedTracksType, TrackType } from "../types/firebase"

export const useSortTrack = (tracks: TrackType[], discography: DocumentData | undefined) => {
  let tracksArray: any[] = []
  let sortedTracks: SortedTracksType[] = Array(tracks?.length)

  tracks?.forEach((track: TrackType) => {
    track.order.forEach((song: SongOrderType) => {
      if (song.album === discography?.name) {
        tracksArray = [...tracksArray, { ...song, title: track.title }]
      }
    })
  })

  for (let i = 0; i <= sortedTracks.length; i++) {
    sortedTracks[tracksArray[i]?.position - 1] = tracksArray[i]
  }

  return sortedTracks
}

export default useSortTrack
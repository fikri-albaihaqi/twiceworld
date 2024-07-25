export const useSortTrack = (tracks: any, discography: any) => {
  let tracksArray: any[] = []
  let sortedTracks = Array(tracks?.length)

  tracks?.forEach((track: any) => {
    track.order.forEach((album: any) => {
      if (album.album === discography?.name) {
        tracksArray = [...tracksArray, { ...album, album: track.title }]
      }
    })
  })

  for (let i = 0; i <= sortedTracks.length; i++) {
    sortedTracks[tracksArray[i]?.position - 1] = tracksArray[i]
  }

  return sortedTracks
}

export default useSortTrack
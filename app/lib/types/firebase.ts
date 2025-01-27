export type DiscographyType = {
  alternateName: string
  description: string
  id: string
  image: string
  language: string
  name: string
  releaseDate: string
  totalTrack: string
  type: string
  video: string
}

export type MemberType = {
  memberName: string
}

export type SongOrderType = {
  position: string
  album: string
}

export type TrackType = {
  albums: Array<string>
  duration: string
  id: string
  memberCredits: Array<MemberType>
  order: Array<SongOrderType>
  title: string
}

export type SortedTracksType = {
  album: string
  title: string
  position: string
}

export type HistoryType = {
  date: string
  description: string
  id: string
  image: string
  title: string
}

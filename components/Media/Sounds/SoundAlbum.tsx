import Image from 'next/image'

type SoundAlbumProps = {
  image: string
  name: string
}

const SoundAlbum = ({ image, name }: SoundAlbumProps) => {
  const finalImage: string = image ? image : 'unknown.jpg'
  const finalName: string = name ? name : 'Unknown'
  // w-full h-full
  return (
    <>
      <Image
        src={`/albums/${finalImage}`}
        alt={`Picture from album: ${finalName}`}
        width="100%"
        height="100%"
        className=""
        layout="responsive"
      />
    </>
  )
}

export default SoundAlbum

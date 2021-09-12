import Image from 'next/image'

type SoundAlbumProps = {
  image: string | boolean
  name: string | boolean
}

const SoundAlbum = ({ image, name }: SoundAlbumProps) => {
  const finalImage: string | boolean = image ? image : 'unknown.jpg'
  const finalName: string | boolean = name ? name : 'Unknown'

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

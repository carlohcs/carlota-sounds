type ImageBackgroundProps = {
  imageName: string
}

const ImageBackground = ({ imageName = '' }: ImageBackgroundProps) => {
  return (
    <div
      className="w-full h-full bg-cover bg-no-repeat opacity-60"
      style={{ backgroundImage: `url('/background/${imageName}')`, backgroundPosition: 'center' }}
    />
  )
}

export default ImageBackground

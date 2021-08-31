type ImageBackgroundProps = {
  imageName: string
}

const ImageBackground = ({ imageName = '' }: ImageBackgroundProps) => {
  return (
    <div
      className="w-full h-full bg-cover bg-no-repeat opacity-40"
      style={{ backgroundImage: `url('/background/${imageName}')`, backgroundPosition: '100%' }}
    />
  )
}

export default ImageBackground

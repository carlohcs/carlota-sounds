const VideoBackground = () => {
  return (
    <video className="w-full h-full" autoPlay muted loop>
      <source src="/videos/um-fim-ensurdecedor.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  )
}

export default VideoBackground

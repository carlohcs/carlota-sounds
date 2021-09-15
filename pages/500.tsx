import ErrorPage from '@/components/Error/ErrorPage'

export default function Custom500() {
  return (
    <>
      <ErrorPage errorCode={500} />
    </>
  )
}

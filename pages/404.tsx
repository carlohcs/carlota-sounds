import ErrorPage from '@/components/Error/ErrorPage'

export default function Custom404() {
  return (
    <>
      <ErrorPage errorCode={404} />
    </>
  )
}

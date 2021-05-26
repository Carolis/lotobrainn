import React from 'react'
import ContentLoader from 'react-content-loader'
import useWindowSize from '../../hooks/useWindowSize'
import { size } from '../../styles/sizes'

export const ConcursoLoader = (): JSX.Element => {
  const { width } = useWindowSize()
  return (
    <ContentLoader
      width={500}
      height={100}
      viewBox="0 0 500 100"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      {width >= size.desktop ? (
        <>
          <circle cx="46" cy="38" r="38" />
          <circle cx="137" cy="38" r="38" />
          <circle cx="228" cy="38" r="38" />
          <circle cx="320" cy="38" r="38" />
          <circle cx="410" cy="38" r="38" />
        </>
      ) : (
        <>
          <circle cx="46" cy="38" r="38" />
          <circle cx="137" cy="38" r="38" />
          <circle cx="228" cy="38" r="38" />
        </>
      )}
    </ContentLoader>
  )
}

const Loader = (): JSX.Element => (
  <ContentLoader
    viewBox="0 0 400 160"
    speed={4}
    height={45}
    width={300}
    backgroundColor="transparent"
  >
    <circle cx="150" cy="86" r="10" />
    <circle cx="194" cy="86" r="10" />
    <circle cx="238" cy="86" r="10" />
  </ContentLoader>
)

export default Loader

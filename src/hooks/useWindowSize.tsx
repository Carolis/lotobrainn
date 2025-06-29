import { useEffect, useState } from 'react'
interface Size {
  width: number
  height: number
}

function useWindowSize(): Size {
  const [windowSize, setWindowSize] = useState<Size>({
    width: 1200,
    height: 800
  })
  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }
    window.addEventListener('resize', handleResize)
    handleResize()
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  return windowSize
}

export default useWindowSize

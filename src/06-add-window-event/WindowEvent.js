import { useEffect } from "react"

export default function WindowEvent () {

    useEffect(() => {
        const doubleclick = () => alert('mouse pressed');

        //need to create function doubleclick, if not, the event listenser is not removed
        window.addEventListener('dblclick', doubleclick)        

        return(() => {
            window.removeEventListener('dblclick', doubleclick);
        })
    }, [])

    return (
      <h2>Window event active</h2>
    )
  }
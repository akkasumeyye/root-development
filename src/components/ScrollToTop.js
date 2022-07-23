import React , {useState, useEffect} from 'react'

const ScrollToTop = () => {
    const [BackToTop, setBackToTop] = useState();

    useEffect(() => {
        window.addEventListener('scroll', () => {
         if(window.scrollY > 100) {
             setBackToTop(true);
         } else {
             setBackToTop(false);
         }
        })
        
    }, []);

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        })
    }

  return (
    <div>
        {
            BackToTop && (
                <button style={{
                    position:"fixed",
                    bottom:"50px",
                    right: "50px",
                    height: "50px",
                    width: "50px",
                    fontSize: "50px",
                    borderRadius: "50px",
                }}
                onClick={scrollUp}
                >^</button>
            )
        }
    </div>
  )
}

export default ScrollToTop
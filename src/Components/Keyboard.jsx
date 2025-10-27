import { useState } from "react"

function Keyboard({onKeyPress}) {

    const rows = ['qwertyuiop', 'asdfghjkl','zxcvbnm']
    const [activeKey, setActiveKey] = useState(null);

    const handleClick = (key) => {
        setActiveKey(key);
        onKeyPress(key);

        setTimeout(() => setActiveKey(null), 200)
    }

    

  return (
    <div className='keyboard'>
        {
            rows.map((row, index) => {
                return <div className="keyboard-row" key={index}>
                    {
                        row.split('').map((key) => {
                            return <button
                                key={key}
                                className={`key ${activeKey === key ? 'active': ''}`}
                                onClick={() => handleClick(key)}
                            >
                                {key}
                            </button>
                        })
                    }
                    {/* code for adding backspace and enter */}
                    {index === 2 && (
                        <>
                            <button className={`key special-key ${activeKey === 'Enter' ? 'active': ''}`}
                                onClick={() => handleClick('Enter')}
                            >
                                Enter
                            </button>
                            <button className={`key special-key ${activeKey === 'Backspace' ? 'active': ''}`}
                                onClick={() => handleClick('Backspace')}
                            >
                                Backspace
                            </button>
                        </>
                    )}
                </div>
            })
        }
    </div>
  )
}

export default Keyboard
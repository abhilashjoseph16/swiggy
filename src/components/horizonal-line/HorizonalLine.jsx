import "./HorizonalLine.css"

const HorizonalLine = ({width,left}) => {
  return (
    <div className='horizonal-line-main'>
      <div className="horizonal-line" style={{width:width,left:left}}>
      </div>
    </div>
  )
}

export default HorizonalLine
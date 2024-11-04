import "./HorizonalLine.css"

const HorizonalLine = ({width,left,height}) => {
  return (
    <div className='horizonal-line-main' style={{height:height}}>
      <div className="horizonal-line" style={{width:width,left:left}}>
      </div>
    </div>
  )
}

export default HorizonalLine
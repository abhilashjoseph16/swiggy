import "./HorizonalLine.css"

const HorizonalLine = ({width,left,height,backgroundColor}) => {
  return (
    <div className='horizonal-line-main' style={{height:height}}>
      <div className="horizonal-line" style={{width:width,left:left,backgroundColor:backgroundColor}}>
      </div>
    </div>
  )
}

export default HorizonalLine
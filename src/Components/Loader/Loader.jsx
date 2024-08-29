import {DotLoader} from 'react-spinners'

function Loader() {
  return (
    <div
    style={{
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        height:"vh"
    }} 
    >
        
        <DotLoader /> 
    </div>
  )
}

export default Loader
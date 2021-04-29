import { useParams } from 'react-router-dom'

const Dynamic = () => {
    const { name } = useParams()
    return <h1>Dynamic : {name} </h1>
}
export default Dynamic

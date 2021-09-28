import { useAuth } from '../providers/Auth'

function Sobre(props) {
    const { user } = useAuth()
    return (
        <div style={{ background: '#ccc', color: '#333', padding:"20px", margin:"20px 0"}}>
            <h1>Sobre</h1>
            <p>{user.name}</p>
        </div>
    );
}

export default Sobre;
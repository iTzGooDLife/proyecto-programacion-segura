import {useNavigate} from 'react-router-dom';

function Button(props){

    const navigate = useNavigate();

    const link = props.link

    return(
        <div 
            className="cursor-pointer text-xl bg-cyan-600 hover:bg-cyan-400 text-white font-bold py-2 px-4 rounded"
            onClick={() => navigate(link)}
            >
            <a href={props.link}>{props.text}</a>
        </div>
    )
}

export default Button
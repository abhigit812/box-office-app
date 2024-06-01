export default function Apptitle(props){
    const {title = "Box office",subtitle = "Are you looking for a movie or actor?"} = props;

    return(
        <div>
            <h1>{title}</h1>
            <p>{subtitle}</p>
        </div>
    );
}
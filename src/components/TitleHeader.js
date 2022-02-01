import "./TitleHeader.css";

function TitleHeader(props){
    const theader = props.className;
    return <div className={theader}>{props.children}</div>
}

export default TitleHeader;
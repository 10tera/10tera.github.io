import {css} from "@emotion/react";

type ScrollButtonProps = {
    buttonText:string,
    onClick?: () => void,
};

const ButtonStyle = css({
    border: "1px solid #383E47",
    borderRadius: "12px",
    backgroundColor: "#242529",
    padding: "11px 15px",
    color: "#EDEEF0",
    fontSize: "24px",
    fontFamily: "inherit",
    ":hover":{
        backgroundColor: "#383E47",
    }
});

const ScrollButton = ({buttonText,onClick}: ScrollButtonProps) => {
    const handleScrollButtonClick = () => {
        if(onClick)onClick();
    }
    return(
        <button css={ButtonStyle} onClick={handleScrollButtonClick}>{buttonText}</button>
    );
};

export default ScrollButton;
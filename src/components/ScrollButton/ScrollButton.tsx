import {css} from "@emotion/react";

type ScrollButtonProps = {
    buttonText:string,
};

const ButtonStyle = css({
    border: "1px solid #EDEEF0",
    borderRadius: "12px",
    backgroundColor: "#383E47",
    padding: "11px 15px",
    color: "#EDEEF0",
    fontSize: "24px",
    fontFamily: "inherit"
});

const ScrollButton = ({buttonText}: ScrollButtonProps) => {
    return(
        <button css={ButtonStyle}>{buttonText}</button>
    );
};

export default ScrollButton;
import SocialSpriteSVG from "../assets/img/sprite-sheet.svg"

const IconSVG = ({id, size = 16}) => {
    let iconSize = size;

    if (id === "logo") {
        iconSize = 32;
    } else if (id === "icon-filearrow") {
        iconSize = 12;
    }


    return (
        <svg width={iconSize} height={iconSize}>
            <use href={`${SocialSpriteSVG}#${id}`} />
        </svg>
    );
}

export default IconSVG;

import IconSun from "/images/icon-sun.svg";
import MoonIcon from "/images/icon-moon.svg";

export const themeConfig = {
    light:{
        name: "light",
        layout: {
            heroClass: "theme-light",
            backgroundColor: "bg-purple-300",
            textColor: "text-navy-850",
            textColorHover: "hover:text-navy-950",
        },
        todo: {
            backgroundColor: "bg-gray-50",
            borderColor: "border-purple-300",
            borderColorHover: "hover:text-navy-950",
            textColor: "text-navy-950",
        },
        icon: MoonIcon
    },
    dark:{
        name: "dark",
        layout: {
            heroClass: "theme-dark",
            backgroundColor: "bg-navy-950",
            textColor: "text-purple-300-dark",
            textColorHover: "hover:text-purple-100-hover",
        },
        todo: {
            backgroundColor: "bg-navy-900",
            borderColor: "border-purple-700",
            textColor: "text-purple-100-hover",
        },
        icon: IconSun
    }
};


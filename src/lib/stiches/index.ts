import { gray, grayDark } from '@radix-ui/colors'
import { createStitches } from '@stitches/react'


export const {
    styled,
    css,
    globalCss,
    keyframes,
    getCssText,
    theme,
    createTheme,
    config,
} = createStitches({
    theme: {
        colors: {
            base: "#FFF",
            ...gray,
            "brand-500": "#2997AB",
            "brand-700": "#354656"
        }
    }
})

const darkTheme = createTheme({
    colors: {
        ...grayDark,
        "brand-500": "#2997AB",
        "brand-700": "#354656",
        base: "#000",
    },
});
import { gray, grayDark } from '@radix-ui/colors'
import { createStitches, defaultThemeMap } from '@stitches/react'


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
    themeMap: {
        ...defaultThemeMap,
        height: 'space',
        width: 'space',
      },
    theme: {
        colors: {
            white: "#FFF",
            ...gray,
            "brand-500": "#2997AB",
            "brand-700": "#354656"
        },
        fontSizes: {
            xxs: '0.625rem',
            xs: '0.75rem',
            sm: '0.875rem',
            md: '1rem',
            lg: '1.125rem',
            xl: '1.25rem',
            '2xl': '1.5rem',
            '4xl': '2rem',
            '5xl': '2.25rem',
            '6xl': '3rem',
            '7xl': '4rem',
            '8xl': '4.5rem',
            '9xl': '6rem',
          },
        fontWeights: {
            regular: '400',
            medium: '500',
            bold: '700',
          },
          lineHeights: {
            shorter: '125%',
            short: '140%',
            base: '160%',
            tall: '180%',
          },
          radii: {
            px: '1px',
            xs: '4px',
            sm: '6px',
            md: '8px',
            lg: '16px',
            full: '99999px',
          },
          space: {
            1: '0.25rem',
            2: '0.5rem',
            3: '0.75rem',
            4: '1rem',
            5: '1.25rem',
            6: '1.5rem',
            7: '1.75rem',
            8: '2rem',
            10: '2.5rem',
            12: '3rem',
            16: '4rem',
            20: '5rem',
            40: '10rem',
            64: '16rem',
            80: '20rem',
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
import { styled } from "..";
import * as Dialog from '@radix-ui/react-dialog';

export const Container = styled("div", {
    width: "100vw",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    "h2": {
        textAlign: "center",
    },

    "form": {
        display: "flex",
        flexDirection: "column",
        gap: "$2",
        background: "transparent",
    }
},)

export const FormSupplierControl = styled("div", {
    display: "flex",
    width: "100%",
    gap: "$2",
    alignItems: "end",
})

export const FormControl = styled("div", {
    display: "flex",
    alignItems: "end",
    gap: "$2"
})

export const ItensContainer = styled("ul", {
    display: "flex",
    flexDirection: "column",
    gap: "$1",


    li: {
        listStyle: "none",
        display: "flex",
        justifyContent: "space-between",
        // padding: "$1",
        // borderRadius: "$sm",
        // border: "1px solid $brand-500"

    }
})

export const Overlay = styled(Dialog.Overlay, {
    background: "$gray12",
    opacity: "0.3",
    position: "fixed",
    inset: 0,
    animation: "overlayShow 150ms cubic - bezier(0.16, 1, 0.3, 1)"
})

export const Content = styled(Dialog.Content, {
    position: "fixed",
    left: "50%",
    top: "50%",
})
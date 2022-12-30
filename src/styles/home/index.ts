import { FileX } from "phosphor-react";
import { styled } from "..";

export const Container = styled("div", {
    width: "100vw",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    "form": {
        display: "flex",
        flexDirection: "column",
        gap: "$2",
    }
},)

export const FormControl = styled("div", {
    display: "flex",
    gap: "$2"
})

export const ItensContainer = styled("div", {
    display: "flex",
    flexDirection: "column",
    gap: "$1",
})
import * as Dialog from '@radix-ui/react-dialog';
import { styled } from '../../styles';

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



export const DialogOverlay = styled(Dialog.Overlay, {
    background: "$gray12",
    opacity: "0.3",
    position: 'fixed',
    inset: 0,

});

export const DialogContent = styled(Dialog.Content, {
    backgroundColor: '$white',
    borderRadius: "$sm",
    boxShadow: 'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    maxHeight: '85vh',
    padding: 25,
});
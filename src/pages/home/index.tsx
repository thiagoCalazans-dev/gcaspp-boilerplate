import Head from 'next/head'
import { MagnifyingGlass, Plus, Trash, TreeEvergreen } from 'phosphor-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Box } from '../../components/design-system/Box'
import { Button } from '../../components/design-system/Button'
import { Description } from '../../components/design-system/Description'
import { Heading } from '../../components/design-system/Heading'
import { Text } from "../../components/design-system/Text"
import { TextInput } from '../../components/design-system/TextInput'
import { Container, DialogContent, DialogOverlay, FormControl, FormSupplierControl, ItensContainer } from "./styles"
import * as Dialog from '@radix-ui/react-dialog';
import { ModalContent } from './components/modalContent'

interface IncomingItens {
    name: string,
    value: number,
}




export default function Home() {


    const [incomingItens, setIncomingItens] = useState<IncomingItens[]>([])
    const { register, handleSubmit, formState: { errors }, getValues, setValue } = useForm();

    function onAddButtonClick() {
        const value = getValues()
        setIncomingItens([...incomingItens, { name: value.product, value: value.value }])
    }


    function setSupplierId(id: number) {
        setValue("supplierId", id)
    }

    function onSubmit(data: any) {
        const incoming = {
            supplierId: data.supplierId,
            products: [
                ...incomingItens
            ]

        }
        console.log(incoming)
    };



    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Container>
                <Box>
                    <Heading>CADASTRO</Heading>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <FormSupplierControl>
                            <label>
                                <Text>Id:</Text>
                                <TextInput size="id" register={register} formName="supplierId" />
                            </label>
                            <Description>FETCH FORNECEDOR</Description>
                            <Dialog.Root>
                                <Dialog.Trigger asChild>
                                    <Button type='button'><MagnifyingGlass /></Button>
                                </Dialog.Trigger>
                                <Dialog.Portal>
                                    <DialogOverlay />
                                    <DialogContent>
                                        <ModalContent setSupplierId={setSupplierId} />
                                    </DialogContent>
                                </Dialog.Portal>
                            </Dialog.Root>

                        </FormSupplierControl>
                        <FormControl>
                            <label>
                                <Text>Produto:</Text>
                                <TextInput register={register} formName="product" />
                            </label>
                            <label>
                                <Text>Valor:</Text>
                                <TextInput register={register} formName="value" />
                            </label>
                            <Button type='button' onClick={onAddButtonClick}><Plus /></Button>
                        </FormControl>
                        <Button>Enviar</Button>

                        <ItensContainer>
                            {incomingItens.length > 0 ?
                                incomingItens.map((product, index) => (
                                    <Box as="li" key={index}>
                                        <Text>{product.name}</Text>
                                        <Text>{product.value}</Text>
                                        <Button size="icon"><Trash /></Button>
                                    </Box>)) :
                                <Text as="strong" size="sm">Adcione um item</Text>
                            }
                        </ItensContainer>

                    </form>
                </Box>
            </Container>
        </>
    )
}

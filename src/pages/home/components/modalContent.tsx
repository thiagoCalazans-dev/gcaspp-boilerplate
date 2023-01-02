import * as Dialog from '@radix-ui/react-dialog';
import { useEffect, useState } from 'react';
import { Box } from "../../../components/design-system/Box";
import { Heading } from '../../../components/design-system/Heading';
import { api } from '../../../lib/axios';
import { Supplier } from '../../../types/Supplier';

interface ModalContentProps {
    setSupplierId: (id: number) => void
}

export function ModalContent({ setSupplierId }: ModalContentProps) {

    const [suppliers, setSuppliers] = useState<Supplier[]>([])

    async function FetchtSuppliers() {
        const response = await api.get("/suppliers")
        setSuppliers(response.data)
    }

    useEffect(() => {
        FetchtSuppliers()
    }, [])

    function selectSupplier(id: number) {
        setSupplierId(id)
    }

    return (

        <Box>
            <Heading as="strong">TESTE</Heading>
            <ul>
                {suppliers.map((supplier) => { return <li onClick={() => selectSupplier(supplier.id)} key={supplier.id}>{supplier.name}</li> })}
                <Dialog.Close />
            </ul>
        </Box>
    )
}
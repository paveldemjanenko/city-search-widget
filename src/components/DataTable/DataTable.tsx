import { useState } from 'react';
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper } from '@mui/material';
import { DataModal } from '../DataModal';
import { CountryResponse } from '../../types/country-response';

interface DataTabletProps {
    data: Array<CountryResponse>;
};

const DataTable: React.FC<DataTabletProps> = ({ data }) => {
    const [modalOpen, setModalOpen] = useState<boolean>(false);
    const [selectedItem, setSelectedItem] = useState<CountryResponse | undefined>(undefined);

    const handleRowClick = (item: any) => {
        setSelectedItem(item);
        setModalOpen(true);
    };

    return (
        <TableContainer component={Paper}>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell variant='head'>City Name</TableCell>
                        <TableCell variant='head' align="right">Country Name</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((item) => (
                        <TableRow
                            key={item.name}
                            hover
                            onClick={() => handleRowClick(item)}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell>{item.name}</TableCell>
                            <TableCell align="right">{item.capital}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <DataModal modalOpen={modalOpen} setModalOpen={setModalOpen} selectedItem={selectedItem} />
        </TableContainer>
    );
};

export default DataTable; 

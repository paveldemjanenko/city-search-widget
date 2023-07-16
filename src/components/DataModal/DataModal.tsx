import { Dispatch } from 'react';
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Modal, Fade, Avatar } from '@mui/material';
import { CountryResponse } from '../../types/country-response';

interface DataModalProps {
    modalOpen: boolean;
    setModalOpen: Dispatch<boolean>;
    selectedItem: CountryResponse | undefined;
};

const DataModal: React.FC<DataModalProps> = ({ modalOpen, setModalOpen, selectedItem }) => {
    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={modalOpen}
            onClose={() => setModalOpen(false)}
            closeAfterTransition
            slotProps={{
                backdrop: {
                    timeout: 500,
                },
            }}
        >
            <Fade in={modalOpen}>
                <TableContainer
                    className="modal-container"
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        bgcolor: 'white',
                        boxShadow: 24,
                        p: 1,
                    }}
                >
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell variant='head'>City</TableCell>
                                <TableCell variant='head' align="right">{selectedItem?.capital}</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell>Country</TableCell>
                                <TableCell sx={{ display: 'flex' }} align="right">
                                    {selectedItem?.name}
                                    <Avatar variant='square' src={selectedItem?.flag} />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Subregion</TableCell>
                                <TableCell align="right">{selectedItem?.subregion}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Currency(-ies)</TableCell>
                                {selectedItem?.currencies?.length && (
                                    <TableCell align="right">{`${selectedItem?.currencies[0]?.name} (${selectedItem?.currencies[0]?.code}), ${selectedItem?.currencies[0]?.symbol}`}</TableCell>
                                )}
                            </TableRow>
                            {selectedItem?.currencies?.slice(1).map((item) => (
                                <TableRow>
                                    <TableCell colSpan={2} align="right">{`${item.name} (${item.code}), ${item.symbol}`}</TableCell>
                                </TableRow>
                            ))}
                            <TableRow>
                                <TableCell>Timezone(-s)</TableCell>
                                {selectedItem?.timezones?.length && (
                                    <TableCell align="right">{selectedItem?.timezones[0]}</TableCell>
                                )}
                            </TableRow>
                            {selectedItem?.timezones?.slice(1).map((item) => (
                                <TableRow>
                                    <TableCell colSpan={2} align="right">{item}</TableCell>
                                </TableRow>
                            ))}
                            <TableRow>
                                <TableCell>Language(-s)</TableCell>
                                {selectedItem?.languages?.length && (
                                    <TableCell align="right">{selectedItem?.languages[0]?.name}</TableCell>
                                )}
                            </TableRow>
                            {selectedItem?.languages?.slice(1).map((item) => (
                                <TableRow>
                                    <TableCell colSpan={2} align="right">{item.name}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Fade>
        </Modal>
    );
};

export default DataModal;
import { useState } from 'react';
import { Stack } from '@mui/system';
import { antiquesData } from './AntikaData';
import { Dialog, DialogActions, Button, DialogContent, TextField, Typography, Paper } from '@mui/material';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, IconButton, Menu, MenuItem } from '@mui/material';
import MoreVertRoundedIcon from '@mui/icons-material/MoreVertRounded';
import buttonData from '../categories/CategoriesData';
import ReceiptLongOutlinedIcon from '@mui/icons-material/ReceiptLongOutlined';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
import BatteryChargingFullOutlinedIcon from '@mui/icons-material/BatteryChargingFullOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import EngineeringIcon from '@mui/icons-material/Engineering';
import DiamondOutlinedIcon from '@mui/icons-material/DiamondOutlined';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import ChairOutlinedIcon from '@mui/icons-material/ChairOutlined';

const iconMap = {
    CameraAltIcon: <CameraAltOutlinedIcon />,
    MonetizationOnIcon: <MonetizationOnOutlinedIcon />,
    DiamondIcon: <DiamondOutlinedIcon />,
    BatteryChargingFullIcon: <BatteryChargingFullOutlinedIcon />,
    DescriptionIcon: <ReceiptLongOutlinedIcon />,
    EngineeringIcon: <EngineeringIcon />,
    NatureIcon: <ChairOutlinedIcon />,
    CheckroomIcon: <CheckroomIcon />,
};

export const AllAntika = () => {
    const [filteredData, setFilteredData] = useState(antiquesData);
    const [data, setData] = useState(antiquesData);
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [editItem, setEditItem] = useState(null);
    const [formData, setFormData] = useState({
        id: '',
        productName: '',
        type: '',
        sellerName: '',
        description: '',
        status: '',
        collectionDate: '',
        price: '',
    });

    const handleFormChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleFormSubmit = () => {
        const newItem = { ...formData, price: `EGP ${formData.price}` };
        const newData = [...data, newItem];
        setData(newData);
        setFilteredData(newData);
        setIsFormOpen(false);
        setFormData({
            id: '',
            productName: '',
            type: '',
            sellerName: '',
            description: '',
            status: '',
            collectionDate: '',
            price: '',
        });
    };

    const [anchorEls, setAnchorEls] = useState({});
    const handleClick = (event, id) => {
        setAnchorEls((prev) => ({ ...prev, [id]: event.currentTarget }));
    };
    
    const handleClose = (id) => {
        setAnchorEls((prev) => ({ ...prev, [id]: null }));
    };

    const handleButtonClick = (category) => {
        if (category === 'All') {
            setFilteredData(antiquesData);
        } else {
            const filtered = antiquesData.filter(item => item.type === category);
            setFilteredData(filtered);
        }
    };


    const handleEdit = (item) => {
        setEditItem(item);
    };
    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditItem({ ...editItem, [name]: value });
    };


    const handleSave = () => {
    const updatedData = data.map(item => item.id === editItem.id ? editItem : item);
    setData(updatedData);
    setEditItem(null);
};


const handleDelete = (id) => {
    const updatedData = data.filter(item => item.id !== id);
    setData(updatedData);
    
};

    





    return (
        <>
            <Stack direction="row" spacing={1} marginTop={"20px"}>
                {buttonData.map((item, index) => (
                    <Button
                        key={index}
                        startIcon={item.iconType ? iconMap[item.iconType] : null}
                        sx={{
                            backgroundColor: item.bgcolor,
                            color: item.textColor,
                            borderRadius: "10px",
                            fontSize:"20px",
                            border: item.bgcolor === 'white' ? '1px solid #ddd' : 'none',
                            padding: '8px 16px',
                            '&:hover': {
                                backgroundColor: item.bgcolor === 'white' ? '#f0f0f0' : item.bgcolor,
                            }
                        }}
                        onClick={() => handleButtonClick(item.name)}
                    >
                        <Typography sx={{ textTransform: 'capitalize', fontWeight:"400" }}>{item.name}</Typography>
                    </Button>
                ))}
            </Stack>    {/*section categories btn  */}

            <Stack direction={"row"} marginTop={"50px"} justifyContent={"space-between"}>
                <Stack>
                    <Typography variant='body1' sx={{ fontSize: "24px", fontWeight: "600" }}>Antika</Typography>
                </Stack>
                <Stack>
                    <Button
                        onClick={() => setIsFormOpen(true)}
                        sx={{
                            backgroundColor: "#2F8B3A",
                            color: "white",
                            borderRadius: "12px",
                            fontSize: "17px",
                            fontWeight: "400",
                            textAlign: "center",
                            padding: "5px 18px",
                            outline: "none",
                            border: "none",
                            textTransform: 'capitalize',
                            '&:hover': {
                                backgroundColor: "#036103",
                            }
                        }}
                    > Create + </Button>
                </Stack>
            </Stack>   {/*section create (btn) new antique */}
        
    
    
            <Paper sx={{ marginTop: "20px", borderRadius: "15px" }}>
                <Stack>
                    <TableContainer>     
                    {editItem ? (
            
    <div>
    
        <form style={{width:"35%" , margin :"auto" , marginTop :"30px"}}>
            <TextField
                margin="dense"
                name="productName"
                label="Product Name"
                type="text"
                fullWidth
                variant="outlined"
                value={editItem.productName}
                onChange={handleChange}
            />
            <TextField
                margin="dense"
                name="type"
                label="Type"
                type="text"
                fullWidth
                variant="outlined"
                value={editItem.type}
                onChange={handleChange}
            />
            <TextField
                margin="dense"
                name="sellerName"
                label="Seller Name"
                type="text"
                fullWidth
                variant="outlined"
                value={editItem.sellerName}
                onChange={handleChange}
            />
            <TextField
                margin="dense"
                name="description"
                label="Description"
                type="text"
                fullWidth
                variant="outlined"
                value={editItem.description}
                onChange={handleChange}
            />
            <TextField
                margin="dense"
                name="status"
                label="Status"
                type="text"
                fullWidth
                variant="outlined"
                value={editItem.status}
                onChange={handleChange}
            />
            <TextField
                margin="dense"
                name="collectionDate"
                label="Collection Date"
                type="date"
                fullWidth
                variant="outlined"
                InputLabelProps={{ shrink: true }}
                value={editItem.collectionDate}
                onChange={handleChange}
            />
            <TextField
                margin="dense"
                name="price"
                label="Price"
                type="number"
                fullWidth
                variant="outlined"
                value={editItem.price}
                onChange={handleChange}
            />
            <Button type="button" onClick={handleSave}> Save</Button>
        </form>
    </div>
) : (
    <Table>
        <TableHead>
            <TableRow>
                <TableCell sx={{ textAlign: "center", color: "#3BAE49", width: "120px" }}>Num</TableCell>
                <TableCell sx={{ textAlign: "center", color: "#3BAE49", width: "130px" }}>Product Name</TableCell>
                <TableCell sx={{ textAlign: "center", color: "#3BAE49" }}>Type</TableCell>
                <TableCell sx={{ textAlign: "center", color: "#3BAE49", width: "130px" }}>Seller Name</TableCell>
                <TableCell sx={{ textAlign: "center", color: "#3BAE49", width: "230px" }}>Description</TableCell>
                <TableCell sx={{ textAlign: "center", color: "#3BAE49" }}>Status</TableCell>
                <TableCell sx={{ textAlign: "center", color: "#3BAE49", width: "130px" }}>Collection Date</TableCell>
                <TableCell sx={{ textAlign: "center", color: "#3BAE49" }}>Price</TableCell>
                <TableCell sx={{ textAlign: "center", color: "#3BAE49" }}>Actions</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            {filteredData.map((row) => (
                <TableRow key={row.id}>
                    <TableCell sx={{ textAlign: "center" }}>{row.id}</TableCell>
                    <TableCell sx={{ textAlign: "center" }}>{row.productName}</TableCell>
                    <TableCell sx={{ textAlign: "center" }}>{row.type}</TableCell>
                    <TableCell sx={{ textAlign: "center" }}>{row.sellerName}</TableCell>
                    <TableCell sx={{ textAlign: "center" }}>{row.description}</TableCell>
                    <TableCell sx={{ textAlign: "center" }}>{row.status}</TableCell>
                    <TableCell sx={{ textAlign: "center" }}>{row.collectionDate}</TableCell>
                    <TableCell sx={{ textAlign: "center" }}>{row.price}</TableCell>
                    <TableCell sx={{ textAlign: "center" }}>
                        <IconButton onClick={(event) => handleClick(event, row.id)}>
                            <MoreVertRoundedIcon />
                        </IconButton>
                        <Menu
                            anchorEl={anchorEls[row.id]}
                            open={Boolean(anchorEls[row.id])}
                            onClose={() => handleClose(row.id)}
                        >
                            <MenuItem onClick={() => { handleEdit(row);   }}>Edit</MenuItem>
                            <MenuItem onClick={() => { handleDelete(row.id);  }}>Delete</MenuItem>
                        </Menu>
                    </TableCell>
                </TableRow>
            ))}
        </TableBody>
    </Table>
)}

                    </TableContainer>
                </Stack>
            </Paper>    {/*section all antique and the filter */}


            <Dialog open={isFormOpen} onClose={() => setIsFormOpen(false)}>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        name="id"
                        label="ID"
                        type="number"
                        fullWidth
                        variant="outlined"
                        value={formData.id}
                        onChange={handleFormChange}
                    />
                    <TextField
                        margin="dense"
                        name="productName"
                        label="Product Name"
                        type="text"
                        fullWidth
                        variant="outlined"
                        value={formData.productName}
                        onChange={handleFormChange}
                    />
                    <TextField
                        margin="dense"
                        name="type"
                        label="Type"
                        type="text"
                        fullWidth
                        variant="outlined"
                        value={formData.type}
                        onChange={handleFormChange}
                    />
                    <TextField
                        margin="dense"
                        name="sellerName"
                        label="Seller Name"
                        type="text"
                        fullWidth
                        variant="outlined"
                        value={formData.sellerName}
                        onChange={handleFormChange}
                    />
                    <TextField
                        margin="dense"
                        name="description"
                        label="Description"
                        type="text"
                        fullWidth
                        variant="outlined"
                        value={formData.description}
                        onChange={handleFormChange}
                    />
                    <TextField
                        margin="dense"
                        name="status"
                        label="Status"
                        type="text"
                        fullWidth
                        variant="outlined"
                        value={formData.status}
                        onChange={handleFormChange}
                    />
                    <TextField
                        margin="dense"
                        name="collectionDate"
                        label="Collection Date"
                        type="date"
                        fullWidth
                        variant="outlined"
                        InputLabelProps={{ shrink: true }}
                        value={formData.collectionDate}
                        onChange={handleFormChange}
                    />
                    <TextField
                        margin="dense"
                        name="price"
                        label="Price"
                        type="number"
                        fullWidth
                        variant="outlined"
                        value={formData.price}
                        onChange={handleFormChange}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setIsFormOpen(false)} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleFormSubmit} color="primary">
                        Add Antique 
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
};

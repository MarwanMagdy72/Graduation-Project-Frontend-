import { Avatar, Dialog, DialogActions, DialogContent, Button,DialogTitle, TextField, Typography, useTheme } from '@mui/material'
import { Stack } from '@mui/system'
import './company.css' ;
import {egyptianCompanies} from './CompantData' ;
import { useState } from 'react';

export const Company = () => {
  const [companies, setCompanies] = useState(egyptianCompanies);
  const [open, setOpen] = useState(false);
  const [newCompany, setNewCompany] = useState({
      name: '',
      location: '',
      totalUsers: '',
      imageUrl: ''
  });

  const handleClickOpen = () => {
      setOpen(true);
  };

  const handleClose = () => {
      setOpen(false);
  };

  const handleChange = (e) => {
      const { name, value } = e.target;
      setNewCompany({
          ...newCompany,
          [name]: value
      });
  };

  const handleAddCompany = () => {
      setCompanies([...companies, newCompany]);
      setNewCompany({ name: '', location: '', totalUsers: '', imageUrl: '' });
      handleClose();
  };
    const theme=useTheme()
  return (
    
    <Stack> 
        <Stack direction={"row"} justifyContent={"space-between"} marginBottom={"20px"}>
            <Typography variant='body1' sx={{fontSize:"14px" , fontWeight:"500"}}>Company</Typography>
            <button className="btnCompany"  onClick={handleClickOpen} >+</button>
        </Stack>
          
        <Stack>
        {
          companies.map((company, index) => ( 
          <Stack  key={index} direction={"row"} justifyContent={"space-between"} marginBottom={"20px"}>
            <Stack  direction={"row"}> 
            <Avatar alt={company.name} src={company.imageUrl} sx={{marginRight:"10px"}}></Avatar>
            <Stack> 
              <Typography sx={{fontSize:"14px" ,fontWeight:"500" ,}}>{company.name}</Typography>
              <Typography sx={{fontSize:"12px" ,fontWeight:"400" ,color:theme.palette.textColor.ComColor}}>{company.location}</Typography>
            </Stack>
            </Stack>

            <Stack>
              <Typography sx={{
              border:"1px solid #3BAE49" , 
              borderRadius:"10px", 
              alignItems:"center" ,
              padding:"6px 16px 6px 16px",
              fontSize:"16px" ,
              fontWeight:"500" ,

            }}

              > {company.totalUsers}</Typography>
            </Stack>

          </Stack>
        ))}
        </Stack>

        <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Add New Company</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        name="name"
                        label="Company Name"
                        type="text"
                        fullWidth
                        variant="standard"
                        value={newCompany.name}
                        onChange={handleChange}
                    />
                    <TextField
                        margin="dense"
                        name="location"
                        label="Location"
                        type="text"
                        fullWidth
                        variant="standard"
                        value={newCompany.location}
                        onChange={handleChange}
                    />
                    <TextField
                        margin="dense"
                        name="totalUsers"
                        label="Total Users"
                        type="text"
                        fullWidth
                        variant="standard"
                        value={newCompany.totalUsers}
                        onChange={handleChange}
                    />
                    <TextField
                        margin="dense"
                        name="imageUrl"
                        label="Image URL"
                        type="text"
                        fullWidth
                        variant="standard"
                        value={newCompany.imageUrl}
                        onChange={handleChange}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleAddCompany}>Add</Button>
                </DialogActions>
            </Dialog>
    </Stack>
  )
}

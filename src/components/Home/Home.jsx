import React, { useEffect, useReducer, useState } from "react";
import { reducer, initialState } from "../../utils/reducers/petReducer";
import {
  Box,
  Chip,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Stack,
  Typography,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Select,
  MenuItem,
  InputLabel
} from "@mui/material";

import * as actions from '../../utils/actions/petAction';
import { getStatus } from "../../utils/util";

function Home() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [isEditFormOpen, setIsEditFormOpen] = useState(false);
  const [selectedPet, setSelectedPet] = useState(null);
  const [petName, setPetName] = useState('');
  const [petStatus, setPetStatus] = useState('');

  const getAllPets = () => {
    const promises = ["available", "pending", "sold"].map((status) =>
      fetch(`/api/v3/pet/findByStatus?status=${status}`)
        .then((response) => response.json())
        .then((json) => json)
    );

    Promise.all(promises)
      .then((pets) => {
        dispatch({
          type: actions.UPDATE_PETS_LIST,
          newPets: pets.flat(),
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getAllPets();
  }, []);

  const openEditForm = (id) => {
    const pet = state.pets.find((pet) => pet.id === id);
    setSelectedPet(pet);
    setPetName(pet.name);
    setPetStatus(pet.status);
    setIsEditFormOpen(true);
  }

  const closeEditForm = () => {
    const petToUpdate = state.pets.find((pet) => pet.id === selectedPet.id);
    petToUpdate.name = petName;
    petToUpdate.status = petStatus;

    let pets = [...state.pets];
    const index = pets.findIndex((pet) => pet.id === petToUpdate.id);
    if (index !== -1) {
      pets[index] = petToUpdate;
    }
    dispatch({
      type: actions.UPDATE_PETS_LIST,
      newPets: pets,
    });

    updatePetDetails(petToUpdate);

    setSelectedPet(null);
    setPetName('');
    setPetStatus('');
    setIsEditFormOpen(false);
  }

  const updatePetDetails = (petToUpdate) => {
    fetch(`/api/v3/pet`, {
      method: 'PUT',
      body: JSON.stringify(petToUpdate),
      headers: { 'Content-type': 'application/json' },
    }).then((response) => {
      if (!response.ok) {
        getAllPets();
      }
    }).catch((err) => {
      getAllPets();
      console.log(err);
    });
  };

  const filterByStatus = (status) => {
    setSelectedStatus(status);
  }

  return (
    <div className="tableContainer">
      <React.Fragment>
        <Dialog
          open={isEditFormOpen}
          size='xm'
          fullWidth
          onClose={closeEditForm}
          PaperProps={{
            component: 'form',
            onSubmit: (event) => {
              event.preventDefault();
              const formData = new FormData(event.currentTarget);
              const formJson = Object.fromEntries(formData.entries());
              setPetName(formJson.name);
              setPetStatus(formJson.status);
              closeEditForm();
            },
          }}
        >
          <DialogTitle>Edit Pet Details</DialogTitle>
          <DialogContent>
              <TextField
                autoFocus
                required
                margin="dense"
                id="name"
                name="name"
                label="Name"
                type="text"
                fullWidth
                variant="standard"
                value={petName}
                onChange={(e) => setPetName(e.target.value)}
              />
              <InputLabel id="status-label">Status</InputLabel>
              <Select
                labelId="status-label"
                id="status"
                value={petStatus}
                onChange={(e) => setPetStatus(e.target.value)}
                label="Status"
                variant="standard"
                fullWidth
              >
                <MenuItem value='available'>Available</MenuItem>
                <MenuItem value='pending'>Pending</MenuItem>
                <MenuItem value='sold'>Sold</MenuItem>
              </Select>
          </DialogContent>
          <DialogActions>
            <Button variant="outlined" onClick={closeEditForm}>Cancel</Button>
            <Button variant="contained" type="submit">Update</Button>
          </DialogActions>
        </Dialog>
      </React.Fragment>
      <Stack direction="row" spacing={1} className="chipContainer">
        <Typography>Filter By:</Typography>
        <Chip label="All" data-testid="filter-all" variant="filled" color={selectedStatus === 'all' ? 'primary' : 'default'} clickable onClick={() => filterByStatus('all')} />
        <Chip label="Available" data-testid="filter-available" variant="filled" color={selectedStatus === 'available' ? 'primary' : 'default'} clickable onClick={() => filterByStatus('available')} />
        <Chip label="Pending" data-testid="filter-pending" variant="filled" color={selectedStatus === 'pending' ? 'primary' : 'default'} clickable onClick={() => filterByStatus('pending')} />
        <Chip label="Sold" data-testid="filter-sold" variant="filled" color={selectedStatus === 'sold' ? 'primary' : 'default'} clickable onClick={() => filterByStatus('sold')} />
      </Stack>
      <Box sx={{ width: '100%' }}>
        <Paper sx={{ width: '100%', mb: 2 }}>
          <TableContainer>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>Category</TableCell>
                  <TableCell>Tags</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Edit</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {state.pets.filter((pet) => {
                  return selectedStatus === 'all' || pet.status === selectedStatus;
                }).map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell>{row.name}</TableCell>
                    <TableCell>{row.category.name}</TableCell>
                    <TableCell>{row.tags.map((tag) => { return `${tag.name} ` })}</TableCell>
                    <TableCell>{getStatus(row.status)}</TableCell>
                    <TableCell><Button size="small" variant="outlined" onClick={() => { openEditForm(row.id) }}>Edit</Button></TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Box>
    </div>
  );
}

export default Home;

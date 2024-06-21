import React, { createContext } from "react";
import axios from "axios";

export const APIsContext = createContext();

const APIsContextProvider = ({ children }) => {
  // Function to get users
  async function getUsers() {
    try {
      const { data } = await axios.get(
        `https://api-service.cloud/recycle/public_html/api/users/get_user`
      );
      return data.users;
    } catch (err) {
      console.error("Error fetching users:", err);
      return null;
    }
  }

  // Function to get companies
  async function getCompanies() {
    try {
      const { data } = await axios.get(
        `https://api-service.cloud/recycle/public_html/api/users/cleanup/getcompany`
      );
      return data.data;
    } catch (err) {
      console.error("Error fetching companies:", err);
      return null;
    }
  }

  // Function to delete a company by ID
  async function deleteCompany(companyId) {
    try {
      const { data } = await axios.delete(
        `https://api-service.cloud/recycle/public_html/api/dashbord/company/delete/${companyId}`
      );
      return data;
    } catch (err) {
      console.error(`Error deleting company with ID ${companyId}:`, err);
      return null;
    }
  }

  // Function to update company data
  async function updateCompany(companyId, updatedData) {
    try {
      const formData = new FormData();
      for (const key in updatedData) {
        formData.append(key, updatedData[key]);
      }

      const { data } = await axios.post(
        `https://api-service.cloud/recycle/public_html/api/dashbord/company/update/${companyId}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      return data;
    } catch (err) {
      console.error(`Error updating company with ID ${companyId}:`, err);
      return null;
    }
  }

  // Function to create a new company
  async function createCompany(companyData) {
    try {
      const formData = new FormData();
      for (const key in companyData) {
        formData.append(key, companyData[key]);
      }
      const { data } = await axios.post(
        `https://api-service.cloud/recycle/public_html/api/dashbord/company/store`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      return data;
    } catch (err) {
      console.error("Error creating company:", err);
      return null;
    }
  }

  // Function to delete a user by ID
  async function deleteUser(userId) {
    try {
      const { data } = await axios.delete(
        `https://api-service.cloud/recycle/public_html/api/dashbord/users/delete/${userId}`
      );
      return data;
    } catch (err) {
      console.error(`Error deleting user with ID ${userId}:`, err);
      return null;
    }
  }

  // Function to update user data
  async function updateUser(userId, updatedData) {
    try {
      const { data } = await axios.post(
        `https://api-service.cloud/recycle/public_html/api/dashbord/users/update/${userId}`,
        updatedData
      );
      return data;
    } catch (err) {
      console.error(`Error updating user with ID ${userId}:`, err);
      return null;
    }
  }

  // Function to get all recycle operations
  async function getRecycleOperations() {
    try {
      const { data } = await axios.get(
        `https://api-service.cloud/recycle/public_html/api/users/recycle/showallopeartion`
      );
      return data.data;
    } catch (err) {
      console.error("Error fetching recycle operations:", err);
      return null;
    }
  }
  return (
    <APIsContext.Provider
      value={{
        getUsers,
        getCompanies,
        deleteCompany,
        updateCompany,
        createCompany,
        deleteUser,
        updateUser,
        getRecycleOperations,
      }}
    >
      {children}
    </APIsContext.Provider>
  );
};

export default APIsContextProvider;

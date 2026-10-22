import axios from 'axios'

const Base_Url='http://localhost:8080/api/employees';


export const listEmployees=()=>{
  return axios.get(Base_Url);
}

export const createEmployee=(employee)=>axios.post(Base_Url,employee)

export const getEmployee=(employeeId)=>axios.get(Base_Url + '/' + employeeId);

export const updateEmployee=(id,employee)=>axios.put(`${Base_Url}/${id}`,employee);

export const deleteEmployee=(id)=>axios.delete(Base_Url + '/' +id)
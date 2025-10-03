import client from "./client";

const getAllStays = () => client.get(`/stays.json`);


export { getAllStays };
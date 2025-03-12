import axios from 'axios';
import { Certification } from '../types';

const API_URL = 'https://your-backend-api';

export const getCertificationStatus = async (): Promise<Certification[]> => {
  const response = await axios.get<Certification[]>(`${API_URL}/certification-status`);
  return response.data;
};
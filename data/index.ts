import { DataItem } from '../types';
import strings_2023 from './2023';

interface Data {
  [key: string]: DataItem[];
}
const data: Data = {
  '2023': strings_2023,
};

export default data;

import { EmployeeInterface } from './Employee.interface';

export interface EmployeeStateInterface {
  isLoading: boolean;
  posts: EmployeeInterface[];
  error: string | null;
}

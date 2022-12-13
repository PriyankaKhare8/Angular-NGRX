import { createAction, props } from '@ngrx/store';
import { EmployeeInterface } from '../types/Employee.interface';

export const getPosts = createAction('[EmployeePosts] Get Employees');
export const getPostsSuccess = createAction(
  '[EmployeePosts] Get Employees success',
  props<{ posts: EmployeeInterface[] }>()
);
export const getPostsFailure = createAction(
  '[EmployeePosts] Get Employees failure',
  props<{ error: string }>()
);

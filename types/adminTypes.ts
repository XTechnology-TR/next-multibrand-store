import { ReduxAsync } from './index';

/**
 * Admin Reducer state interface
 *@interface
 */
export interface AdminState extends ReduxAsync {
  isDeleted: boolean;
  isUploaded: boolean;
  isUpdating: boolean;
  isUpdated: boolean;
  isCreated: boolean;
}

/**
 * Admin Reducer action types
 *@interface
 */
export enum AdminActionTypes {
  UPLOAD_PRODUCT = 'UPLOAD_PRODUCT',
  PRODUCT_DID_UPLOAD = 'PRODUCT_DID_UPLOAD',
  PRODUCT_UPLOAD_ERROR = 'PRODUCT_UPLOAD_ERROR',

  CLEAR_STATE = 'CLEAR_STATE',
}

/**
 * Admin UPLOAD action interfaces
 */
interface UploadProductRequestAction {
  type: AdminActionTypes.UPLOAD_PRODUCT;
}
interface UploadProductSuccessAction {
  type: AdminActionTypes.PRODUCT_DID_UPLOAD;
  payload: boolean;
}
interface UploadProductFailAction {
  type: AdminActionTypes.PRODUCT_UPLOAD_ERROR;
  payload: string;
}
/**
 * Admin CLEAR state action interface
 */
interface ClearStateAction {
  type: AdminActionTypes.CLEAR_STATE;
}

/**
 *Combined type for Admin action creators
 *@type
 */
export type AdminAction =
  | UploadProductRequestAction
  | UploadProductSuccessAction
  | UploadProductFailAction
  | ClearStateAction;

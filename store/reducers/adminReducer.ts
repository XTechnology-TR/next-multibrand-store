import {
  AdminAction,
  AdminActionTypes,
  AdminState,
} from '../../types/adminTypes';

const initialState: AdminState = {
  isLoading: false,
  error: null,
  isDeleted: false,
  isUploaded: false,
  isUpdating: false,
  isUpdated: false,
  isCreated: false,
};

//TODO: proper documentation after testing
//TODO: write tests
export const adminReducer = (
  state = initialState,
  action: AdminAction
): AdminState => {
  switch (action.type) {
    // Upload Operations
    case AdminActionTypes.UPLOAD_PRODUCT:
      return { ...state, isLoading: true };

    case AdminActionTypes.PRODUCT_DID_UPLOAD:
      return { ...state, isLoading: false, isUploaded: action.payload };

    case AdminActionTypes.PRODUCT_UPLOAD_ERROR:
      return {
        ...state,
        isLoading: false,
        isUploaded: false,
        error: action.payload,
      };
    // Delete Operations
    case AdminActionTypes.DELETE_PRODUCT:
      return { ...state, isLoading: true };
    case AdminActionTypes.PRODUCT_WAS_DELETED:
      return { ...state, isLoading: false, isDeleted: action.payload };
    case AdminActionTypes.PRODUCT_DELETE_ERROR:
      return {
        ...state,
        isLoading: false,
        isDeleted: false,
        error: action.payload,
      };
    // Update Operations
    case AdminActionTypes.UPDATE_PRODUCT:
      return { ...state, isLoading: true };
    case AdminActionTypes.PRODUCT_WAS_UPDATED:
      return { ...state, isLoading: false, isUpdated: action.payload };
    case AdminActionTypes.PRODUCT_UPDATE_ERROR:
      return {
        ...state,
        isLoading: false,
        isUpdated: false,
        error: action.payload,
      };
    // Clear state Operations
    case AdminActionTypes.CLEAR_STATE:
      return initialState;

    default:
      return state;
  }
};

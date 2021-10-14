import {TRANSFER_CONFIRMATION} from '../../utils/constants';
import TransferConfirmation from '../TransferItem/components/TransferConfirmation';

export const modalsList = {
  null: () => null,
  [TRANSFER_CONFIRMATION]: TransferConfirmation,
};

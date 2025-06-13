import { customerInfoMocked } from '@/services/mock/customerInfo';
import { CustomerInfoProps } from '@/types';

export const getClientsInfos = (): CustomerInfoProps['data'] => {
  return customerInfoMocked as CustomerInfoProps['data'];
};

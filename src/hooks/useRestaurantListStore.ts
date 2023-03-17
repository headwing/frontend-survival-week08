import { container } from 'tsyringe';

import { useStore } from 'usestore-ts';

import RestaurantListStore from '../stores/RestaurantListStore';

export default function useRestaurantListStore() {
  const restaurantsStore = container.resolve(RestaurantListStore);

  return useStore(restaurantsStore);
}

/**
 * Asynchronously loads the component for HomePage
 */
import { Loadable } from 'components/Loadable';

export const HomePage = Loadable(
  () => import('./HomePage'),
  (module) => module.default
);

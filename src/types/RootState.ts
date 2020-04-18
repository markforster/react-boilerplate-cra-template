import { RouterState } from 'connected-react-router';
import { GithubRepoFormState } from 'app/containers/GithubRepoForm/types';
import { ThemeState } from 'styles/theme/types';
// [IMPORT NEW CONTAINERSTATE ABOVE] < Needed for generating containers seamlessly

/* 
  Because the redux-injectors injects your reducers asynchronously somewhere in your code
  You have to declare them here manually
*/
export interface RootState {
  router?: RouterState;
  theme?: ThemeState;
  githubRepoForm?: GithubRepoFormState;
  // [INSERT NEW REDUCER KEY ABOVE] < Needed for generating containers seamlessly
}
import React, { createContext, useContext} from 'react';
import { BlogAction } from './blogsReducer';
import { BlogState } from '../../models/Blog';

interface BlogsContextProps{
  blogState: BlogState
  dispatch: React.Dispatch<BlogAction>
}

const BlogsContext = createContext<BlogsContextProps>({} as BlogsContextProps);

const useBlogsContext = () => {
  const context = useContext(BlogsContext);
  if (!context) {
    throw new Error('useBlogsContext must be used within an BlogsProvider');
  }
  return context;
};

export { useBlogsContext, BlogsContext };

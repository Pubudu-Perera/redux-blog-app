import PostsList from "./features/posts/PostsList";
import AddPostForm from "./features/posts/AddPostForm";
import EditPost from "./features/posts/EditPost";
import Layout from '../src/components/Layout';
import SinglePostPage from "./features/posts/SinglePostPage";
import UsersList from "./features/users/UsersList";
import UserPage from "./features/users/UserPage";
import {Routes, Route, Navigate} from 'react-router-dom';

function App() {
  return (
      <Routes>
        <Route path="/" element={<Layout />}>
            <Route index element={<PostsList />} />
        </Route>

        <Route path="post">
            <Route index element={<AddPostForm />} />

            <Route path=":postId" element={<SinglePostPage />} />

            <Route path="edit/:postId" element={<EditPost />}/>
        </Route>


        <Route path="user">
          <Route index element={<UsersList />} />

          <Route path=":userId" element={<UserPage />} />
        </Route>

        <Route path="*" element={<Navigate to={'/'} replace/>}></Route>
      </Routes>
  );
}

export default App;

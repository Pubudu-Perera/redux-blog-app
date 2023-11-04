import PostsList from "./features/posts/PostsList";
import AddPostForm from "./features/posts/AddPostForm";
import EditPost from "./features/posts/EditPost";
import Layout from '../src/components/Layout';
import SinglePostPage from "./features/posts/SinglePostPage";
import {Routes, Route} from 'react-router-dom'

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
      </Routes>
  );
}

export default App;

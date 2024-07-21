import "./App.css";
import CreatePostForm from "./componet/CreatePostForm";

function App() {

  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <div className="w-5/12">
          <CreatePostForm />
        </div>
      </div>
    </>
  );
}

export default App;

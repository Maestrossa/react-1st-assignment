import { useState } from 'react';
import './App.css';

function App() {
  const initialState = [{ id: 0, title: '', content: '', isDone: false }];
  const [toDos, setToDos] = useState(initialState);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [isDone, setIsDone] = useState('');

  const addComponent = (e) => {
    e.preventDefault();
    if (title === '' || content === '') {
      alert('제목과 내용을 모두 입력해주세요.');
      return;
    }
    setToDos([...toDos, { id: Date.now(), title, content, isDone }]);
    setTitle('');
    setContent('');
  };

  const removeCard = (card) => {
    setToDos(
      toDos.filter((elem) => {
        return elem !== card;
      })
    );
  };

  const statusChange = () => {
    return isDone ? '취소' : '완료';
  };

  return (
    <>
      <span>My To-do List</span>
      <form onSubmit={addComponent}>
        <div class="top-container">
          <h4>
            제목
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              style={{ marginLeft: '10px' }}
            />
          </h4>
          <h4>
            내용
            <input
              type="text"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              style={{ marginLeft: '10px' }}
            />
          </h4>
          <button type="submit" class="add-btn">
            추가하기
          </button>
        </div>
      </form>
      <span>Working on...</span>
      <div class="working-on-container">
        {toDos.map((data) => {
          return (
            <div key={data.id} class="todo-container">
              제목: {data.title}
              <br />
              내용: {data.content}
              <div class="buttons">
                <button class="del-btn" onClick={() => removeCard(data)}>
                  삭제하기
                </button>
                <button class="done-btn" onClick={() => workCompleted(data)}>
                  {statusChange(data)}
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <span>Done</span>
      <div class="done-container"></div>
    </>
  );
}

export default App;

const TodoForm = ({ setTodos }) => {
  const onSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const title = formData.get('title');
    const content = formData.get('content');

    if (!title.trim() || !content.trim()) return alert('제목과 내용을 입력해주세요.');

    const nextTodo = {
      id: crypto.randomUUID(),
      title,
      content,
      isDone: false,
    };

    setTodos((prevTodos) => [...prevTodos, nextTodo]);

    e.target.reset();
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" placeholder="제목" name="title" />
        <input type="text" placeholder="내용" name="content" />

        <button type="submit">등록</button>
      </form>
    </div>
  );
};

export default TodoForm;

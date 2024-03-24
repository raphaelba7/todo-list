import logoTodo from "../assets/img/Vector.png";
function Header() {
  return (
    <>
      <header className="display_flex">
        <div>
          <img className="Logo" src={logoTodo} alt="" />
        </div>
        <h1>Todo-list</h1>
      </header>
    </>
  );
}
export default Header;

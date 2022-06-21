import React from "react";
import Text from "../image/Screenshot 2022-06-19 165432.png";
import News from "../image/newpaper.png";
import Todolist from "../image/todoslist.png";
import Mybooklist from "../image/Mybooklist.png";
import Other from "../image/syedpage.png";
export default function Project() {
  return (
    <>
      <div className="item">
        <div className="poject-section">
          <div className="card-project">
            <img className="card-img-top" src={Text} alt="Text" />
            <div className="card-body">
              <h5 className="card-title">Text Edit</h5>
              <p className="card-text">
                With Text Edit you can change uppercase to lowercase and count
                reading time
              </p>
              <a
                href="https://myapp-sable.vercel.app/"
                className="btn btn-primary"
              >
                Click
              </a>
            </div>
          </div>

          <div className="card-project">
            <img className="card-img-top" src={News} alt="news" />
            <div className="card-body">
              <h5 className="card-title">Sport News</h5>
              <p className="card-text">
                This API based on project. You can see live Sports news. This project
                is available in my GitHub account. use below link to see{" "}
              </p>
              <a href="https://github.com/Syedfahed/sportnews" className="btn btn-primary">
                click
              </a>
            </div>
          </div>

          <div className="card-project">
            <img className="card-img-top" src={Todolist} alt="Todo" />
            <div className="card-body">
              <h5 className="card-title">Todo List</h5>
              <p className="card-text">
                By Entring any words you can add in list. by one click list will
                underline. with double click deleted
              </p>
              <a
                href="https://todo-app-beta-wine.vercel.app/"
                className="btn btn-primary"
              >
                Click
              </a>
            </div>
          </div>
          <br></br>
          <div className="card-project">
            <img className="card-img-top" src={Mybooklist} alt="Booklist" />
            <div className="card-body">
              <h5 className="card-title">Mybooklist</h5>
              <p className="card-text">
                In this project use OOP concepts of javascript. Add data in
                local stroge. Mainly bootstrap css used{" "}
              </p>
              <a
                href="https://my-book-list-swart.vercel.app/#"
                className="btn btn-primary"
              >
                click
              </a>
            </div>
          </div>

          <div className="card-project">
            <img className="card-img-top" src={Other} alt="syed" />
            <div className="card-body">
              <h5 className="card-title">Other page</h5>
              <p className="card-text">
                Base of javascript.. <br></br>
                <br></br>
                <br></br>
              </p>
              <a
                href="https://demo-orpin-nine.vercel..app/"
                className="btn btn-primary"
              >
                click
              </a>
            </div>
          </div>
        </div>
      </div>
      <div>
      <footer id="sticky-footer" class="flex-shrink-0 py-4 bg-dark text-white-50">
    <div class="container text-center">
      <small>Copyright &copy; syedfahed21@gmail.com</small>
      <p>Developer--syed motesim fahed</p>
    </div>
  </footer>
      </div>
    </>
  );
}

@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;600&display=swap");
* {
  box-sizing: border-box;
}
body {
  background-color: #e7dad5;
  font-family: "Poppins", sans-serif;
  margin: 0;
  width: 100vw;
}
header {
  background-color: #e40f0f;
  display: flex;
  justify-content: center;
  position: fixed;
  z-index: 1;
  width: 100vw;
}
h1 {
  color: whitesmoke;
  align-self: center;
}
.search {
  margin: 3rem;
  margin-left: 12rem;
  background-color: transparent;
  border: 2px solid #e9e9ec;
  border-radius: 50px;
  color: #fff;
  font-family: inherit;
  font-size: 1rem;
  padding: 0.5rem 1rem;
}
.search::placeholder {
  color: #7378c5;
}
.search:focus {
  background-color: #050505;
  outline: none;
}
div {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.movie {
  background-color: #373b69;
  border-radius: 3px;
  box-shadow: 0 4px 5px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  position: relative;
  margin: 1rem;
  justify-content: center;
  align-content: center;
  width: 265px;
}
.movie img {
  width: 100%;
}
.movie-info {
  color: #eee;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 1rem 1rem;
  letter-spacing: 0.5px;
}
.movie-info h3 {
  margin: 0;
}
.movie-info span {
  background-color: #22254b;
  border-radius: 3px;
  font-weight: bold;
  padding: 0.25rem 0.8rem;
}
.movie-info span.green {
  color: rgb(39, 189, 39);
}
.movie-info span.orange {
  color: orange;
}
.movie-info span.red {
  color: rgb(189, 42, 42);
}
.overview {
  background-color: #fff;
  padding: 2rem;
  position: absolute;
  max-height: 100%;
  overflow: auto;
  left: 0;
  bottom: 0;
  right: 0;
  transform: translateY(101%);
  transition: transform 0.3s ease-in;
}
.overview h3 {
  margin-top: 0;
}
.movie:hover .overview {
  transform: translateY(0);
}

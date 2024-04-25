import "reset-css/reset.css";
import './App.css'
import ContactForm from "./components/ContactForm/ContactForm.jsx";
import SearchBox from "./components/SearchBox/SearchBox.jsx";
import ContactList from "./components/ContactList/ContactList.jsx";

function App() {
  return (
      <div className="app">
          <h1>Phonebook</h1>
          <ContactForm />
          <SearchBox />
          <ContactList />
      </div>
  )
}

export default App


import './App.css'

function App() {
  
  const handleAdd = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const user = {name,email};
    fetch('https://art-and-craft-server-swart.vercel.app/products',{
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      
    })
    
  }

  return (
    
    <>
      <form onSubmit={handleAdd}>
        <input type="text" name="name" id="" /><br />
        <input type="email" name="email" id="" /><br />
        <input type="submit" value={'Add'} name="" id="" />
      </form>
    </>
  )
}

export default App

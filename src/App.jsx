import { useState } from 'react';

function App() {
  const [toggle, setToggle] = useState(true);

  return (
    <>
      <header>
        <h1>Wall paint colours</h1>
      </header>
      <nav>
        <ul>
          <li><p onClick={() => { setToggle(true) }}>Home</p></li>
          <li><p onClick={() => { setToggle(false) }}>Recommended colours</p></li>
        </ul>
      </nav>
      {
        toggle ?
          <main>
            <h2>About Us</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur lobortis, lorem sit amet consectetur sollicitudin, purus neque maximus dolor, a suscipit odio dolor varius dui. In quis laoreet nunc. Proin id risus sed eros molestie luctus. Donec nec gravida ligula. Mauris tincidunt magna massa, eu mollis sapien bibendum sed. Quisque faucibus dapibus ex vitae convallis. Donec erat tellus, dignissim nec felis quis, congue cursus dolor. Curabitur efficitur, leo sed varius porttitor, erat justo tincidunt nulla, non tempor nisl lorem nec odio. Fusce sollicitudin tincidunt ornare. Ut sit amet pulvinar neque. Phasellus nec congue purus. Suspendisse potenti. Sed tellus tellus, pretium in metus non, luctus ornare est. Suspendisse facilisis ornare erat, eget viverra tortor ultricies quis. Cras at consectetur eros, id varius eros.</p>
            <p>Proin eleifend non lectus sit amet tincidunt. Proin suscipit eu diam et condimentum. Maecenas sit amet neque mi. Nulla varius metus ac nisl posuere, ac mollis ipsum semper. Sed volutpat volutpat eleifend. Mauris tempor nisi et lectus cursus, at laoreet massa placerat. Nullam vehicula sit amet risus ut pulvinar.</p>
            <p>Sed posuere ornare erat, non pulvinar turpis dignissim ullamcorper. In pretium enim nec fermentum euismod. Nulla ullamcorper aliquam ultricies. Etiam ut mi scelerisque, commodo ante sit amet, sodales lacus. Curabitur dolor mauris, fermentum in urna id, fermentum elementum urna. Sed massa purus, tempor at sagittis pretium, ultrices a sapien. In malesuada ornare dapibus. Etiam non auctor ligula. In lacus nunc, finibus non imperdiet nec, venenatis dapibus quam.</p>
          </main>
          :
          <main>
            <h2>Our favourite colours</h2>
            <div className='div'>
              <img src="images/fluorescent_green__50940.webp" alt="" />
              <img src="images/fluorescent_lemon__88242.webp" alt="" />
              <img src="images/fluorescent_pink__88610.webp" alt="" />
              <img src="images/fluorescent_violet__72879.webp" alt="" />
            </div>
          </main>
      }
    </>
  )
}

export default App;
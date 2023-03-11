----------------- Brand New React Course ------------------------>

  ------- Setting up the development with vite-->
          
         - npm install vite ->follow the prompt
         - npm install ->Install dependencies: 
         - npm run dev -> To run the Server
         - npm install bootstrap@5.2.3 -> import it in main.tsx
           import 'bootstrap/dist/css/bootsrtrap.css

----------------- Building Components ------------------------>

      ------- Conditional rendering and map function -->
      ------- Handling events ------------------------->
      ------- Managing State -------------------------->
      ------- Passing Data Via Props ------------------>
      ------- Passing function Via Props -------------->

---Code:----------------------------------------------->


        ---- The ListGroup Component ------

        interface Props {
            items: string[];
            heading: string;
            onSelectItem: (item: string) => void;
        }

         function ListGroup({items, heading, onSelectItem}: Props) {
         // Hook
         const [selectedIndex, setSelectedIndex] = useState(-1)
    
            return (
                <>
                    <h1>{heading}</h1>
                    {items.length === 0 && <p>No item found</p>}
                    <ul className="list-group">
                        {items.map((item, index) => (
                            <li
                                className={selectedIndex === index ? 'list-group-item active' : 'list-group-item'}
                                key={item}
                                onClick={ () => {
                                    setSelectedIndex(index);
                                    onSelectItem(item);
                                }}>
                                {item}
                            </li>
                        ))}
                    </ul>
                </>
             );
            }
            export default ListGroup;

         ------ App Component---------

        import ListGroup from "./components/ListGroup";

        function App() {
          let items = ['New York', 'San Francisco', 'Tokyo', 'London', 'Paris'];
        
          const handleSelectItem = (item: string) => {
              console.log(item);
          }
        
          return (
              <div>
                <ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem}/>
              </div>
          )
        }
        export default App

------------- Passing Children to a component --------------------->

        ------ Alert Component---------

        import {ReactNode} from "react";
        interface Props {
            children: ReactNode;
        }
        
        export const Alert = ({children}: Props) => {
            return (
                <div className="alert alert-primary">
                    {children}
                </div>
            )
        }

        ------ App Component---------

        import {Alert} from "./components/Alert";
        function App() {
          return (
              <div>
                  <Alert>
                      Zakaria
                  </Alert>
              </div>
          )
        }
        
        export default App

      NB: Install React Devtools to debug the application


-------------- Exercise of showing and hiding an alert ---------------->

    -------- Button Component------

    interface Props {
      children: string;
      color?: 'primary' | 'secondary' | 'danger';
      onClick: () => void;
    
    }
    
    export const Button = ({children, onClick, color='primary'}: Props) => {
        return (
           <button className={"btn btn-" + color} onClick={onClick}>{children}</button>
        )
    }

    -------- Alert Component------

    import {ReactNode} from "react";
    interface Props {
        children: ReactNode;
        onClose: () => void;
    }
    
    export const Alert = ({children, onClose }: Props) => {
        return (
            <div className="alert alert-primary alert-dismissible">
                {children}
                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={onClose}></button>
            </div>
        )
    }

    -------- App Component------

    import { useState } from 'react'
    import {Button} from "./components/Button";
    import {Alert} from "./components/Alert";
    
    function App() {
        const [alertVisible, setAlertVisibility] = useState(false);
      return (
          <div>
              {alertVisible && <Alert onClose={() => setAlertVisibility(false)}>My alert</Alert>}
              <Button onClick={() => setAlertVisibility(true)}>My button</Button>
          </div>
      )
    }
    
    export default App

-------------- Styling Components ------------------------>

     NB: There are many ways of styling a component but the most proper I like is 
          Styled component

         - npm i @types/styled-components -> To install it
         - import styled from 'styled-components';
         - const UL = styled.ul``; and then wrap your element with it
     
         - We can also pass a params
         const List = styled.li<LisItemsProps> `backgroup: ${props => props.active ? 'blue': ...`

         - We also have inline style:
           style={{ bacgroundColor: 'yellow'}}

     UI Librairies
        - Bootstrap
        - Material UI
        - Tailwind CSS
        - daisyUI

--------------------- React Icons ------------------------>

       - npm i react-icons

        import {BsCalendar2HeartFill} from 'react-icons/bs'
        function App() {
            return (
              <div>
               <BsCalendar2HeartFill  color='red' size={50}/>
              </div>
            )
        }
        export default App

       To find All the icons: https://react-icons.github.io/react-icons/

-------------- Exercise of toggling the heart ---------------->

        import {AiFillHeart, AiOutlineHeart} from 'react-icons/ai'
        import {useState} from "react";
        interface Props {
            onClick: () => void;
        }

        export const Like = ({onClick}: Props) => {
            const [status, setStatus] = useState(true);
    
        const toggle = () => {
            setStatus(!status);
            onClick();
        }
    
        if (status) return <AiFillHeart color="#ff6b81" size={50} onClick={toggle}/>;
        return <AiOutlineHeart size={50} onClick={toggle}/>
        }


        import {Like} from "./components/Like";
        function App() {
            return (
              <div>
               <Like onClick={() => console.log("Clicked")}/>
              </div>
            )
        }
        export default App


-------------- Managing Components States ------------------------>

       - Updating an object state
        const [drink, setDrink] = useState({
             title: "Test",
             price: 5,
        }};

       const handleClick = () => {
          setDrink({...drink, price: 6});
       }

       <button onClick={handleClick}>Click Me</button>

----------------------- Updating Arrays ------------------------>
 
      - const [tags, setTags] = useState(['happy', 'Cheeck']);
     
      const handleClick = () => {
         -> Add
           setTags([...tags, 'existing']);
         -> remove
           setTags([tags.filter(tag => tag !== 'happy' ]);
         -> Update
           setTags([tags.map(tag => tag === 'happy' ? 'happyness' : tag]);
    
      }
--------------- Updating Arrays of objects ------------------>
        
      const [bugs, setBugs] = useState([
           {id: 1, title: 'Bug 1', fixed: false},
           {id: 2, title: 'Bug 2', fixed: false},
       ]);

        const handleClick = () => {
          setBugs(bugs.map(bug => bug.id === 1 ? {...bug, fixed:true} : bug))
        }

---------- Using immer to simplify the update logic ------------------>

     - npm i immer
     - import produce from 'immer'
      const handleClick = () => {
          setBugs(bugs.produce(draft => {
            const but = draft.find(bug => bug.id === 1);
            if (bug) bug.fixed = true;
        }))
      }

--------------------------- Sharing States --------------------------->
 
        NB: This concept share state from parent to it children
                     APP
                    /   \
                  Chil1  Chil2

        App:
        const [cartItems, setCartItems] = useState(['pr1', 'pr2'])
        <Navbar cartItemsCount={cartItems.length} />
        <Cart cartItems={cartItems} onClear={() => setCartItems([])/>


        1-
        interface Props {
          cartItemsCount: number;
        }
         navbar ({cartItemsCount}: Porps) => {
          return <div>{cartItemsCount}</div>
         };
     
        2-
         interface Props {
          cartItems: string[];
          onClear: () => void;
        }
         cart ({cartItems, onClear}: Porps) => {
          return 
             <div>Cart</div>
              <ul>
                 {cartItems.map(items => <li key={items}>{items}</li>)}
              </ul>
          <button onClick={onClear}>Clear</button>
         };
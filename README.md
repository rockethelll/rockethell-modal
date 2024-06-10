# react modal component

## Installation

```bash
npm i @rockethell/modal
```

## Props needed

- `isOpen`: state for manage the modal

- `closeModal` : a function for close the modal or manage the state

- `content` : the content text witch will be displayed

## Example

```jsx
import Modal from '@rockethell/modal';
import { useState } from 'react';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <div className='flex h-screen items-center justify-center'>
      {isOpen ? (
        <Modal
          closeModal={closeModal}
          isOpen={isOpen}
          content='This is the modal title'
        />
      ) : (
        <button
          className='mx-auto flex h-5 select-none items-center rounded-xl border bg-gray-700 p-4 text-white'
          onClick={openModal}
        >
          Open Modal
        </button>
      )}
    </div>
  );
};

export default App;
```

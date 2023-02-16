
# Kayt0-MyPopup

It's a simple animated popup library that will allow you to add a mymodal and then put anything you want inside the modal.
There is also a close button.

[![NPM](https://img.shields.io/npm/v/kayt0-mypopup)](https://www.npmjs.com/package/kayt0-mypopup)
## Installation

### Install my-project with npm

```bash
    npm install --save kayt0-mymodal
    npm install --save framer-motion
    npm install
```
    
### Install my-project with yarn

```bash
    yarn add kayt0-mymodal
    yarn add framer-motion
    yarn
```


## Usage

```javascript

//import useCycle from framer-motion to add the popup's display/hide statements
import { useCycle } from "framer-motion";
//import MyModal from kayt0-mymodal to add the the popup
import { MyModal } from "kayt0-mymodal";

export default function NewEmployee() {

  // initialise the popup's display/hide statements
  const [isPopupOpen, TogglePopup] = useCycle(false, true);

  return (
    <>
      {/* Add a button and trigger the TogglePopup Statement on Click */}
      <Form onClick={TogglePopup} />

      {/* Add the MyModal component and specify all the props the popup needs */}
      <MyModal 
      // The state to trigger the modal when shoud be open
      trigger={isPopupOpen} 
      // The state change the modal's state
      onClose={TogglePopup}
      >
        {/* Then pass in child prop the content you want to display inside the modal  */}
        <h1 className="text-green">Success</h1>
        <p>New employee added</p>
      </MyModal>
    <>
);
}

```


## License

[MIT](https://choosealicense.com/licenses/mit/) - [@hugorobitaillie](https://www.npmjs.com/~hugorobitaillie)
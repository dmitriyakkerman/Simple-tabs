**Example**

https://codepen.io/mickyholbrook/pen/yLyKgyY

**Styles:**
  
  Put the required stylesheet link in HEAD tag:
  
    <link rel="stylesheet" href="./dist/css/simple-tabs.min.css">
    
**Javascript**    
    
Put the script at the bottom of your markup: 

    <script src="./dist/js/simple-tabs.js"></script>    
   
Or use import/require in your Javascript file:
    
    const SimpleTabs = require('./dist/js/simple-tabs');
    
    or
    
    import SimpleTabs from './dist/js/simple-tabs';
 
**Usage**
     
Create tab-links parent element with your links inside. Create tab-result parent element with result blocks inside: 
      
       <ul class="tabs">
         <li>
           <a href="#1">Link1</a>
         </li>
         <li>
           <a href="#2">Link2</a>
         </li>
         <li>
           <a href="#3">Link3</a>
         </li>
       </ul>
     
       <div class="tabs-result">
         <div>1</div>
         <div>2</div>
         <div>3</div>
       </div>  
         
**Initialization**
 
    document.addEventListener('DOMContentLoaded', function() {
       new Tabs({
           tabLinks: document.querySelectorAll('.tabs a'),
           tabPanels: document.querySelectorAll('.tabs-result div')
       })
    }); 
     
    


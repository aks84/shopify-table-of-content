import { Heading, Page, Checkbox, ColorPicker } from "@shopify/polaris";

const Index = () => (

  <Page>

    <Heading>Create TOC: table of content on...</Heading>
    <Checkbox label="Pages"/> <br />
    <Checkbox label="Blog Posts"/> <br />
    <Checkbox label="Products"/> <br /> <br />
  

    <Heading>Display Table of Content at..</Heading>
    <Checkbox label="Top"/> <br />
    <Checkbox label="Bottom"/> <br /><br />

    
    <Heading>TOC Style Colors</Heading>
    <p>Text Color:</p>
    {/* <ColorPicker  /> <br /> */}
    <p>Backgroud Color:</p>
    {/* <ColorPicker /> <br /><br /> */}<br /><br />
    
    
    <Heading>TOC List Display Options</Heading>
    <Checkbox label="Hide"/> <br />
    <Checkbox label="Let Toggle"/> <br /><br />


  </Page>
);

export default Index;


// let subheads = document.querySelectorAll("#shopify-section-article-template h2, h3, h4");
// subheads.forEach( async function(sub){
// sub.id = sub.innerHTML.split(' ').join('_')
// sub.outerHTML = `<a href="#${sub.id}">${sub.outerHTML}</a>`; 
// document.querySelector('#shopify-section-article-template').insertAdjacentHTML('beforeend', `<li><a href="#${sub.id}">${sub.innerHTML}</a></li>`)
// });


// if ('.template-article') {

//   let subheads = document.querySelectorAll(".template-article h2, h3, h4");
//   subheads.forEach( async function(sub){
//     sub.id = sub.innerHTML.split(' ').join('_')
//     sub.outerHTML = `<a href="#${sub.id}">${sub.outerHTML}</a>`
//   });

// }else if ('template-page') {

//   let subheads = document.querySelectorAll(".template-page h2, h3, h4");
//   subheads.forEach( async function(sub){
//     sub.id = sub.innerHTML.split(' ').join('_')
//     sub.outerHTML = `<a href="#${sub.id}">${sub.outerHTML}</a>`
//   });

// }else if ('templage-product') {

//   let subheads = document.querySelectorAll(".template-product h2, h3, h4");
//   subheads.forEach( async function(sub){
//     sub.id = sub.innerHTML.split(' ').join('_')
//     sub.outerHTML = `<a href="#${sub.id}">${sub.outerHTML}</a>`
//   });

// }



{/* <Heading>Create TOC: table of content when HTML Heading tags are found on the pages/posts/products</Heading>
<Checkbox label="H2"/> <br />
<Checkbox label="H3"/> <br />
<Checkbox label="H4"/> <br />
<Checkbox label="H5"/> <br />
<Checkbox label="H6"/> <br /> <br /> */}

    
{/* <Heading>Make Sub-headings h2/h3/h4/h5/h6 clickable on...</Heading>
    <Checkbox label="Pages"/> <br />
    <Checkbox label="Blog Posts"/> <br />
    <Checkbox label="Products"/> <br />
     <br /> */}



  //    <Heading>Create TOC but don't display on...</Heading>
  //    <Checkbox label="Pages"/> <br />
  //    <Checkbox label="Blog Posts"/> <br />
  //    <Checkbox label="Products"/> <br />
  //  <br />
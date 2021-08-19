import { Heading, Page, Checkbox, Select } from "@shopify/polaris";

const options = [
    {label: '2', value: '2'},
    {label: '3', value: '3'},
    {label: '4', value: '4'},
    {label: '5', value: '5'},
];

const Index = () => (
  <Page>

    <Heading>Create table of content only when xxx number of sub-headings are found the pages/posts/products</Heading>
    
      <Select
      label="Sub-headings"
      options={options} /> <br />
    
    <Heading>Create TOC: table of content when HTML Heading tags are found on the pages/posts/products</Heading>
    <Checkbox label="H2"/> <br />
    <Checkbox label="H3"/> <br />
    <Checkbox label="H4"/> <br />
    <Checkbox label="H5"/> <br />
    <Checkbox label="H6"/> <br /> <br />

    <Heading>Create TOC: table of content on...</Heading>
    <Checkbox label="Pages"/> <br />
    <Checkbox label="Blog Posts"/> <br />
    <Checkbox label="Products"/> <br />
    <Checkbox label="Homepage"/> <br /> <br />

    <Heading>Display Table of Content at..</Heading>
    <Checkbox label="Top"/> <br />
    <Checkbox label="Bottom"/> <br /><br />

    <Heading>Make Sub-headings h2/h3/h4/h5/h6 clickable on...</Heading>
    <Checkbox label="Pages"/> <br />
    <Checkbox label="Blog Posts"/> <br />
    <Checkbox label="Products"/> <br />
    <Checkbox label="Homepage"/> <br /> <br />

    
    <Heading>Create TOC but don't display on...</Heading>
    <Checkbox label="Pages"/> <br />
    <Checkbox label="Blog Posts"/> <br />
    <Checkbox label="Products"/> <br />
    <Checkbox label="Homepage"/> <br /> <br />

  </Page>
);

export default Index;

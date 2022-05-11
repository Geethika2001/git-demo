export function About(){
    return (
    <><p>This is my first react Project that Iam creating on my own..!</p><h1 strong>React Router App</h1>
    <p>Create an application in which user can view articles on different topics. The application should have the following links :-</p>
    <ul>
        <li>About</li>
        <li>Article</li>
        <li>Categories</li>
        <li>Subscribe</li>
        </ul>
        <h3 strong>Description:-</h3>
        <ul>
            <li>
            <h3 strong>About:</h3><p>Clicking on this link should render a component which will give a brief description of the application.</p>   
            </li>
            <li>
            <h3 >Articles:</h3><p>Clicking on this link should render a component which will contain titles of different articles. Clicking on the title should display the entire article.</p>   
            </li>
            <li>
            <h3 >Categories:</h3><p>This section contains different categories of articles. User can select any one of the categories</p>   
            </li>
            <li>
            <h3 >Subscribe:</h3><p>This section contains a single input field and a button. The user will enter the email in the input field.</p>   
            </li>
        </ul>
        <h3 strong>Footer section:-</h3>
        <p>There should be two buttons in the footer section, <h3 strong>back and next.</h3><br/>

By clicking on back button, previously visited component should be rendered. Next button will be used to go back to the current component.</p>
    </>
    )
}
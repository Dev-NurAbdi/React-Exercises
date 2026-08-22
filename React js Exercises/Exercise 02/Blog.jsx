// simple Blog Layout

const Header = ()=>{
    return <h1>Dugsiiye Blogs</h1>
}

const Post =()=>{
    return (
        <div>
            <h3>Understanding Functional Components</h3>
            <p>Functional components are the simplest way to create components in React. They are JavaScript functions that return JSX, which describes what should appear on the screen.
                A functional component is easy to read, reusable, and helps organize your application into small, manageable pieces. Each component has a specific responsibility, making your code cleaner and easier to maintain.
                Modern React applications primarily use functional components because they work seamlessly with Hooks such as useState and useEffect. This allows developers to manage state and side effects without using class components.
                As your application grows, you can combine multiple functional components to build complete user interfaces. For example, a page may include a Header, Main, Sidebar, Post, and Footer, each created as a separate functional component.
                Learning functional components is one of the most important steps toward becoming a skilled React developer.</p>
        </div>
    )
}

const Footer = ()=>{
    return <p>Copyright © 2026 React Blog. All Rights Reserved.</p>
}

// main components
const Blog = ()=>{
    return(
        <div>
            <Header/>
            <Post/>
            <Footer/>
        </div>
    )
}
export default Blog;
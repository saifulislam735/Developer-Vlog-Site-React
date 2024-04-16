import './Footer.css'
const Footer = () => {
    return (
        <div className='footer'>
            <div>
                <h2>Question 1: Props vs state</h2>
                <p>
                    <p>State</p>
                    The state is an updatable structure that is used to contain data or information about the component and can change over time. The change in state can happen as a response to user action or system event. It is the heart of the react component which determines the behavior of the component and how it will render. A state must be kept as simple as possible. It represents the components local state or information. It can only be accessed or modified inside the component or by the component directly.

                    <p>Props</p>
                    Props are read-only components. It is an object which stores the value of attributes of a tag and work similar to the HTML attributes. It allows passing data from one component to other components. It is similar to function arguments and can be passed to the component the same way as arguments passed in a function. Props are immutable so we cannot modify the props from inside the component.
                </p>
            </div>
            <div>
                <h2>Question 2: How does useState work?</h2>
                <p>
                    How Does useState() Work?
                    The useState() hook works by handling and managing state in your applications.

                    The useState() hook takes the first (initial) value of the state variable as its argument. The second value then sets your state, which is why it is always initiated as setState. So how does this work? <br />
                    <code style={{ color: "red" }}>
                        const [state, setState] = useState(initial values goes here) <br />
                        const [calories, setCalories] = useState(initial value of calories)
                    </code>
                    <br />
                    In the case of the first render, it returns the initial state and updates to a different value during the re-render using the set function.
                </p>
            </div>
            <div>
                <h2>Question 3: Purpose of useEffect other than fetching data.</h2>
                <p>
                    `useEffect` in React is versatile beyond data fetching; it handles side effects like subscriptions, DOM updates, and clean-ups. It runs after every render by default but can be conditionally triggered by dependencies. It ensures side effects dont block the main thread, enhancing performance.
                </p>
            </div>
            <div>
                <h2>Question 4: How Does React work?</h2>
                <p>
                    React works by creating a virtual representation of the UI called the Virtual DOM. When state or props change, React updates this Virtual DOM efficiently. It then compares this with the real DOM and updates only the changed parts, minimizing actual DOM manipulations. This approach optimizes performance and ensures a smooth user experience.
                </p>
            </div>
        </div>
    );
};

export default Footer;
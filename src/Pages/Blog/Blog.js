import React from 'react';
import img1 from '../../assets/image/blog1.jpg'
import img2 from '../../assets/image/blog2.png'
import img3 from '../../assets/image/blog3.jpg'
import img4 from '../../assets/image/blog4.png'

const Blog = () => {
    return (
        <div className='my-20'>
            <h1 className='text-4xl text-orange-600 text-center my-20 text-orange-600'>Welcome To Blog</h1>
            <h1 className='text-4xl text-green-700 mx-12'>1 .What are the different ways to manage a state in a React application? ?</h1><br />
            <img className='w-3/5 mx-auto my-12' src={img1} alt="" />
            <p className='text-justify text-xl mx-12'>When we talk about state in our applications, it’s important to be clear about what types of state actually matter.

There are four main types of state you need to properly manage in your React apps:

Local state
Global state
Server state
URL state
Let's cover each of these in detail:

Local (UI) state – Local state is data we manage in one or another component.

Local state is most often managed in React using the useState hook.

For example, local state would be needed to show or hide a modal component or to track values for a form component, such as form submission, when the form is disabled and the values of a form’s inputs.

Global (UI) state – Global state is data we manage across multiple components.

Global state is necessary when we want to get and update data anywhere in our app, or in multiple components at least.

A common example of global state is authenticated user state. If a user is logged into our app, it is necessary to get and change their data throughout our application.

Sometimes state we think should be local might become global.

Server state – Data that comes from an external server that must be integrated with our UI state.

Server state is a simple concept, but can be hard to manage alongside all of our local and global UI state.

There are several pieces of state that must be managed every time you fetch or update data from an external server, including loading and error state.

Fortunately there are tools such as SWR and React Query that make managing server state much easier.

URL state – Data that exists on our URLs, including the pathname and query parameters.

URL state is often missing as a category of state, but it is an important one.
In many cases, a lot of major parts of our application rely upon accessing URL state. Try to imagine building a blog without being able to fetch a post based off of its slug or id that is located in the URL!

There are undoubtedly more pieces of state that we could identify, but these are the major categories worth focusing on for most applications you build.</p><br />
<h1 className='text-4xl text-green-700 mx-12'>2.What is JWT, and how does it work?</h1><br />

<img className='w-3/5 mx-auto my-12' src={img2} alt="" />

<p className='text-justify text-xl mx-12'>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.Every object with its methods and properties contains an internal and hidden property known as [[Prototype]]. The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object.getPrototypeOf and Object.setPrototypeOf. Nowadays, in modern language, it is being set using __proto__. </p> <br />
<h1 className='text-4xl text-green-700 mx-12'>3.What is a unit test? Why should we write unit tests?</h1><br />

<img className='w-3/5 mx-auto my-12' src={img3} alt="" />

<p className='text-justify text-xl mx-12'>The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.A unit test typically comprises of three stages: plan, cases and scripting and the unit test itself. In the first step, the unit test is prepared and reviewed. The next step is for the test cases and scripts to be made, then the code is tested.

Test-driven development requires that developers first write failing unit tests. Then they write code and refactor the application until the test passes. TDD typically results in an explicit and predictable code base. </p><br /><br />


<h1 className='text-4xl text-green-700 mx-12'>4. React vs. Angular vs. Vue?</h1> <br />

<img className='w-3/5 mx-auto my-12' src={img4} alt="" />

<p className='text-justify text-xl mx-12'>Vue provides higher customizability and hence is easier to learn than Angular or React. Further, Vue has an overlap with Angular and React with respect to their functionality like the use of components. Hence, the transition to Vue from either of the two is an easy option.This post is a comprehensive guide on which is perhaps the right solution for you: Angular vs React vs Vue.

Just a couple of years ago, developers were mainly debating whether they should be using Angular vs React for their projects. But over the course of the last couple of years, we’ve seen a growth of interest in a third player called Vue.js.

If you are a developer starting out on a project and cannot decide on which JavaScript framework to use, this guide should help you make a decision.</p>

        </div>
    );
    
};

export default Blog;
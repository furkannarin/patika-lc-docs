import React from "react";

// CLASS COMPONENTS
// JS -> OOP'ye cok uygun degil
// Okumasi zor
// this
// obj1.bind()

// STATEFULNESS

class MyComponent extends React.Component {
    x = 5;

    componentDidMount() {
        // butonun rengini kirmizidan maviye degistir
    }

    changeBtnColor() {
        // y = 10;
    }

    render() {
        const result = this.changeBtnColor();

        return (
            <div>
                <span>Hello, {this.x}!</span>;
                <p>Hello, {this.props.name}!</p>;
            </div>
        )
    }
}

// FUNCTIONAL PROGRAMMING PARADIGM
// FUNCTIONAL COMPONENTS
const ComponentA = () => {
    // function add ()
    const x = 10;
    // for ()

    return (
        <div>
            <span>Hello, {this.x}!</span>;
            <p>Hello, {this.props.name}!</p>;
        </div>
    );
};

function ComponentB() {
    // function add ()
    const x = 10;
    // for ()

    return (
        <div>
            <span>Hello, {this.x}!</span>;
            <p>Hello, {this.props.name}!</p>;
        </div>
    );
};

export default () => {
    return (
        <div>
            <span>Hello, {this.x}!</span>;
            <p>Hello, {this.props.name}!</p>;
        </div>
    );
};

export {
    ComponentA,
    ComponentB
};

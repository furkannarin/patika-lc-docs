// pure function

function topla(a, b) {
    return a + b;
};

// const obj = { x: 5, y: 10 };

const ComponentA = () => {
    const [value, setValue] = useState(10); // destructuring
    const [value2, setValue2] = useState(20); // destructuring
    // const { x, y } = obj; // destructure

    const abc = () => {
        // setValue(20);
        // setValue2(30);
        // batch process

        // if (true) return;
        // ...
        // ...
        // ...
        // ...

        setValue(p => {
            if (value < 10) setValue2(value + value2);

            return 5;
        }
    );
    };

    return (
        <div>
            <span onPress={() => abc()}>{value}</span>;
        </div>
    );
};

// componentA() -> setValue(20) -> ilk componentA()'yi iptal etti -> componentA() -> setValue(20)

function ComponentB() {
    const [val, setVal] = useState(10);

    const fn = () => {
        setVal(p => p + 10);
    }

    useEffect(() => {
        console.log(val);
    }, [val]);

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
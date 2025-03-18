// PROPS -> Properties

const ComponentA_Proto = {
    Children: {},
    Props: {
        x: 5,
        y: 10
    }
};

const ComponentA = (props) => {
    if (!props.name) return null;

    return (
        <div>
            <span>Hello, {props.x}</span>;
            <p>Hello, {props.name}</p>;
        </div>
    );
};

export default () => {
    return (
        <ComponentA name={"Patika"} />
    )
}

// RENDER -> Ekrana componentin mount edilirken cizilmesi
// RE-RENDER -> mount olmus bir ekranin bir yerinin veya tumunun tekrar ekrana cizilmesi

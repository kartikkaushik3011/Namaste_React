// const parent = React.createElement("div", { id: "parent" },
//     React.createElement("div", { id: "child" },
//         [
//             React.createElement("h1", {}, "This is h1 child"),      //For 1 parent and 2 child
//             React.createElement("h2", {}, "I am H2 tag")
//         ]
//     )
// )
const parent = React.createElement("div", { id: "parent" },
    [React.createElement("div", { id: "child" },
        [
            React.createElement("h1", {}, "This is h1 child"),
            React.createElement("h2", {}, "I am H2 tag")
        ]                                                           //For 1 parent 2 sibling each having 2 child
    ),
    React.createElement("div", { id: "child2" },
        [
            React.createElement("h1", {}, "This is h1 child"),
            React.createElement("h2", {}, "I am H2 tag")
        ]
    )]
)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
export const getRandomBG = () => {
    const colors = [
        "#f6b100",
        "#025cca",
        "#664a04",
        "#02ca3a"
    ];

    const color = colors[Math.floor(Math.random() * colors.length)];
    return "bg-[" + color + "]";
}

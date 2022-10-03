class Utils {
    static randomRGBColor = (alpha: number = 1) => {
        let color:string;
        const r = parseInt(`${Math.random() * 256}`);
        const g = parseInt(`${Math.random() * 256}`);
        const b = parseInt(`${Math.random() * 256}`);
        if (typeof alpha !== 'number') {
            throw new Error(`SyntaxError: Unexpected token`);
        } else if (alpha > 1 || alpha < 0) {
            throw new Error(`alpha should be between 0 and 1`);
        }
        return  color = `${r},${g},${b},${alpha}`;
    }
}

export default Utils;
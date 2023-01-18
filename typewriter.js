const words = "hola hijito te amo infinito!!!!\n";
const letters = (sentence) => {
        let i = 0;
        for (const char of sentence) {
            setTimeout(() => {
                process.stdout.write(char)
            }, i) 
            i += 50
            
    }
}

letters(words)
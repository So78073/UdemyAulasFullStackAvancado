function loop1() {
    return new Promise(resolve => {
        let i = 0;
        const intervalId = setInterval(() => {
            console.log('Loop 1:', i);
            i++;
            if (i === 10) {
                clearInterval(intervalId);
                resolve();
            }
        }, 1000);
    });
}

function loop2() {
    return new Promise(resolve => {
        let j = 0;
        const intervalId = setInterval(() => {
            console.log('Loop 2:', j);
            j++;
            if (j === 10) {
                clearInterval(intervalId);
                resolve();
            }
        }, 1500);
    });
}

async function runLoops() {
    await Promise.all([loop1(), loop2()]);
    console.log('Ambos os loops foram concluídos.');
}

runLoops();
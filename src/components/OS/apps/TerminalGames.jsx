import { useState, useRef, useEffect } from 'react';

export default function TerminalGames() {
    const [history, setHistory] = useState([
        "Welcome to Terminal Arcade!",
        "Available Games: [1] Guess the Number [2] Rock Paper Scissors [3] Math Quiz [4] Magic 8-Ball [5] Tic-Tac-Toe",
        "Type the number of the game you want to play, or 'help' to see this list again."
    ]);
    const [input, setInput] = useState('');
    const [mode, setMode] = useState('menu'); // menu, guess, rps, math, 8ball, ttt
    const [gameData, setGameData] = useState({});
    const bottomRef = useRef(null);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [history]);

    const print = (msg) => setHistory(prev => [...prev, msg]);

    const handleInput = (e) => {
        if (e.key === 'Enter') {
            const val = input.trim();
            print(`> ${val}`);
            setInput('');
            processCommand(val.toLowerCase());
        }
    };

    const processCommand = (cmd) => {
        if (cmd === 'quit' || cmd === 'exit') {
            setMode('menu');
            print("Exited back to menu. Type 'help' to see games.");
            return;
        }

        if (mode === 'menu') {
            switch (cmd) {
                case '1':
                case 'guess':
                    setMode('guess');
                    setGameData({ target: Math.floor(Math.random() * 100) + 1, attempts: 0 });
                    print("--- GUESS THE NUMBER (1-100) ---");
                    print("I'm thinking of a number between 1 and 100. Enter your guess!");
                    break;
                case '2':
                case 'rps':
                    setMode('rps');
                    print("--- ROCK PAPER SCISSORS ---");
                    print("Type 'rock', 'paper', or 'scissors'.");
                    break;
                case '3':
                case 'math':
                    setMode('math');
                    const a = Math.floor(Math.random() * 20);
                    const b = Math.floor(Math.random() * 20);
                    setGameData({ answer: a + b });
                    print("--- MATH QUIZ ---");
                    print(`What is ${a} + ${b}?`);
                    break;
                case '4':
                case '8ball':
                    setMode('8ball');
                    print("--- MAGIC 8-BALL ---");
                    print("Ask me any yes/no question and I will reveal the truth.");
                    break;
                case '5':
                case 'ttt':
                    setMode('ttt');
                    setGameData({ board: Array(9).fill('-'), isX: true });
                    print("--- TIC-TAC-TOE ---");
                    print("Board positions are 0-8 (left-to-right, top-to-bottom).");
                    print("- - -");
                    print("- - -");
                    print("- - -");
                    print("You are X. Enter a position (0-8):");
                    break;
                case 'help':
                case 'ls':
                    print("Available Games: [1] Guess the Number [2] Rock Paper Scissors [3] Math Quiz [4] Magic 8-Ball [5] Tic-Tac-Toe");
                    break;
                default:
                    print("Command not recognized. Type 1-5 to choose a game, or 'help'.");
            }
            return;
        }

        if (mode === 'guess') {
            const num = parseInt(cmd);
            if (isNaN(num)) return print("Please enter a valid number.");
            const newAttempts = gameData.attempts + 1;
            if (num === gameData.target) {
                print(`Correct! You got it in ${newAttempts} attempts! Returning to menu...`);
                setMode('menu');
            } else if (num < gameData.target) {
                setGameData({ ...gameData, attempts: newAttempts });
                print("Too low! Try again.");
            } else {
                setGameData({ ...gameData, attempts: newAttempts });
                print("Too high! Try again.");
            }
        }

        if (mode === 'rps') {
            if (!['rock', 'paper', 'scissors'].includes(cmd)) return print("Invalid choice. Type 'rock', 'paper', or 'scissors'.");
            const choices = ['rock', 'paper', 'scissors'];
            const comp = choices[Math.floor(Math.random() * 3)];
            print(`Computer chose: ${comp}`);
            if (cmd === comp) print("It's a tie!");
            else if ((cmd === 'rock' && comp === 'scissors') || (cmd === 'paper' && comp === 'rock') || (cmd === 'scissors' && comp === 'paper')) {
                print("You win!");
            } else {
                print("Computer wins!");
            }
            print("Type 'quit' to return to menu, or play again.");
        }

        if (mode === 'math') {
            const ans = parseInt(cmd);
            if (isNaN(ans)) return print("Enter a valid number.");
            if (ans === gameData.answer) {
                print("Correct!");
            } else {
                print(`Wrong! The answer was ${gameData.answer}.`);
            }
            const a = Math.floor(Math.random() * 20);
            const b = Math.floor(Math.random() * 20);
            setGameData({ answer: a + b });
            print(`Next question: What is ${a} + ${b}? (or 'quit')`);
        }

        if (mode === '8ball') {
            const answers = ["Yes, definitely.", "It is decidedly so.", "Without a doubt.", "Reply hazy, try again.", "Ask again later.", "Better not tell you now.", "Don't count on it.", "My reply is no.", "My sources say no.", "Very doubtful."];
            print(`Magic 8-Ball says: ${answers[Math.floor(Math.random() * answers.length)]}`);
        }

        if (mode === 'ttt') {
            const pos = parseInt(cmd);
            if (isNaN(pos) || pos < 0 || pos > 8 || gameData.board[pos] !== '-') {
                return print("Invalid move. Enter an empty position (0-8).");
            }

            const newBoard = [...gameData.board];
            newBoard[pos] = 'X';

            // simple check win
            const checkWin = (b) => {
                const lines = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
                for (let line of lines) {
                    if (b[line[0]] !== '-' && b[line[0]] === b[line[1]] && b[line[1]] === b[line[2]]) return b[line[0]];
                }
                return b.includes('-') ? null : 'Tie';
            };

            let status = checkWin(newBoard);

            if (!status) {
                // simple bot move
                let empty = newBoard.map((v, i) => v === '-' ? i : null).filter(v => v !== null);
                if (empty.length > 0) {
                    let botMove = empty[Math.floor(Math.random() * empty.length)];
                    newBoard[botMove] = 'O';
                    print(`Computer plays O at position ${botMove}`);
                }
                status = checkWin(newBoard);
            }

            print(`${newBoard[0]} ${newBoard[1]} ${newBoard[2]}`);
            print(`${newBoard[3]} ${newBoard[4]} ${newBoard[5]}`);
            print(`${newBoard[6]} ${newBoard[7]} ${newBoard[8]}`);

            if (status) {
                if (status === 'Tie') print("It's a draw! Game Over.");
                else print(`${status} wins! Game Over.`);
                setMode('menu');
            } else {
                setGameData({ board: newBoard, isX: true });
                print("Your turn (enter 0-8):");
            }
        }
    };

    return (
        <div style={{
            backgroundColor: '#1E1E1E',
            color: '#00FF00',
            fontFamily: 'monospace',
            padding: '20px',
            height: '100%',
            overflowY: 'auto',
            display: 'flex',
            flexDirection: 'column'
        }}>
            <div style={{ flexGrow: 1, paddingBottom: 20 }}>
                {history.map((line, i) => <div key={i}>{line}</div>)}
                <div ref={bottomRef} />
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <span style={{ marginRight: '10px', color: '#00FF00' }}>~$</span>
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleInput}
                    autoFocus
                    spellCheck="false"
                    style={{
                        backgroundColor: 'transparent',
                        border: 'none',
                        color: '#00FF00',
                        fontSize: '1em',
                        fontFamily: 'monospace',
                        outline: 'none',
                        flexGrow: 1,
                        caretColor: '#00FF00'
                    }}
                />
            </div>
        </div>
    );
}

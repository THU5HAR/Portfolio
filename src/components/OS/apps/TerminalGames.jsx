import { useState, useRef, useEffect } from 'react';

export default function TerminalGames() {
    const [history, setHistory] = useState([
        "Welcome to Terminal Arcade!",
        "Available Games:",
        " [1] Guess the Number  [2] Rock Paper Scissors  [3] Math Quiz  [4] Magic 8-Ball",
        " [5] Tic-Tac-Toe       [6] Coin Toss            [7] Hangman    [8] Anagram",
        " [9] Trivia            [10] Password Hacker",
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
                    print("Available Games:");
                    print(" [1] Guess the Number  [2] Rock Paper Scissors  [3] Math Quiz  [4] Magic 8-Ball");
                    print(" [5] Tic-Tac-Toe       [6] Coin Toss            [7] Hangman    [8] Anagram");
                    print(" [9] Trivia            [10] Password Hacker");
                    break;
                case '6':
                case 'cointoss':
                    setMode('cointoss');
                    print("--- COIN TOSS ---");
                    print("Choose 'heads' or 'tails'!");
                    break;
                case '7':
                case 'hangman':
                    setMode('hangman');
                    const wordsForHangman = ['react', 'javascript', 'frontend', 'terminal', 'portfolio', 'developer'];
                    const chosenWord = wordsForHangman[Math.floor(Math.random() * wordsForHangman.length)];
                    setGameData({ word: chosenWord, guessed: [], lives: 6 });
                    print("--- HANGMAN ---");
                    print(`Guess the word: ${'_'.repeat(chosenWord.length)}`);
                    print(`Lives: 6 (type a single letter)`);
                    break;
                case '8':
                case 'anagram':
                    setMode('anagram');
                    const anagramWords = ['interface', 'component', 'backend', 'fullstack', 'browser'];
                    const aWord = anagramWords[Math.floor(Math.random() * anagramWords.length)];
                    const scrambled = aWord.split('').sort(() => 0.5 - Math.random()).join('');
                    setGameData({ word: aWord, attempts: 3 });
                    print("--- ANAGRAM ---");
                    print(`Unscramble this word: ${scrambled}`);
                    print(`You have 3 attempts.`);
                    break;
                case '9':
                case 'trivia':
                    setMode('trivia');
                    const questions = [
                        { q: "What year was JavaScript launched?", a: "1995" },
                        { q: "What does HTML stand for?", a: "hypertext markup language" },
                        { q: "What does CSS stand for?", a: "cascading style sheets" }
                    ];
                    const qItem = questions[Math.floor(Math.random() * questions.length)];
                    setGameData({ qItem });
                    print("--- TRIVIA ---");
                    print(qItem.q);
                    break;
                case '10':
                case 'hacker':
                    setMode('hacker');
                    const passwords = ['admin123', 'root', 'qwerty', 'password', 'hackme'];
                    const pass = passwords[Math.floor(Math.random() * passwords.length)];
                    setGameData({ pass, attempts: 4 });
                    print("--- PASSWORD HACKER ---");
                    print(`SYSTEM LOCKED. You have 4 attempts to guess the password.`);
                    break;
                default:
                    print("Command not recognized. Type 1-10 to choose a game, or 'help'.");
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
            return;
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
            return;
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
            return;
        }

        if (mode === '8ball') {
            const answers = ["Yes, definitely.", "It is decidedly so.", "Without a doubt.", "Reply hazy, try again.", "Ask again later.", "Better not tell you now.", "Don't count on it.", "My reply is no.", "My sources say no.", "Very doubtful."];
            print(`Magic 8-Ball says: ${answers[Math.floor(Math.random() * answers.length)]}`);
            return;
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
            return;
        }

        if (mode === 'cointoss') {
            if (!['heads', 'tails'].includes(cmd)) return print("Invalid choice. Type 'heads' or 'tails'.");
            const outcome = Math.random() < 0.5 ? 'heads' : 'tails';
            print(`Coin flipped... it's ${outcome}!`);
            if (cmd === outcome) print("You win!");
            else print("You lose!");
            print("Type 'quit' to return to menu, or play again.");
            return;
        }

        if (mode === 'hangman') {
            if (cmd.length !== 1 || !/[a-z]/.test(cmd)) return print("Please enter a single letter.");
            if (gameData.guessed.includes(cmd)) return print("You already guessed that letter.");

            const newGuessed = [...gameData.guessed, cmd];
            let newLives = gameData.lives;
            if (!gameData.word.includes(cmd)) {
                newLives--;
                print(`Incorrect! Lives remaining: ${newLives}`);
            } else {
                print(`Correct!`);
            }

            let displayWord = gameData.word.split('').map(l => newGuessed.includes(l) ? l : '_').join('');
            print(`Word: ${displayWord}`);

            if (displayWord === gameData.word) {
                print("Congratulations, you guessed the word! Returning to menu...");
                setMode('menu');
            } else if (newLives <= 0) {
                print(`Game Over! The word was '${gameData.word}'. Returning to menu...`);
                setMode('menu');
            } else {
                setGameData({ ...gameData, guessed: newGuessed, lives: newLives });
            }
            return;
        }

        if (mode === 'anagram') {
            if (cmd === gameData.word) {
                print("Correct! You unscrambled the word! Returning to menu...");
                setMode('menu');
            } else {
                const attempts = gameData.attempts - 1;
                if (attempts <= 0) {
                    print(`Game Over! The word was '${gameData.word}'. Returning to menu...`);
                    setMode('menu');
                } else {
                    setGameData({ ...gameData, attempts });
                    print(`Incorrect! You have ${attempts} attempts left.`);
                }
            }
            return;
        }

        if (mode === 'trivia') {
            if (cmd === gameData.qItem.a) {
                print("Correct! Returning to menu...");
            } else {
                print(`Wrong! The answer was '${gameData.qItem.a}'. Returning to menu...`);
            }
            setMode('menu');
            return;
        }

        if (mode === 'hacker') {
            if (cmd === gameData.pass) {
                print("ACCESS GRANTED. Returning to menu...");
                setMode('menu');
            } else {
                const attempts = gameData.attempts - 1;
                if (attempts <= 0) {
                    print(`ACCESS DENIED. Out of attempts. Returning to menu...`);
                    setMode('menu');
                } else {
                    setGameData({ ...gameData, attempts });
                    print(`Incorrect password. ${attempts} attempts remaining.`);
                }
            }
            return;
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

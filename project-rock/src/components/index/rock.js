function rock_game(user) {
    let terminator_ans = Math.floor(Math.random() * 3);
    let names = ['Камень', 'Ножницы', 'Бумага'];
    let game = {
        user: user,
        terminator: terminator_ans,
        winner: null,
        check() {
            let winner = null;


            if ((this.user == 0 && this.terminator == 1) || (this.user == 1 && this.terminator == 2) || (this.user == 2 && this.terminator == 0)) {
                this.winner = 'User';
            } else if (this.user == this.terminator) {
                this.winner = 'Ничья';
            } else {
                this.winner = 'PC';
            }

            this._render();
        },
        _render() {
            let userText = names[this.user];
            let pcText = names[this.terminator];

            let userSpan = document.querySelector('#user-variant');
            let pcSpan = document.querySelector('#pc-variant');
            let resultBlock = document.querySelector('#score');

            userSpan.innerText = userText;
            pcSpan.innerText = pcText;

            resultBlock.innerHTML = `<strong>Победил:</strong> ${this.winner}<br><strong>User:</strong> ${userText}<br><strong>PC:</strong> ${pcText}`
        }
    };
    game.check()
}
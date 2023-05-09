class MusicPlayer {
    constructor(musicList) {
        this.musicList = musicList;
        this.index = 0; // music listesindeki ilk indisli elemana denk gelecek ve ileri geri butonları ile liste içerisinde oynama olacak
    }

    getMusic() {
        return this.musicList[this.index];
    }

    next() {
        if (this.index + 1 != this.musicList.length) {
            this.index++;
        } else {
            this.index = 0;
        }
    }

    prev() {
        if (this.index != 0) {
            this.index--;
        } else {
            this.index = this.musicList.length - 1;
        }
    }
}
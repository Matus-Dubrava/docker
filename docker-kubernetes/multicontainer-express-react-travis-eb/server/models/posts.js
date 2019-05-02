class Post {
    constructor() {
        this.posts = [];
    }

    add(text) {
        if (!this.hasPost(text)) {
            this.posts.push(text);
            return 0;
        }

        return -1;
    }

    remove(text) {
        if (this.hasPost(text)) {
            const index = this.posts.indexOf(text);
            this.posts.pop(index);
            return 0;
        }

        return -1;
    }

    list() {
        return this.posts;
    }

    hasPost(text) {
        return this.posts.includes(text);
    }
}

module.exports = new Post();

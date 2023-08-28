export class Book {
    type
    name
    categories
    authors

    constructor({type, name, categories, authors}) {
        this.type = type
        this.name = name
        this.categories = categories
        this.authors = authors.replace(/.(\([^()]*\))/g, '')
    }
}


import { computed, makeObservable, observable } from 'mobx'
import bookEntries from '../../../assets/Books.csv'
import { Book } from '../../entities/Book'


const notionBookFields = ["Name","Author","Category","Created","Date","Finished","Image","Related to References (Source)","Tags","Type"]

class BookLabelsPageCtrl {
    constructor() {
        makeObservable(this, {
            books: computed
        })
    }

    get books(){
        if(JSON.stringify(bookEntries[0]) != JSON.stringify(notionBookFields)){
            console.log(bookEntries[0]);
            console.log(notionBookFields);
            throw 'CSV labels have changed'
        }

        const items = bookEntries.slice(1)
        const books = items.map(item => {
            return new Book({
                name: item[0],
                authors: item[1],
                categories: item[2],
                type: item[9],
            })
        })
        return books
    }
}

export default new BookLabelsPageCtrl()
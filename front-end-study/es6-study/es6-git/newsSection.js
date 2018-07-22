import { fnNewsListTemplate } from './newsTemplate.js';


export default class newsSection {
    constructor(){
        this.templateMap = new Map();
    }

    init(){
        this.fetchData("http://127.0.0.1:8080/newslist.json")
    }

    fetchData(url){
        fetch(url)
            .then(res => res.json())
            // .then(json => {console.log(json)})
            .then(this.makeNewsContentMap.bind(this))
            .then(this.renderFirst.bind(this));
    }

    makeNewsContentMap(obj){
        obj.forEach( (news) => {
                this.templateMap.set(news.company, fnNewsListTemplate(news));
            }
        )
        // console.log(this.templateMap)
    }

    renderFirst(){
        let firstHTML = this.templateMap.values().next().value;
        //첫번째 결과를 가져와서 content엘리먼트 아래에 추가..
        const newsSectionElement = document.querySelector(".content");
        newsSectionElement.innerHTML = firstHTML
        console.log(firstHTML)

    }

}

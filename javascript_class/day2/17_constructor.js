//1. 생성자 함수 정의와 객체 생성
function BookInfo(title, price) {
    this.name = title;
    this.publisher = '한빛미디어';
    this.realprice = price * 0.9;
}

let book = new BookInfo('처음 배우는 Azure', 340000);

// 2. 생성자 vs 객체 리터럴
let book10 = {
    name: '처음 배우는 NHN 클라우드',
    publisher: '한빛미디어',
    price: 28000
}

let book20 = {
    name: 'Azure 명강의',
    publisher: '한빛미디어',
    price: 40000
}

// new 연산자로 독립적인 객체 생성
let book11 = new BookInfo('처음 배우는 NHN Cloud', 28000);
let book31 = new BookInfo('Azure 명강의');

// 3. 생성자 함수 내에 익명 함수 사용
function BookInfo(title, price) {
    this.name = title;
    this.publisher = '한빛미디어';
    this.price = price;
    
    this.realprice = function() {
        return '할인된 가격은' + this.price * 0.9 + '원 입니다.';
    }

    return {
        UserType: 'member',
        price: this.realprice(price)
        
    }
}

let newbook1 = new BookInfo('실무에서 바로쓰는 파워셸', 28000);
let newbook2 = new BookInfo('실무에서 바로쓰는 파워셸', 28000);
let newbook3 = new BookInfo('실무에서 바로쓰는 파워셸', 28000);
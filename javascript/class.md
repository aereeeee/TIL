클래스
https://github.com/eastroots92/TIL-Today_I_Learned/blob/master/JavaScript/Class.md

타이포라 typo
let, const와 마찬가지로 호이스팅시 초기화 안돼서 에러남
console.dir(클래스변수이름)


class Animal {
    constructor(name, sound=“디폴트설정가능”) {
        this.name = name;
        this.sound = sound;
    }
    
    bark() {
    	console.log(`${this.name} : ${this.sound}`)
    }
};

쓸때 Animal(name, undefined)
로 쓰면 디폴트 값넣어짐

상속
class CompanionAnimal extends Animal {
    constructor(name,sound, ownerName ) {
    	super(name, sound);
        this.ownerName = ownerName;
    }
}


*****프로토타입*******
prototype : 인스턴스 객체가 부모로 삼게될 객체
__proto__ : 프로토타입 링크 , 자기보다 한단계 위의 컨스트럭터, 실제 부모객체

프로토타입 체인
person.prototype.hello=fucntion(){…}

컨스트럭터에 선언한 함수는 뉴 생성자로 인스턴스 생성시 그 인스턴스의 프로퍼티로 반환 /메모리에 새로 생성됨
밖에다 만든건 인스턴스의 prototype객체에 담김



클래스자체가 가지는 함수는 static 붙여서 선언
얘를들어 사람 클래스 몇명만들었는지. 
뉴 퍼슨 만들때마다 세어주는 함수
인스턴스가 가질 필요 없음

# fork한 레포지토리와 싱크하기
- fork한 저장소의 커밋 내역을 원래 저장소의 최신 커밋 내역으로 바꾸는 방법


## one time
* 현재 원격 저장소 확인
```
git remote -v
origin	https://github.com/로컬.git (fetch)
origin	https://github.com/로컬.git (push)
```

* 로컬 저장소에 remote로 원본 레포지토리 저장소 등록. "upstream"로 (이름은 상관 없음)
```
git remote add upstream https://github.com/원본.git
```
---
## all time
* 추가한 upstream 저장소를 fetch (pull할 경우 자동으로 merge)
```
git fetch upstream
```
upstream 저장소의 마스터 브랜치를 가져오게 됨
* 로컬 저장소의 master로 checkout
```
git checkout master
```
* fetch 해 둔 원본 레포지토리를 로컬의 master 브랜치로 머지
```
git merge upstream/master
```
* 깃헙 반영은 git push 

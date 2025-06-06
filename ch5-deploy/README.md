# Next.js 프로젝트 Vercel 배포 가이드

## 1. GitHub에 코드 올리기

```bash
git init
git add .
git commit -m "init"
git branch -M main
git remote add origin https://github.com/your-username/your-repo.git
git push -u origin main
```

## 2. Vercel 가입 및 GitHub 연동

1. [https://vercel.com](https://vercel.com) 회원가입 (GitHub 계정 추천)
2. 로그인 후 대시보드에서 **New Project** 클릭

## 3. 프로젝트 Import & 배포

1. **Import Git Repository** 클릭 → 내 GitHub 저장소에서 프로젝트 선택
2. (필요 시) **환경변수(Environment Variables)** 추가
3. **Deploy** 버튼 클릭

## 4. 배포 완료

- 배포가 끝나면 사이트 주소([https://your-project.vercel.app](https://your-project.vercel.app)) 바로 확인 가능
- 코드 수정 후 GitHub에 push하면 자동으로 재배포

## 5. 추가 관리

- Vercel 대시보드에서 환경변수, 도메인, 배포 이력 관리 가능

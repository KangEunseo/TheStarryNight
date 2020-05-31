function shareKakaotalk() {
    Kakao.init("a47ff42dcc83cf510878526ac7b3d419");      // 사용할 앱의 JavaScript 키를 설정
    Kakao.Link.sendDefault({
          objectType:"feed"
        , content : {
              title:"별이 빛나는 밤"   // 콘텐츠의 타이틀
            , description:"The Starry Night⭐ 당신의 화가를 찾아보세요."   // 콘텐츠 상세설명
            , imageUrl:'https://kangeunseo.github.io/TheStarryNight/images/thumbnail.jpg'   // 썸네일 이미지
            , link : {
                  mobileWebUrl:"https://kangeunseo.github.io/TheStarryNight/index_m.html"   // 모바일 카카오톡에서 사용하는 웹 링크 URL
                , webUrl:"https://kangeunseo.github.io/TheStarryNight/index.html" // PC버전 카카오톡에서 사용하는 웹 링크 URL
            }
        }
        , buttons : [
            {
                  title:"게시글 확인"    // 버튼 제목
                , link : {
                    mobileWebUrl:"https://kangeunseo.github.io/TheStarryNight/index_m.html"   // 모바일 카카오톡에서 사용하는 웹 링크 URL
                  , webUrl:"https://kangeunseo.github.io/TheStarryNight/index.html" // PC버전 카카오톡에서 사용하는 웹 링크 URL
                }
            }
        ]
    });
}
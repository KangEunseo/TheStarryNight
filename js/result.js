let clothes, artpiece, song, record, food, bath;
let E = 0, I = 0, S = 0, N = 0, T = 0, F = 0, J = 0, P = 0;

clothes = Number(getCookie('clothes'));
artpiece = Number(getCookie('artpiece'));
song = Number(getCookie('song'));
record = Number(getCookie('record'));
food = Number(getCookie('food'));
bath = Number(getCookie('bath'));

switch(clothes){
  case 1:
    I++; F++;
    break;
  case 2:
    I++; T++;
    break;
  case 3:
    E++; T++;
    break;
  case 4:
    E++; F++;
    break;
  default:
    console.log("clothes 선택지를 선택하지 않아 기본으로 처리됩니다.");
    I++; F++;
}

switch(artpiece){
  case 1:
    S++; J++;
    break;
  case 2:
    S++; P++;
    break;
  case 3:
    N++; P++;
    break;
  case 4:
    N++; J++;
    break;
  default:
    console.log("artpiece 선택지를 선택하지 않아 기본으로 처리됩니다.");
    S++; J++;
}

switch(song){
  case 1:
    E++; P++;
    break;
  case 2:
    I++; P++;
    break;
  case 3:
    I++; J++;
    break;
  case 4:
    E++; J++;
    break;
  default:
    console.log("song 선택지를 선택하지 않아 기본으로 처리됩니다.");
    E++; P++;
}

switch(record){
    case 1:
      N++; T++;
      break;
    case 2:
      N++; F++
      break;
    case 3:
      S++; F++;
      break;
    case 4:
      S++; T++;
      break;
    default:
      console.log("기록하기 선택지를 선택하지 않아 기본으로 처리됩니다.");
      N++; T++;
  }

  switch(food){
    case 1:
      P++; E++;
      break;
    case 2:
      P++; I++;
      break;
    case 3:
      J++; E++;
      break;
    case 4:
      J++; I++;
      break;
    default:
      console.log("밥 먹기 선택지를 선택하지 않아 기본으로 처리됩니다.");
      P++; E++;
  }
  
  switch(bath){
    case 1:
      F++; S++;
      break;
    case 2:
      F++; N++;
      break;
    case 3:
      T++; S++;
      break;
    case 4:
      T++; N++;
      break;
    default:
      console.log("피로 풀기 선택지를 선택하지 않아 기본으로 처리됩니다.");
      F++; S++;
  }

  if(I > E){
    if(S > N){
      if(T > F){
        if(J > P)
          location.href = "result_ISTJ.html";
        else
          location.href = "result_ISTP.html";
      }
      else{
        if(J > P)
          location.href = "result_ISFJ.html";
        else
          location.href = "result_ISFP.html";
      }
    }
    else {
      if(T > F){
        if(J > P)
          location.href = "result_INTJ.html";
        else
          location.href = "result_INTP.html";
      }
      else{
        if(J > P)
          location.href = "result_INFJ.html";
          // 고흐 INFP니까 처리 안 함
      }
    }
  }
  else {
    if(S > N){
      if(T > F){
        if(J > P)
          location.href = "result_ESTJ.html";
        else
          location.href = "result_ESTP.html";
      }
      else{
        if(J > P)
          location.href = "result_ESFJ.html";
        else
          location.href = "result_ESFP.html";
      }
    }
    else {
      if(T > F){
        if(J > P)
          location.href = "result_ENTJ.html";
        else
          location.href = "result_ENTP.html";
      }
      else{
        if(J > P)
          location.href = "result_ENFJ.html";
        else
          location.href = "result_ENFP.html";
      }
    }
  }
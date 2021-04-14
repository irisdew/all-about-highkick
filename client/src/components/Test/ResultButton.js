import React from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { BiShareAlt } from 'react-icons/bi';
import { GiSaveArrow } from 'react-icons/gi';
import { GoLink } from 'react-icons/go';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

const ButtonContainer = styled.div`
  align-items: center;
`;

function saveAs(uri, filename) {
  // 캡쳐된 파일을 이미지 파일로 내보낸다.
  var link = document.createElement('a');
  if (typeof link.download === 'string') {
    link.href = uri;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } else {
    window.open(uri);
  }
}
const printPDF = () => {
  html2canvas(document.body).then((canvas) => {
    // jsPDF 객체 생성 생성자에는 가로, 세로 설정, 페이지 크기 등등 설정할 수 있다. 자세한건 문서 참고. // 현재 파라미터는 기본값이다 굳이 쓰지 않아도 되는데 저것이 기본값이라고 보여준다.
    var doc = new jsPDF({ format: 'a4' }); // html2canvas의 canvas를 png로 바꿔준다.
    var imgData = canvas.toDataURL('image/png'); //Image 코드로 뽑아내기 // image 추가
    doc.addImage(imgData, 'PNG', 0, 0); // pdf로 저장
    doc.save('sample-file.pdf');
  });
};

function ResultButton() {
  const classes = useStyles();
  return (
    <>
      <ButtonContainer>
        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
          startIcon={<BiShareAlt />}
        >
          공유하기
        </Button>
        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
          startIcon={<GoLink />}
        >
          링크복사
        </Button>
        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
          startIcon={<GiSaveArrow />}
          onClick={() => {
            html2canvas(document.body).then((canvas) => {
              saveAs(canvas.toDataURL('image/png'), 'test-result.png');
            });
          }}
        >
          저장하기
        </Button>
        <button id="print" onClick={printPDF}>
          PRINT
        </button>
      </ButtonContainer>
    </>
  );
}

export default ResultButton;

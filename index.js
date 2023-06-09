const onChangeHandler = (selection) => {
  const allFlag = document.getElementsByClassName('flag');
  for (let i = 0; i < allFlag.length; i++) {
    allFlag[i].style.display = 'none';
  }
  const flag = document.getElementsByClassName(`flag ${selection}`);
  flag[0].style.display = 'block';
};

window.onload = () => {
  const allFlag = document.getElementsByClassName('flag');
  for (let i = 0; i < allFlag.length; i++) {
    allFlag[i].style.display = 'none';
  }
  // const flag = document.getElementsByClassName(`flag czech`);
  // flag[0].style.display = 'block';
};

import './index.less';
import { history } from 'umi';
import { useState } from 'react';

export default function IndexHeader() {
  //   const Link = (e: any) => {
  //     if (e.target.innerText === '推荐') {
  //       history.push('/menu_1');
  //     } else if (e.target.innerText === '发现') {
  //       history.push('/menu_2');
  //     } else {
  //       history.push('/menu_3');
  //     }
  //   };
  //   const HistoryGoR = () => {
  //     history.go(-1);
  //   };
  //   const HistoryGo = () => {
  //     history.go(1);
  //   };
  return (
    <div className="navigation">
      <div className="background">
        <div className="jiantou"></div>
        <div className="text">学生外出申请</div>
      </div>
    </div>
  );
}

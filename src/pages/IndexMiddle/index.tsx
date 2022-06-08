import './index.less';
import IndexList from './IndexList';
import { history } from 'umi';
import { useState } from 'react';
export default function IndexMiddle() {
  return (
    <div className="card">
      <IndexList></IndexList>
      <IndexList></IndexList>
      <IndexList></IndexList>
      <IndexList></IndexList>
      <IndexList></IndexList>
      <IndexList></IndexList>
      <IndexList></IndexList>
      <IndexList></IndexList>
      <IndexList></IndexList>
      <IndexList></IndexList>
      <IndexList></IndexList>
      <IndexList></IndexList>
      <IndexList></IndexList>
      <div className="sign">已审批</div>
    </div>
  );
}

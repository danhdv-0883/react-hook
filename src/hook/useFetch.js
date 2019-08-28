import {useEffect, useState} from 'react';

export const useFetch = url => {
  const [state, setState] = useState({loading: true, data:null});

  useEffect(() => {
    fetch(url)
    .then(res => res.text())
    .then(res=> setState({loading: false, data: res}));
  },[useState,url])

  return state;

}

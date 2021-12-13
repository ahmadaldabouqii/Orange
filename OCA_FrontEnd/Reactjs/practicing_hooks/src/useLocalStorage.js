import { useState, useEffect } from 'react';

const getSavedValue = (key, initialValue) => {
  const savedValue = JSON.parse(localStorage.getItem(key));
  if (savedValue) return savedValue;

  // since useState Can take a function as a default value, we need to check if initialValue is a function
  if (initialValue instanceof Function) return initialValue();

  return initialValue;
};

const useLocalStorage = (key, initialValue) => {
  // the reason why we use version function as a default value is
  // because we don't want always call JSON.parse...(our local Storage) everytime
  // we render our component because it's pretty slow, so we're only
  // going to do this once the first time our component loads
  // when it needs to get that initialValue
  const [value, setValue] = useState(() => {
    return getSavedValue(key, initialValue);
  });

  useEffect(() => localStorage.setItem(key, JSON.stringify(value)), [value]);

  return [value, setValue];
};

export default useLocalStorage;

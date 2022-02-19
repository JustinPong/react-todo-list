// import { useState, useEffect } from "react";
// import TaskManager from "./TaskManager/TaskManager";

// // function getStorageValue(task, setTask) {
// //   // getting stored value
// //   const saved = localStorage.getItem(task);
// //   const initial = JSON.parse(saved);
// //   return initial || setTask;
// // }

// function getStorageValue(task, setTask) {
//     // getting stored value
//     if (typeof window !== "undefined") {
//       const saved = localStorage.getItem(task);
//       const initial = saved !== null ? JSON.parse(saved) : setTask;
//       return initial;
//     }
//   }

// export const useLocalStorage = (task, setTask) => {
//   const [value, setValue] = useState(() => {
//     return getStorageValue(task, setTask);
//   });

//   useEffect(() => {
//     // storing input name
//     localStorage.setItem(task, JSON.stringify(value));
//   }, [task, value]);

//   return [value, setValue];
// };

// export default useLocalStorage;
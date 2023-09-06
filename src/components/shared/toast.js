import { toast } from 'react-toastify';

export const notify = (text, type) => {
  if (type === 'success') {
    toast.success(text, { autoClose: 2000 });
  } else {
    toast.error(text, { autoClose: 2000 });
  }
};

//نمایش تولتیپ ارور و موفقیت آمیز بودن عملیات
//برای فهمیدن نحوه کار این کامپاننت به سایت زیر برو
//https://www.npmjs.com/package/react-toastify
//https://fkhadra.github.io/react-toastify/introduction/

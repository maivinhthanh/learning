export function capitalizeString(s: string): string {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

export const formatNumber = (num: number = 0): string => {
  return new Intl.NumberFormat('en-US').format(num);
};

export const formatCurrency = (num: number = 0): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'VND',
  }).format(num);
};

function repeat(s: string, times: number): string {
  return new Array(times + 1).join(s);
}

export const pad = (num: number, maxLength: number): string => {
  return repeat('0', maxLength - num.toString().length) + num;
};

export const loadJS = (src: string, attr?: { [key: string]: any }) => {
  return new Promise((resolve, reject) => {
    const tag = document.createElement('script');
    tag.setAttribute('src', src);
    tag.setAttribute('type', 'text/javascript');
    if (attr) {
      for (var key in attr) {
        tag.setAttribute(key, attr[key]);
      }
    }
    tag.onload = resolve;

    tag.onerror = reject;

    document.head.appendChild(tag);
  });
};

export const cleanAccents = (str: string): string => {
  str = str.replace(/[àáạảãâầấậẩẫăằắặẳẵ]/g, 'a');
  str = str.replace(/[èéẹẻẽêềếệểễ]/g, 'e');
  str = str.replace(/[ìíịỉĩ]/g, 'i');
  str = str.replace(/[òóọỏõôồốộổỗơờớợởỡ]/g, 'o');
  str = str.replace(/[ùúụủũưừứựửữ]/g, 'u');
  str = str.replace(/[ỳýỵỷỹ]/g, 'y');
  str = str.replace(/đ/g, 'd');
  str = str.replace(/[ÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴ]/g, 'A');
  str = str.replace(/[ÈÉẸẺẼÊỀẾỆỂỄ]/g, 'E');
  str = str.replace(/[ÌÍỊỈĨ]/g, 'I');
  str = str.replace(/[ÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠ]/g, 'O');
  str = str.replace(/[ÙÚỤỦŨƯỪỨỰỬỮ]/g, 'U');
  str = str.replace(/[ỲÝỴỶỸ]/g, 'Y');
  str = str.replace(/Đ/g, 'D');
  // Combining Diacritical Marks
  str = str.replace(/[\u0300\u0301\u0303\u0309\u0323]/g, ''); // huyền, sắc, hỏi, ngã, nặng
  // eslint-disable-next-line no-misleading-character-class
  str = str.replace(/[\u02C6\u0306\u031B]/g, ''); // mũ â (ê), mũ ă, mũ ơ (ư)

  return str;
};

export const uniqueArray = (arr: Array<any> = []) => {
  const uniqueIds = new Set();

  const unique = arr.filter((element) => {
    const isDuplicate = uniqueIds.has(element._id);
    uniqueIds.add(element._id);
    if (!isDuplicate) {
      return true;
    }
    return false;
  });

  return unique;
};

export const generateLetterAvatar = (name: string = '') =>
  `${name.split(' ')[0] ? name.split(' ')[0][0] : ''}${
    name.split(' ')[1] ? name.split(' ')[1][0] : ''
  }`;

export function scrollToTop(x: number = 0, y: number = 0) {
  window.scrollTo(x, y);
}
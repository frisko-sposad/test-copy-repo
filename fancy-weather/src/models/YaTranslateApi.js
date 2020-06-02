import Response from './Response';

const yaTranslateApiUrl = 'https://translate.yandex.net/api/v1.5/tr.json';

export default class {
  constructor(key) {
    this.key = key;
  }

  async getTranslate(text, from, to) {
    const url = `${yaTranslateApiUrl}/translate?key=${this.key}&text=${text}&lang=${from}-${to}`;

    const res = await fetch(url);    
    if (!res.ok) { return new Response(false, res.error); }

    const json = await res.json();
    const success = json.code === 200 && Array.isArray(json.text) && json.text.length > 0;

    return new Response(success, success ? json.text[0] : `Error: ${json.code}`);
  }
}

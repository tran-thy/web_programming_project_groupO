class User {
    #id = undefined
    #email = undefined

    constructor(){}
    get id() {
        return this.#id;
    }
    get email() {
        return this.#email;
    }
    async login(email, password) {
        const data = JSON.stringify({ email: email, password: password });
    const response = await fetch('http://localhost:3000/user/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: data
    });
    if (response.ok === true) {
      const json = await response.json();
      console.log(json);
      return json;
    } else {
      throw response.statusText;
    }
}}
export { User }
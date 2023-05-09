class Profile {
    constructor() {
        // this.clientid = "",
        //     this.clientSecret = ""
        this.clientid = "";
        this.clientSecret = "";
    }

    async getProfile(username) {
        const profileResponse = await fetch(`http://jsonplaceholder.typicode.com/users?username=${username}`);

        const profile = await profileResponse.json();

        return {
            // profile:profile
            profile
        }
    }
}
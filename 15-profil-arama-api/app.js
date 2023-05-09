const searchProfile = document.getElementById("searchProfile");


const profile = new Profile();
const ui = new UI();

searchProfile.addEventListener("keyup", (event) => {
    ui.clear();
    let text = event.target.value;

    if (text !== "") {
        profile.getProfile(text)
            .then(res => {
                // console.log(res.profile)
                if (res.profile.length === 0) {
                    ui.showAlert(text);
                } else {
                    // console.log(res.profile[0]);
                    // console.log(res);
                    ui.showProfile(res.profile[0]);
                    ui.showTodo(res.todo);
                }
            })
            .catch(err => {
                ui.showAlert(text);
            })
    }
});
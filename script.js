
const helloWorld = () => {
    console.log("hellkoooo")
}


const showToast = () => {

    const toastLiveExample = document.getElementById('liveToast')
    const toast = new bootstrap.Toast(toastLiveExample)
    toast.show()

}

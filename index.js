const fileInput = document.getElementById('file')
const loading = document.getElementById('loading')
const buttonConvert = document.getElementById('buttonConvert')
const reset = document.getElementById('reset')
const previewContainer = document.getElementById('previewContainer')
fileInput.addEventListener('change', previewImage)

reset.addEventListener('click', function () {
    previewContainer.classList.add('d-none')
})

async function convert() {
    loading.classList.remove('d-none')
    Tesseract.recognize(fileInput.files[0]).then(function (result) {
        console.log('result :>> ', result);
        document.getElementById("convertedText").value = result.text
        loading.classList.add('d-none')
    })
}

function previewImage(event) {
    const preview = document.getElementById('preview')
    preview.src = URL.createObjectURL(event.target.files[0])
    preview.onload = function () {
        URL.revokeObjectURL(preview.src)
    }
    previewContainer.classList.remove('d-none')
}
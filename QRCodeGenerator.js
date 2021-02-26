url = document.getElementById('url-input');
type = document.getElementById('type-selection');
color = document.getElementById('color-selection');
image = document.getElementById('image-selection');

const qrCode = new QRCodeStyling({
    height: 300,
    width: 300,
    data: 'https://github.com/Bluewolf787',
    image: '',
    dotsOptions: {
        color: '#000',
        type: 'square',
    },
});

const updateQrUrl = () => {
    let newUrl = url.value;
    qrCode.update({
        data: newUrl,
    });
};

const updateQrType = () => {
    let newType = type.value;
    qrCode.update({
        dotsOptions: {
            type: newType,
        }
    });
};

const updateQrColor = () => {
    let newColor = color.value;
    qrCode.update({
        dotsOptions: {
            color: newColor,
        }
    });
};

const updateQrImage = () => {
    let newImage = URL.createObjectURL(image.files[0]);
    qrCode.update({
       image: newImage,
    });
};

const download = () => qrCode.download('jpeg')

qrCode.append(document.getElementById('qr-code'))
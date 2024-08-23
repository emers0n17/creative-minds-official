import emailjs from 'emailjs-com';

function sendEmail(data) {
  emailjs.send('service_id', 'template_id', data, 'user_id')
    .then((result) => {
      alert('Email enviado com sucesso!');
    }, (error) => {
      alert('Erro ao enviar o email, tente novamente.');
    });
}

function handlePackageSelection(packageData) {
  sendEmail({
    subject: `Pacote Escolhido: ${packageData.name}`,
    features: packageData.features.join(', '),
    price: packageData.price
  });
}

function handleCustomPackageSubmit(event) {
  event.preventDefault();

  const customName = document.getElementById('customName').value;
  const customFeatures = document.getElementById('customFeatures').value;
  const customPrice = document.getElementById('customPrice').value;

  sendEmail({
    subject: `Pacote Personalizado: ${customName}`,
    features: customFeatures,
    price: customPrice
  });

  // Fecha o modal
  const modal = document.querySelector('#customPackageModal');
  const modalInstance = bootstrap.Modal.getInstance(modal);
  modalInstance.hide();
}

document.getElementById('customPackageForm').addEventListener('submit', handleCustomPackageSubmit);

    const fakeData = { short: 'https://acortador.com/abcd' };

    // Suponiendo que el componente Form define `setData` y es accesible
    const formElement = document.querySelector('Form');
    if (formElement && window.React) {
      // React dev tools expone hooks o podrías personalizar tu app para exponer el setter
      const reactInternals = Object.values(formElement)[0]._owner.stateNode;
      reactInternals.setData(fakeData); // Llamar al setter de estado
    }


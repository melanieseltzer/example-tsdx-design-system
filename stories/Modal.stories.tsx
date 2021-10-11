import React from 'react';
import { Modal } from '../src';

export default {
  title: 'Components/Modal',
  component: Modal,
};

export const Default = () => {
  const [showModal, setShowModal] = React.useState(false);
  const open = () => setShowModal(true);
  const close = () => setShowModal(false);

  return (
    <div>
      <button onClick={open}>Show Modal</button>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
        molestie eros ex, vitae volutpat metus placerat eu. Quisque mattis
        egestas viverra. Suspensse quis condimentum justo. Aliquam erat
        volutpat. Fusce vulputate mattis ante at sollicitudin. Integer luctus
        congue dui, sed interdum sem pretium vitae. Ut felis lectus,
        pellentesque sed varius ac, lacinia vitae nisl. Donec eu mollis eros.
        Nam consequat eget diam vel lacinia. Praesent sit amet risus rhoncus,
        bibendum urna non, suscipit ex. Suspendisse potenti. Mauris consequat
        tincidunt nunc, non pharetra leo. Sed vehicula quis ipsum et
        consectetur. Praesent ullamcorper dui quis felis fermentum suscipit.
        Morbi mollis hendrerit turpis et semper. Mauris sed rhoncus diam, vel
        aliquet augue. Maecenas pulvinar placerat purus vitae finibus. Donec ut
        nunc imperdiet, viverra nulla id, lobortis felis. Pellentesque porta
        metus non lorem hendrerit volutpat. Nam laoreet convallis purus eget
        viverra. Duis mattis pretium magna, ac tincidunt quam feugiat cursus.
        Cras imperdiet, dolor accumsan sagittis rhoncus, nisl tellus congue
        urna, sed aliquam diam erat ac purus. Fusce feugiat velit id mauris
        lacinia, at tincidunt tortor dapibus. Sed at justo eget tortor laoreet
        tempor. Aliquam vitae sem ligula. Nunc consectetur consectetur leo,
        laoreet porta magna varius eu. In et lorem molestie odio suscipit
        finibus. Vivamus varius, dui quis laoreet blandit, magna mauris cursus
        elit, a gravida nulla tortor at erat. Vestibulum viverra vitae magna
        tincidunt consequat. Integer vulputate ligula porta sapien tincidunt
        pharetra. Integer semper augue sit amet tortor luctus, quis scelerisque
        urna rhoncus. Curabitur feugiat tincidunt purus, vitae condimentum augue
        elementum vel. Morbi velit augue, rhoncus vel maximus et, tincidunt ut
        ligula. Fusce tempus eros id purus aliquam ultricies. Phasellus nec
        rhoncus diam, in convallis odio. Vivamus placerat erat in risus
        fringilla, vel congue massa sodales. Quisque vehicula arcu lorem. Nulla
        sollicitudin, nunc vitae commodo sodales, ipsum nisi iaculis est, ac
        pellentesque lorem tortor nec diam. Quisque aliquam, urna in pretium
        lobortis, elit risus vestibulum lectus, at lobortis purus tortor in
        enim. Aliquam aliquam massa at purus consequat ultrices. Suspendisse
        sollicitudin pretium ante id hendrerit. Sed malesuada sit amet erat nec
        feugiat. Proin non mollis quam. Mauris a ultricies odio. Fusce mollis,
        sem eu eleifend iaculis, dolor neque sagittis nulla, vel rutrum dui quam
        non lectus. Mauris sit amet lorem et justo sodales tincidunt nec non
        massa. Quisque nec tempor sem. Cras finibus pretium feugiat. Proin non
        faucibus nunc. Vivamus nec turpis ac dolor tempor rhoncus et non mauris.
        Donec erat eros, egestas vel neque ullamcorper, fringilla vestibulum
        eros. Quisque tempus erat vitae semper bibendum. Vestibulum id viverra
        diam. Vivamus blandit libero vitae ante ultrices, et posuere ligula
        imperdiet. Cras purus tellus, egestas ut sodales id, maximus eu mi.
        Aliquam nec condimentum felis. Nunc porta sapien quis sapien interdum,
        sed vestibulum ante dapibus. Aliquam sed pretium augue. Sed molestie
        scelerisque nisl, accumsan lobortis velit rhoncus nec. Aliquam erat
        volutpat. Nunc convallis sapien eget mauris tincidunt, maximus posuere
        lectus gravida. Vivamus egestas non risus quis imperdiet.
      </p>

      <Modal isOpen={showModal} onClose={close} />
    </div>
  );
};

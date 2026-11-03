import { Button, Modal } from '@heroui/react'

export const Mymodal = ({ name, age, img, children }) => {
  return (
    <Modal>
      <Modal.Trigger aria-label={`Open ${name}'s details`}>
        {children}
      </Modal.Trigger>
      <Modal.Backdrop>
        <Modal.Container>
          <Modal.Dialog className="sm:max-w-[360px]">
            <Modal.Header>
              <Modal.Heading>{name}</Modal.Heading>
            </Modal.Header>
            <Modal.Body>
              <img src={img} alt={name} className="mb-4 aspect-square w-full rounded-md object-cover" />
              <p>Age: {age}</p>
            </Modal.Body>

          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  )
}

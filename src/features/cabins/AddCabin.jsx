import Button from "../../ui/Button";
import CreateCabinForm from "./CreateCabinForm";
import Modal from "../../ui/Modal";
// import CabinTable from "./CabinTable";

// export default function AddCabin() {
//   const [isOpenModal, setIsOpenModal] = useState(false)
//   const handleClick = () => setIsOpenModal(open => !open)

//   return (
//     <div>
//       <Button onClick={() => handleClick()}>Add new cabin</Button>
//       {isOpenModal && (
//         <Modal onClose={() => setIsOpenModal(false)}>
//           <CreateCabinForm onCloseModal={() => setIsOpenModal(false)} />
//         </Modal>
//       )}
//     </div>
//   )
// }

function AddCabin() {
  return (
    <Modal>
      <Modal.Open opens="cabin-form">
        <Button>Add new cabin</Button>
      </Modal.Open>
      <Modal.Window name="cabin-form">
        <CreateCabinForm />
      </Modal.Window>

      {/* <Modal.Open opens="cabin-deleted">
        <Button>Show table</Button>
      </Modal.Open>
      <Modal.Window name="cabin-deleted">
        <CabinTable />
      </Modal.Window> */}
    </Modal>
  )
}

export default AddCabin
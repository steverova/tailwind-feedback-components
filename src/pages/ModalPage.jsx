import { useMethodsContext } from "@/components/WrapperContext/WrapperContext"

const ModalPage = () => {

  const methods = useMethodsContext()

	console.log('ModalPage methods ->', methods)

  return (
    <div>ModalPage</div>
  )
}
export default ModalPage
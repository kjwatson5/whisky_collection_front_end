import Button from "./Button"
import Input from "./Input"

import { useForm } from "react-hook-form"
import { server_calls } from "../api/server"
import { useDispatch, useStore } from "react-redux"
import { chooseBrand, chooseFlavor, chooseName, chooseYear } from "../redux/slices/RootSlice"

// interfaces

interface WhiskyFormProps {
  id?: string,
  data?: {}
}

const WhiskyForm = (props: WhiskyFormProps) => {
  const { register, handleSubmit } = useForm ({})
  const dispatch = useDispatch();
  const store = useStore();

  const onSubmit = (data: any, event: any) => {
    console.log(`ID: ${props.id}`);
    if (props.id && props.id.length>0) {
      server_calls.update(props.id[0], data)
      console.log(`Updated ${ data.brand } ${ props.id }`)
      setTimeout(() => {window.location.reload()}, 1000);
      event.target.reset()
    } else{
      //Use dispatch to update our state in our store
      dispatch(chooseBrand(data.brand));
      dispatch(chooseFlavor(data.flavor));
      dispatch(chooseName(data.name));
      dispatch(chooseYear(data.year))

      server_calls.create(store.getState())
      setTimeout( () => {window.location.reload()}, 1000);
    }
  }

  return (

    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="Brand">Whisky Brand</label>
          <Input {...register('brand')} name = 'brand' placeholder="Brand"/>
        </div>
        <div>
          <label htmlFor="Flavor">Flavor</label>
          <Input {...register('flavor')} name = 'flavor' placeholder="Flavor"/>
        </div>
        <div>
          <label htmlFor="Year">Year</label>
          <Input {...register('year')} name = 'year' placeholder="Year"/>
        </div>
        <div>
          <label htmlFor="Name">Name</label>
          <Input {...register('name')} name = 'name' placeholder="Name"/>
        </div>
      <div className="flex p-1">
        <Button
          className='flex justify-start m-3 bg-slate-300 p-2 rounded hover:bg-slate-800 text-white'
        >
          Submit
        </Button>
      </div>
      </form>
    </div>
  )
}

export default WhiskyForm

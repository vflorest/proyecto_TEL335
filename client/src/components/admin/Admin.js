import { ArrowPathIcon } from '@heroicons/react/24/outline'
import  {Link} from 'react-router-dom'



const features = [
  {
    name: 'Registrar objeto',
    description:
      'Descripcion',
    icon: ArrowPathIcon,
    url: '/register-object'
  },
  {
    name: 'Registro de objetos',
    description:
      'Descripcion',
    icon: ArrowPathIcon,
    url: '/see-list-objects'
  },
  {
    name: 'Registrar solicitud',
    description:
      'Descripcion',
    icon: ArrowPathIcon,
    url: '/register-request'
  },
  {
    name: 'Registro de solicitudes',
    description:
      'Descripcion',
    icon: ArrowPathIcon,
    url: '/see-list-requests'
  },
]

  export default function Admin() {
    

  

  return (
    <div className="flex flex-grow flex-col min-h-screen justify-between  py-24 sm:py-32">
      <header className="bg-gray-light text-white py-4 px-6">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Lost&Found</h1>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <Link href="#" className="hover:underline" prefetch={false}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline" prefetch={false}>
                  About
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto  mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div  key={feature.name} className={"bg-gray-light relative pl-16 "}>
                <Link to={feature.url}>
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                      <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                    </div>
                    {feature.name}
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
                </Link>
              </div>
            ))}
          </dl>
        </div>
        
      </div>
      <footer className="bg-gray-900 h-0 text-white py-4 px-6">
        <div className="container mx-auto text-center">
          <p>&copy; 2023 Lost&Found. All rights reserved.</p>
        </div>
      </footer>
    </div>
    
  );
}
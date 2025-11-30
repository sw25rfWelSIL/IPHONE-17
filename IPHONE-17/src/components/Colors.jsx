import { useState } from "react";
function Colors() { 


const Colors = [

{id:'blue', name: 'Titanio Azul', image:'/img/iphone-blue.jpg', colorClass:'bg-blue-500'},

{ id:'silver', name: 'Titanio Natural', image:'/img/iphone-silver.jpg', colorClass:'bg-gray-500'},

{ id:'orange', name: 'Titanio  Laranja', image:'/img/iphone-orange.jpg', colorClass:'bg-orange-500'}

];

const models = [

    { id:'Pro Max', screen: '6.9 polegadas', storage:'256GB, 512GB OU 1TB', baterry:'33h de video',weight:'221g'},

     { id:'Pro ', screen: '6.3 polegadas', storage:'128GB, 256GB OU 512GB', baterry:'29h de video',weight:'199g'}

];

  
const [selectedColor, setSelectedColor] = useState('blue');




 return (

        <section id="cores" className="bg-black py-20 px-8" >
            <div className="max-w-7xl mx-auto">

            <div className="text-center mb-16">
                <h2 className="text-5xl mb:6xl font-bold mb-4">Escolha a sua cor</h2>
                <p className="text-gray text-xl">Quatro acabamentos em titânio lindos</p>
            </div>

            <div className="flex justify-center mb-12">
                <div className="relative w-full max-w-3xl">
                    <div className="relative fles items-center justify-center min-h-[500px]">
                        <img className="max-w-full max-h-[600px] mx-auto" src={Colors.find(color => color.id === selectedColor).image} alt="iphone 17"></img>
                    </div>
                    <div className="absolute bottom-8 left-0 right-0 text-center">
                        <div className="px-8 py-4 rounded-full backdrop-blur-md bg-black/40 inline-block">
                            <h3 className="text-2xl font-semibold">{Colors.find(color => color.id === selectedColor).name} </h3>
                        </div>

                    </div>
                </div>
            </div>

        
            <div className="flex justify-center items -center gap-4">
                    {Colors.map(color => (

                        <button key={color.id} onClick={() => setSelectedColor(color.id)} className={`relative transition-all duration-300 cursor-pointer`}>

                            <div className={`w-16 h-16 rounded-full border-4 ${color.colorClass} ${selectedColor === color.id ?'border-white ' : 'border-gray-600'}`}></div>

                        </button>
                        
                    ))}
            </div>

                    <div className="grid gap-8 mt-20 grid-cols-2">
                        {models.map((model, index) =>(

                                <div key={index} className="bg-linear-to-br from-gray-900 to-transparent rounded-3xl p-8 border border-gray ">

                                <div className="text-4xl mb-4">📱</div>
                                <h3 className="text-2xl font-bold mb-3">{model.name}</h3>
                                <p className="text-gray-400 mb-4">{model.screen}</p>
                                <ul className="space-y-2 text-gray-300">
                                    <li>{model.storage}</li>
                                    <li>{model.baterry}</li>
                                    <li>{model.weight}</li>
                                </ul>


                                </div>


                        ))}
                    </div>
            
                        <div className="text-center mt-16">
                        <button className="bg-blue-700 hover:bg-blue-800 text-white px-12 py-4 rounded-full text-lg font-medium transition-allduration-300 mb-8 hover:scale-105 shadow-mb  shadow-blue-500/50 cursor-pointer">
                            Compre agora á partir de R$12.590,00
                        </button>
                        <p>Ou em até 12x de R$1.049,17 sem juros</p>



                        </div>




               

         
            </div>
        </section>




 )



}

export default Colors
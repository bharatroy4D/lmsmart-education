import React from 'react';

const Home = () => {
    return (
        <div className='bg-base-200 roboto lg:py-24'>
            <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem vel dolor non pariatur itaque id quasi minus molestias laudantium tempora eum, repellendus hic animi quia necessitatibus aliquid dolores reiciendis unde, vitae quos facere laboriosam. Illum corporis nam mollitia! Dicta, vitae nulla sed sint necessitatibus tempora, commodi modi facilis harum ducimus exercitationem molestiae beatae aperiam nesciunt temporibus? Temporibus, illum. Quae dolore officiis totam tenetur laborum ut sit sed pariatur, explicabo, optio adipisci necessitatibus dolor. Odio, deserunt numquam, et maxime repellat consequatur exercitationem inventore fugiat tenetur nobis omnis repudiandae quaerat amet modi tempora at illo. Quasi impedit qui voluptatem fuga aliquam minus inventore similique pariatur nam quae. Culpa aliquid, asperiores, quod natus nisi, ipsam doloribus dolores quibusdam sunt similique vero minima. Numquam pariatur facilis voluptatum doloribus voluptates, ipsum minima sequi mollitia provident placeat praesentium qui tempore nostrum. Quo eius quis aut laudantium qui alias illo adipisci similique facilis! Enim reiciendis consectetur est dignissimos quod, obcaecati beatae ducimus impedit, eligendi cupiditate exercitationem sit voluptatibus adipisci temporibus pariatur? Repudiandae nobis pariatur repellat iure recusandae. Ipsam perferendis itaque tenetur aspernatur eligendi, esse dolorum aliquid hic, numquam sed dignissimos? Dolor omnis quod dignissimos vel repellendus qui rem necessitatibus officiis. Sequi sint nihil, itaque aperiam necessitatibus temporibus aliquid molestiae odio autem rem quod dolor nostrum ipsum provident repellat assumenda quos soluta in, reiciendis ratione doloremque sed. Aut eaque repudiandae quo, perspiciatis beatae quidem numquam commodi quasi obcaecati qui temporibus at ex voluptatem impedit, neque rem provident delectus, odio maiores atque explicabo. Voluptatum earum architecto assumenda veritatis harum nemo cupiditate repellendus unde corporis saepe vel error reprehenderit maiores ut inventore officiis, maxime aliquid iusto magni facilis aspernatur totam ducimus illo excepturi. Magni ipsa eaque deleniti sed numquam voluptas hic sint, doloremque quaerat cum at dolorem velit ad, molestiae fugit architecto consequatur mollitia. Omnis eum natus sed facere aliquid labore harum, quibusdam, molestiae eos et dicta inventore tempore voluptatibus ut fugiat. Dolorum ad nihil velit nostrum similique enim inventore eligendi iste perferendis tempora? A recusandae adipisci sapiente quisquam sequi? Aperiam totam, incidunt aspernatur quidem est eligendi beatae ipsa! Facilis quam ut pariatur cumque officia aspernatur voluptatem sed repellat id nemo soluta laboriosam ducimus dicta provident ipsa odit deleniti praesentium quasi cum veniam, commodi perspiciatis eum dignissimos? Ut incidunt culpa earum officia sit ducimus aliquam consectetur totam fugit mollitia cumque perspiciatis dolorum facere ab quod expedita dolor commodi quaerat ullam, quibusdam repudiandae, nulla aperiam facilis illum! Omnis id ipsa, voluptatum debitis provident modi enim itaque, non quos quasi ex minus libero voluptatem et? Magnam molestiae architecto nobis doloribus beatae accusamus dignissimos cum sunt pariatur? Impedit, in aspernatur odio perferendis ratione doloremque temporibus magni, delectus, incidunt aliquid porro ad veritatis totam maxime odit velit deserunt neque tempora iusto commodi similique voluptatibus! A, adipisci? Atque, similique aut? Reprehenderit sapiente eaque earum consequatur? Cum odit ipsam officiis, animi explicabo iste praesentium atque ipsum commodi, nihil amet voluptas voluptatibus earum labore dolores sequi nemo sunt exercitationem! Ex excepturi beatae quae repellat cupiditate illo eaque expedita, repellendus quibusdam corrupti magni. Sapiente earum voluptates laborum quidem!</h1>
            <div className='flex justify-between items-center gap-10 w-11/12 mx-auto'>
                {/* banner context text */}
                <div className='flex flex-col gap-5 w-[50%]'>
                    <h3 className='text-base text-gray-400 font-medium uppercase'>Developed By To Teachers</h3>
                    <h1 className='text-5xl text-gray-700 font-bold'>Experience a learning platform that take you next level</h1>
                    <h2 className='text-base text-gray-400  lg:w-96'>World-class training and development programs developed by top teachers</h2>
                    <button className='btn btn-secondary w-fit'>Explore All Course</button>
                </div >
                {/* banner content image */}
                <div className='flex relative items-end w-[50%] '>
                    <img className='lg:h-72 ' src="https://thepixelcurve.com/wp/lmsmart/lp/wp-content/uploads/sites/2/2022/02/HR0835.jpg" alt="" />
                    <img className='lg:w-64' src="https://thepixelcurve.com/wp/lmsmart/lp/wp-content/uploads/sites/2/2022/02/HTR084.jpg" alt="" />
                    <img className='absolute top-1/4 right-96 z-10' src="https://thepixelcurve.com/wp/lmsmart/lp/wp-content/uploads/sites/2/2021/11/SHA43.png" alt="" />

                </div>
            </div>
            {/* background animation */}
            <div className='relative '>
                <img className='absolute top-1/6 right-1/4 z-20' src="https://thepixelcurve.com/wp/lmsmart/lp/wp-content/uploads/sites/2/2021/11/MS425.png" alt="" />
            </div>

        </div>
    );
};

export default Home;
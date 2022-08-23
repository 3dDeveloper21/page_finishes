// ------------------- NEEDED DATA STRUCTURE - OR CAN IMPROVE --------------------------//

// import ToiletAlt   from '../../../../Assets/icons/toilet-alt.svg';
// import VanityIcon  from '../../../../Assets/icons/vanity.svg';
// import ShowerIcon  from '../../../../Assets/icons/shower-alt.svg';
// import BathtubIcon from '../../../../Assets/icons/bathtub-alt.svg';
// import BidetIcon   from '../../../../Assets/icons/bidet.svg';

// const mainTypes = {
//     toilet:  {title: 'Toilet',  icon: ToiletAlt},
//     vanity:  {title: 'Vanity',  icon: VanityIcon},
//     shower:  {title: 'Shower',  icon: ShowerIcon},
//     bathtub: {title: 'Bathtub', icon: BathtubIcon},
//     bidet:   {title: 'Bidet',   icon: BidetIcon}
//   };

// --------------------- KITCHEN DATA --------------------------//

// import CabinetIcon from './imgs/cabinets-demo.png';
// import CountertopIcon from './imgs/countertop-demo.png';
// import BacksplashIcon from './imgs/backsplash-demo.png';
// import FaucetIcon from './imgs/faucet-demo.png';
// import SinkHardwareIcon from './imgs/sink-demo.png';

const newMainTypes = [
    {
        key: 'cabinet',
        options: {
            title: 'Cabinet',
            icon: './imgs/cabinets-demo.png',
        },
        subCategories: {
            title: 'Ovens',
            categories: [
                {
                    key: 'cabinetTesting',
                    title: 'Cabinet tesing',
                    label: "Cabinet test",
                    icon: './imgs/plot_filler.png',
                },
                {
                    key: 'singleSink',
                    title: 'Single Sink',
                    label: "Single Vanity",
                    icon: './imgs/Spice_Rack.png',
                },
                {
                    key: 'singleVanities',
                    title: '2 Single Vanities',
                    icon: './imgs/waterfall_island.png',
                },
            ],
        }
    },
    {
        key: 'countertop',
        options: {
            title: 'Countertop',
            icon: './imgs/countertop-demo.png',
        },
    },
    {
        key: 'backsplash',
        options: {
            title: 'Backsplash',
            icon: './imgs/backsplash-demo.png',
        },
    },
    {
        key: 'faucet',
        options: {
            title: 'Faucet',
            icon: './imgs/faucet-demo.png',
        },
    },
    {
        key: 'sinkHardware',
        options: {
            title: 'Sink & Hardware',
            icon: './imgs/sink-demo.png',
        },
    },
];

// ----------------------------------------------------------------//

export default newMainTypes;
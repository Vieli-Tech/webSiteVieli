import Lampada from "../resources/icons/lampada.png";
import Estrategia from "../resources/icons/estrategia.png";
import Conversa from "../resources/icons/conversa.png";
import Foguete from "../resources/icons/foguete.png";
import Totem from "../resources/totem.png";
import PLC300 from "../resources/plc300.png";
import Dashboard from "../resources/dashboard.png";

const Data = [
    {
        text: 'Primeira idéia de criar o acompanhamento em tempo real dos indicadores de produção',
        date: '2018',
        category: {
            tag: 'medium',
            color: '#018f69'
        },
        icon: Lampada,
        image: Dashboard,
    },
    {
        text: 'Instalação e validação do protótipo nos primeiros clientes, e melhorando em até 30% a performance de alguns equipamentos',
        date: '2019',
        category: {
            tag: 'medium',
            color: '#018f69'
        },
        icon: Conversa,
        image: PLC300,
    },
    {
        text: 'Com lições aprendidas com o protótipo, é criada a segunda versão do sistema, com mais relatórios e melhor usabilidade com a tela touch no totem.',
        date: '2020',
        category: {
            tag: 'medium',
            color: '#018f69'
        },
        icon: Estrategia,
        image: Totem,
    },
    {
        text: 'Reformulação do banco de dados e simplificação da arquitetura para facilitar instalação, melhorar suporte e trazer mais informações e serviços para os clientes',
        date: '2021',
        category: {
            tag: 'medium',
            color: '#018f69'
        },
        icon: Foguete,
    },
];

export default Data;
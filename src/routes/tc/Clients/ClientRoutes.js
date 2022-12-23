import Inbox from './Inbox';
import Chat from './Chat';
import Details from './Details';
import Documents from './Documents';
import Invoices from './Invoices';
import Mail from './Mail';
import Whatsapp from './Whatsapp';

import { Routes, Route} from 'react-router-dom';

function ClientRoutes() {
    return (
        <Routes>
            <Route path='inbox/*' element={<Inbox/>} />
            <Route path='mail/*' element={<Mail/>} />
            <Route path='documents/*' element={<Documents/>} />
            <Route path='invoices/*' element={<Invoices/>} />
            <Route path='whatsapp/*' element={<Whatsapp/>} />
            <Route path='chat/*' element={<Chat/>} />
            <Route path='details/*' element={<Details/>} />
        </Routes>
    )
}
export default ClientRoutes;
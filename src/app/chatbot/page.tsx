import Chatbot from '@/components/chatbot/Chatbot';
import ContactPage from '../contact/page';


export default function Page() {
    return (
        <>
            <ContactPage />
            <Chatbot position="float" bottomOffset={50} zIndex={55} />
        </>
    );
}
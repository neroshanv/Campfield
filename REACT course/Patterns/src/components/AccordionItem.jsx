import { useAccordionContext } from "./Accordion";



export default function AccordionItem({ id, className, title, children }) {
    const { openItemId, toggleItem } = useAccordionContext();

    const isOpen = openItemId === id;


    return (
        <li className={className}>
            <h3 onCLick={() => toggleItem(id)}>{title}</h3>
            <div className={isOpen ? 'accordion-item-content open' : undefined}
            >
                {children}
            </div>
        </li>
    );
}
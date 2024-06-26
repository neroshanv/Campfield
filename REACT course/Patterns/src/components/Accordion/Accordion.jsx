import { createContext, useContext, useState } from "react"
import AccordionTitle from "./AccordionTitle";
import AccordionItem from "./AccordionItem";
import AccordionContent from "./AccordionContent";

const AccordionContext = createContext()

export function useAccordionContext() {
    const ctx = useContext(AccordionContext)

    if (!ctx) {
        throw new Error('Accordion-related components must be wrapped by <Accordtion>.')
    }

    return ctx;
}

export default function Accordion({ children, className }) {
    const [openItemId, setOpenItemId] = useState()


    function toggleItem(id) {
        setOpenItemId(prevId => prevId === id ? null : id)
    }
    // function openItem() {
    //     setOpenItemId(id);
    // }

    // function closeItem() {
    //     setOpenItemId(null);
    // }

    const contextValue = {
        openItemId,
        toggleItem,
    };

    return (
        <AccordionContext.Provider value={contextValue}>
            <ul className={className}>{children}</ul>
        </AccordionContext.Provider>
    );
}

Accordion.Item = AccordionItem;
Accordion.Title = AccordionTitle;
Accordion.Content = AccordionContent;
import { defineStore } from 'pinia';

interface Faq {
    title: string;
    description: string;
}

const faqs: Faq[] = [
    {
        title: 'Apa Itu Software Engineering',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, rem quasi hic repellat voluptatibus excepturi. Sunt ratione quaerat necessitatibus? Ducimus quis nesciunt eaque consectetur autem ipsa quo voluptatem exercitationem consequatur, modi, temporibus vel a ipsam ratione, odio numquam illo nihil quod beatae ullam voluptatum delectus. Cumque quidem eligendi ipsa facere impedit, tempore odit at! Alias iusto a laboriosam perferendis ipsum sunt sapiente illo placeat reprehenderit dolorum dignissimos eveniet nihil eos nemo itaque, hic asperiores aspernatur aut fugit error quasi exercitationem quae dolores. Et quam error vel rem officiis, veritatis deleniti autem esse. Consectetur ipsam consequuntur aliquid dicta itaque pariatur culpa.'
    }
];

const __wrapper:object = {
    state: () => ({
        faqs: faqs as Faq[],
    }),
    actions: {
        setFaqs(this: any,faqs: []): void {
            this.faqs = faqs;
        },
    },
};

export const useFaqStore = defineStore('faqStore', __wrapper);

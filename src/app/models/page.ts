export class Page {
    constructor(
        public _id: string,
        public parent: string,
        public name: string,
        public route: string,
        public parent_route: string,
        public head: string,
        public content: string,
        public foot: string,
        public look: string
    ) { }
}
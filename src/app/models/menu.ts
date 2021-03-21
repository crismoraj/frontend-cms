export class Menu {
    constructor(
        public _id: string,
        public parent: string,
        public name: string,
        public route: string,
        public name_menu: string,
        public type_link: string,
        public parent_route: string,
    ) { }
}
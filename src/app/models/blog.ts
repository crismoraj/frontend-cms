export class Blog {
    constructor(
        public _id: string,
        public title: string,
        public content: string,
        public theme: string,
        public sub_theme: string,
        public route: string,
        public date: string,
        public user: any,
        public comments: any
    ) { }
}
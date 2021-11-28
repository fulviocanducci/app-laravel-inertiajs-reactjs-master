interface ITodo {
    id: number;
    description: string;
    done: boolean;
    created_at: string;
    updated_at: string;
}
interface ILinks {
    active: boolean;
    label: string | null;
    url: string | null;
}
interface IPageBase {
    current_page: number;
    first_page_url: string | null;
    from: number;
    last_page: number;
    last_page_url: string | null;
    links: ILinks[];
    next_page_url: string | null;
    path: string;
    per_page: number;
    prev_page_url: string | null;
    to: number;
    total: number;
}

interface IPage<T> extends IPageBase {
    data: T[];
}

export { ITodo, IPage, IPageBase };

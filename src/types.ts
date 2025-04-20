type PhotoPickrFormType = {
    title?: string;
    description?: string;
};

type PhotoPickrFormErrorType = {
    title?: string;
    description?: string;
    image?: string;
    expire_at?: string;
};

type PhotoPickrType = {
    id: number;
    user_id: number;
    title: string;
    description?: string;
    image?: string;
    created_at: string;
    PhotoPickrItem?: Array<PhotoPickrItemType>;
    PhotoPickrComments?: Array<PhotoPickrCommentType>;
    expire_at: string;
};

type PhotoPickrItemType = {
    id: number;
    image: string;
    count: number;
};
type PhotoPickrCommentType = {
    id: number;
    comment: string;
    created_at: string;
};

type PhotoPickrItemForm = {
    image: File | null;
};
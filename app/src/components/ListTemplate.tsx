import React,{ReactNode} from 'react';
import type { Book } from './Book';  // インポート先が型情報であることを示す

type ListTemplateProps = {
    src: Array<Book>,
    children: (book: Book) => ReactNode
};

export const ListTemplate = ({ src, children }: ListTemplateProps) => {
    return (
        <dl>
            {
                src.map((elem, index) =>(
                    <React.Fragment key={elem.isbn}>
                        {children(elem)}
                    </React.Fragment>
                ))
            }
        </dl>
    );
};
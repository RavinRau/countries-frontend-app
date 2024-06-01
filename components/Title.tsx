import * as React from "react";

export interface IHeaderProps {
    title?: string;

}

export function Title({ title }: IHeaderProps) {
    return (
        <div>
            <h2>{title}</h2>
        </div>
    );
}

export default Title;

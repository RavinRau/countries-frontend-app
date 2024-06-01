import * as React from 'react';
import {ReactNode} from "react";
import {TagUI} from "@/components/ui/tag";

export enum COLOR {
    Default = 'DEFAULT',
    Secondary = 'SECONDARY'
}

interface ITagProps {
    variant?: COLOR;
    className?: string;
    children?: ReactNode | undefined;
}

export function Tag({ variant = COLOR.Default ,className, children}: ITagProps) {

    return (
        <TagUI className={className} variant={variant}>{children}</TagUI>
    );
}

export default Tag;

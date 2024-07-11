import React from "react";
import {Chip} from "@nextui-org/chip";
import {clsx} from "@nextui-org/shared-utils";

interface TagsProps {
    className?: string;
    tags: string[];
}

const Tags: React.FC<TagsProps> = ({className, tags}) => {
    if (!tags) return null;
    const wrapperClassName = clsx("flex flex-row flex-wrap gap-2", className);

    return (
        <div className={wrapperClassName}>
            {tags.map(tag => (
                <Chip key={tag} color="primary" variant="flat">{tag}</Chip>
            ))}
        </div>
    );
};

export default Tags;
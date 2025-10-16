export type BreadcrumbItemType = {
    label: string;
    href?: string;
    isCurrent?: boolean;
};

export type BreadcrumbProps = {
    items: BreadcrumbItemType[];
};


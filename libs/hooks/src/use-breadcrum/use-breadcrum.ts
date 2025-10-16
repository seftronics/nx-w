import { useMemo } from "react";
import type { BreadcrumbItemType } from "@nx-w/types";

export function useBreadcrumb(pathname: string, baseItems: BreadcrumbItemType[] = [{ label: "Home", href: "/" }]): BreadcrumbItemType[] {
    return useMemo(() => {
    const segments = pathname.split("/").filter(Boolean);
    const items: BreadcrumbItemType[] = [...baseItems];
    segments.forEach((seg, idx) => {
        const href = "/" + segments.slice(0, idx + 1).join("/");
        items.push({
            label: seg.charAt(0).toUpperCase() + seg.slice(1),
            href: idx === segments.length - 1 ? undefined : href,
            isCurrent: idx === segments.length - 1,
        });
    });
    return items;
}, [pathname, baseItems]);
}
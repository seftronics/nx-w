import React from "react";

import {
    Breadcrumb as BreadcrumbComponent,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "./breadcrumb-core";
import type { BreadcrumbItemType, BreadcrumbProps } from "@nx-w/types";

function Breadcrumb({ items }: BreadcrumbProps) {
    const lastIdx = items.length - 1;
    return (
        <BreadcrumbComponent>
            <BreadcrumbList>
                {items.map((breadcrumb: BreadcrumbItemType, breadcrumbIdx: number) => (
                    <React.Fragment key={breadcrumbIdx}>
                        <BreadcrumbItem>
                            {breadcrumb.href && !breadcrumb.isCurrent ? (
                                <BreadcrumbLink
                                    href={breadcrumb.href}
                                    className={
                                        breadcrumbIdx < lastIdx
                                            ? "text-gray-400 pointer-events-none opacity-70"
                                            : ""
                                    }
                                >
                                  <span className="font-medium">{breadcrumb.label}</span>
                                </BreadcrumbLink>
                            ) : (
                                <BreadcrumbPage><span className="font-semibold">{breadcrumb.label}</span></BreadcrumbPage>
                            )}
                        </BreadcrumbItem>
                        {breadcrumbIdx < items.length - 1 && (
                            <BreadcrumbSeparator />
                        )}
                    </React.Fragment>
                ))}
            </BreadcrumbList>
        </BreadcrumbComponent>
    );
}

export { Breadcrumb };
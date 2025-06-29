import ArchitectureClient from "@/components/ArchitectureClient";
import { memo, Suspense } from "react";

const ArchitecturePage = () => {
    return (
        <Suspense>
            <ArchitectureClient />
        </Suspense>
    );
};

export default memo(ArchitecturePage);
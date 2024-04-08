import { useContext } from "react";

// Contexts
import { ToastContext } from "@/app/lib/context/toast";

const useToast = () => useContext(ToastContext);

export { useToast };

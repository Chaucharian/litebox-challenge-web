import { useCallback, useMemo } from "react";

export const useFormController = (initialFields: any, onChange: any) => {
    // Handler to update field values based on the field name and new value
    const onFieldChange = useCallback((value: any, fieldName: string) => {
      onChange(fieldName, value);
    }, []);
  
    // Create field controllers for each field to be passed to the components
    const fieldController = useMemo(() => {
      const controllers: any = {};
  
      Object.keys(initialFields).forEach((fieldName) => {
        controllers[fieldName] = {
          value: initialFields[fieldName].value,
          onChange: (value: any) => onFieldChange(value, fieldName),
          ...initialFields[fieldName], // Spread any additional props (e.g., step, max)
        };
      });
  
      return controllers;
    }, [initialFields, onFieldChange]);
  
    return { fieldController };
  };
  
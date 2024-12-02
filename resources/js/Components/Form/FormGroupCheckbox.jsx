import React from "react";

function FormGroupCheckbox({ data, setData, name, id, title }) {
    return (
        <div className="flex items-center">
            <input
                id={id}
                type="checkbox"
                name={name}
                defaultValue=""
                className="w-4 h-4 text-teal-600 bg-gray-100 border-gray-300 rounded focus:ring-teal-500 dark:focus:ring-teal-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
                htmlFor={id}
                className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
                {title}
            </label>
        </div>
    );
}

export default FormGroupCheckbox;

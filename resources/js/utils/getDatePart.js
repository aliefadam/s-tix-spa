const getDatePart = ($dateString, $type) => {
    if (!$dateString) {
        return null;
    }

    const [year, month, day] = $dateString.split("-");

    switch ($type.toLowerCase()) {
        case "day":
            return day.toString().padStart(2, "0");
        case "month":
            return month.toString().padStart(2, "0");
        case "year":
            return year;
    }
};

export default getDatePart;

import Flag from "@/components/Flag";

export const columns: any[] = [
    {
        accessorKey: "flag",
        header: "",
        cell: ({ row }: any) => {
            return <Flag size={'table'} image={row.original.flag} key={row.name}/>
        },
    },
    {
        accessorKey: "population",
        header: "Population",
    },
    {
        accessorKey: "region",
        header: "Region",
    },
    {
        accessorKey: "capital",
        header: "Capital",
    },
    {
        accessorKey: "name",
        header: "Country",
    },
    {
        accessorKey: "currency",
        header: "Currency",
    },
]
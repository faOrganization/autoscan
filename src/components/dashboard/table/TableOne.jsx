import React from 'react';
import { assets } from '../../../assets/assets'
import { Link } from 'react-router-dom';

const TableOne = () => {
    const reports = [
        {
            name: "Hesabat adı",
            repairTime: "1 gün",
            priceOrginal: "320 AZN",
            priceNotOrginal: "220 AZN",
            reportNumber: "1",
            downloadLink: "#",
        },
        {
            name: "Hesabat adı",
            repairTime: "2 gün",
            priceOrginal: "420 AZN",
            priceNotOrginal: "320 AZN",
            reportNumber: "2",
            downloadLink: "#",
        },
        {
            name: "Hesabat adı",
            repairTime: "4 gün",
            priceOrginal: "320 AZN",
            priceNotOrginal: "220 AZN",
            reportNumber: "3",
            downloadLink: "#",
        },
        {
            name: "Hesabat adı",
            repairTime: "3 gün",
            priceOrginal: "120 AZN",
            priceNotOrginal: "90 AZN",
            reportNumber: "4",
            downloadLink: "#",
        },
        {
            name: "Hesabat adı",
            repairTime: "2 gün",
            priceOrginal: "520 AZN",
            priceNotOrginal: "420 AZN",
            reportNumber: "5",
            downloadLink: "#",
        },
    ];
    return (
        <table className="border-collapse w-full bg-white">
            <thead>
                <tr className="bg-[#F4F7FE] text-xs text-black text-left">
                    <th className="font-semibold px-2 py-3 rounded-tl rounded-bl">
                        Heasbat nömrəsi
                    </th>
                    <th className="font-semibold py-3">Təmir müddəti</th>
                    <th className="font-semibold py-3">Qiymət (Orginal)</th>
                    <th className="font-semibold py-3">Qiymət (Orginal olmayan)</th>
                    <th className="font-semibold py-3 rounded-tr rounded-br w-1/12">
                        Yüklə
                    </th>
                </tr>
            </thead>
            <tbody className="text-xs">
                {reports.map((data, index) => (
                    <tr key={index}>
                        <td className="border-b border-silver px-2 py-2">
                            <div className="flex items-center">
                                <span className="mr-5">{data.reportNumber}</span>
                                <span className="mr-2">
                                    <img src={assets.empty_folder_ic} className="size-6" alt="Folder" />
                                </span>
                                {data.name}
                            </div>
                        </td>
                        <td className="border-b border-silver py-2">
                            {data.repairTime}
                        </td>
                        <td className="border-b border-silver py-2">
                            {data.priceOrginal}
                        </td>
                        <td className="border-b border-silver py-2">
                            {data.priceNotOrginal}
                        </td>
                        <td className="border-b border-silver py-2">
                            <span className="flex">
                                <Link to='report-details' className="inline-block my-auto hover:bg-gray-100 p-2 rounded">
                                    <img src={assets.arrow_down_file_ic} alt="Download" />
                                </Link>
                            </span>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default TableOne
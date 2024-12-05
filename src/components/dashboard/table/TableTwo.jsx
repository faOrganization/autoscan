import React from 'react';
import { assets } from '../../../assets/assets'

const TableTwo = ({data}) => {
    return (
        <table className="border-collapse w-full">
            <thead>
                <tr className="bg-[#F4F7FE] text-xs text-black text-left">
                    <th className="font-semibold px-2 py-3 rounded-tl rounded-bl">
                        Zədə görmüş hissə
                    </th>
                    <th className="font-semibold py-3">Status</th>
                    <th className="font-semibold py-3">Təmir müddəti</th>
                    <th className="font-semibold py-3">Qiymət (Orginal)</th>
                    <th className="font-semibold py-3">Qiymət (Orginal olmayan)</th>
                    <th className="font-semibold py-3">Təmir xərci</th>
                    <th className="font-semibold py-3 rounded-tr rounded-br w-1/12">
                        Linklər
                    </th>
                </tr>
            </thead>
            <tbody className="text-xs">
                {data.map((data, index) => (
                    <tr key={index}>
                        <td className="border-b border-silver pl-2 py-3.5">
                            {data.part}
                        </td>
                        <td className="border-b border-silver py-3.5">
                            <span className={'px-2 text-center rounded-full py-0.5 ' + (data.status ? 'bg-[#FCD9D9]' : 'bg-[#D7E4FF]')}>
                               {data.status}
                                {/* {
                                    data.status ? 'Dəyişdirilməlidir' : 'Təmir edirlməlidir'
                                } */}
                            </span>
                        </td>
                        <td className="border-b border-silver py-3.5">
                            {data.repair_duration_days} gün
                        </td>
                        <td className="border-b border-silver py-3.5">
                            {data.original_part_price_AZN} AZN
                        </td>
                        <td className="border-b border-silver py-3.5">
                            {data.chinese_part_price_AZN} AZN
                        </td>
                        <td className="border-b border-silver py-3.5">
                            {data.repair_cost_AZN} AZN
                        </td>
                        <td className="border-b border-silver py-3.5">
                           <a className='text-primary inline-block truncate w-3/5'  href={data.link}>{data.link}</a>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default TableTwo
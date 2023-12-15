import React from "react"
import "./tableRiwayatUser.css"
import docter from "@/../public/assets/docter.svg"
import Image from "next/image"

const TableRiwayatUser = () => {
  return (
    <>
      <p className="riwayat">Riwayat</p>
      <div className="tableRiwayat overflow-x-auto">
        <table className="table text-center text-white">
          <thead>
            <tr className="text-white">
              <th>Pofile</th>
              <th>Nama Dokter</th>
              <th>Waktu Interaksi</th>
              <th>Kegiatan</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div className="w-10 h-10 bg-slate-400 rounded-full mx-auto overflow-hidden">
                  <Image src={docter} alt="docter" width={0} height={0} />
                </div>
              </td>
              <td>Tegar Setio</td>
              <td>26-10-2023 16:00 WIB</td>
              <td>Konsultasi Online</td>
            </tr>
            <tr>
              <td>
                <div className="w-10 h-10 bg-slate-400 rounded-full mx-auto overflow-hidden">
                  <Image src={docter} alt="docter" width={0} height={0} />
                </div>
              </td>
              <td>Tegar Setio</td>
              <td>26-10-2023 16:00 WIB</td>
              <td>Konsultasi Online</td>
            </tr>
            <tr>
              <td>
                <div className="w-10 h-10 bg-slate-400 rounded-full mx-auto overflow-hidden">
                  <Image src={docter} alt="docter" width={0} height={0} />
                </div>
              </td>
              <td>Tegar Setio</td>
              <td>26-10-2023 16:00 WIB</td>
              <td>Konsultasi Online</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}

export default TableRiwayatUser

"use client";

import { useState, Fragment } from "react";
import styles from "@/component/Warehouse/warehouseTable/WarehouseTable.module.scss";
import { WarehouseItem } from "@/component/Warehouse/warehouse.data";
import RowDetails from "@/component/Warehouse/RowDetails/RowDetails";
import Pagination from "@/component/pagination/Pagination";
import { CiSearch } from "react-icons/ci";
import { LiaSortAmountDownSolid } from "react-icons/lia";
import { IoFilter } from "react-icons/io5";
import { MdOutlineWarehouse } from "react-icons/md";
import { IoIosArrowDown, IoIosArrowBack } from "react-icons/io";
import { WarehouseItemType } from "../types";
import { DateObject } from "react-multi-date-picker";
import dynamic from "next/dynamic";

export default function WarehouseTable() {
  const [search, setSearch] = useState("");
  const [warehouseFilter, setWarehouseFilter] = useState("همه");
  const [expanded, setExpanded] = useState<string | null>(null);
  const [itemsPerPage, setItemsPerPage] = useState<number>(5);
  const [shownItems, setShownItems] = useState<WarehouseItemType[]>(
    WarehouseItem.slice(0, 5)
  );
  const [date, setDate] = useState<DateObject | null>(null);

  const toggleRow = (id: string): void => {
    setExpanded((prev) => (prev === id ? null : id));
  };

  const DatePickerComponent = dynamic(
    () => import("@/component/DatePicker/DatePicker"),
    { ssr: false }
  );

  return (
    <div className={styles.tableWrapper}>
      <div className={styles.header}>
        <MdOutlineWarehouse />
        <p>رسید انبار</p>
      </div>

      <div className={styles.toolbar}>
        <div className={styles.toolbarright}>
          <div className={styles.inputSearch}>
            <button>
              <CiSearch />
            </button>
            <input
              type="text"
              placeholder="جستجو بر اساس شماره رسید انبار ..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <select
            value={warehouseFilter}
            onChange={(e) => setWarehouseFilter(e.target.value)}
            className={styles.option}
          >
            <option value="همه">همه انبارها</option>
            <option value="انبار">انبار</option>
          </select>
          <div className={styles.inputWithIcon}>
            <DatePickerComponent value={date} onChange={setDate} />
          </div>
          <button className={styles.searchBtn}>
            <CiSearch />
          </button>
        </div>
        <div className={styles.toolbarleft}>
          <button className={styles.deletebutton}>پاک کردن</button>
          <button className={styles.filterbutton}>
            <button>
              <IoFilter />
            </button>
            فیلترها
          </button>
          <button className={styles.sortbutton}>
            <LiaSortAmountDownSolid />
          </button>
        </div>
      </div>

      <table className={styles.table}>
        <thead>
          <tr>
            <th>شماره رسید</th>
            <th>تاریخ درخواست</th>
            <th>نام انبار</th>
            <th>عملیات</th>
          </tr>
        </thead>

        <tbody>
          {shownItems.map((row) => (
            <Fragment key={row.id}>
              <tr className={expanded === row.id ? styles.selected : ""}>
                <td className={styles.requestNumdiv}>
                  {expanded === row.id ? (
                    <IoIosArrowDown className={styles.requestNumIcon} />
                  ) : (
                    <IoIosArrowBack className={styles.requestNumIcon} />
                  )}
                  {row.requestNum}
                </td>
                <td>{row.requestDate}</td>
                <td>{row.name}</td>
                <td>
                  <div
                    onClick={() => toggleRow(row.id)}
                    className={styles.expanddiv}
                  >
                    عملیات
                    <button className={styles.expandBtn}>
                      {expanded === row.id ? (
                        <IoIosArrowDown />
                      ) : (
                        <IoIosArrowBack />
                      )}
                    </button>
                  </div>
                </td>
              </tr>

              {expanded === row.id && (
                <RowDetails items={row.items} colspan={5} />
              )}
            </Fragment>
          ))}
        </tbody>
      </table>

      <Pagination
        items={WarehouseItem}
        itemsPerPage={itemsPerPage}
        setItemPerPage={setItemsPerPage}
        setShownItems={setShownItems}
      />
    </div>
  );
}

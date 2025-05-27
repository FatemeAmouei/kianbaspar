"use client";

import styles from "./sidebar.module.scss";
import { LuWarehouse, LuLayoutDashboard } from "react-icons/lu";
import { FaUsers } from "react-icons/fa";
import { FaBasketShopping } from "react-icons/fa6";
import { GrSystem } from "react-icons/gr";
import { MdLogout } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { TbDatabaseDollar } from "react-icons/tb";
import Swal from "sweetalert2";
import Link from "next/link";
import { useRouter } from "next/navigation";
import type { FC } from "react";

const Sidebar: FC = () => {
  const router = useRouter();

  const logoutHandler = (): void => {
    Swal.fire({
      title: "آیا از خروج اطمینان دارید؟",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "بله",
      cancelButtonText: "خیر",
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
    }).then((result) => {
      if (result.isConfirmed) {
        router.push("/login");
      }
    });
  };
  return (
    <aside className={styles.sidebar}>
      <ul className={styles.sidebar_main}>
        <Link href={"/p-user"} className={styles.menuItem}>
          <LuLayoutDashboard />
          داشبورد
          <IoIosArrowDown size={8} />
        </Link>
        <Link href={"/p-user/warehouse"} className={styles.menuItem}>
          <LuWarehouse />
          مدیریت انبار
          <IoIosArrowDown size={8} />
        </Link>
        <Link
          href={"/p-user/shop"}
          className={`${styles.menuItem} ${styles.menuItemActive}`}
        >
          <FaBasketShopping />
          خرید و تدارکات
          <IoIosArrowDown size={8} />
        </Link>
        <Link href={"/p-user/sales"} className={styles.menuItem}>
          <TbDatabaseDollar />
          فروش
          <IoIosArrowDown size={8} className="style.arrow" />
        </Link>
        <Link href={"/p-user/user-management"} className={styles.menuItem}>
          <FaUsers />
          مدیریت کاربران
          <IoIosArrowDown size={8} />
        </Link>
        <Link href={"/p-user/system-management"} className={styles.menuItem}>
          <GrSystem />
          مدیریت سیستم
          <IoIosArrowDown size={8} />
        </Link>
      </ul>
      <div onClick={logoutHandler} className={styles.Footer}>
        <span className={styles.info}>kianbaspar | ERP 2025-2026</span>
        <div className={styles.logout}>
          {" "}
          <MdLogout />
          خروج
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;

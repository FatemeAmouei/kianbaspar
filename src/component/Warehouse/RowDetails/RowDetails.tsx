import { RowProps } from "@/component/Warehouse/types";
import styles from "@/component/Warehouse/RowDetails/RowDetails.module.scss";
import { BiEditAlt } from "react-icons/bi";

export default function RowDetails({ items, colspan }: RowProps) {
  return (
    <tr>
      <td colSpan={colspan}>
        <table className={styles.innerTable}>
          <thead>
            <tr>
              <th>نام کالا</th>
              <th>تعداد رسیده نشده</th>
              <th>تعداد تایید شده</th>
              <th>توضیحات</th>
              <th>وضعیت</th>
              <th>عملیات</th>
            </tr>
          </thead>
          <tbody>
            {items.map((items) => (
              <tr key={items.id}>
                <td>{items.name}</td>
                <td>{items.receivedCount}</td>
                <td>{items.approvedCount}</td>
                <td>{items.description}</td>
                <td>
                  {" "}
                  <span className={styles.status}> تایید نشده</span>
                </td>
                <td>
                  <button
                    className={styles.editBtn}
                    onClick={() => alert("ویرایش جزئیات")}
                  >
                    ویرایش
                    <BiEditAlt />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </td>
    </tr>
  );
}

import Dropdown from '@/components/dropdown';
import React, { useState } from 'react'
import IconXCircle from "@/components/icon/icon-x-circle";
import IconInfoCircle from "@/components/icon/icon-info-circle";
import IconBellBing from "@/components/icon/icon-bell-bing";

type Props = {}

const Notification = (props: Props) => {

    const [notifications, setNotifications] = useState([
      {
        id: 1,
        profile: "user-profile.jpeg",
        message:
          '<strong class="text-sm mr-1">John Doe</strong>invite you to <strong>Prototyping</strong>',
        time: "45 min ago",
      },
      {
        id: 2,
        profile: "profile-34.jpeg",
        message:
          '<strong class="text-sm mr-1">Adam Nolan</strong>mentioned you to <strong>UX Basics</strong>',
        time: "9h Ago",
      },
      {
        id: 3,
        profile: "profile-16.jpeg",
        message:
          '<strong class="text-sm mr-1">Anna Morgan</strong>Upload a file',
        time: "9h Ago",
      },
    ]);

     const removeNotification = (value: number) => {
       setNotifications(notifications.filter((user) => user.id !== value));
     };

  return (
    <div className="dropdown shrink-0">
      <Dropdown
        offset={[0, 8]}
        placement={"bottom-start"}
        btnClassName="relative block p-2 rounded-full bg-white-light/40 dark:bg-dark/40 hover:text-primary hover:bg-white-light/90 dark:hover:bg-dark/60"
        button={
          <span>
            <IconBellBing />
            <span className="absolute top-0 flex h-3 w-3 ltr:right-0 rtl:left-0">
              <span className="absolute -top-[3px] inline-flex h-full w-full animate-ping rounded-full bg-success/50 opacity-75 ltr:-left-[3px] rtl:-right-[3px]"></span>
              <span className="relative inline-flex h-[6px] w-[6px] rounded-full bg-success"></span>
            </span>
          </span>
        }>
        <ul className="w-[300px] divide-y !py-0 text-dark dark:divide-white/10 dark:text-white-dark sm:w-[350px]">
          <li onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between px-4 py-2 font-semibold">
              <h4 className="text-lg">Notification</h4>
              {notifications.length ? (
                <span className="badge bg-primary/80">
                  {notifications.length}New
                </span>
              ) : (
                ""
              )}
            </div>
          </li>
          {notifications.length > 0 ? (
            <>
              {notifications.map((notification) => {
                return (
                  <li
                    key={notification.id}
                    className="dark:text-white-light/90"
                    onClick={(e) => e.stopPropagation()}>
                    <div className="group flex items-center px-4 py-2">
                      <div className="grid place-content-center rounded">
                        <div className="relative h-12 w-12">
                          <img
                            className="h-12 w-12 rounded-full object-cover"
                            alt="profile"
                            src={`/assets/images/${notification.profile}`}
                          />
                          <span className="absolute bottom-0 right-[6px] block h-2 w-2 rounded-full bg-success"></span>
                        </div>
                      </div>
                      <div className="flex flex-auto ltr:pl-3 rtl:pr-3">
                        <div className="ltr:pr-3 rtl:pl-3">
                          <h6
                            dangerouslySetInnerHTML={{
                              __html: notification.message,
                            }}></h6>
                          <span className="block text-xs font-normal dark:text-gray-500">
                            {notification.time}
                          </span>
                        </div>
                        <button
                          type="button"
                          className="text-neutral-300 opacity-0 hover:text-danger group-hover:opacity-100 ltr:ml-auto rtl:mr-auto"
                          onClick={() => removeNotification(notification.id)}>
                          <IconXCircle />
                        </button>
                      </div>
                    </div>
                  </li>
                );
              })}
              <li>
                <div className="p-4">
                  <button className="btn btn-primary btn-small block w-full">
                    Read All Notifications
                  </button>
                </div>
              </li>
            </>
          ) : (
            <li onClick={(e) => e.stopPropagation()}>
              <button
                type="button"
                className="!grid min-h-[200px] place-content-center text-lg hover:!bg-transparent">
                <div className="mx-auto mb-4 rounded-full ring-4 ring-primary/30">
                  <IconInfoCircle
                    fill={true}
                    className="h-10 w-10 text-primary"
                  />
                </div>
                No data available.
              </button>
            </li>
          )}
        </ul>
      </Dropdown>
    </div>
  );
}

export default Notification
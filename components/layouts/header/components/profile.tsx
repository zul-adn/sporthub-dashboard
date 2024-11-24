/* eslint-disable @next/next/no-img-element */
import Dropdown from '@/components/dropdown';
import Link from 'next/link';
import React from 'react'
import IconUser from "@/components/icon/icon-user";
import IconMail from "@/components/icon/icon-mail";
import IconLockDots from "@/components/icon/icon-lock-dots";
import IconLogout from "@/components/icon/icon-logout";
import { useSelector } from 'react-redux';
import { IRootState } from '@/store';
import { clearSession } from '@/utils/auth-session';

type Props = {}

export default function Profile({}: Props) {
   const profile = useSelector((state: IRootState) => state.auth.profile);


  return (
    <div className="dropdown flex shrink-0">
      <Dropdown
        offset={[0, 8]}
        placement={`bottom-start`}
        btnClassName="relative group block"
        button={
          <img
            className="h-9 w-9 rounded-full object-cover saturate-50 group-hover:saturate-100"
            src="/assets/images/user-profile.jpeg"
            alt="userProfile"
          />
        }>
        <ul className="w-[230px] !py-0 font-semibold text-dark dark:text-white-dark dark:text-white-light/90">
          <li>
            <div className="flex items-center px-4 py-4">
              <img
                className="h-10 w-10 rounded-md object-cover"
                src="/assets/images/user-profile.jpeg"
                alt="userProfile"
              />
              <div className="truncate ltr:pl-4 rtl:pr-4">
                <h4 className="text-base">
                  {profile?.name}
                  {/* <span className="rounded bg-success-light px-1 text-xs text-success ltr:ml-2 rtl:ml-2">
                    Pro
                  </span> */}
                </h4>
                <button
                  type="button"
                  className="text-black/60 hover:text-primary dark:text-dark-light/60 dark:hover:text-white">
                  {profile?.email}
                </button>
              </div>
            </div>
          </li>
          <li>
            <Link href="/users/profile" className="dark:hover:text-white">
              <IconUser className="h-4.5 w-4.5 shrink-0 ltr:mr-2 rtl:ml-2" />
              Profile
            </Link>
          </li>
          <li>
            <Link href="/apps/mailbox" className="dark:hover:text-white">
              <IconMail className="h-4.5 w-4.5 shrink-0 ltr:mr-2 rtl:ml-2" />
              Inbox
            </Link>
          </li>
          <li>
            <Link
              href="/auth/boxed-lockscreen"
              className="dark:hover:text-white">
              <IconLockDots className="h-4.5 w-4.5 shrink-0 ltr:mr-2 rtl:ml-2" />
              Lock Screen
            </Link>
          </li>
          <li className="border-t border-white-light dark:border-white-light/10">
            <button className="!py-3 text-danger" onClick={() => clearSession()}>
              <IconLogout className="h-4.5 w-4.5 shrink-0 rotate-90 ltr:mr-2 rtl:ml-2" />
              Sign Out
            </button>
          </li>
        </ul>
      </Dropdown>
    </div>
  );
}
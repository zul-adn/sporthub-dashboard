'use client'

import { useDispatch, useSelector } from 'react-redux';
import { login } from '../lib/auth.slice';
import { AppDispatch, RootState } from '@/store';
import { LoginDatas } from '../type';
import { redirect } from "next/navigation"
import { clearSession } from '@/utils/auth-session';

export function useAuth () {
    const dispatch = useDispatch<AppDispatch>();
    const {authenticated, loading} = useSelector((state: RootState) => state.auth);

    const goLogin = (datas : LoginDatas) => {
        dispatch(login(datas));
    }

    const goLogout = async () => {
        await clearSession();
        redirect("/")
    }

    return {
        goLogin,
        loading,
        authenticated,
        goLogout
    }
}
import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        'nama': "nama",
        'tugas': [{
            'mapel': "Al-Qur'an",
            'murojaah': {
                'surat': "Al-Baqarah",
                'ayat': [28,29]
            },
            'hafalan': {
                'surat': "Al-Baqarah",
                'ayat': [10,20]
            },
           'isReady': false,
            'isSuccess': false
        }]
    }
]

export const dataMurid = createSlice({
    name: "data murid",
    initialState,
    reducers: {
        addUser: (state, {payload}) => {
            state.push(payload)
        },
        setMurojaah: (state, {payload}) => {
            const selectedMurid = state.filter((item) => {
                if(item.nama === payload.nama) return true
            })
            selectedMurid.murojaah = payload.murojaah
        },
        setHafalan: (state, {payload}) => {
            const selectedMurid = state.filter((item) => {
                if(item.nama === payload.nama) return true
            })
            selectedMurid.hafalan = payload.hafalan
        },
        ready: (state, {payload}) => {
            const selectedMurid = state.filter((item) => {
                if(item.nama === payload.nama) return true
            })
            selectedMurid.isReady = true
        },
        succes: (state, {payload}) => {
            const selectedMurid = state.filter((item) => {
                if(item.nama === payload.nama) return true
            })
            selectedMurid.succes = true
        },

    }
})

export const {addUser, setMurojaah, setHafalan, ready, succes} = dataMurid.actions
export default dataMurid.reducer
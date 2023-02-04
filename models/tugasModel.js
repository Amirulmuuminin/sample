import { Schema, model, models } from 'mongoose';

const tugasSchema = new Schema({
    nama: String,
    tugas: [{
            mapel: String,
            murojaah: {
                surat: String,
                ayat: [Number, Number]
            },
            hafalan: {
                surat: String,
                ayat: [Number, Number]
            },
            isReady: Boolean,
            isSuccess: Boolean
    }]
})

const tugasModel = models.Tugas || model("Tugas", tugasSchema)

export default tugasModel
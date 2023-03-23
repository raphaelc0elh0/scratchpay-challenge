import axios, { AxiosInstance } from "axios"
import states from "utils/states"
import { DentalClinic, VetClinic } from "./schema"

export class ClinicsRepository {
  async getVetClinics(){
    const {data: vetClinics} = await this.client.get<VetClinic[]>('/vet-clinics.json')
    return vetClinics.map(({clinicName, stateCode, opening}) => ({name: clinicName, state: states[stateCode], opening}))
  }

  async getDentalClinics(){
    const {data: dentalClinics} = await this.client.get<DentalClinic[]>('/dental-clinics.json')
    return dentalClinics.map(({name, stateName, availability}) => ({name, state: stateName, opening:availability}))
  }

  constructor(){
    this.client = axios.create({
      baseURL: 'https://storage.googleapis.com/scratchpay-code-challenge'
    })
  }

  private client: AxiosInstance
}
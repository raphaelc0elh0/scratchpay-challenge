import axios, { AxiosInstance } from "axios";
import states from "utils/states";
import { DentalClinic, ExternalClinic, VetClinic } from "./schema";

export class ClinicsService {

  async list(filters?: ListFilters){
    let clinics: ExternalClinic[] = []

    if(filters?.type === 'vet'){
      const {data: vetClinics} = await this.client.get<VetClinic[]>('/vet-clinics.json')

      clinics = vetClinics.map(({clinicName, stateCode, opening}) => ({name: clinicName, state: states[stateCode], opening}))
    }

    if(filters?.type === 'dental'){
      const {data: dentalClinics} = await this.client.get<DentalClinic[]>('/dental-clinics.json')

      clinics = dentalClinics.map(({name, stateName, availability}) => ({name, state: stateName, opening:availability}))
    }

    return clinics
  }

  constructor(){
    this.client = axios.create({
      baseURL: 'https://storage.googleapis.com/scratchpay-code-challenge'
    })
  }

  private client: AxiosInstance
}

export type ListFilters = {
  type: 'vet' | 'dental'
}
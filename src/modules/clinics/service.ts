import states from "utils/states";
import { ExternalClinic } from "./schema";
import moment from 'moment'
import { ClinicsRepository } from "./repository";

export class ClinicsService {

  async list({type, name, state, available_at}: ListFilters){
    let clinics: ExternalClinic[] = []

    if(type === 'vet'){
      clinics = await this.repository.getVetClinics()
    }

    if(type === 'dental'){
      clinics = await this.repository.getDentalClinics()
    }

    if(name){
      clinics = clinics.filter(c => c.name.toLowerCase().includes(name.toLowerCase().trim()))
    }
    
    if(state){
      clinics = clinics.filter(c => c.state === states[state])
    }

    if(available_at){
      clinics = clinics.filter(c => {
        return moment(available_at, "HH:mm")
          .isBetween(moment(c.opening.from, "HH:mm"), moment(c.opening.to, "HH:mm"), undefined, "[]")
      })
    }

    return clinics
  }

  constructor(
    private repository = new ClinicsRepository()
  ){}
}

export type ListFilters = {
  type: 'vet' | 'dental'
  name?: string,
  state?: string
  available_at?: string
}
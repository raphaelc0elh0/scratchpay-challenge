export type DentalClinic = {
  name: string,
  stateName: string,
  availability: {
     from: string,
     to: string
  }
}

export type VetClinic = {
  clinicName: string,
  stateCode: string,
  opening:{
     from: string,
     to: string
  }
}

export type ExternalClinic = {
  name: string,
  state: string,
  opening:{
     from: string,
     to: string
  }
}
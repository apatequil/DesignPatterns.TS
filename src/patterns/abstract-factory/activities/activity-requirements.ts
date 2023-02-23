import { terminal } from "../../../lib/ui"

export interface IRequirement {
    description: string
    checkRequirement(): boolean
}

export class AgeRequirement implements IRequirement {
    constructor(public readonly minimumAge: number) { }
    checkRequirement(): boolean {
        const userAge = terminal.prompt<number>('How old are you?')
        return userAge >= this.minimumAge
    }

    description = `You must be ${this.minimumAge} years old for this activity`
}

export class AgeRangeRequirement implements IRequirement {
    constructor(public readonly minimumAge: number, public readonly maximumAge: number) { }
    checkRequirement(): boolean {
        const userAge = terminal.prompt<number>('How old are you?')

        return userAge >= this.minimumAge && userAge <= this.maximumAge
    }

    description = `You must be between ${this.minimumAge} and ${this.maximumAge} years old for this activity`
}

export class StateResidencyRequirement implements IRequirement {
    constructor(public readonly validStates: string[]) { }

    checkRequirement(): boolean {
        const userState = terminal.prompt<string>('Which state do you live in?')

        return this.validStates.includes(userState)
    }
    description = `You must reside in one of the following state(s) ${this.validStates.join(',')} for this activity`
}

export enum LicenseType {
    None = 'None',
    Passenger = 'Passenger',
    Commercial = 'Commercial',
    Aero = 'Aero',
    Scuba = 'Scuba',
}

export class LicenseTypeRequirement implements IRequirement {
    constructor(public readonly requiredLicenseType: LicenseType) { }
    checkRequirement(): boolean {
        const licenseType = terminal.promptWithChoiceSync<string>('What type of license do you have? ', Object.keys(LicenseType))
        return licenseType === this.requiredLicenseType
    }
    description = `You must have a(n) ${LicenseType[this.requiredLicenseType]} license for this activity`
}
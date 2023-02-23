import { terminal } from "../../../lib/ui";
import { ActivityType } from "../activities";
import { AgeRequirement, LicenseTypeRequirement, LicenseType } from "../activities/activity-requirements";
import { DriveCar } from "../activities/drive-car";
import { DriveCommercialTruck } from "../activities/drive-commercial-truck";
import { BaseActivityFactory } from "./base-activity-factory";

export class DriveCommercialTruckFactory extends BaseActivityFactory<DriveCommercialTruck> {

    requirements = [
        new AgeRequirement(18),
        new LicenseTypeRequirement(LicenseType.Commercial)
    ]

    handledActivities: string[] = [
        ActivityType.DriveCommercialTruck
    ]

    createActivity(): DriveCommercialTruck | null {
        if (!this.checkRequirements()) {
            terminal.info('User did not meet requirements for the drive commercial truck activity')
            terminal.info('Requirements:')
            this.printRequirements()

            return null
        }

        return new DriveCommercialTruck()
    }
}
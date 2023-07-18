// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `DATASOURCE::DBS::BackupPlans`
 */
export interface RosBackupPlansProps {

    /**
     * @Property backupPlanId: The ID of the backup schedule.
     */
    readonly backupPlanId?: string | ros.IResolvable;

    /**
     * @Property backupPlanName: The name of the backup schedule.
     */
    readonly backupPlanName?: string | ros.IResolvable;

    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosBackupPlansProps`
 *
 * @param properties - the TypeScript properties of a `RosBackupPlansProps`
 *
 * @returns the result of the validation.
 */
function RosBackupPlansPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('backupPlanName', ros.validateString)(properties.backupPlanName));
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    errors.collect(ros.propertyValidator('backupPlanId', ros.validateString)(properties.backupPlanId));
    return errors.wrap('supplied properties not correct for "RosBackupPlansProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::DBS::BackupPlans` resource
 *
 * @param properties - the TypeScript properties of a `RosBackupPlansProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::DBS::BackupPlans` resource.
 */
// @ts-ignore TS6133
function rosBackupPlansPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosBackupPlansPropsValidator(properties).assertSuccess();
    }
    return {
      BackupPlanId: ros.stringToRosTemplate(properties.backupPlanId),
      BackupPlanName: ros.stringToRosTemplate(properties.backupPlanName),
      ResourceGroupId: ros.stringToRosTemplate(properties.resourceGroupId),
    };
}

/**
 * A ROS template type:  `DATASOURCE::DBS::BackupPlans`
 */
export class RosBackupPlans extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::DBS::BackupPlans";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute BackupPlanIds: The list of backup plan IDs.
     */
    public readonly attrBackupPlanIds: ros.IResolvable;

    /**
     * @Attribute BackupPlans: The list of backup plans.
     */
    public readonly attrBackupPlans: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property backupPlanId: The ID of the backup schedule.
     */
    public backupPlanId: string | ros.IResolvable | undefined;

    /**
     * @Property backupPlanName: The name of the backup schedule.
     */
    public backupPlanName: string | ros.IResolvable | undefined;

    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    public resourceGroupId: string | ros.IResolvable | undefined;

    /**
     * Create a new `DATASOURCE::DBS::BackupPlans`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosBackupPlansProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosBackupPlans.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrBackupPlanIds = this.getAtt('BackupPlanIds');
        this.attrBackupPlans = this.getAtt('BackupPlans');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.backupPlanId = props.backupPlanId;
        this.backupPlanName = props.backupPlanName;
        this.resourceGroupId = props.resourceGroupId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            backupPlanId: this.backupPlanId,
            backupPlanName: this.backupPlanName,
            resourceGroupId: this.resourceGroupId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosBackupPlansPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

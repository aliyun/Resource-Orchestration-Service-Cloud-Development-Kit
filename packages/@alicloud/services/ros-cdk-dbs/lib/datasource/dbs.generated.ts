// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `RosBackupPlans`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-dbs-backupplans
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
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;

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
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
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
      RefreshOptions: ros.stringToRosTemplate(properties.refreshOptions),
      ResourceGroupId: ros.stringToRosTemplate(properties.resourceGroupId),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::DBS::BackupPlans`, which is used to query the information about backup schedules.
 * @Note This class does not contain additional functions, so it is recommended to use the `BackupPlans` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-dbs-backupplans
 */
export class RosBackupPlans extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::DBS::BackupPlans";

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
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    public refreshOptions: string | ros.IResolvable | undefined;

    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    public resourceGroupId: string | ros.IResolvable | undefined;

    /**
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
        this.refreshOptions = props.refreshOptions;
        this.resourceGroupId = props.resourceGroupId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            backupPlanId: this.backupPlanId,
            backupPlanName: this.backupPlanName,
            refreshOptions: this.refreshOptions,
            resourceGroupId: this.resourceGroupId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosBackupPlansPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

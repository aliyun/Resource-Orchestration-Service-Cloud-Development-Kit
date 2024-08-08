// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `RosMigrationInstances`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-dts-migrationinstances
 */
export interface RosMigrationInstancesProps {

    /**
     * @Property dtsInstanceId: Synchronization instance ID.
     */
    readonly dtsInstanceId?: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosMigrationInstancesProps`
 *
 * @param properties - the TypeScript properties of a `RosMigrationInstancesProps`
 *
 * @returns the result of the validation.
 */
function RosMigrationInstancesPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('dtsInstanceId', ros.validateString)(properties.dtsInstanceId));
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    return errors.wrap('supplied properties not correct for "RosMigrationInstancesProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::DTS::MigrationInstances` resource
 *
 * @param properties - the TypeScript properties of a `RosMigrationInstancesProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::DTS::MigrationInstances` resource.
 */
// @ts-ignore TS6133
function rosMigrationInstancesPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosMigrationInstancesPropsValidator(properties).assertSuccess();
    }
    return {
      DtsInstanceId: ros.stringToRosTemplate(properties.dtsInstanceId),
      RefreshOptions: ros.stringToRosTemplate(properties.refreshOptions),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::DTS::MigrationInstances`, which is used to query information about Data Transmission Service (DTS) tasks.
 * @Note This class does not contain additional functions, so it is recommended to use the `MigrationInstances` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-dts-migrationinstances
 */
export class RosMigrationInstances extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::DTS::MigrationInstances";

    /**
     * @Attribute DtsInstanceIds: The list of dts instance IDs.
     */
    public readonly attrDtsInstanceIds: ros.IResolvable;

    /**
     * @Attribute MigrationInstances: The list of migration instances.
     */
    public readonly attrMigrationInstances: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property dtsInstanceId: Synchronization instance ID.
     */
    public dtsInstanceId: string | ros.IResolvable | undefined;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    public refreshOptions: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosMigrationInstancesProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosMigrationInstances.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrDtsInstanceIds = this.getAtt('DtsInstanceIds');
        this.attrMigrationInstances = this.getAtt('MigrationInstances');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.dtsInstanceId = props.dtsInstanceId;
        this.refreshOptions = props.refreshOptions;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            dtsInstanceId: this.dtsInstanceId,
            refreshOptions: this.refreshOptions,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosMigrationInstancesPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

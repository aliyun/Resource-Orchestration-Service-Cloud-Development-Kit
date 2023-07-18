// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `DATASOURCE::DRDS::Accounts`
 */
export interface RosAccountsProps {

    /**
     * @Property instanceId: The ID of the PolarDB-X 1.0 instance.
     */
    readonly instanceId?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosAccountsProps`
 *
 * @param properties - the TypeScript properties of a `RosAccountsProps`
 *
 * @returns the result of the validation.
 */
function RosAccountsPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('instanceId', ros.validateString)(properties.instanceId));
    return errors.wrap('supplied properties not correct for "RosAccountsProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::DRDS::Accounts` resource
 *
 * @param properties - the TypeScript properties of a `RosAccountsProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::DRDS::Accounts` resource.
 */
// @ts-ignore TS6133
function rosAccountsPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosAccountsPropsValidator(properties).assertSuccess();
    }
    return {
      InstanceId: ros.stringToRosTemplate(properties.instanceId),
    };
}

/**
 * A ROS template type:  `DATASOURCE::DRDS::Accounts`
 */
export class RosAccounts extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::DRDS::Accounts";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute Accounts: Indicates the information about the instance accounts.
     */
    public readonly attrAccounts: ros.IResolvable;

    /**
     * @Attribute DrdsAccountNames: Indicates the username of an instance accounts.
     */
    public readonly attrDrdsAccountNames: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property instanceId: The ID of the PolarDB-X 1.0 instance.
     */
    public instanceId: string | ros.IResolvable | undefined;

    /**
     * Create a new `DATASOURCE::DRDS::Accounts`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosAccountsProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosAccounts.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrAccounts = this.getAtt('Accounts');
        this.attrDrdsAccountNames = this.getAtt('DrdsAccountNames');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.instanceId = props.instanceId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            instanceId: this.instanceId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosAccountsPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `DATASOURCE::DRDS::DrdsDBs`
 */
export interface RosDrdsDBsProps {

    /**
     * @Property instanceId: Drds Instance ID.
     */
    readonly instanceId: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosDrdsDBsProps`
 *
 * @param properties - the TypeScript properties of a `RosDrdsDBsProps`
 *
 * @returns the result of the validation.
 */
function RosDrdsDBsPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('instanceId', ros.requiredValidator)(properties.instanceId));
    errors.collect(ros.propertyValidator('instanceId', ros.validateString)(properties.instanceId));
    return errors.wrap('supplied properties not correct for "RosDrdsDBsProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::DRDS::DrdsDBs` resource
 *
 * @param properties - the TypeScript properties of a `RosDrdsDBsProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::DRDS::DrdsDBs` resource.
 */
// @ts-ignore TS6133
function rosDrdsDBsPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosDrdsDBsPropsValidator(properties).assertSuccess();
    }
    return {
      InstanceId: ros.stringToRosTemplate(properties.instanceId),
    };
}

/**
 * A ROS template type:  `DATASOURCE::DRDS::DrdsDBs`
 */
export class RosDrdsDBs extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::DRDS::DrdsDBs";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute Databases: The list of drds databases.
     */
    public readonly attrDatabases: ros.IResolvable;

    /**
     * @Attribute DrdsDatabaseNames: The list of drds database names.
     */
    public readonly attrDrdsDatabaseNames: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property instanceId: Drds Instance ID.
     */
    public instanceId: string | ros.IResolvable;

    /**
     * Create a new `DATASOURCE::DRDS::DrdsDBs`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDrdsDBsProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosDrdsDBs.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrDatabases = this.getAtt('Databases');
        this.attrDrdsDatabaseNames = this.getAtt('DrdsDatabaseNames');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.instanceId = props.instanceId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            instanceId: this.instanceId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosDrdsDBsPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `DATASOURCE::DRDS::DrdsInstances`
 */
export interface RosDrdsInstancesProps {

    /**
     * @Property description: Example description.
     */
    readonly description?: string | ros.IResolvable;

    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;

    /**
     * @Property type: Instance type. 
     * Enumeration Value: 
     * 1: PRIVATE 
     * 0: PUBLIC
     */
    readonly type?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosDrdsInstancesProps`
 *
 * @param properties - the TypeScript properties of a `RosDrdsInstancesProps`
 *
 * @returns the result of the validation.
 */
function RosDrdsInstancesPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.type && (typeof properties.type) !== 'object') {
        errors.collect(ros.propertyValidator('type', ros.validateAllowedValues)({
          data: properties.type,
          allowedValues: ["0","1"],
        }));
    }
    errors.collect(ros.propertyValidator('type', ros.validateString)(properties.type));
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    return errors.wrap('supplied properties not correct for "RosDrdsInstancesProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::DRDS::DrdsInstances` resource
 *
 * @param properties - the TypeScript properties of a `RosDrdsInstancesProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::DRDS::DrdsInstances` resource.
 */
// @ts-ignore TS6133
function rosDrdsInstancesPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosDrdsInstancesPropsValidator(properties).assertSuccess();
    }
    return {
      Description: ros.stringToRosTemplate(properties.description),
      ResourceGroupId: ros.stringToRosTemplate(properties.resourceGroupId),
      Type: ros.stringToRosTemplate(properties.type),
    };
}

/**
 * A ROS template type:  `DATASOURCE::DRDS::DrdsInstances`
 */
export class RosDrdsInstances extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::DRDS::DrdsInstances";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute InstanceIds: The list of drds instance IDs.
     */
    public readonly attrInstanceIds: ros.IResolvable;

    /**
     * @Attribute Instances: The list of drds instances.
     */
    public readonly attrInstances: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property description: Example description.
     */
    public description: string | ros.IResolvable | undefined;

    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    public resourceGroupId: string | ros.IResolvable | undefined;

    /**
     * @Property type: Instance type. 
     * Enumeration Value: 
     * 1: PRIVATE 
     * 0: PUBLIC
     */
    public type: string | ros.IResolvable | undefined;

    /**
     * Create a new `DATASOURCE::DRDS::DrdsInstances`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDrdsInstancesProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosDrdsInstances.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrInstanceIds = this.getAtt('InstanceIds');
        this.attrInstances = this.getAtt('Instances');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.description = props.description;
        this.resourceGroupId = props.resourceGroupId;
        this.type = props.type;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            description: this.description,
            resourceGroupId: this.resourceGroupId,
            type: this.type,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosDrdsInstancesPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

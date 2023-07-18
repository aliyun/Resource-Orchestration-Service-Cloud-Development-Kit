// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `DATASOURCE::GraphDatabase::Accounts`
 */
export interface RosAccountsProps {

    /**
     * @Property dbInstanceId: Instance Id.
     */
    readonly dbInstanceId: string | ros.IResolvable;

    /**
     * @Property accountName: Account name.
     */
    readonly accountName?: string | ros.IResolvable;
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
    errors.collect(ros.propertyValidator('dbInstanceId', ros.requiredValidator)(properties.dbInstanceId));
    errors.collect(ros.propertyValidator('dbInstanceId', ros.validateString)(properties.dbInstanceId));
    errors.collect(ros.propertyValidator('accountName', ros.validateString)(properties.accountName));
    return errors.wrap('supplied properties not correct for "RosAccountsProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::GraphDatabase::Accounts` resource
 *
 * @param properties - the TypeScript properties of a `RosAccountsProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::GraphDatabase::Accounts` resource.
 */
// @ts-ignore TS6133
function rosAccountsPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosAccountsPropsValidator(properties).assertSuccess();
    }
    return {
      DbInstanceId: ros.stringToRosTemplate(properties.dbInstanceId),
      AccountName: ros.stringToRosTemplate(properties.accountName),
    };
}

/**
 * A ROS template type:  `DATASOURCE::GraphDatabase::Accounts`
 */
export class RosAccounts extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::GraphDatabase::Accounts";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute AccountNames: The list of account names.
     */
    public readonly attrAccountNames: ros.IResolvable;

    /**
     * @Attribute Accounts: The list of accounts.
     */
    public readonly attrAccounts: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property dbInstanceId: Instance Id.
     */
    public dbInstanceId: string | ros.IResolvable;

    /**
     * @Property accountName: Account name.
     */
    public accountName: string | ros.IResolvable | undefined;

    /**
     * Create a new `DATASOURCE::GraphDatabase::Accounts`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosAccountsProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosAccounts.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrAccountNames = this.getAtt('AccountNames');
        this.attrAccounts = this.getAtt('Accounts');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.dbInstanceId = props.dbInstanceId;
        this.accountName = props.accountName;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            dbInstanceId: this.dbInstanceId,
            accountName: this.accountName,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosAccountsPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `DATASOURCE::GraphDatabase::DbInstances`
 */
export interface RosDbInstancesProps {

    /**
     * @Property dbInstanceDescription: According to the practical example or notes.
     */
    readonly dbInstanceDescription?: string | ros.IResolvable;

    /**
     * @Property dbInstanceId: The first ID of the resource.
     */
    readonly dbInstanceId?: string | ros.IResolvable;

    /**
     * @Property resourceGroupId: Resource Group ID.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosDbInstancesProps`
 *
 * @param properties - the TypeScript properties of a `RosDbInstancesProps`
 *
 * @returns the result of the validation.
 */
function RosDbInstancesPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    errors.collect(ros.propertyValidator('dbInstanceDescription', ros.validateString)(properties.dbInstanceDescription));
    errors.collect(ros.propertyValidator('dbInstanceId', ros.validateString)(properties.dbInstanceId));
    return errors.wrap('supplied properties not correct for "RosDbInstancesProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::GraphDatabase::DbInstances` resource
 *
 * @param properties - the TypeScript properties of a `RosDbInstancesProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::GraphDatabase::DbInstances` resource.
 */
// @ts-ignore TS6133
function rosDbInstancesPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosDbInstancesPropsValidator(properties).assertSuccess();
    }
    return {
      DbInstanceDescription: ros.stringToRosTemplate(properties.dbInstanceDescription),
      DbInstanceId: ros.stringToRosTemplate(properties.dbInstanceId),
      ResourceGroupId: ros.stringToRosTemplate(properties.resourceGroupId),
    };
}

/**
 * A ROS template type:  `DATASOURCE::GraphDatabase::DbInstances`
 */
export class RosDbInstances extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::GraphDatabase::DbInstances";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute DbInstanceIds: The list of db instance IDs.
     */
    public readonly attrDbInstanceIds: ros.IResolvable;

    /**
     * @Attribute DbInstances: The list of db instances.
     */
    public readonly attrDbInstances: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property dbInstanceDescription: According to the practical example or notes.
     */
    public dbInstanceDescription: string | ros.IResolvable | undefined;

    /**
     * @Property dbInstanceId: The first ID of the resource.
     */
    public dbInstanceId: string | ros.IResolvable | undefined;

    /**
     * @Property resourceGroupId: Resource Group ID.
     */
    public resourceGroupId: string | ros.IResolvable | undefined;

    /**
     * Create a new `DATASOURCE::GraphDatabase::DbInstances`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDbInstancesProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosDbInstances.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrDbInstanceIds = this.getAtt('DbInstanceIds');
        this.attrDbInstances = this.getAtt('DbInstances');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.dbInstanceDescription = props.dbInstanceDescription;
        this.dbInstanceId = props.dbInstanceId;
        this.resourceGroupId = props.resourceGroupId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            dbInstanceDescription: this.dbInstanceDescription,
            dbInstanceId: this.dbInstanceId,
            resourceGroupId: this.resourceGroupId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosDbInstancesPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

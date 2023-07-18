// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `DATASOURCE::MONGODB::InstanceClasses`
 */
export interface RosInstanceClassesProps {

    /**
     * @Property dbType: The database engine type of the instance.
     * normal: replica set instance
     * sharding: sharded cluster instance
     */
    readonly dbType?: string | ros.IResolvable;

    /**
     * @Property instanceChargeType: The billing method of the instance. Default value: PostPaid. Valid values:
     * PrePaid: subscription
     * PostPaid: pay-as-you-go
     */
    readonly instanceChargeType?: string | ros.IResolvable;

    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;

    /**
     * @Property zoneId: The zone ID of the instance. You can call the DescribeRegions operation to query the most recent zone list.
     */
    readonly zoneId?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosInstanceClassesProps`
 *
 * @param properties - the TypeScript properties of a `RosInstanceClassesProps`
 *
 * @returns the result of the validation.
 */
function RosInstanceClassesPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    errors.collect(ros.propertyValidator('zoneId', ros.validateString)(properties.zoneId));
    errors.collect(ros.propertyValidator('instanceChargeType', ros.validateString)(properties.instanceChargeType));
    errors.collect(ros.propertyValidator('dbType', ros.validateString)(properties.dbType));
    return errors.wrap('supplied properties not correct for "RosInstanceClassesProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::MONGODB::InstanceClasses` resource
 *
 * @param properties - the TypeScript properties of a `RosInstanceClassesProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::MONGODB::InstanceClasses` resource.
 */
// @ts-ignore TS6133
function rosInstanceClassesPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosInstanceClassesPropsValidator(properties).assertSuccess();
    }
    return {
      DbType: ros.stringToRosTemplate(properties.dbType),
      InstanceChargeType: ros.stringToRosTemplate(properties.instanceChargeType),
      ResourceGroupId: ros.stringToRosTemplate(properties.resourceGroupId),
      ZoneId: ros.stringToRosTemplate(properties.zoneId),
    };
}

/**
 * A ROS template type:  `DATASOURCE::MONGODB::InstanceClasses`
 */
export class RosInstanceClasses extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::MONGODB::InstanceClasses";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute InstanceClassIds: The list of The instance class Ids.
     */
    public readonly attrInstanceClassIds: ros.IResolvable;

    /**
     * @Attribute InstanceClasses: The list of The instance classes.
     */
    public readonly attrInstanceClasses: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property dbType: The database engine type of the instance.
     * normal: replica set instance
     * sharding: sharded cluster instance
     */
    public dbType: string | ros.IResolvable | undefined;

    /**
     * @Property instanceChargeType: The billing method of the instance. Default value: PostPaid. Valid values:
     * PrePaid: subscription
     * PostPaid: pay-as-you-go
     */
    public instanceChargeType: string | ros.IResolvable | undefined;

    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    public resourceGroupId: string | ros.IResolvable | undefined;

    /**
     * @Property zoneId: The zone ID of the instance. You can call the DescribeRegions operation to query the most recent zone list.
     */
    public zoneId: string | ros.IResolvable | undefined;

    /**
     * Create a new `DATASOURCE::MONGODB::InstanceClasses`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosInstanceClassesProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosInstanceClasses.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrInstanceClassIds = this.getAtt('InstanceClassIds');
        this.attrInstanceClasses = this.getAtt('InstanceClasses');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.dbType = props.dbType;
        this.instanceChargeType = props.instanceChargeType;
        this.resourceGroupId = props.resourceGroupId;
        this.zoneId = props.zoneId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            dbType: this.dbType,
            instanceChargeType: this.instanceChargeType,
            resourceGroupId: this.resourceGroupId,
            zoneId: this.zoneId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosInstanceClassesPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `DATASOURCE::MONGODB::Instances`
 */
export interface RosInstancesProps {

    /**
     * @Property chargeType: The billing method of the instance. Valid values:
     * PostPaid: pay-as-you-go
     * PrePaid: subscription
     */
    readonly chargeType?: string | ros.IResolvable;

    /**
     * @Property connectionDomain: The endpoint of the node. You can call the DescribeDBInstanceAttribute operation to query the endpoint of the node.
     */
    readonly connectionDomain?: string | ros.IResolvable;

    /**
     * @Property dbInstanceClass: The instance type. For more information about valid values, see Instance types.
     */
    readonly dbInstanceClass?: string | ros.IResolvable;

    /**
     * @Property dbInstanceDescription: The description of the instance.
     */
    readonly dbInstanceDescription?: string | ros.IResolvable;

    /**
     * @Property dbInstanceId: The ID of the instance.
     */
    readonly dbInstanceId?: string | ros.IResolvable;

    /**
     * @Property dbInstanceStatus: The state of the instance. For more information about valid values, see Instance states.
     */
    readonly dbInstanceStatus?: string | ros.IResolvable;

    /**
     * @Property dbInstanceType: The category of the instance. Default value: replicate. Valid values:
     * sharding: sharded cluster instance
     * replicate: replica set or standalone instance
     * Note
     * To query the list of sharded cluster instances, you must set the parameter to sharding.
     * This operation displays the list of replica set and standalone instances when the parameter uses the default value replicate.
     */
    readonly dbInstanceType?: string | ros.IResolvable;

    /**
     * @Property engineVersion: The database engine version of the instance. Valid values:
     * 5.0
     * 4.4
     * 4.2
     * 4.0
     * 3.4
     */
    readonly engineVersion?: string | ros.IResolvable;

    /**
     * @Property expired: Specifies whether the instance expires. Valid values:
     * true: The instance expires.
     * false: The instance does not expire.
     */
    readonly expired?: boolean | ros.IResolvable;

    /**
     * @Property networkType: The network type of the instance. Valid values:
     * Classic
     * Vpc
     */
    readonly networkType?: string | ros.IResolvable;

    /**
     * @Property replicationFactor: The number of nodes in a replica set instance. Valid values: 3, 5, and 7.
     */
    readonly replicationFactor?: string | ros.IResolvable;

    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;

    /**
     * @Property tags: Tags of instance.
     */
    readonly tags?: RosInstances.TagsProperty[];

    /**
     * @Property vpcId: The VPC ID of the instance.
     */
    readonly vpcId?: string | ros.IResolvable;

    /**
     * @Property vSwitchId: The vSwitch ID of the instance.
     */
    readonly vSwitchId?: string | ros.IResolvable;

    /**
     * @Property zoneId: The zone ID of the instance. You can call the DescribeRegions operation to query the most recent zone list.
     */
    readonly zoneId?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosInstancesProps`
 *
 * @param properties - the TypeScript properties of a `RosInstancesProps`
 *
 * @returns the result of the validation.
 */
function RosInstancesPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('engineVersion', ros.validateString)(properties.engineVersion));
    errors.collect(ros.propertyValidator('replicationFactor', ros.validateString)(properties.replicationFactor));
    errors.collect(ros.propertyValidator('dbInstanceStatus', ros.validateString)(properties.dbInstanceStatus));
    errors.collect(ros.propertyValidator('zoneId', ros.validateString)(properties.zoneId));
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    errors.collect(ros.propertyValidator('dbInstanceClass', ros.validateString)(properties.dbInstanceClass));
    errors.collect(ros.propertyValidator('vSwitchId', ros.validateString)(properties.vSwitchId));
    errors.collect(ros.propertyValidator('dbInstanceType', ros.validateString)(properties.dbInstanceType));
    errors.collect(ros.propertyValidator('expired', ros.validateBoolean)(properties.expired));
    errors.collect(ros.propertyValidator('connectionDomain', ros.validateString)(properties.connectionDomain));
    errors.collect(ros.propertyValidator('vpcId', ros.validateString)(properties.vpcId));
    errors.collect(ros.propertyValidator('dbInstanceId', ros.validateString)(properties.dbInstanceId));
    errors.collect(ros.propertyValidator('chargeType', ros.validateString)(properties.chargeType));
    errors.collect(ros.propertyValidator('networkType', ros.validateString)(properties.networkType));
    errors.collect(ros.propertyValidator('dbInstanceDescription', ros.validateString)(properties.dbInstanceDescription));
    if(properties.tags && (Array.isArray(properties.tags) || (typeof properties.tags) === 'string')) {
        errors.collect(ros.propertyValidator('tags', ros.validateLength)({
            data: properties.tags.length,
            min: undefined,
            max: 20,
          }));
    }
    errors.collect(ros.propertyValidator('tags', ros.listValidator(RosInstances_TagsPropertyValidator))(properties.tags));
    return errors.wrap('supplied properties not correct for "RosInstancesProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::MONGODB::Instances` resource
 *
 * @param properties - the TypeScript properties of a `RosInstancesProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::MONGODB::Instances` resource.
 */
// @ts-ignore TS6133
function rosInstancesPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosInstancesPropsValidator(properties).assertSuccess();
    }
    return {
      ChargeType: ros.stringToRosTemplate(properties.chargeType),
      ConnectionDomain: ros.stringToRosTemplate(properties.connectionDomain),
      DBInstanceClass: ros.stringToRosTemplate(properties.dbInstanceClass),
      DBInstanceDescription: ros.stringToRosTemplate(properties.dbInstanceDescription),
      DBInstanceId: ros.stringToRosTemplate(properties.dbInstanceId),
      DBInstanceStatus: ros.stringToRosTemplate(properties.dbInstanceStatus),
      DBInstanceType: ros.stringToRosTemplate(properties.dbInstanceType),
      EngineVersion: ros.stringToRosTemplate(properties.engineVersion),
      Expired: ros.booleanToRosTemplate(properties.expired),
      NetworkType: ros.stringToRosTemplate(properties.networkType),
      ReplicationFactor: ros.stringToRosTemplate(properties.replicationFactor),
      ResourceGroupId: ros.stringToRosTemplate(properties.resourceGroupId),
      Tags: ros.listMapper(rosInstancesTagsPropertyToRosTemplate)(properties.tags),
      VpcId: ros.stringToRosTemplate(properties.vpcId),
      VSwitchId: ros.stringToRosTemplate(properties.vSwitchId),
      ZoneId: ros.stringToRosTemplate(properties.zoneId),
    };
}

/**
 * A ROS template type:  `DATASOURCE::MONGODB::Instances`
 */
export class RosInstances extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::MONGODB::Instances";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute InstanceIds: The list of The instance Ids.
     */
    public readonly attrInstanceIds: ros.IResolvable;

    /**
     * @Attribute Instances: The list of The instances.
     */
    public readonly attrInstances: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property chargeType: The billing method of the instance. Valid values:
     * PostPaid: pay-as-you-go
     * PrePaid: subscription
     */
    public chargeType: string | ros.IResolvable | undefined;

    /**
     * @Property connectionDomain: The endpoint of the node. You can call the DescribeDBInstanceAttribute operation to query the endpoint of the node.
     */
    public connectionDomain: string | ros.IResolvable | undefined;

    /**
     * @Property dbInstanceClass: The instance type. For more information about valid values, see Instance types.
     */
    public dbInstanceClass: string | ros.IResolvable | undefined;

    /**
     * @Property dbInstanceDescription: The description of the instance.
     */
    public dbInstanceDescription: string | ros.IResolvable | undefined;

    /**
     * @Property dbInstanceId: The ID of the instance.
     */
    public dbInstanceId: string | ros.IResolvable | undefined;

    /**
     * @Property dbInstanceStatus: The state of the instance. For more information about valid values, see Instance states.
     */
    public dbInstanceStatus: string | ros.IResolvable | undefined;

    /**
     * @Property dbInstanceType: The category of the instance. Default value: replicate. Valid values:
     * sharding: sharded cluster instance
     * replicate: replica set or standalone instance
     * Note
     * To query the list of sharded cluster instances, you must set the parameter to sharding.
     * This operation displays the list of replica set and standalone instances when the parameter uses the default value replicate.
     */
    public dbInstanceType: string | ros.IResolvable | undefined;

    /**
     * @Property engineVersion: The database engine version of the instance. Valid values:
     * 5.0
     * 4.4
     * 4.2
     * 4.0
     * 3.4
     */
    public engineVersion: string | ros.IResolvable | undefined;

    /**
     * @Property expired: Specifies whether the instance expires. Valid values:
     * true: The instance expires.
     * false: The instance does not expire.
     */
    public expired: boolean | ros.IResolvable | undefined;

    /**
     * @Property networkType: The network type of the instance. Valid values:
     * Classic
     * Vpc
     */
    public networkType: string | ros.IResolvable | undefined;

    /**
     * @Property replicationFactor: The number of nodes in a replica set instance. Valid values: 3, 5, and 7.
     */
    public replicationFactor: string | ros.IResolvable | undefined;

    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    public resourceGroupId: string | ros.IResolvable | undefined;

    /**
     * @Property tags: Tags of instance.
     */
    public tags: RosInstances.TagsProperty[] | undefined;

    /**
     * @Property vpcId: The VPC ID of the instance.
     */
    public vpcId: string | ros.IResolvable | undefined;

    /**
     * @Property vSwitchId: The vSwitch ID of the instance.
     */
    public vSwitchId: string | ros.IResolvable | undefined;

    /**
     * @Property zoneId: The zone ID of the instance. You can call the DescribeRegions operation to query the most recent zone list.
     */
    public zoneId: string | ros.IResolvable | undefined;

    /**
     * Create a new `DATASOURCE::MONGODB::Instances`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosInstancesProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosInstances.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrInstanceIds = this.getAtt('InstanceIds');
        this.attrInstances = this.getAtt('Instances');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.chargeType = props.chargeType;
        this.connectionDomain = props.connectionDomain;
        this.dbInstanceClass = props.dbInstanceClass;
        this.dbInstanceDescription = props.dbInstanceDescription;
        this.dbInstanceId = props.dbInstanceId;
        this.dbInstanceStatus = props.dbInstanceStatus;
        this.dbInstanceType = props.dbInstanceType;
        this.engineVersion = props.engineVersion;
        this.expired = props.expired;
        this.networkType = props.networkType;
        this.replicationFactor = props.replicationFactor;
        this.resourceGroupId = props.resourceGroupId;
        this.tags = props.tags;
        this.vpcId = props.vpcId;
        this.vSwitchId = props.vSwitchId;
        this.zoneId = props.zoneId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            chargeType: this.chargeType,
            connectionDomain: this.connectionDomain,
            dbInstanceClass: this.dbInstanceClass,
            dbInstanceDescription: this.dbInstanceDescription,
            dbInstanceId: this.dbInstanceId,
            dbInstanceStatus: this.dbInstanceStatus,
            dbInstanceType: this.dbInstanceType,
            engineVersion: this.engineVersion,
            expired: this.expired,
            networkType: this.networkType,
            replicationFactor: this.replicationFactor,
            resourceGroupId: this.resourceGroupId,
            tags: this.tags,
            vpcId: this.vpcId,
            vSwitchId: this.vSwitchId,
            zoneId: this.zoneId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosInstancesPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosInstances {
    /**
     * @stability external
     */
    export interface TagsProperty {
        /**
         * @Property value: undefined
         */
        readonly value?: string | ros.IResolvable;
        /**
         * @Property key: undefined
         */
        readonly key: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `TagsProperty`
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the result of the validation.
 */
function RosInstances_TagsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('value', ros.validateString)(properties.value));
    errors.collect(ros.propertyValidator('key', ros.requiredValidator)(properties.key));
    errors.collect(ros.propertyValidator('key', ros.validateString)(properties.key));
    return errors.wrap('supplied properties not correct for "TagsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::MONGODB::Instances.Tags` resource
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::MONGODB::Instances.Tags` resource.
 */
// @ts-ignore TS6133
function rosInstancesTagsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosInstances_TagsPropertyValidator(properties).assertSuccess();
    return {
      Value: ros.stringToRosTemplate(properties.value),
      Key: ros.stringToRosTemplate(properties.key),
    };
}

// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `DATASOURCE::ROCKETMQ::Groups`
 */
export interface RosGroupsProps {

    /**
     * @Property groupName: GroupName
     */
    readonly groupName?: string | ros.IResolvable;

    /**
     * @Property groupType: GroupType
     */
    readonly groupType?: string | ros.IResolvable;

    /**
     * @Property instanceId: InstanceId
     */
    readonly instanceId?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosGroupsProps`
 *
 * @param properties - the TypeScript properties of a `RosGroupsProps`
 *
 * @returns the result of the validation.
 */
function RosGroupsPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('groupName', ros.validateString)(properties.groupName));
    if(properties.groupType && (typeof properties.groupType) !== 'object') {
        errors.collect(ros.propertyValidator('groupType', ros.validateAllowedValues)({
          data: properties.groupType,
          allowedValues: ["tcp","http"],
        }));
    }
    errors.collect(ros.propertyValidator('groupType', ros.validateString)(properties.groupType));
    errors.collect(ros.propertyValidator('instanceId', ros.validateString)(properties.instanceId));
    return errors.wrap('supplied properties not correct for "RosGroupsProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::ROCKETMQ::Groups` resource
 *
 * @param properties - the TypeScript properties of a `RosGroupsProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::ROCKETMQ::Groups` resource.
 */
// @ts-ignore TS6133
function rosGroupsPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosGroupsPropsValidator(properties).assertSuccess();
    }
    return {
      GroupName: ros.stringToRosTemplate(properties.groupName),
      GroupType: ros.stringToRosTemplate(properties.groupType),
      InstanceId: ros.stringToRosTemplate(properties.instanceId),
    };
}

/**
 * A ROS template type:  `DATASOURCE::ROCKETMQ::Groups`
 */
export class RosGroups extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::ROCKETMQ::Groups";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute GroupNames: The list of group names.
     */
    public readonly attrGroupNames: ros.IResolvable;

    /**
     * @Attribute Groups: The list of groups.
     */
    public readonly attrGroups: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property groupName: GroupName
     */
    public groupName: string | ros.IResolvable | undefined;

    /**
     * @Property groupType: GroupType
     */
    public groupType: string | ros.IResolvable | undefined;

    /**
     * @Property instanceId: InstanceId
     */
    public instanceId: string | ros.IResolvable | undefined;

    /**
     * Create a new `DATASOURCE::ROCKETMQ::Groups`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosGroupsProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosGroups.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrGroupNames = this.getAtt('GroupNames');
        this.attrGroups = this.getAtt('Groups');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.groupName = props.groupName;
        this.groupType = props.groupType;
        this.instanceId = props.instanceId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            groupName: this.groupName,
            groupType: this.groupType,
            instanceId: this.instanceId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosGroupsPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `DATASOURCE::ROCKETMQ::Instances`
 */
export interface RosInstancesProps {
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
    return errors.wrap('supplied properties not correct for "RosInstancesProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::ROCKETMQ::Instances` resource
 *
 * @param properties - the TypeScript properties of a `RosInstancesProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::ROCKETMQ::Instances` resource.
 */
// @ts-ignore TS6133
function rosInstancesPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosInstancesPropsValidator(properties).assertSuccess();
    }
    return {
    };
}

/**
 * A ROS template type:  `DATASOURCE::ROCKETMQ::Instances`
 */
export class RosInstances extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::ROCKETMQ::Instances";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute InstanceIds: The list of instance IDs.
     */
    public readonly attrInstanceIds: ros.IResolvable;

    /**
     * @Attribute Instances: The list of instances.
     */
    public readonly attrInstances: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * Create a new `DATASOURCE::ROCKETMQ::Instances`.
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
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosInstancesPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `DATASOURCE::ROCKETMQ::Topics`
 */
export interface RosTopicsProps {

    /**
     * @Property instanceId: InstanceId
     */
    readonly instanceId?: string | ros.IResolvable;

    /**
     * @Property topicName: TopicName
     */
    readonly topicName?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosTopicsProps`
 *
 * @param properties - the TypeScript properties of a `RosTopicsProps`
 *
 * @returns the result of the validation.
 */
function RosTopicsPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('instanceId', ros.validateString)(properties.instanceId));
    errors.collect(ros.propertyValidator('topicName', ros.validateString)(properties.topicName));
    return errors.wrap('supplied properties not correct for "RosTopicsProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::ROCKETMQ::Topics` resource
 *
 * @param properties - the TypeScript properties of a `RosTopicsProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::ROCKETMQ::Topics` resource.
 */
// @ts-ignore TS6133
function rosTopicsPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosTopicsPropsValidator(properties).assertSuccess();
    }
    return {
      InstanceId: ros.stringToRosTemplate(properties.instanceId),
      TopicName: ros.stringToRosTemplate(properties.topicName),
    };
}

/**
 * A ROS template type:  `DATASOURCE::ROCKETMQ::Topics`
 */
export class RosTopics extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::ROCKETMQ::Topics";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute TopicNames: The list of topic names.
     */
    public readonly attrTopicNames: ros.IResolvable;

    /**
     * @Attribute Topics: The list of topics.
     */
    public readonly attrTopics: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property instanceId: InstanceId
     */
    public instanceId: string | ros.IResolvable | undefined;

    /**
     * @Property topicName: TopicName
     */
    public topicName: string | ros.IResolvable | undefined;

    /**
     * Create a new `DATASOURCE::ROCKETMQ::Topics`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosTopicsProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosTopics.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrTopicNames = this.getAtt('TopicNames');
        this.attrTopics = this.getAtt('Topics');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.instanceId = props.instanceId;
        this.topicName = props.topicName;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            instanceId: this.instanceId,
            topicName: this.topicName,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosTopicsPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

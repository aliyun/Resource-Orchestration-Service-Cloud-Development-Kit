// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `RosConsumerGroups`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-rocketmq5-consumergroups
 */
export interface RosConsumerGroupsProps {

    /**
     * @Property instanceId: Instance ID.
     */
    readonly instanceId: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosConsumerGroupsProps`
 *
 * @param properties - the TypeScript properties of a `RosConsumerGroupsProps`
 *
 * @returns the result of the validation.
 */
function RosConsumerGroupsPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('instanceId', ros.requiredValidator)(properties.instanceId));
    errors.collect(ros.propertyValidator('instanceId', ros.validateString)(properties.instanceId));
    return errors.wrap('supplied properties not correct for "RosConsumerGroupsProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::ROCKETMQ5::ConsumerGroups` resource
 *
 * @param properties - the TypeScript properties of a `RosConsumerGroupsProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::ROCKETMQ5::ConsumerGroups` resource.
 */
// @ts-ignore TS6133
function rosConsumerGroupsPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosConsumerGroupsPropsValidator(properties).assertSuccess();
    }
    return {
      InstanceId: ros.stringToRosTemplate(properties.instanceId),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::ROCKETMQ5::ConsumerGroups`.
 * @Note This class does not contain additional functions, so it is recommended to use the `ConsumerGroups` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-rocketmq5-consumergroups
 */
export class RosConsumerGroups extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::ROCKETMQ5::ConsumerGroups";

    /**
     * @Attribute ConsumerGroupIds: The list of consumer group IDs.
     */
    public readonly attrConsumerGroupIds: ros.IResolvable;

    /**
     * @Attribute ConsumerGroups: The list of consumer groups.
     */
    public readonly attrConsumerGroups: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property instanceId: Instance ID.
     */
    public instanceId: string | ros.IResolvable;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosConsumerGroupsProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosConsumerGroups.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrConsumerGroupIds = this.getAtt('ConsumerGroupIds');
        this.attrConsumerGroups = this.getAtt('ConsumerGroups');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.instanceId = props.instanceId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            instanceId: this.instanceId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosConsumerGroupsPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

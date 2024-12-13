// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `RosEndpoint`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-paidatasetacc-endpoint
 */
export interface RosEndpointProps {

    /**
     * @Property instanceId: The ID of the acceleration instance
     */
    readonly instanceId: string | ros.IResolvable;

    /**
     * @Property name: The name of the Mount Target.
     */
    readonly name: string | ros.IResolvable;

    /**
     * @Property type: The network type of the Mount Target.
     */
    readonly type?: string | ros.IResolvable;

    /**
     * @Property vpcId: The ID of the VPC.
     */
    readonly vpcId?: string | ros.IResolvable;

    /**
     * @Property vswitchId: The ID of the vSwitch.
     */
    readonly vswitchId?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosEndpointProps`
 *
 * @param properties - the TypeScript properties of a `RosEndpointProps`
 *
 * @returns the result of the validation.
 */
function RosEndpointPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.type && (typeof properties.type) !== 'object') {
        errors.collect(ros.propertyValidator('type', ros.validateAllowedValues)({
          data: properties.type,
          allowedValues: ["VPC","INNER"],
        }));
    }
    errors.collect(ros.propertyValidator('type', ros.validateString)(properties.type));
    errors.collect(ros.propertyValidator('vpcId', ros.validateString)(properties.vpcId));
    errors.collect(ros.propertyValidator('instanceId', ros.requiredValidator)(properties.instanceId));
    errors.collect(ros.propertyValidator('instanceId', ros.validateString)(properties.instanceId));
    errors.collect(ros.propertyValidator('vswitchId', ros.validateString)(properties.vswitchId));
    errors.collect(ros.propertyValidator('name', ros.requiredValidator)(properties.name));
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    return errors.wrap('supplied properties not correct for "RosEndpointProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::PAIDatasetAcc::Endpoint` resource
 *
 * @param properties - the TypeScript properties of a `RosEndpointProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::PAIDatasetAcc::Endpoint` resource.
 */
// @ts-ignore TS6133
function rosEndpointPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosEndpointPropsValidator(properties).assertSuccess();
    }
    return {
      'InstanceId': ros.stringToRosTemplate(properties.instanceId),
      'Name': ros.stringToRosTemplate(properties.name),
      'Type': ros.stringToRosTemplate(properties.type),
      'VpcId': ros.stringToRosTemplate(properties.vpcId),
      'VswitchId': ros.stringToRosTemplate(properties.vswitchId),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::PAIDatasetAcc::Endpoint`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Endpoint` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-paidatasetacc-endpoint
 */
export class RosEndpoint extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::PAIDatasetAcc::Endpoint";

    /**
     * @Attribute EndpointId: The ID of the Mount Target.
     */
    public readonly attrEndpointId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property instanceId: The ID of the acceleration instance
     */
    public instanceId: string | ros.IResolvable;

    /**
     * @Property name: The name of the Mount Target.
     */
    public name: string | ros.IResolvable;

    /**
     * @Property type: The network type of the Mount Target.
     */
    public type: string | ros.IResolvable | undefined;

    /**
     * @Property vpcId: The ID of the VPC.
     */
    public vpcId: string | ros.IResolvable | undefined;

    /**
     * @Property vswitchId: The ID of the vSwitch.
     */
    public vswitchId: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosEndpointProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosEndpoint.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrEndpointId = this.getAtt('EndpointId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.instanceId = props.instanceId;
        this.name = props.name;
        this.type = props.type;
        this.vpcId = props.vpcId;
        this.vswitchId = props.vswitchId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            instanceId: this.instanceId,
            name: this.name,
            type: this.type,
            vpcId: this.vpcId,
            vswitchId: this.vswitchId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosEndpointPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

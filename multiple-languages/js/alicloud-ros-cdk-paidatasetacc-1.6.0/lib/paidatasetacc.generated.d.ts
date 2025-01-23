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
 * This class is a base encapsulation around the ROS resource type `ALIYUN::PAIDatasetAcc::Endpoint`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Endpoint` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-paidatasetacc-endpoint
 */
export declare class RosEndpoint extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::PAIDatasetAcc::Endpoint";
    /**
     * @Attribute EndpointId: The ID of the Mount Target.
     */
    readonly attrEndpointId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property instanceId: The ID of the acceleration instance
     */
    instanceId: string | ros.IResolvable;
    /**
     * @Property name: The name of the Mount Target.
     */
    name: string | ros.IResolvable;
    /**
     * @Property type: The network type of the Mount Target.
     */
    type: string | ros.IResolvable | undefined;
    /**
     * @Property vpcId: The ID of the VPC.
     */
    vpcId: string | ros.IResolvable | undefined;
    /**
     * @Property vswitchId: The ID of the vSwitch.
     */
    vswitchId: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosEndpointProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}

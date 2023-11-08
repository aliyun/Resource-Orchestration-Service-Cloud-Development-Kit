import * as ros from '@alicloud/ros-cdk-core';
import { RosInstance } from './searchengine.generated';
export { RosInstance as InstanceProperty };
/**
 * Properties for defining a `ALIYUN::SearchEngine::Instance`
 */
export interface InstanceProps {
    /**
     * Property chargeType: The billing method. Valid values: POSTPAY.
     * POSTPAY: pay-as-you-go.
     */
    readonly chargeType: string | ros.IResolvable;
    /**
     * Property password: The password of instance. It consists of lowercase letters and numbers, and the length is 6-8 characters.
     */
    readonly password: string | ros.IResolvable;
    /**
     * Property qrsNum: The number of query nodes.
     */
    readonly qrsNum: number | ros.IResolvable;
    /**
     * Property qrsSpec: The specification of query nodes.
     */
    readonly qrsSpec: string | ros.IResolvable;
    /**
     * Property searcherDocSize: The storage size of single data node.
     */
    readonly searcherDocSize: number | ros.IResolvable;
    /**
     * Property searcherNum: The number of data nodes.
     */
    readonly searcherNum: number | ros.IResolvable;
    /**
     * Property searcherSpec: The specification of data nodes.
     */
    readonly searcherSpec: string | ros.IResolvable;
    /**
     * Property userName: The user name of instance. Begin with a letter, support upper and lower case letters, numbers, underscores, length 1-30 characters.
     */
    readonly userName: string | ros.IResolvable;
    /**
     * Property vpcId: The ID of VPC.
     */
    readonly vpcId: string | ros.IResolvable;
    /**
     * Property vSwitchId: The ID of vSwitch.
     */
    readonly vSwitchId: string | ros.IResolvable;
}
/**
 * A ROS resource type:  `ALIYUN::SearchEngine::Instance`
 */
export declare class Instance extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute Endpoint: The endpoint of instance.
     */
    readonly attrEndpoint: ros.IResolvable;
    /**
     * Attribute InstanceId: The ID of instance.
     */
    readonly attrInstanceId: ros.IResolvable;
    /**
     * Create a new `ALIYUN::SearchEngine::Instance`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: InstanceProps, enableResourcePropertyConstraint?: boolean);
}

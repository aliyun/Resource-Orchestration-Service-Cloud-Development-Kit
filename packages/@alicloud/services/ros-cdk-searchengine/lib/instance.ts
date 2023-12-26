import * as ros from '@alicloud/ros-cdk-core';
import { RosInstance } from './searchengine.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosInstance as InstanceProperty };

/**
 * Properties for defining a `Instance`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-searchengine-instance
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
 * This class encapsulates and extends the ROS resource type `ALIYUN::SearchEngine::Instance`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosInstance`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-searchengine-instance
 */
export class Instance extends ros.Resource {

    /**
     * Attribute Endpoint: The endpoint of instance.
     */
    public readonly attrEndpoint: ros.IResolvable;

    /**
     * Attribute InstanceId: The ID of instance.
     */
    public readonly attrInstanceId: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: InstanceProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosInstance = new RosInstance(this, id,  {
            qrsNum: props.qrsNum,
            qrsSpec: props.qrsSpec,
            userName: props.userName,
            vpcId: props.vpcId,
            searcherSpec: props.searcherSpec,
            chargeType: props.chargeType === undefined || props.chargeType === null ? 'POSTPAY' : props.chargeType,
            vSwitchId: props.vSwitchId,
            searcherNum: props.searcherNum,
            searcherDocSize: props.searcherDocSize,
            password: props.password,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosInstance;
        this.attrEndpoint = rosInstance.attrEndpoint;
        this.attrInstanceId = rosInstance.attrInstanceId;
    }
}

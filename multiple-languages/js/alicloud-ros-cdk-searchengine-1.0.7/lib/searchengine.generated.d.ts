import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `ALIYUN::SearchEngine::Instance`
 */
export interface RosInstanceProps {
    /**
     * @Property chargeType: The billing method. Valid values: POSTPAY.
     * POSTPAY: pay-as-you-go.
     */
    readonly chargeType: string | ros.IResolvable;
    /**
     * @Property password: The password of instance. It consists of lowercase letters and numbers, and the length is 6-8 characters.
     */
    readonly password: string | ros.IResolvable;
    /**
     * @Property qrsNum: The number of query nodes.
     */
    readonly qrsNum: number | ros.IResolvable;
    /**
     * @Property qrsSpec: The specification of query nodes.
     */
    readonly qrsSpec: string | ros.IResolvable;
    /**
     * @Property searcherDocSize: The storage size of single data node.
     */
    readonly searcherDocSize: number | ros.IResolvable;
    /**
     * @Property searcherNum: The number of data nodes.
     */
    readonly searcherNum: number | ros.IResolvable;
    /**
     * @Property searcherSpec: The specification of data nodes.
     */
    readonly searcherSpec: string | ros.IResolvable;
    /**
     * @Property userName: The user name of instance. Begin with a letter, support upper and lower case letters, numbers, underscores, length 1-30 characters.
     */
    readonly userName: string | ros.IResolvable;
    /**
     * @Property vpcId: The ID of VPC.
     */
    readonly vpcId: string | ros.IResolvable;
    /**
     * @Property vSwitchId: The ID of vSwitch.
     */
    readonly vSwitchId: string | ros.IResolvable;
}
/**
 * A ROS template type:  `ALIYUN::SearchEngine::Instance`
 */
export declare class RosInstance extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::SearchEngine::Instance";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute Endpoint: The endpoint of instance.
     */
    readonly attrEndpoint: ros.IResolvable;
    /**
     * @Attribute InstanceId: The ID of instance.
     */
    readonly attrInstanceId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property chargeType: The billing method. Valid values: POSTPAY.
     * POSTPAY: pay-as-you-go.
     */
    chargeType: string | ros.IResolvable;
    /**
     * @Property password: The password of instance. It consists of lowercase letters and numbers, and the length is 6-8 characters.
     */
    password: string | ros.IResolvable;
    /**
     * @Property qrsNum: The number of query nodes.
     */
    qrsNum: number | ros.IResolvable;
    /**
     * @Property qrsSpec: The specification of query nodes.
     */
    qrsSpec: string | ros.IResolvable;
    /**
     * @Property searcherDocSize: The storage size of single data node.
     */
    searcherDocSize: number | ros.IResolvable;
    /**
     * @Property searcherNum: The number of data nodes.
     */
    searcherNum: number | ros.IResolvable;
    /**
     * @Property searcherSpec: The specification of data nodes.
     */
    searcherSpec: string | ros.IResolvable;
    /**
     * @Property userName: The user name of instance. Begin with a letter, support upper and lower case letters, numbers, underscores, length 1-30 characters.
     */
    userName: string | ros.IResolvable;
    /**
     * @Property vpcId: The ID of VPC.
     */
    vpcId: string | ros.IResolvable;
    /**
     * @Property vSwitchId: The ID of vSwitch.
     */
    vSwitchId: string | ros.IResolvable;
    /**
     * Create a new `ALIYUN::SearchEngine::Instance`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosInstanceProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
//# sourceMappingURL=searchengine.generated.d.ts.map
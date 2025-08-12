import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `RosInstance`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-flink-instance
 */
export interface RosInstanceProps {
    /**
     * @Property bucket: OSS bucket name.
     */
    readonly bucket: string | ros.IResolvable;
    /**
     * @Property chargeType: The payment type, the value of the value is as follows:
     * POST: pay as you go.
     * PRE: subscription.
     */
    readonly chargeType: string | ros.IResolvable;
    /**
     * @Property instanceName: The name of instance.
     */
    readonly instanceName: string | ros.IResolvable;
    /**
     * @Property vpcId: VPC ID.
     */
    readonly vpcId: string | ros.IResolvable;
    /**
     * @Property vSwitchIds: Virtual switch ID.
     */
    readonly vSwitchIds: Array<any | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property zoneId: The available area ID of the instance.
     */
    readonly zoneId: string | ros.IResolvable;
    /**
     * @Property autoRenew: When the payment type is the monthly package, the value of the value is as follows:
     * true: Automatic renewal.
     * false: Manual renewal.
     */
    readonly autoRenew?: boolean | ros.IResolvable;
    /**
     * @Property duration: Number of order cycle.
     * When ChargeType is configured as PRE, the duration parameter must be filled.
     * If PricingCycle is Month, the valid range is 1, 2, 3, 6, 7, 8, 9, 12, 24, 36
     * If PricingCycle is year, the valid range is 1 to 3
     */
    readonly duration?: number | ros.IResolvable;
    /**
     * @Property pricingCycle: The ordering cycle only supports ordering in the year and month.
     */
    readonly pricingCycle?: string | ros.IResolvable;
    /**
     * @Property promotionCode: Promo Code.
     */
    readonly promotionCode?: string | ros.IResolvable;
    /**
     * @Property resourceSpec: Resource specifications.
     * When ChargeType is configured as PRE, the resource specification parameters must be filled.
     */
    readonly resourceSpec?: RosInstance.ResourceSpecProperty | ros.IResolvable;
    /**
     * @Property usePromotionCode: Whether to use coupons.The value is as follows:
     * true: Use.
     * false: Not in use.
     */
    readonly usePromotionCode?: boolean | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::Flink::Instance`, which is used to create a subscription or pay-as-you-go Realtime Compute for Apache Flink instance.
 * @Note This class does not contain additional functions, so it is recommended to use the `Instance` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-flink-instance
 */
export declare class RosInstance extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::Flink::Instance";
    /**
     * @Attribute InstanceId: Instance ID.
     */
    readonly attrInstanceId: ros.IResolvable;
    /**
     * @Attribute OrderId: Order information.
     */
    readonly attrOrderId: ros.IResolvable;
    /**
     * @Attribute WorkspaceId: Workspace ID.
     */
    readonly attrWorkspaceId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property bucket: OSS bucket name.
     */
    bucket: string | ros.IResolvable;
    /**
     * @Property chargeType: The payment type, the value of the value is as follows:
     * POST: pay as you go.
     * PRE: subscription.
     */
    chargeType: string | ros.IResolvable;
    /**
     * @Property instanceName: The name of instance.
     */
    instanceName: string | ros.IResolvable;
    /**
     * @Property vpcId: VPC ID.
     */
    vpcId: string | ros.IResolvable;
    /**
     * @Property vSwitchIds: Virtual switch ID.
     */
    vSwitchIds: Array<any | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property zoneId: The available area ID of the instance.
     */
    zoneId: string | ros.IResolvable;
    /**
     * @Property autoRenew: When the payment type is the monthly package, the value of the value is as follows:
     * true: Automatic renewal.
     * false: Manual renewal.
     */
    autoRenew: boolean | ros.IResolvable | undefined;
    /**
     * @Property duration: Number of order cycle.
     * When ChargeType is configured as PRE, the duration parameter must be filled.
     * If PricingCycle is Month, the valid range is 1, 2, 3, 6, 7, 8, 9, 12, 24, 36
     * If PricingCycle is year, the valid range is 1 to 3
     */
    duration: number | ros.IResolvable | undefined;
    /**
     * @Property pricingCycle: The ordering cycle only supports ordering in the year and month.
     */
    pricingCycle: string | ros.IResolvable | undefined;
    /**
     * @Property promotionCode: Promo Code.
     */
    promotionCode: string | ros.IResolvable | undefined;
    /**
     * @Property resourceSpec: Resource specifications.
     * When ChargeType is configured as PRE, the resource specification parameters must be filled.
     */
    resourceSpec: RosInstance.ResourceSpecProperty | ros.IResolvable | undefined;
    /**
     * @Property usePromotionCode: Whether to use coupons.The value is as follows:
     * true: Use.
     * false: Not in use.
     */
    usePromotionCode: boolean | ros.IResolvable | undefined;
    /**
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
export declare namespace RosInstance {
    /**
     * @stability external
     */
    interface ResourceSpecProperty {
        /**
         * @Property cpu: CPU number.
         */
        readonly cpu?: number | ros.IResolvable;
        /**
         * @Property memoryGb: memory size.The unit is GB.
     * It shows that the amount of memory must be 4 times the number of CPUs.
         */
        readonly memoryGb?: number | ros.IResolvable;
    }
}
/**
 * Properties for defining a `RosMember`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-flink-member
 */
export interface RosMemberProps {
    /**
     * @Property member: The user ID of the member.
     */
    readonly member: string | ros.IResolvable;
    /**
     * @Property namespace: The project space name.
     */
    readonly namespace: string | ros.IResolvable;
    /**
     * @Property role: The role of the member.
     */
    readonly role: string | ros.IResolvable;
    /**
     * @Property workspace: The work space ID.
     */
    readonly workspace: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::Flink::Member`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Member` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-flink-member
 */
export declare class RosMember extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::Flink::Member";
    /**
     * @Attribute MemberInfo: The detailed info of the flink member.
     */
    readonly attrMemberInfo: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property member: The user ID of the member.
     */
    member: string | ros.IResolvable;
    /**
     * @Property namespace: The project space name.
     */
    namespace: string | ros.IResolvable;
    /**
     * @Property role: The role of the member.
     */
    role: string | ros.IResolvable;
    /**
     * @Property workspace: The work space ID.
     */
    workspace: string | ros.IResolvable;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosMemberProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
/**
 * Properties for defining a `RosNamespace`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-flink-namespace
 */
export interface RosNamespaceProps {
    /**
     * @Property instanceId: Instance ID.
     */
    readonly instanceId: string | ros.IResolvable;
    /**
     * @Property namespace: Project space name.
     */
    readonly namespace: string | ros.IResolvable;
    /**
     * @Property resourceSpec: Resource specifications.
     */
    readonly resourceSpec?: RosNamespace.ResourceSpecProperty | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::Flink::Namespace`, which is used to create a project.
 * @Note This class does not contain additional functions, so it is recommended to use the `Namespace` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-flink-namespace
 */
export declare class RosNamespace extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::Flink::Namespace";
    /**
     * @Attribute InstanceId: Instance ID.
     */
    readonly attrInstanceId: ros.IResolvable;
    /**
     * @Attribute Namespace: Project space name.
     */
    readonly attrNamespace: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property instanceId: Instance ID.
     */
    instanceId: string | ros.IResolvable;
    /**
     * @Property namespace: Project space name.
     */
    namespace: string | ros.IResolvable;
    /**
     * @Property resourceSpec: Resource specifications.
     */
    resourceSpec: RosNamespace.ResourceSpecProperty | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosNamespaceProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosNamespace {
    /**
     * @stability external
     */
    interface ResourceSpecProperty {
        /**
         * @Property cpu: CPU number.
     * In the working space of the annual package, the number of CPUs must be filled.Under the working space of paying in volume, you can not fill in the number of CPUs.
     * The number of CPUs created by the target project space is less than the number of CPU remaining in the working space (the total number of CPU purchased by the work space minus the number of other project spaces that has been assigned the number of CPUs), otherwise an error will be reported.
         */
        readonly cpu?: number | ros.IResolvable;
        /**
         * @Property memoryGb: Memory.
     * In the working space of the annual package, the amount of memory must be filled, and the amount of memory must be 4 times.Under the working space of paying in volume, you can fill in the amount of memory without filling in the amount of memory.
     * The amount of memory in the target project space is less than the remaining memory of the working space (the total amount of memory purchased by the work space minus the number of other project spaces that have been assigned the amount of memory), otherwise an error will be reported.
         */
        readonly memoryGb?: number | ros.IResolvable;
    }
}

import * as ros from '@alicloud/ros-cdk-core';
import { RosInstance } from './memcache.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosInstance as InstanceProperty };

/**
 * Properties for defining a `ALIYUN::Memcache::Instance`
 */
export interface InstanceProps {

    /**
     * Property autoRenew: Specifies whether to enable auto renewal. Valid values:
     * true
     * false
     * Note Default value: false.
     */
    readonly autoRenew?: string;

    /**
     * Property autoRenewPeriod: The period of the auto renewal. Unit: months. Valid values:
     * 1
     * 2
     * 3
     * 6
     * 12
     * Note You must specify this parameter if the value of the AutoRenew parameter is true.
     */
    readonly autoRenewPeriod?: string;

    /**
     * Property autoUseCoupon: Specifies whether to use a coupon. Valid values:
     * true
     * false
     * Note Default value: false.
     */
    readonly autoUseCoupon?: string;

    /**
     * Property backupPolicy: Backup policy
     */
    readonly backupPolicy?: RosInstance.BackupPolicyProperty | ros.IResolvable;

    /**
     * Property capacity: The storage capacity of the instance. Unit: MB.
     * Note You need to pass at least one of the Capacity and InstanceClass parameters when calling
     * the CreateInstance operation.
     */
    readonly capacity?: number;

    /**
     * Property chargeType: The billing method of the instance. Valid values:
     * PrePaid: subscription.
     * PostPaid: pay-as-you-go.
     * Note Default value: PostPaid.
     */
    readonly chargeType?: string;

    /**
     * Property config: The parameter configuration of the instance, in a JSON string. For more information,
     * see Set parameters.
     */
    readonly config?: string;

    /**
     * Property couponNo: The coupon number. Default value: youhuiquan_promotion_option_id_for_blank.
     */
    readonly couponNo?: string;

    /**
     * Property instanceClass: The instance type. For more information, see Instance types.
     * Note You need to pass at least one of the Capacity and InstanceClass parameters when calling
     * the CreateInstance operation.
     */
    readonly instanceClass?: string;

    /**
     * Property instanceName: The name of the instance. The name can be 2 to 128 characters in length and must start
     * with a letter. The following characters are not supported: at signs (@), forward slashes (/), colons (:), equal signs (=), double quotation marks
     * ("), angle brackets (<>), braces ([]), curly brackets ({}) and spaces.
     */
    readonly instanceName?: string;

    /**
     * Property networkType: The network type of the instance. Valid values:
     * CLASSIC
     * VPC
     * Note Default value: CLASSIC.
     */
    readonly networkType?: string;

    /**
     * Property password: The password of the instance. The password can be 8 to 32 characters in length and
     * must contain at least three types of the following characters: uppercase letters,
     * lowercase letters, digits, and special characters. Special characters include ! at signs (@), number signs (#), dollar signs ($), percent signs (%), carets (^),
     * ampersands (&), asterisks (*), parentheses (()), underscores (_), plus signs (+),
     * hyphens (-), and equal signs (=).
     */
    readonly password?: string;

    /**
     * Property period: The subscription period. You must specify this parameter if the value of the ChargeType
     * parameter is PrePaid. Unit: months. Valid values: 1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 24,
     * and 36.
     * Note This parameter is invalid if the value of the ChargeType parameter is PostPaid.
     */
    readonly period?: string;

    /**
     * Property privateIpAddress: The internal IP address of the instance.
     * Note The internal IP address must be located in the Classless Inter-Domain Routing (CIDR)
     * block of the VSwitch to which the instance belongs.
     */
    readonly privateIpAddress?: string;

    /**
     * Property resourceGroupId: Resource group ID.
     */
    readonly resourceGroupId?: string;

    /**
     * Property vpcId: The ID of the VPC.
     */
    readonly vpcId?: string;

    /**
     * Property vpcPasswordFree: Specifies whether to enable password free for access within the VPC. If set to:
     * - true: enables password free.
     * - false: disables password free.
     */
    readonly vpcPasswordFree?: boolean | ros.IResolvable;

    /**
     * Property vSwitchId: The ID of the VSwitch.
     */
    readonly vSwitchId?: string;

    /**
     * Property zoneId: The ID of the zone in which the instance is created. You can call the DescribeRegions operation to query the latest region list.
     */
    readonly zoneId?: string;
}

/**
 * A ROS resource type:  `ALIYUN::Memcache::Instance`
 */
export class Instance extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Attribute ConnectionDomain: The internal endpoint of the instance.
     */
    public readonly attrConnectionDomain: any;

    /**
     * Attribute InstanceId: The globally unique identifier (GUID) of the instance.
     */
    public readonly attrInstanceId: any;

    /**
     * Attribute InstanceName: The name of the instance.
     */
    public readonly attrInstanceName: any;

    /**
     * Attribute Port: Port of created instance.
     */
    public readonly attrPort: any;

    /**
     * Attribute QPS: QPS.
     */
    public readonly attrQps: any;

    /**
     * Create a new `ALIYUN::Memcache::Instance`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: InstanceProps = {}, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosInstance = new RosInstance(this, id,  {
            autoRenewPeriod: props.autoRenewPeriod,
            couponNo: props.couponNo,
            privateIpAddress: props.privateIpAddress,
            zoneId: props.zoneId,
            resourceGroupId: props.resourceGroupId,
            config: props.config,
            autoRenew: props.autoRenew,
            vSwitchId: props.vSwitchId,
            period: props.period,
            instanceClass: props.instanceClass,
            vpcPasswordFree: props.vpcPasswordFree,
            instanceName: props.instanceName,
            vpcId: props.vpcId,
            capacity: props.capacity,
            autoUseCoupon: props.autoUseCoupon,
            chargeType: props.chargeType,
            networkType: props.networkType,
            backupPolicy: props.backupPolicy,
            password: props.password,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosInstance;
        this.attrConnectionDomain = rosInstance.attrConnectionDomain;
        this.attrInstanceId = rosInstance.attrInstanceId;
        this.attrInstanceName = rosInstance.attrInstanceName;
        this.attrPort = rosInstance.attrPort;
        this.attrQps = rosInstance.attrQps;
    }
}

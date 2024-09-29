import * as ros from '@alicloud/ros-cdk-core';
import { RosInstance } from './cloudfw.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosInstance as InstanceProperty };

/**
 * Properties for defining a `Instance`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudfw-instance
 */
export interface InstanceProps {

    /**
     * Property payType: The billing method of the firewall instance. Valid values:
     * PayAsYouGo: pay-as-you-go
     * Subscription: subscription
     */
    readonly payType: string | ros.IResolvable;

    /**
     * Property accountNum: The number of multi-account management and control is the number of member accounts that you need to uniformly control.
     */
    readonly accountNum?: number | ros.IResolvable;

    /**
     * Property aclExtension: When the default access control authorization specifications of your version are not enough, you can purchase global extension specifications of access control. This extension supports shared occupancy with Internet and VPC boundary ACL specifications.
     */
    readonly aclExtension?: number | ros.IResolvable;

    /**
     * Property autoPay: Whether to auto pay the bill.
     */
    readonly autoPay?: boolean | ros.IResolvable;

    /**
     * Property autoRenew: Whether to auto renew the prepay instance.
     */
    readonly autoRenew?: boolean | ros.IResolvable;

    /**
     * Property bandwidth: Public network processing capability. Valid values: 10 to 15000. Unit: Mbps.
     */
    readonly bandwidth?: number | ros.IResolvable;

    /**
     * Property ignoreExisting: Whether to ignore existing cloud firewall instance
     * False: ROS will perform a uniqueness check.If the cloud firewall instance exists, an error will be reported when creating it.
     * True: ROS will not check the uniqueness.If the cloud firewall instance exists, the creation process will be ignored.
     * If the cloud firewall instance is not created by ROS, it will be ignored during update and delete stage.
     */
    readonly ignoreExisting?: boolean | ros.IResolvable;

    /**
     * Property ipNum: The number of public IPs that can be protected. Valid values: 20 to 4000.PremiumVersion: [20, 1000]
     */
    readonly ipNum?: number | ros.IResolvable;

    /**
     * Property logAnalysis: The cloud firewall includes 7 days of free log storage and auditing by default. If you need longer storage time or meet the requirements for equal protection, it is recommended to purchase the log analysis service.
     */
    readonly logAnalysis?: boolean | ros.IResolvable;

    /**
     * Property logStorage: Reference for purchasing storage capacity: 10M public network bandwidth, 6 months of log storage, recommended purchase of 1000GB log storage capacity
     */
    readonly logStorage?: number | ros.IResolvable;

    /**
     * Property multiAccountManagement: Multiple accounts on the enterprise cloud can be managed centrally on the cloud firewall, including asset inventory, ACL policies, attack protection, log reports, etc. After the member account is managed by the current account, there will be no need to purchase it separately.
     */
    readonly multiAccountManagement?: boolean | ros.IResolvable;

    /**
     * Property natBandwidth: The bandwidth of private network traffic processed by the NAT firewall. The premium version does not include it by default, the enterprise version has 10Mbps by default, and the ultimate version has 20Mbps by default.
     */
    readonly natBandwidth?: number | ros.IResolvable;

    /**
     * Property natFirewallNum: The number of NAT gateway instances of the NAT firewall you need to enable. Each NAT gateway instance corresponds to one NAT firewall instance. The premium version does not include it by default, the enterprise version comes with 1 specification by default,and the ultimate version comes with 2 specifications by default.
     */
    readonly natFirewallNum?: number | ros.IResolvable;

    /**
     * Property period: The subscription period of the firewallIf PeriodUnit is month, the valid range is 1, 3, 6
     * If periodUnit is year, the valid range is 1, 2, 3
     */
    readonly period?: number | ros.IResolvable;

    /**
     * Property periodUnit: The unit of the subscription duration. Valid values:
     * Month
     * Year
     * Default value: Month.
     */
    readonly periodUnit?: string | ros.IResolvable;

    /**
     * Property spec: The version of Cloud Firewall.
     */
    readonly spec?: string | ros.IResolvable;

    /**
     * Property vpcBandwidth: VPC network processing capability. Valid values: 1000 to 15000. Unit: Mbps.
     */
    readonly vpcBandwidth?: number | ros.IResolvable;

    /**
     * Property vpcFirewallNum: The number of protected VPCs. It will be ignored when spec = "premium_version". Valid values between 2 and 500.
     */
    readonly vpcFirewallNum?: number | ros.IResolvable;
}

/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::CLOUDFW::Instance`, which is used to create a Cloud Firewall instance.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosInstance`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudfw-instance
 */
export class Instance extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: InstanceProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute InstanceId: Instance Id.
     */
    public readonly attrInstanceId: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: InstanceProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosInstance = new RosInstance(this, id,  {
            ignoreExisting: props.ignoreExisting === undefined || props.ignoreExisting === null ? false : props.ignoreExisting,
            vpcBandwidth: props.vpcBandwidth,
            aclExtension: props.aclExtension,
            natFirewallNum: props.natFirewallNum,
            natBandwidth: props.natBandwidth,
            ipNum: props.ipNum,
            autoRenew: props.autoRenew,
            period: props.period,
            payType: props.payType,
            autoPay: props.autoPay === undefined || props.autoPay === null ? false : props.autoPay,
            logStorage: props.logStorage,
            logAnalysis: props.logAnalysis,
            vpcFirewallNum: props.vpcFirewallNum,
            accountNum: props.accountNum,
            multiAccountManagement: props.multiAccountManagement === undefined || props.multiAccountManagement === null ? false : props.multiAccountManagement,
            bandwidth: props.bandwidth,
            spec: props.spec,
            periodUnit: props.periodUnit,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosInstance;
        this.attrInstanceId = rosInstance.attrInstanceId;
    }
}

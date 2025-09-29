import * as ros from '@alicloud/ros-cdk-core';
import { RosGateway2 } from './mse.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosGateway2 as Gateway2Property };

/**
 * Properties for defining a `Gateway2`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mse-gateway2
 */
export interface Gateway2Props {

    /**
     * Property vpcId: The ID of the vpc.
     */
    readonly vpcId: string | ros.IResolvable;

    /**
     * Property acceptLanguage: The language of the response. Valid values:
     * zh: Chinese
     * en: English
     */
    readonly acceptLanguage?: string | ros.IResolvable;

    /**
     * Property chargeType: The billing method you specify when you purchase an normal instance.
     * Valid values:
     * PREPAY: subscription
     * POSTPAY: pay-as-you-go
     */
    readonly chargeType?: string | ros.IResolvable;

    /**
     * Property clbNetworkType: The network type of the purchased Classic Load Balancer (CLB) instance that is billed based on LCUs.
     * pubnet: Internet
     * privatenet: private network
     * privatepubnet: Internet and private network
     */
    readonly clbNetworkType?: string | ros.IResolvable;

    /**
     * Property enableHardwareAcceleration: Specifies whether to activate Tracing Analysis.
     */
    readonly enableHardwareAcceleration?: boolean | ros.IResolvable;

    /**
     * Property enableSls: Specifies whether to activate Log Service.
     */
    readonly enableSls?: boolean | ros.IResolvable;

    /**
     * Property enableXtrace: Whether to activate Tracing Analysis.
     */
    readonly enableXtrace?: boolean | ros.IResolvable;

    /**
     * Property enterpriseSecurityGroup: Specifies whether to enable hardware acceleration.
     */
    readonly enterpriseSecurityGroup?: boolean | ros.IResolvable;

    /**
     * Property internetSlb: Public network SLB specifications (for normal instances).
     * Simple type (slb.s1.small)
     * Standard type 1 (slb.s2.smal)
     * Standard type I(slb.s2.medium)
     * Advanced Type 1 (slb.s3.small)
     * Advanced I(slb.s3.medium)
     * Super strong type I (slb.s3.large)
     * Description Traditional example: When creating, you can only choose one purchasing agent in NLB, CLB billed by LCU, and CLB specifications. Serverless example: When creating, you can only choose one purchasing agent in NLB, CLB billed by LCU
     */
    readonly internetSlb?: string | ros.IResolvable;

    /**
     * Property managedEntryNetworkType: Gateway entrance type (applicable to the mse_premium instance)
     * pubnet: public network
     * privatenet: privatenet
     * privatepubnet: public + private network
     */
    readonly managedEntryNetworkType?: string | ros.IResolvable;

    /**
     * Property mserVersion: The MSE gateway instance type. Valid values:
     * mse_pro: normal instance
     * mse_premium: professional normal instancemse_serverless: serverless instance
     */
    readonly mserVersion?: string | ros.IResolvable;

    /**
     * Property name: The name of the created gateway.
     */
    readonly name?: string | ros.IResolvable;

    /**
     * Property nlbNetworkType: The network type of the Network Load Balancer (NLB) instance you specify when you purchase a serverless instance.
     * pubnet: Internet
     * privatenet: private network
     * privatepubnet: Internet and private network
     */
    readonly nlbNetworkType?: string | ros.IResolvable;

    /**
     * Property period: Prepaid time period. While choose by pay by month, it could be from 1 to 9. While choose pay by year, it could be from 1 to 3. This parameter is Only valid when updating from postpaid instance to prepaid instance.
     */
    readonly period?: number | ros.IResolvable;

    /**
     * Property periodUnit: Charge period for created instances. This parameter is only valid when updating from postpaid instance to prepaid instance.
     */
    readonly periodUnit?: string | ros.IResolvable;

    /**
     * Property replica: The number of nodes you specify when you purchase an normal instance. For high availability, the value for this param is recommended to be greater than 2.
     */
    readonly replica?: number | ros.IResolvable;

    /**
     * Property resourceGroupId: The ID of the resource group
     */
    readonly resourceGroupId?: string | ros.IResolvable;

    /**
     * Property slbSpec: Private network SLB specifications (for normal instances).
     * Simple type (slb.s1.small)
     * Standard type 1 (slb.s2.small)
     * Standard type I(slb.s2.medium)
     * Advanced Type 1 (slb.s3.small)
     * Advanced I(slb.s3.medium)
     * Super strong type I (slb.s3.large)
     * Description Traditional example: When creating, you can only choose one purchasing agent in NLB, CLB billed by LCU, and CLB specifications. Serverless example: When creating, you can only choose one purchasing agent in NLB, CLB billed by LCU
     */
    readonly slbSpec?: string | ros.IResolvable;

    /**
     * Property spec: The node specifications you specify when you purchase an normal instance. Valid values:
     * MSE_GTW_16_32_200_c(16C32G)
     * MSE_GTW_2_4_200_c(2C4G)
     * MSE_GTW_4_8_200_c(4C8G)
     * MSE_GTW_8_16_200_c(8C16G)
     */
    readonly spec?: string | ros.IResolvable;

    /**
     * Property tags: The list of tags in the form of key\/value pairs. You can define a maximum of 20 tags.
     */
    readonly tags?: RosGateway2.TagsProperty[];

    /**
     * Property vSwitchId: The primary VSwitch ID.
     */
    readonly vSwitchId?: string | ros.IResolvable;

    /**
     * Property vSwitchId2: The secondary VSwitch ID.
     */
    readonly vSwitchId2?: string | ros.IResolvable;

    /**
     * Property xtraceRatio: The sampling rate of Tracing Analysis. Valid values: [1,100]
     */
    readonly xtraceRatio?: number | ros.IResolvable;

    /**
     * Property zoneInfo: The info details of the available zone.
     */
    readonly zoneInfo?: Array<RosGateway2.ZoneInfoProperty | ros.IResolvable> | ros.IResolvable;
}

/**
 * Represents a `Gateway2`.
 */
export interface IGateway2 extends ros.IResource {
    readonly props: Gateway2Props;

    /**
     * Attribute GatewayUniqueId: The unique ID of the gateway.
     */
    readonly attrGatewayUniqueId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::MSE::Gateway2`The ALIYUN::MSE::Use Gateway2 resource type to create cloud-native gateway.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosGateway2`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mse-gateway2
 */
export class Gateway2 extends ros.Resource implements IGateway2 {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: Gateway2Props;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute GatewayUniqueId: The unique ID of the gateway.
     */
    public readonly attrGatewayUniqueId: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: Gateway2Props, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosGateway2 = new RosGateway2(this, id,  {
            resourceGroupId: props.resourceGroupId,
            vSwitchId2: props.vSwitchId2,
            vSwitchId: props.vSwitchId,
            period: props.period,
            managedEntryNetworkType: props.managedEntryNetworkType,
            replica: props.replica,
            name: props.name,
            enterpriseSecurityGroup: props.enterpriseSecurityGroup,
            enableXtrace: props.enableXtrace,
            vpcId: props.vpcId,
            chargeType: props.chargeType,
            internetSlb: props.internetSlb,
            slbSpec: props.slbSpec,
            acceptLanguage: props.acceptLanguage,
            spec: props.spec,
            enableSls: props.enableSls,
            xtraceRatio: props.xtraceRatio,
            nlbNetworkType: props.nlbNetworkType,
            clbNetworkType: props.clbNetworkType,
            mserVersion: props.mserVersion,
            tags: props.tags,
            zoneInfo: props.zoneInfo,
            periodUnit: props.periodUnit,
            enableHardwareAcceleration: props.enableHardwareAcceleration,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosGateway2;
        this.attrGatewayUniqueId = rosGateway2.attrGatewayUniqueId;
    }
}

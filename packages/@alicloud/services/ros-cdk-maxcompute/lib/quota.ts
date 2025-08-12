import * as ros from '@alicloud/ros-cdk-core';
import { RosQuota } from './maxcompute.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosQuota as QuotaProperty };

/**
 * Properties for defining a `Quota`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-maxcompute-quota
 */
export interface QuotaProps {

    /**
     * Property payType: The billing method of the odps quota instance. Valid values:
     * PayAsYouGo: pay-as-you-go
     * Subscription: subscription
     */
    readonly payType: string | ros.IResolvable;

    /**
     * Property autoPay: Whether to auto pay the bill.
     */
    readonly autoPay?: boolean | ros.IResolvable;

    /**
     * Property autoRenew: Whether to auto renew the prepay instance.
     */
    readonly autoRenew?: boolean | ros.IResolvable;

    /**
     * Property cu: The compute unit of the odps quota instance. When the specification is the StandardCompute, this parameter is required.
     */
    readonly cu?: number | ros.IResolvable;

    /**
     * Property period: The subscription period of the odps quotaIf PeriodUnit is month, the valid range is 1-9
     * If periodUnit is year, the valid range is 1, 2, 3, 4, 5
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
     * Property quotaNickname: The nickname of the odps quota instance.
     */
    readonly quotaNickname?: string | ros.IResolvable;

    /**
     * Property specification: The specification of the odps quota instance.
     */
    readonly specification?: string | ros.IResolvable;

    /**
     * Property tunnel: The tunnel unit of the odps quota instance. When the specification is the Tunnel, this parameter is required
     */
    readonly tunnel?: number | ros.IResolvable;
}

/**
 * Represents a `Quota`.
 */
export interface IQuota extends ros.IResource {
    readonly props: QuotaProps;

    /**
     * Attribute DefaultSubQuotaNickname: The default sub quota nickname of the odps quota instance.
     */
    readonly attrDefaultSubQuotaNickname: ros.IResolvable | string;

    /**
     * Attribute Nickname: The nickname of the odps quota instance.
     */
    readonly attrNickname: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::MaxCompute::Quota`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosQuota`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-maxcompute-quota
 */
export class Quota extends ros.Resource implements IQuota {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: QuotaProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute DefaultSubQuotaNickname: The default sub quota nickname of the odps quota instance.
     */
    public readonly attrDefaultSubQuotaNickname: ros.IResolvable | string;

    /**
     * Attribute Nickname: The nickname of the odps quota instance.
     */
    public readonly attrNickname: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: QuotaProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosQuota = new RosQuota(this, id,  {
            cu: props.cu,
            quotaNickname: props.quotaNickname,
            tunnel: props.tunnel,
            autoRenew: props.autoRenew,
            period: props.period,
            specification: props.specification,
            payType: props.payType === undefined || props.payType === null ? 'POSTPAY' : props.payType,
            autoPay: props.autoPay === undefined || props.autoPay === null ? true : props.autoPay,
            periodUnit: props.periodUnit,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosQuota;
        this.attrDefaultSubQuotaNickname = rosQuota.attrDefaultSubQuotaNickname;
        this.attrNickname = rosQuota.attrNickname;
    }
}

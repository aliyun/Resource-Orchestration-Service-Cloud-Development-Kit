import * as ros from '@alicloud/ros-cdk-core';
import { RosInstance } from './waf.generated';
export { RosInstance as InstanceProperty };
/**
 * Properties for defining a `Instance`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-waf-instance
 */
export interface InstanceProps {
    /**
     * Property bigScreen:
     */
    readonly bigScreen: string | ros.IResolvable;
    /**
     * Property exclusiveIpPackage:
     */
    readonly exclusiveIpPackage: string | ros.IResolvable;
    /**
     * Property extBandwidth:
     */
    readonly extBandwidth: string | ros.IResolvable;
    /**
     * Property extDomainPackage:
     */
    readonly extDomainPackage: string | ros.IResolvable;
    /**
     * Property logStorage:
     */
    readonly logStorage: string | ros.IResolvable;
    /**
     * Property logTime:
     */
    readonly logTime: string | ros.IResolvable;
    /**
     * Property packageCode:
     */
    readonly packageCode: string | ros.IResolvable;
    /**
     * Property prefessionalService:
     */
    readonly prefessionalService: string | ros.IResolvable;
    /**
     * Property subscriptionType: Subscription type of the instance
     */
    readonly subscriptionType: string | ros.IResolvable;
    /**
     * Property wafLog:
     */
    readonly wafLog: string | ros.IResolvable;
    /**
     * Property period:
     */
    readonly period?: string | ros.IResolvable;
    /**
     * Property renewalStatus:
     */
    readonly renewalStatus?: string | ros.IResolvable;
    /**
     * Property renewPeriod:
     */
    readonly renewPeriod?: string | ros.IResolvable;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::WAF::Instance`, which is used to create a Web Application Firewall (WAF) instance 2.0.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosInstance`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-waf-instance
 */
export declare class Instance extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: InstanceProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute EndDate: Due date of the instance
     */
    readonly attrEndDate: ros.IResolvable;
    /**
     * Attribute InDebt: Instance is overdue
     */
    readonly attrInDebt: ros.IResolvable;
    /**
     * Attribute InstanceId: Instance ID
     */
    readonly attrInstanceId: ros.IResolvable;
    /**
     * Attribute RemainDay: Number of available days for WAF Trial version
     */
    readonly attrRemainDay: ros.IResolvable;
    /**
     * Attribute SubscriptionType: Subscription type of the instance
     */
    readonly attrSubscriptionType: ros.IResolvable;
    /**
     * Attribute Trial: Trial version
     */
    readonly attrTrial: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: InstanceProps, enableResourcePropertyConstraint?: boolean);
}

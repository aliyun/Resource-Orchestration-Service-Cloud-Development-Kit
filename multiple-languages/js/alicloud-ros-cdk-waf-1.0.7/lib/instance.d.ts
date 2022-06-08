import * as ros from '@alicloud/ros-cdk-core';
import { RosInstance } from './waf.generated';
export { RosInstance as InstanceProperty };
/**
 * Properties for defining a `ALIYUN::WAF::Instance`
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
 * A ROS resource type:  `ALIYUN::WAF::Instance`
 */
export declare class Instance extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
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
     * Create a new `ALIYUN::WAF::Instance`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: InstanceProps, enableResourcePropertyConstraint?: boolean);
}
//# sourceMappingURL=instance.d.ts.map
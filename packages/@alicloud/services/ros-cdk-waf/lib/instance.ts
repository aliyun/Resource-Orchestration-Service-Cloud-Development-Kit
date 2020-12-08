import * as ros from '@alicloud/ros-cdk-core';
import { RosInstance } from './waf.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosInstance as InstanceProperty };

/**
 * Properties for defining a `ALIYUN::WAF::Instance`
 */
export interface InstanceProps {

    /**
     * @Property bigScreen:
     */
    readonly bigScreen: string;

    /**
     * @Property exclusiveIpPackage:
     */
    readonly exclusiveIpPackage: string;

    /**
     * @Property extBandwidth:
     */
    readonly extBandwidth: string;

    /**
     * @Property extDomainPackage:
     */
    readonly extDomainPackage: string;

    /**
     * @Property logStorage:
     */
    readonly logStorage: string;

    /**
     * @Property logTime:
     */
    readonly logTime: string;

    /**
     * @Property packageCode:
     */
    readonly packageCode: string;

    /**
     * @Property prefessionalService:
     */
    readonly prefessionalService: string;

    /**
     * @Property subscriptionType: Subscription type of the instance
     */
    readonly subscriptionType: string;

    /**
     * @Property wafLog:
     */
    readonly wafLog: string;

    /**
     * @Property period:
     */
    readonly period?: string;

    /**
     * @Property renewalStatus:
     */
    readonly renewalStatus?: string;

    /**
     * @Property renewPeriod:
     */
    readonly renewPeriod?: string;
}

/**
 * A ROS resource type:  `ALIYUN::WAF::Instance`
 */
export class Instance extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * @Attribute EndDate: Due date of the instance
     */
    public readonly attrEndDate: any;

    /**
     * @Attribute InDebt: Instance is overdue
     */
    public readonly attrInDebt: any;

    /**
     * @Attribute InstanceId: Instance ID
     */
    public readonly attrInstanceId: any;

    /**
     * @Attribute RemainDay: Number of available days for WAF Trial version
     */
    public readonly attrRemainDay: any;

    /**
     * @Attribute SubscriptionType: Subscription type of the instance
     */
    public readonly attrSubscriptionType: any;

    /**
     * @Attribute Trial: Trial version
     */
    public readonly attrTrial: any;

    /**
     * Create a new `ALIYUN::WAF::Instance`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: InstanceProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosInstance = new RosInstance(this, id,  {
            bigScreen: props.bigScreen,
            prefessionalService: props.prefessionalService,
            extDomainPackage: props.extDomainPackage,
            logTime: props.logTime,
            renewalStatus: props.renewalStatus,
            renewPeriod: props.renewPeriod,
            period: props.period,
            exclusiveIpPackage: props.exclusiveIpPackage,
            logStorage: props.logStorage,
            subscriptionType: props.subscriptionType,
            extBandwidth: props.extBandwidth,
            wafLog: props.wafLog,
            packageCode: props.packageCode,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosInstance;
        this.attrEndDate = rosInstance.attrEndDate;
        this.attrInDebt = rosInstance.attrInDebt;
        this.attrInstanceId = rosInstance.attrInstanceId;
        this.attrRemainDay = rosInstance.attrRemainDay;
        this.attrSubscriptionType = rosInstance.attrSubscriptionType;
        this.attrTrial = rosInstance.attrTrial;
    }
}

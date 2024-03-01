import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `RosPremiumInstance`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ddospro-premiuminstance
 */
export interface RosPremiumInstanceProps {
    /**
     * @Property burstBandwidthMode: The metering method of the 95th percentile burstable clean bandwidth. Valid values:
     * 0: disables the burstable clean bandwidth feature.
     * 1: enables the burstable clean bandwidth feature and uses the daily 95th percentile metering method.
     * 2: enables the burstable clean bandwidth feature and uses the monthly 95th percentile metering method.
     */
    readonly burstBandwidthMode?: string | ros.IResolvable;
    /**
     * @Property domainCount: The number of domain names that you want to protect.
     * The value of DomainCount varies based on the value of ProductPlan.
     * If you set ProductPlan to 0, you can set DomainCount to a value that ranges from 10 to 200. The value must be a multiple of 10.
     * If you set ProductPlan to 1, you can set DomainCount to a value that ranges from 10 to 200. The value must be a multiple of 10.
     * If you set ProductPlan to 2, you do not need to specify this parameter.
     * If you set ProductPlan to 3, you can set DomainCount to a value that ranges from 10 to 200. The value must be a multiple of 10.
     */
    readonly domainCount?: number | ros.IResolvable;
    /**
     * @Property functionVersion: The function plan of the instance. Valid values:
     * 0: the Standard function plan
     * 1: the Enhanced function plan.
     */
    readonly functionVersion?: string | ros.IResolvable;
    /**
     * @Property normalBandwidth: The clean bandwidth provided by the instance. Unit: Mbit\/s.
     * The value of NormalBandwidth varies based on the value of ProductPlan.
     * If you set ProductPlan to 0, you can set NormalBandwidth to 100, 150, 200, 250, or 300.
     * If you set ProductPlan to 1, you can set NormalBandwidth to 100, 150, 200, 250, or 300.
     * If you set ProductPlan to 2, you can set NormalBandwidth to 10, 20, 30, 40, 50, 60, 70, 80, 90, or 100.
     * If you set ProductPlan to 3, you can set NormalBandwidth to 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 150, or 200.
     */
    readonly normalBandwidth?: number | ros.IResolvable;
    /**
     * @Property normalQps: The clean QPS provided by the instance.
     * The value of NormalQps varies based on the value of ProductPlan.
     * If you set ProductPlan to 0, you can set NormalQps to a value that ranges from 500 to 100000. The value must be a multiple of 100.
     * If you set ProductPlan to 1, you can set NormalQps to a value that ranges from 1000 to 100000. The value must be a multiple of 100.
     * If you set ProductPlan to 2, you do not need to specify this parameter.
     * If you set ProductPlan to 3, you can set NormalQps to a value that ranges from 500 to 100000. The value must be a multiple of 100.
     */
    readonly normalQps?: number | ros.IResolvable;
    /**
     * @Property period: The subscription period of the firewallIf PeriodUnit is Month, the valid range is 1, 2, 3, 4, 5, 6, 12, 24
     * If PeriodUnit is Year, the valid range is 1, 2
     */
    readonly period?: number | ros.IResolvable;
    /**
     * @Property periodUnit: The unit of the subscription duration. Valid values:
     * Month
     * Year
     * Default value: Month.
     */
    readonly periodUnit?: string | ros.IResolvable;
    /**
     * @Property portCount: The number of ports that you want to protect.
     * The value of PortCount varies based on the value of ProductPlan.
     * If you set ProductPlan to 0, you can set PortCount to a value that ranges from 5 to 400. The value must be a multiple of 5.
     * If you set ProductPlan to 1, you can set PortCount to a value that ranges from 5 to 400. The value must be a multiple of 5.
     * If you set ProductPlan to 2, you do not need to specify this parameter.
     * If you set ProductPlan to 3, you can set PortCount to a value that ranges from 5 to 400. The value must be a multiple of 5.
     */
    readonly portCount?: number | ros.IResolvable;
    /**
     * @Property productPlan: The mitigation plan of the instance. Valid values:
     * 0: the Insurance mitigation plan
     * 1: the Unlimited mitigation plan
     * 2: the Chinese Mainland Acceleration (CMA) mitigation plan
     * 3: the Secure Chinese Mainland Acceleration (Sec-CMA) mitigation plan
     */
    readonly productPlan?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::DDoSPro::PremiumInstance`.
 * @Note This class does not contain additional functions, so it is recommended to use the `PremiumInstance` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ddospro-premiuminstance
 */
export declare class RosPremiumInstance extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::DDoSPro::PremiumInstance";
    /**
     * @Attribute InstanceId: The ID of the instance.
     */
    readonly attrInstanceId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property burstBandwidthMode: The metering method of the 95th percentile burstable clean bandwidth. Valid values:
     * 0: disables the burstable clean bandwidth feature.
     * 1: enables the burstable clean bandwidth feature and uses the daily 95th percentile metering method.
     * 2: enables the burstable clean bandwidth feature and uses the monthly 95th percentile metering method.
     */
    burstBandwidthMode: string | ros.IResolvable | undefined;
    /**
     * @Property domainCount: The number of domain names that you want to protect.
     * The value of DomainCount varies based on the value of ProductPlan.
     * If you set ProductPlan to 0, you can set DomainCount to a value that ranges from 10 to 200. The value must be a multiple of 10.
     * If you set ProductPlan to 1, you can set DomainCount to a value that ranges from 10 to 200. The value must be a multiple of 10.
     * If you set ProductPlan to 2, you do not need to specify this parameter.
     * If you set ProductPlan to 3, you can set DomainCount to a value that ranges from 10 to 200. The value must be a multiple of 10.
     */
    domainCount: number | ros.IResolvable | undefined;
    /**
     * @Property functionVersion: The function plan of the instance. Valid values:
     * 0: the Standard function plan
     * 1: the Enhanced function plan.
     */
    functionVersion: string | ros.IResolvable | undefined;
    /**
     * @Property normalBandwidth: The clean bandwidth provided by the instance. Unit: Mbit\/s.
     * The value of NormalBandwidth varies based on the value of ProductPlan.
     * If you set ProductPlan to 0, you can set NormalBandwidth to 100, 150, 200, 250, or 300.
     * If you set ProductPlan to 1, you can set NormalBandwidth to 100, 150, 200, 250, or 300.
     * If you set ProductPlan to 2, you can set NormalBandwidth to 10, 20, 30, 40, 50, 60, 70, 80, 90, or 100.
     * If you set ProductPlan to 3, you can set NormalBandwidth to 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 150, or 200.
     */
    normalBandwidth: number | ros.IResolvable | undefined;
    /**
     * @Property normalQps: The clean QPS provided by the instance.
     * The value of NormalQps varies based on the value of ProductPlan.
     * If you set ProductPlan to 0, you can set NormalQps to a value that ranges from 500 to 100000. The value must be a multiple of 100.
     * If you set ProductPlan to 1, you can set NormalQps to a value that ranges from 1000 to 100000. The value must be a multiple of 100.
     * If you set ProductPlan to 2, you do not need to specify this parameter.
     * If you set ProductPlan to 3, you can set NormalQps to a value that ranges from 500 to 100000. The value must be a multiple of 100.
     */
    normalQps: number | ros.IResolvable | undefined;
    /**
     * @Property period: The subscription period of the firewallIf PeriodUnit is Month, the valid range is 1, 2, 3, 4, 5, 6, 12, 24
     * If PeriodUnit is Year, the valid range is 1, 2
     */
    period: number | ros.IResolvable | undefined;
    /**
     * @Property periodUnit: The unit of the subscription duration. Valid values:
     * Month
     * Year
     * Default value: Month.
     */
    periodUnit: string | ros.IResolvable | undefined;
    /**
     * @Property portCount: The number of ports that you want to protect.
     * The value of PortCount varies based on the value of ProductPlan.
     * If you set ProductPlan to 0, you can set PortCount to a value that ranges from 5 to 400. The value must be a multiple of 5.
     * If you set ProductPlan to 1, you can set PortCount to a value that ranges from 5 to 400. The value must be a multiple of 5.
     * If you set ProductPlan to 2, you do not need to specify this parameter.
     * If you set ProductPlan to 3, you can set PortCount to a value that ranges from 5 to 400. The value must be a multiple of 5.
     */
    portCount: number | ros.IResolvable | undefined;
    /**
     * @Property productPlan: The mitigation plan of the instance. Valid values:
     * 0: the Insurance mitigation plan
     * 1: the Unlimited mitigation plan
     * 2: the Chinese Mainland Acceleration (CMA) mitigation plan
     * 3: the Secure Chinese Mainland Acceleration (Sec-CMA) mitigation plan
     */
    productPlan: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosPremiumInstanceProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosProInstance`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ddospro-proinstance
 */
export interface RosProInstanceProps {
    /**
     * @Property addressType: The IP version of the IP address. Valid values: Ipv4、Ipv6
     */
    readonly addressType?: string | ros.IResolvable;
    /**
     * @Property bandwidth: The burstable protection bandwidth. Unit: Gbit\/s.
     * The burstable protection bandwidth must be greater than or equal to the basic protection bandwidth. The value of Bandwidth varies based on the value of BaseBandwidth.
     */
    readonly bandwidth?: number | ros.IResolvable;
    /**
     * @Property baseBandwidth: The basic protection bandwidth. Unit: Gbit\/s.
     * Valid values: 30, 60, 100, 300, 400, 500, and 600.
     */
    readonly baseBandwidth?: number | ros.IResolvable;
    /**
     * @Property burstBandwidthMode: The metering method of the 95th percentile burstable clean bandwidth. Valid values:
     * 0: disables the burstable clean bandwidth feature.
     * 1: enables the burstable clean bandwidth feature and uses the daily 95th percentile metering method.
     * 2: enables the burstable clean bandwidth feature and uses the monthly 95th percentile metering method.
     */
    readonly burstBandwidthMode?: string | ros.IResolvable;
    /**
     * @Property domainCount: The number of domain names that you want to protect.
     * Valid values: 50 to 2000. The value must be a multiple of 10.
     */
    readonly domainCount?: number | ros.IResolvable;
    /**
     * @Property edition: The mitigation plan of the instance. Set the value to coop, which indicates the Profession mitigation plan.
     */
    readonly edition?: string | ros.IResolvable;
    /**
     * @Property functionVersion: The function plan of the instance. Valid values:
     * 0: the Standard function plan
     * 1: the Enhanced function plan.
     */
    readonly functionVersion?: string | ros.IResolvable;
    /**
     * @Property normalQps: The clean queries per second (QPS) provided by the instance.
     * Valid values: 3000 to 100000. The value must be a multiple of 100.
     */
    readonly normalQps?: number | ros.IResolvable;
    /**
     * @Property period: The subscription period of the firewallIf PeriodUnit is Month, the valid range is 1, 2, 3, 4, 5, 6, 12, 24
     * If PeriodUnit is Year, the valid range is 1, 2
     */
    readonly period?: number | ros.IResolvable;
    /**
     * @Property periodUnit: The unit of the subscription duration. Valid values:
     * Month
     * Year
     * Default value: Month.
     */
    readonly periodUnit?: string | ros.IResolvable;
    /**
     * @Property portCount: The number of ports that you want to protect.
     * Valid values: 50 to 400. The value must be a multiple of 5.
     */
    readonly portCount?: number | ros.IResolvable;
    /**
     * @Property serviceBandwidth: The clean bandwidth provided by the instance. Unit: Mbit\/s.
     * Valid values: 100 to 5000. The value must be a multiple of 50.
     */
    readonly serviceBandwidth?: number | ros.IResolvable;
    /**
     * @Property servicePartner: The type of the protection line. Set the value to coop-line-001, which indicates the default protection line.
     */
    readonly servicePartner?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::DDoSPro::ProInstance`.
 * @Note This class does not contain additional functions, so it is recommended to use the `ProInstance` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ddospro-proinstance
 */
export declare class RosProInstance extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::DDoSPro::ProInstance";
    /**
     * @Attribute InstanceId: The ID of the instance.
     */
    readonly attrInstanceId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property addressType: The IP version of the IP address. Valid values: Ipv4、Ipv6
     */
    addressType: string | ros.IResolvable | undefined;
    /**
     * @Property bandwidth: The burstable protection bandwidth. Unit: Gbit\/s.
     * The burstable protection bandwidth must be greater than or equal to the basic protection bandwidth. The value of Bandwidth varies based on the value of BaseBandwidth.
     */
    bandwidth: number | ros.IResolvable | undefined;
    /**
     * @Property baseBandwidth: The basic protection bandwidth. Unit: Gbit\/s.
     * Valid values: 30, 60, 100, 300, 400, 500, and 600.
     */
    baseBandwidth: number | ros.IResolvable | undefined;
    /**
     * @Property burstBandwidthMode: The metering method of the 95th percentile burstable clean bandwidth. Valid values:
     * 0: disables the burstable clean bandwidth feature.
     * 1: enables the burstable clean bandwidth feature and uses the daily 95th percentile metering method.
     * 2: enables the burstable clean bandwidth feature and uses the monthly 95th percentile metering method.
     */
    burstBandwidthMode: string | ros.IResolvable | undefined;
    /**
     * @Property domainCount: The number of domain names that you want to protect.
     * Valid values: 50 to 2000. The value must be a multiple of 10.
     */
    domainCount: number | ros.IResolvable | undefined;
    /**
     * @Property edition: The mitigation plan of the instance. Set the value to coop, which indicates the Profession mitigation plan.
     */
    edition: string | ros.IResolvable | undefined;
    /**
     * @Property functionVersion: The function plan of the instance. Valid values:
     * 0: the Standard function plan
     * 1: the Enhanced function plan.
     */
    functionVersion: string | ros.IResolvable | undefined;
    /**
     * @Property normalQps: The clean queries per second (QPS) provided by the instance.
     * Valid values: 3000 to 100000. The value must be a multiple of 100.
     */
    normalQps: number | ros.IResolvable | undefined;
    /**
     * @Property period: The subscription period of the firewallIf PeriodUnit is Month, the valid range is 1, 2, 3, 4, 5, 6, 12, 24
     * If PeriodUnit is Year, the valid range is 1, 2
     */
    period: number | ros.IResolvable | undefined;
    /**
     * @Property periodUnit: The unit of the subscription duration. Valid values:
     * Month
     * Year
     * Default value: Month.
     */
    periodUnit: string | ros.IResolvable | undefined;
    /**
     * @Property portCount: The number of ports that you want to protect.
     * Valid values: 50 to 400. The value must be a multiple of 5.
     */
    portCount: number | ros.IResolvable | undefined;
    /**
     * @Property serviceBandwidth: The clean bandwidth provided by the instance. Unit: Mbit\/s.
     * Valid values: 100 to 5000. The value must be a multiple of 50.
     */
    serviceBandwidth: number | ros.IResolvable | undefined;
    /**
     * @Property servicePartner: The type of the protection line. Set the value to coop-line-001, which indicates the default protection line.
     */
    servicePartner: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosProInstanceProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}

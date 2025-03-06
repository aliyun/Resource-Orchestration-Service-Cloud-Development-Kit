import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `RosResourcePackage`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-bss-resourcepackage
 */
export interface RosResourcePackageProps {
    /**
     * @Property duration: The validity of the specified resource package. The value is the same as the Value of AvailableDuration returned by DescribeResourcePackageProduct.
     */
    readonly duration: number | ros.IResolvable;
    /**
     * @Property packageType: The type of the specified resource package. The value is the same as the value of the Code value of the ResourcePackage object returned by DescribeResourcePackageProduct.
     */
    readonly packageType: string | ros.IResolvable;
    /**
     * @Property productCode: The code of the specified product. The value is the same as the value of ProductType returned by QueryProductList.
     */
    readonly productCode: string | ros.IResolvable;
    /**
     * @Property specification: The size of the specified resource package. The value is the same as the Value of Specification returned by DescribeResourcePackageProduct.
     */
    readonly specification: string | ros.IResolvable;
    /**
     * @Property autoRenew: Whether to automatically renew the resource package. The value is true or false. Default value: false.
     */
    readonly autoRenew?: boolean | ros.IResolvable;
    /**
     * @Property autoRenewPeriod: Duration of resource packs renewals. Valid values:
     * - When AutoRenewPeriodUnit is Year: 1, 2, 3.
     * - When AutoRenewPeriodUnit is Month: 1, 2, 3, 6.
     * Default is 1.
     */
    readonly autoRenewPeriod?: number | ros.IResolvable;
    /**
     * @Property autoRenewPeriodUnit: Unit of resource pack renewals. Valid values: Month, Year. Default is Month.
     */
    readonly autoRenewPeriodUnit?: string | ros.IResolvable;
    /**
     * @Property effectiveDate: The effective date of the specified resource package. The resource package will take effect immediately if the effective date is unspecified. The date format follows the ISO8601 standard and uses UTC time. Format: yyyy-MM-ddTHH:mm:ssZ
     */
    readonly effectiveDate?: string | ros.IResolvable;
    /**
     * @Property pricingCycle: The validity of the specified resource package. Default value: Month. Valid values: Month, Year
     */
    readonly pricingCycle?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::BSS::ResourcePackage`, which is used to create a resource plan.
 * @Note This class does not contain additional functions, so it is recommended to use the `ResourcePackage` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-bss-resourcepackage
 */
export declare class RosResourcePackage extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::BSS::ResourcePackage";
    /**
     * @Attribute InstanceId: The ID of the specified instance.
     */
    readonly attrInstanceId: ros.IResolvable;
    /**
     * @Attribute OrderId: The ID of the specified order.
     */
    readonly attrOrderId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property duration: The validity of the specified resource package. The value is the same as the Value of AvailableDuration returned by DescribeResourcePackageProduct.
     */
    duration: number | ros.IResolvable;
    /**
     * @Property packageType: The type of the specified resource package. The value is the same as the value of the Code value of the ResourcePackage object returned by DescribeResourcePackageProduct.
     */
    packageType: string | ros.IResolvable;
    /**
     * @Property productCode: The code of the specified product. The value is the same as the value of ProductType returned by QueryProductList.
     */
    productCode: string | ros.IResolvable;
    /**
     * @Property specification: The size of the specified resource package. The value is the same as the Value of Specification returned by DescribeResourcePackageProduct.
     */
    specification: string | ros.IResolvable;
    /**
     * @Property autoRenew: Whether to automatically renew the resource package. The value is true or false. Default value: false.
     */
    autoRenew: boolean | ros.IResolvable | undefined;
    /**
     * @Property autoRenewPeriod: Duration of resource packs renewals. Valid values:
     * - When AutoRenewPeriodUnit is Year: 1, 2, 3.
     * - When AutoRenewPeriodUnit is Month: 1, 2, 3, 6.
     * Default is 1.
     */
    autoRenewPeriod: number | ros.IResolvable | undefined;
    /**
     * @Property autoRenewPeriodUnit: Unit of resource pack renewals. Valid values: Month, Year. Default is Month.
     */
    autoRenewPeriodUnit: string | ros.IResolvable | undefined;
    /**
     * @Property effectiveDate: The effective date of the specified resource package. The resource package will take effect immediately if the effective date is unspecified. The date format follows the ISO8601 standard and uses UTC time. Format: yyyy-MM-ddTHH:mm:ssZ
     */
    effectiveDate: string | ros.IResolvable | undefined;
    /**
     * @Property pricingCycle: The validity of the specified resource package. Default value: Month. Valid values: Month, Year
     */
    pricingCycle: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosResourcePackageProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosWaitOrder`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-bss-waitorder
 */
export interface RosWaitOrderProps {
    /**
     * @Property orderIds: A list of order ids.
     */
    readonly orderIds: Array<any | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property cancelOnDelete: Cancel order where delete the resource. Ignore the paid order. Default true
     */
    readonly cancelOnDelete?: boolean | ros.IResolvable;
    /**
     * @Property waitForOrderProduced: Wait util all orders related ROS resources are produced.
     * Support ALIYUN::ECS::PrepayInstance, ALIYUN::RDS::PrepayDBInstance, ALIYUN::REDIS::PrepayInstance, ALIYUN::SLB::LoadBalancer, ALIYUN::VPC::EIP, ALIYUN::VPC::VpnGateway.
     */
    readonly waitForOrderProduced?: boolean | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::BSS::WaitOrder`, which is used to wait for orders to be completed.
 * @Note This class does not contain additional functions, so it is recommended to use the `WaitOrder` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-bss-waitorder
 */
export declare class RosWaitOrder extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::BSS::WaitOrder";
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property orderIds: A list of order ids.
     */
    orderIds: Array<any | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property cancelOnDelete: Cancel order where delete the resource. Ignore the paid order. Default true
     */
    cancelOnDelete: boolean | ros.IResolvable | undefined;
    /**
     * @Property waitForOrderProduced: Wait util all orders related ROS resources are produced.
     * Support ALIYUN::ECS::PrepayInstance, ALIYUN::RDS::PrepayDBInstance, ALIYUN::REDIS::PrepayInstance, ALIYUN::SLB::LoadBalancer, ALIYUN::VPC::EIP, ALIYUN::VPC::VpnGateway.
     */
    waitForOrderProduced: boolean | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosWaitOrderProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}

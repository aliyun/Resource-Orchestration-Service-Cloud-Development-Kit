import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `ALIYUN::BSS::ResourcePackage`
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
     * @Property effectiveDate: The effective date of the specified resource package. The resource package will take effect immediately if the effective date is unspecified. The date format follows the ISO8601 standard and uses UTC time. Format: yyyy-MM-ddTHH:mm:ssZ
     */
    readonly effectiveDate?: string | ros.IResolvable;
    /**
     * @Property pricingCycle: The validity of the specified resource package. Default value: Month. Valid values: Month, Year
     */
    readonly pricingCycle?: string | ros.IResolvable;
}
/**
 * A ROS template type:  `ALIYUN::BSS::ResourcePackage`
 */
export declare class RosResourcePackage extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::BSS::ResourcePackage";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
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
     * @Property effectiveDate: The effective date of the specified resource package. The resource package will take effect immediately if the effective date is unspecified. The date format follows the ISO8601 standard and uses UTC time. Format: yyyy-MM-ddTHH:mm:ssZ
     */
    effectiveDate: string | ros.IResolvable | undefined;
    /**
     * @Property pricingCycle: The validity of the specified resource package. Default value: Month. Valid values: Month, Year
     */
    pricingCycle: string | ros.IResolvable | undefined;
    /**
     * Create a new `ALIYUN::BSS::ResourcePackage`.
     *
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
 * Properties for defining a `ALIYUN::BSS::WaitOrder`
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
 * A ROS template type:  `ALIYUN::BSS::WaitOrder`
 */
export declare class RosWaitOrder extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::BSS::WaitOrder";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
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
     * Create a new `ALIYUN::BSS::WaitOrder`.
     *
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
//# sourceMappingURL=bss.generated.d.ts.map
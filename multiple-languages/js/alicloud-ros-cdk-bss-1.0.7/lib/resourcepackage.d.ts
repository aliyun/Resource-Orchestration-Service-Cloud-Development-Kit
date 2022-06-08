import * as ros from '@alicloud/ros-cdk-core';
import { RosResourcePackage } from './bss.generated';
export { RosResourcePackage as ResourcePackageProperty };
/**
 * Properties for defining a `ALIYUN::BSS::ResourcePackage`
 */
export interface ResourcePackageProps {
    /**
     * Property duration: The validity of the specified resource package. The value is the same as the Value of AvailableDuration returned by DescribeResourcePackageProduct.
     */
    readonly duration: number | ros.IResolvable;
    /**
     * Property packageType: The type of the specified resource package. The value is the same as the value of the Code value of the ResourcePackage object returned by DescribeResourcePackageProduct.
     */
    readonly packageType: string | ros.IResolvable;
    /**
     * Property productCode: The code of the specified product. The value is the same as the value of ProductType returned by QueryProductList.
     */
    readonly productCode: string | ros.IResolvable;
    /**
     * Property specification: The size of the specified resource package. The value is the same as the Value of Specification returned by DescribeResourcePackageProduct.
     */
    readonly specification: string | ros.IResolvable;
    /**
     * Property effectiveDate: The effective date of the specified resource package. The resource package will take effect immediately if the effective date is unspecified. The date format follows the ISO8601 standard and uses UTC time. Format: yyyy-MM-ddTHH:mm:ssZ
     */
    readonly effectiveDate?: string | ros.IResolvable;
    /**
     * Property pricingCycle: The validity of the specified resource package. Default value: Month. Valid values: Month, Year
     */
    readonly pricingCycle?: string | ros.IResolvable;
}
/**
 * A ROS resource type:  `ALIYUN::BSS::ResourcePackage`
 */
export declare class ResourcePackage extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute InstanceId: The ID of the specified instance.
     */
    readonly attrInstanceId: ros.IResolvable;
    /**
     * Attribute OrderId: The ID of the specified order.
     */
    readonly attrOrderId: ros.IResolvable;
    /**
     * Create a new `ALIYUN::BSS::ResourcePackage`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ResourcePackageProps, enableResourcePropertyConstraint?: boolean);
}
//# sourceMappingURL=resourcepackage.d.ts.map
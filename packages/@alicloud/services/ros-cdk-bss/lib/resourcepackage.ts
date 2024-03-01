import * as ros from '@alicloud/ros-cdk-core';
import { RosResourcePackage } from './bss.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosResourcePackage as ResourcePackageProperty };

/**
 * Properties for defining a `ResourcePackage`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-bss-resourcepackage
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
 * This class encapsulates and extends the ROS resource type `ALIYUN::BSS::ResourcePackage`, which is used to create an instance that uses a resource plan.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosResourcePackage`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-bss-resourcepackage
 */
export class ResourcePackage extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: ResourcePackageProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute InstanceId: The ID of the specified instance.
     */
    public readonly attrInstanceId: ros.IResolvable;

    /**
     * Attribute OrderId: The ID of the specified order.
     */
    public readonly attrOrderId: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ResourcePackageProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosResourcePackage = new RosResourcePackage(this, id,  {
            productCode: props.productCode,
            pricingCycle: props.pricingCycle,
            packageType: props.packageType,
            specification: props.specification,
            duration: props.duration,
            effectiveDate: props.effectiveDate,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosResourcePackage;
        this.attrInstanceId = rosResourcePackage.attrInstanceId;
        this.attrOrderId = rosResourcePackage.attrOrderId;
    }
}

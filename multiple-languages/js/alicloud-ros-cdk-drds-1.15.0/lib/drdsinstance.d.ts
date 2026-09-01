import * as ros from '@alicloud/ros-cdk-core';
import { RosDrdsInstance } from './drds.generated';
export { RosDrdsInstance as DrdsInstanceProperty };
/**
 * Properties for defining a `DrdsInstance`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-drds-drdsinstance
 */
export interface DrdsInstanceProps {
    /**
     * Property description: Specifies the description of the instance. The description must meet the
     * following requirements:
     * *   The description cannot contain the prefix http:\/\/ or https:\/\/.
     * *   The description must start with a letter or a Chinese character, and can
     * contain uppercase and lowercase letters, Chinese characters, digits, underscores
     * (_), and hyphens (-).
     * *   The description must be 2 to 256 characters in length.
     */
    readonly description: string | ros.IResolvable;
    /**
     * Property instanceSeries: Specifies the instance type of the instance. Valid values:
     * *   drds.sn2.4c16g: The instance is of the Starter Edition.
     * *   drds.sn2.8c32g: The instance is of the Standard Edition
     * *   drds.sn2.16c64g: The instance is of the Enterprise Edition.
     */
    readonly instanceSeries: string | ros.IResolvable;
    /**
     * Property payType: Specifies the billing method of the instance. Valid values:
     * *   drdsPre: The instance uses the subscription billing method.
     * *   drdsPost: The instance uses the pay-as-you-go billing method.
     * *   drdsRo: By default, the pay-as-you-go billing method is used when you create
     * read-only instances.
     */
    readonly payType: string | ros.IResolvable;
    /**
     * Property specification: Specifies the specification code of the instance. The value consists of the
     * instance type and the specified instance specification. For example, you can set
     * the value to drds.sn2.4c16g.8c32g.
     */
    readonly specification: string | ros.IResolvable;
    /**
     * Property type: Specifies the type of the instance. Set the value to PRIVATE. The value PRIVATE
     * specifies that the instance is a dedicated instance.
     * >  You can also set the value to 1 to specify that the instance is a dedicated
     * instance.
     */
    readonly type: string | ros.IResolvable;
    /**
     * Property zoneId: Availability zone, an available zone belongs to a certain zone, such as Hangzhou Availability Zone A (cn-hangzhou-a) belongs to the region Hangzhou (cn-hangzhou).
     */
    readonly zoneId: string | ros.IResolvable;
    /**
     * Property duration: The number of cycles ordered. When PricingCycle=year, the value is 1-3; when PricingCycle=month, the value is 1-9. The parameter takes effect when the payment type is drdsPre.
     */
    readonly duration?: number | ros.IResolvable;
    /**
     * Property isAutoRenew: Specifies whether to enable automatic renewal. Valid values:
     * *   true: If the PricingCycle parameter is set to month, the subscription is
     * automatically renewed for one month. If the PricingCycle parameter is set to
     * year, the subscription is automatically renewed for one year.
     * *   false: The auto-renewal feature is disabled for the instance.
     * >  This parameter only takes effect when the PayType parameter is set to drdsPre.
     */
    readonly isAutoRenew?: boolean | ros.IResolvable;
    /**
     * Property mySqlVersion: Specifies the MySQL version that is supported by the instance. Valid values:
     * *   5: The instance is fully compatible with MySQL 5.x. This value is the default
     * value.
     * *   8: The instance is fully compatible with MySQL 8.0.
     * >  This parameter only takes effect when you create a primary instance. By
     * default, the MySQL version of the read-only instance is the same as that of the
     * primary instance.
     */
    readonly mySqlVersion?: string | ros.IResolvable;
    /**
     * Property pricingCycle: Specifies the unit of the subscription duration of the subscription instance.
     * Valid values:
     * *   year: The unit of the subscription duration is year.
     * *   month: The unit of the subscription duration is month.
     * >  This parameter is required if you set the PayType parameter to drdsPre.
     */
    readonly pricingCycle?: string | ros.IResolvable;
    /**
     * Property resourceGroupId: Resource group id.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosDrdsInstance.TagsProperty[];
    /**
     * Property vpcId: Virtual private network ID, must be specified when creating a DRDS for VPC network type
     */
    readonly vpcId?: string | ros.IResolvable;
    /**
     * Property vswitchId: Virtual switch ID, must be specified when creating a DRDS for VPC network type
     */
    readonly vswitchId?: string | ros.IResolvable;
}
/**
 * Represents a `DrdsInstance`.
 */
export interface IDrdsInstance extends ros.IResource {
    readonly props: DrdsInstanceProps;
    /**
     * Attribute Arn: The Alibaba Cloud Resource Name (ARN).
     */
    readonly attrArn: ros.IResolvable | string;
    /**
     * Attribute DrdsInstanceId: instance id
     */
    readonly attrDrdsInstanceId: ros.IResolvable | string;
    /**
     * Attribute InternetEndpoint: Public endpoint
     */
    readonly attrInternetEndpoint: ros.IResolvable | string;
    /**
     * Attribute IntranetEndpoint: VPC endpoint
     */
    readonly attrIntranetEndpoint: ros.IResolvable | string;
    /**
     * Attribute OrderId: order number
     */
    readonly attrOrderId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::DRDS::DrdsInstance`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosDrdsInstance`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-drds-drdsinstance
 */
export declare class DrdsInstance extends ros.Resource implements IDrdsInstance {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: DrdsInstanceProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute Arn: The Alibaba Cloud Resource Name (ARN).
     */
    readonly attrArn: ros.IResolvable | string;
    /**
     * Attribute DrdsInstanceId: instance id
     */
    readonly attrDrdsInstanceId: ros.IResolvable | string;
    /**
     * Attribute InternetEndpoint: Public endpoint
     */
    readonly attrInternetEndpoint: ros.IResolvable | string;
    /**
     * Attribute IntranetEndpoint: VPC endpoint
     */
    readonly attrIntranetEndpoint: ros.IResolvable | string;
    /**
     * Attribute OrderId: order number
     */
    readonly attrOrderId: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: DrdsInstanceProps, enableResourcePropertyConstraint?: boolean);
}

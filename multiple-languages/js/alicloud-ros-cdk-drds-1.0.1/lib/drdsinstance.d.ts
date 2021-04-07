import * as ros from '@alicloud/ros-cdk-core';
import { RosDrdsInstance } from './drds.generated';
export { RosDrdsInstance as DrdsInstanceProperty };
/**
 * Properties for defining a `ALIYUN::DRDS::DrdsInstance`
 */
export interface DrdsInstanceProps {
    /**
     * Property description: Description of the DRDS instance, 2-128 characters
     */
    readonly description: string | ros.IResolvable;
    /**
     * Property instanceSeries: drds.sn1.4c8g Starter Edition; drds.sn1.8c16g Standard Edition; drds.sn1.16c32g Business Edition; drds.sn1.32c64g Ultimate Edition
     */
    readonly instanceSeries: string | ros.IResolvable;
    /**
     * Property payType: For the type of payment, see "Payment Type Parameter Table"
     */
    readonly payType: string | ros.IResolvable;
    /**
     * Property quantity: Purchase quantity
     */
    readonly quantity: number | ros.IResolvable;
    /**
     * Property specification: The example specification, for example, drds.sn1.4c8g.8C16G, consists of the DRDS instance series (drds.sn1.4c8g) plus a specific example specification (8C16G). For the DRDS instance specification value range, see: Distributed Relational Database Service Specifications and Pricing
     */
    readonly specification: string | ros.IResolvable;
    /**
     * Property type: Instance type, instance type 0 - shared instance 1 - exclusive instance, in addition, this parameter can also pass PRIVATE and PUBLIC to represent exclusive instance and shared instance respectively
     */
    readonly type: string | ros.IResolvable;
    /**
     * Property zoneId: Availability zone, an available zone belongs to a certain zone, such as Hangzhou Availability Zone A (cn-hangzhou-a) belongs to the region Hangzhou (cn-hangzhou)
     */
    readonly zoneId: string | ros.IResolvable;
    /**
     * Property duration: The number of cycles ordered. When PricingCycle=year, the value is 1-3; when PricingCycle=month, the value is 1-9. The parameter takes effect when the payment type is drdsPre.
     */
    readonly duration?: number | ros.IResolvable;
    /**
     * Property isAutoRenew: Whether to renew the fee automatically, if it is purchased on a monthly basis, it will automatically renew for one month, and if it is purchased on an annual basis, it will automatically renew for one year. The parameter takes effect when the payment type is drdsPre.
     */
    readonly isAutoRenew?: boolean | ros.IResolvable;
    /**
     * Property mySqlVersion: The MySQL protocol version supported by DRDS. Valid values: 5 and 8. Default value: 5. This parameter is valid only when the primary instance is created. The read-only instance is the same as the primary instance by default.
     */
    readonly mySqlVersion?: string | ros.IResolvable;
    /**
     * Property pricingCycle: The unit of the order period, year: year, month: month. The parameter takes effect when the payment type is drdsPre.
     */
    readonly pricingCycle?: string | ros.IResolvable;
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
 * A ROS resource type:  `ALIYUN::DRDS::DrdsInstance`
 */
export declare class DrdsInstance extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute DrdsInstanceId: instance id
     */
    readonly attrDrdsInstanceId: ros.IResolvable;
    /**
     * Attribute InternetEndpoint: Public endpoint
     */
    readonly attrInternetEndpoint: ros.IResolvable;
    /**
     * Attribute IntranetEndpoint: VPC endpoint
     */
    readonly attrIntranetEndpoint: ros.IResolvable;
    /**
     * Attribute OrderId: order number
     */
    readonly attrOrderId: ros.IResolvable;
    /**
     * Create a new `ALIYUN::DRDS::DrdsInstance`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: DrdsInstanceProps, enableResourcePropertyConstraint?: boolean);
}

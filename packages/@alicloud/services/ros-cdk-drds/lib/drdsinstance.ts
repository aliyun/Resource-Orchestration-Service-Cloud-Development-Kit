import * as ros from '@alicloud/ros-cdk-core';
import { RosDrdsInstance } from './drds.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosDrdsInstance as DrdsInstanceProperty };

/**
 * Properties for defining a `DrdsInstance`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-drds-drdsinstance
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
 * This class encapsulates and extends the ROS resource type `ALIYUN::DRDS::DrdsInstance`, which is used to create a Distributed Relational Database Service (DRDS) instance of specific specifications.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosDrdsInstance`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-drds-drdsinstance
 */
export class DrdsInstance extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: DrdsInstanceProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute DrdsInstanceId: instance id
     */
    public readonly attrDrdsInstanceId: ros.IResolvable;

    /**
     * Attribute InternetEndpoint: Public endpoint
     */
    public readonly attrInternetEndpoint: ros.IResolvable;

    /**
     * Attribute IntranetEndpoint: VPC endpoint
     */
    public readonly attrIntranetEndpoint: ros.IResolvable;

    /**
     * Attribute OrderId: order number
     */
    public readonly attrOrderId: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: DrdsInstanceProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosDrdsInstance = new RosDrdsInstance(this, id,  {
            description: props.description,
            zoneId: props.zoneId,
            resourceGroupId: props.resourceGroupId,
            pricingCycle: props.pricingCycle,
            instanceSeries: props.instanceSeries,
            specification: props.specification,
            duration: props.duration,
            payType: props.payType,
            vswitchId: props.vswitchId,
            type: props.type,
            mySqlVersion: props.mySqlVersion === undefined || props.mySqlVersion === null ? '5' : props.mySqlVersion,
            vpcId: props.vpcId,
            isAutoRenew: props.isAutoRenew,
            tags: props.tags,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosDrdsInstance;
        this.attrDrdsInstanceId = rosDrdsInstance.attrDrdsInstanceId;
        this.attrInternetEndpoint = rosDrdsInstance.attrInternetEndpoint;
        this.attrIntranetEndpoint = rosDrdsInstance.attrIntranetEndpoint;
        this.attrOrderId = rosDrdsInstance.attrOrderId;
    }
}

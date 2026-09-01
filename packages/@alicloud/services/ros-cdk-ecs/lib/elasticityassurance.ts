import * as ros from '@alicloud/ros-cdk-core';
import { RosElasticityAssurance } from './ecs.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosElasticityAssurance as ElasticityAssuranceProperty };

/**
 * Properties for defining a `ElasticityAssurance`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-elasticityassurance
 */
export interface ElasticityAssuranceProps {

    /**
     * Property instanceAmount: The total number of instances for which to reserve capacity of an instance type.
     * Valid values: 1 to 1000.
     */
    readonly instanceAmount: number | ros.IResolvable;

    /**
     * Property instanceTypes: Instance type. Currently, an elasticity assurance can be created to reserve the capacity of a single instance type.
     */
    readonly instanceTypes: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * Property zoneId: The zone ID of the elasticity assurance. Currently, an elasticity assurance can be used to reserve resources within a single zone.
     */
    readonly zoneId: string | ros.IResolvable;

    /**
     * Property autoRenew: Specifies whether to enable auto-renewal for the elasticity assurance. Valid
     * values:
     * - true
     * - false
     * Default value: false.
     */
    readonly autoRenew?: boolean | ros.IResolvable;

    /**
     * Property autoRenewPeriod: The auto-renewal period. Unit: month. Valid values: 1, 2, 3, 6, 12, 24, and 36.
     * - Default value when `PeriodUnit` is set to Month: 1.
     * - Default value when `PeriodUnit` is set to Year: 12.
     * > If you set `AutoRenew` to `true`, you must specify this parameter.
     */
    readonly autoRenewPeriod?: number | ros.IResolvable;

    /**
     * Property description: The description of the elasticity assurance. The description must be 2 to 256 characters in length and cannot start with http:\/\/ or https:\/\/.
     * This parameter is empty by default.
     */
    readonly description?: string | ros.IResolvable;

    /**
     * Property instanceCpuCoreCount: > This parameter is no longer used.
     */
    readonly instanceCpuCoreCount?: number | ros.IResolvable;

    /**
     * Property period: The validity period of the elasticity assurance. The unit of the validity period
     * is determined by the value of `PeriodUnit`. Specifies whether to check the image
     * used by the instance supports hot migration. Valid values:
     * - When the value of `PeriodUnit` is `Month`, the valid values are 1, 2, 3, 4, 5,
     * 6, 7, 8, and 9.
     * - When the value of `PeriodUnit` is `Year`, the valid values are 1, 2, 3, 4, and
     * 5.
     * - When the value of `PeriodUnit` is `Day`, the valid values are 1 to 365.
     * Default value: 1
     */
    readonly period?: number | ros.IResolvable;

    /**
     * Property periodUnit: The unit of the validity period of the elasticity assurance. Valid values:
     * - Month
     * - Year
     * - Day
     * \*\*
     * Note If you set `PeriodUnit` to `Day`, you must specify RecurrenceRules to create
     * a time-segmented elasticity assurance.
     * Default value: Year.
     */
    readonly periodUnit?: string | ros.IResolvable;

    /**
     * Property privatePoolOptions:
     */
    readonly privatePoolOptions?: RosElasticityAssurance.PrivatePoolOptionsProperty | ros.IResolvable;

    /**
     * Property recurrenceRules: The assurance schedules based on which the capacity reservation takes effect.
     * > Time-segmented elasticity assurances are available only in specific regions and
     * to specific users. To use time-segmented elasticity assurances, submit a ticket.
     */
    readonly recurrenceRules?: Array<RosElasticityAssurance.RecurrenceRulesProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * Property resourceGroupId: The ID of the resource group to which to assign the elasticity assurance.
     */
    readonly resourceGroupId?: string | ros.IResolvable;

    /**
     * Property startTime: The time when the elasticity assurance takes effect. The default value is the time when the CreateElasticityAssurance operation is called to create the elasticity assurance. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC. For more information, see ISO 8601.
     */
    readonly startTime?: string | ros.IResolvable;

    /**
     * Property tags:
     */
    readonly tags?: RosElasticityAssurance.TagsProperty[];
}

/**
 * Represents a `ElasticityAssurance`.
 */
export interface IElasticityAssurance extends ros.IResource {
    readonly props: ElasticityAssuranceProps;

    /**
     * Attribute PrivatePoolOptionsId: The ID of the elasticity assurance.
     */
    readonly attrPrivatePoolOptionsId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ECS::ElasticityAssurance`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosElasticityAssurance`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-elasticityassurance
 */
export class ElasticityAssurance extends ros.Resource implements IElasticityAssurance {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: ElasticityAssuranceProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute PrivatePoolOptionsId: The ID of the elasticity assurance.
     */
    public readonly attrPrivatePoolOptionsId: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ElasticityAssuranceProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosElasticityAssurance = new RosElasticityAssurance(this, id,  {
            autoRenewPeriod: props.autoRenewPeriod,
            description: props.description,
            zoneId: props.zoneId,
            resourceGroupId: props.resourceGroupId,
            autoRenew: props.autoRenew,
            startTime: props.startTime,
            period: props.period,
            recurrenceRules: props.recurrenceRules,
            instanceCpuCoreCount: props.instanceCpuCoreCount,
            instanceAmount: props.instanceAmount,
            privatePoolOptions: props.privatePoolOptions,
            instanceTypes: props.instanceTypes,
            tags: props.tags,
            periodUnit: props.periodUnit,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosElasticityAssurance;
        this.attrPrivatePoolOptionsId = rosElasticityAssurance.attrPrivatePoolOptionsId;
    }
}

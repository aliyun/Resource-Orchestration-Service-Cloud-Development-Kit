import * as ros from '@alicloud/ros-cdk-core';
import { RosElasticityAssurance } from './ecs.generated';
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
     * Property description: The description of the elasticity assurance. The description must be 2 to 256 characters in length and cannot start with http:\/\/ or https:\/\/.
     * This parameter is empty by default.
     */
    readonly description?: string | ros.IResolvable;
    /**
     * Property period: The effective duration of the elasticity assurance. The unit of the effective duration is determined by the PeriodUnit value. Valid values:
     * When the PeriodUnit parameter is set to Month, the valid values are 1, 2, 3, 4, 5, 6, 7, 8, and 9.
     * When the PeriodUnit parameter is set to Year, the valid values are 1, 2, 3, 4, and 5.
     * Default value: 1.
     */
    readonly period?: number | ros.IResolvable;
    /**
     * Property periodUnit: The unit of the effective duration of the elasticity assurance. Valid values:
     * Month
     * Year
     * Default value: Year.
     */
    readonly periodUnit?: string | ros.IResolvable;
    /**
     * Property privatePoolOptions:
     */
    readonly privatePoolOptions?: RosElasticityAssurance.PrivatePoolOptionsProperty | ros.IResolvable;
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
 * This class encapsulates and extends the ROS resource type `ALIYUN::ECS::ElasticityAssurance`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosElasticityAssurance`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-elasticityassurance
 */
export declare class ElasticityAssurance extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: ElasticityAssuranceProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute PrivatePoolOptionsId: The ID of the elasticity assurance.
     */
    readonly attrPrivatePoolOptionsId: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ElasticityAssuranceProps, enableResourcePropertyConstraint?: boolean);
}

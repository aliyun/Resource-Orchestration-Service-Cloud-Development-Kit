import * as ros from '@alicloud/ros-cdk-core';
import { RosRecommendInstanceTypes } from './ecs.generated';
export { RosRecommendInstanceTypes as RecommendInstanceTypesProperty };
/**
 * Properties for defining a `DATASOURCE::ECS::RecommendInstanceTypes`
 */
export interface RecommendInstanceTypesProps {
    /**
     * Property cores: The number of vCPUs of the instance.
     * Note If the Cores and Memory parameters are both specified, all instance types that offer the vCPUs and memory size specified by the parameters are matched.
     */
    readonly cores?: number | ros.IResolvable;
    /**
     * Property instanceChargeType: The billing method of the instances of the instance type. Valid values:
     * PrePaid: subscription
     * PostPaid: pay-as-you-go
     * Default value: PostPaid.
     */
    readonly instanceChargeType?: string | ros.IResolvable;
    /**
     * Property instanceFamilyLevel: The level of the instance family. Valid values: EntryLevel, EnterpriseLevel, CreditEntryLevel.
     */
    readonly instanceFamilyLevel?: string | ros.IResolvable;
    /**
     * Property instanceType: The specified instance type. For more information, see Instance families or call ECS DescribeInstanceTypes operation to query the most recent instance type list.
     * Note If the InstanceType parameter is specified, none of the Cores and Memory parameters can be specified.
     */
    readonly instanceType?: string | ros.IResolvable;
    /**
     * Property instanceTypeFamilies: The list of instance family to be filtered out. You can also call ECS DescribeInstanceTypeFamilies operation to query the list of instance families.
     */
    readonly instanceTypeFamilies?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * Property ioOptimized: Specifies whether to match I/O optimized instances. The IoOptimized parameter cannot be specified when the instance is not I/O optimized. Valid values:
     * optimized: matches I/O optimized instances.
     * none: matches non-I/O optimized instances.
     * Default value: optimized.
     * If you query alternative instance types for retired instance types, this parameter is set to none by default.
     * Default value: none.
     */
    readonly ioOptimized?: string | ros.IResolvable;
    /**
     * Property maxPrice: The maximum hourly price for pay-as-you-go instances or preemptible instances.
     * Note If this parameter is specified, the SpotStrategy parameter must be set to SpotWithPriceLimit.
     */
    readonly maxPrice?: number | ros.IResolvable;
    /**
     * Property memory: The memory size of the instance. Unit: GiB.
     * Note If the Cores and Memory parameters are both specified, all instance types that offer the vCPUs and memory size specified by the parameters are matched.
     */
    readonly memory?: number | ros.IResolvable;
    /**
     * Property priorityStrategy: The policy for recommending instance types. Valid values:
     * InventoryFirst: Instance types are recommended in descending order based on resource availability.
     * PriceFirst: Instance types are recommended in ascending order based on hourly price per vCPU.
     * NewProductFirst: The latest instance types are recommended first.
     * Default value: InventoryFirst.
     */
    readonly priorityStrategy?: string | ros.IResolvable;
    /**
     * Property scene: Specifies the scenario in which the instance type is recommended. Valid values:
     * UPGRADE: instance type upgrade or downgrade
     * CREATE: instance creation
     * Default value: CREATE.
     */
    readonly scene?: string | ros.IResolvable;
    /**
     * Property spotStrategy: The bidding policy of preemptible instances. Valid values:
     * NoSpot: applies to regular pay-as-you-go instances.
     * SpotWithPriceLimit: applies to preemptible instances that have user-defined maximum hourly prices.
     * SpotAsPriceGo: applies to preemptible instances that are of the market price at the time of purchase.
     * Note If the SpotStrategy parameter is specified, the InstanceChargeType parameter must be set to PostPaid.
     * Default value: NoSpot.
     */
    readonly spotStrategy?: string | ros.IResolvable;
    /**
     * Property systemDiskCategory: The category of the system disk. Valid values:
     * cloud_efficiency: ultra disk
     * cloud_ssd: standard SSD
     * cloud_essd: enhanced SSD (ESSD)
     * cloud: basic disk
     * For non-I/O optimized instances, the default value is cloud.
     * For I/O optimized instances, the default value is cloud_efficiency.
     */
    readonly systemDiskCategory?: string | ros.IResolvable;
    /**
     * Property zoneId: The zone ID of the alternative instance types. You can call ECS DescribeZones operation to query the most recent zone list.When you specify this parameter, we recommend that you set ZoneMatchMode to the default value Include. This value indicates that instance types in the zone specified by ZoneId are preferentially recommended, and instance types in other zones in the same region are also listed.
     */
    readonly zoneId?: string | ros.IResolvable;
    /**
     * Property zoneMatchMode: Specifies which alternative instance types are recommended. Valid values:
     * Strict: recommends only alternative instance types in the zone specified by ZoneId.
     * Include: recommends all instance types in all the zones in the same region as the specified instance type.
     * When ZoneId is specified, the default value of this parameter is Strict. This value indicates that only alternative instance types in the zone specified by ZoneId are recommended.
     */
    readonly zoneMatchMode?: string | ros.IResolvable;
}
/**
 * A ROS resource type:  `DATASOURCE::ECS::RecommendInstanceTypes`
 */
export declare class RecommendInstanceTypes extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute InstanceTypeIds: The list of instance type ids. Note that instance type ids are not unique.
     */
    readonly attrInstanceTypeIds: ros.IResolvable;
    /**
     * Attribute InstanceTypes: The list of instance types, including information such as cores and memory.
     */
    readonly attrInstanceTypes: ros.IResolvable;
    /**
     * Create a new `DATASOURCE::ECS::RecommendInstanceTypes`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props?: RecommendInstanceTypesProps, enableResourcePropertyConstraint?: boolean);
}

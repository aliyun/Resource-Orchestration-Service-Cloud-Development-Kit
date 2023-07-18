import * as ros from '@alicloud/ros-cdk-core';
import { RosZones } from './ecs.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosZones as ZonesProperty };

/**
 * Properties for defining a `DATASOURCE::ECS::Zones`
 */
export interface ZonesProps {

    /**
     * Property dataDiskCategory: The category of the data disk. Valid values:
     * cloud: basic disk
     * cloud_efficiency: ultra disk
     * cloud_ssd: standard SSD
     * ephemeral_ssd: local SSD
     * cloud_essd: enhanced SSD (ESSD)
     */
    readonly dataDiskCategory?: string | ros.IResolvable;

    /**
     * Property instanceChargeType: The billing method of the resource. For more information, see Billing overview. Valid values:
     * PrePaid: subscription
     * PostPaid: pay-as-you-go
     * Default value: PostPaid.
     */
    readonly instanceChargeType?: string | ros.IResolvable;

    /**
     * Property instanceType: The instance type.
     */
    readonly instanceType?: string | ros.IResolvable;

    /**
     * Property ioOptimized: Specifies whether the instance is I/O optimized. Valid values:
     * none: non-I/O optimized
     * optimized: I/O optimized
     * Default value: optimized.
     */
    readonly ioOptimized?: string | ros.IResolvable;

    /**
     * Property resourceType: The type of the resource. Valid values:
     * instance: ECS instance
     * disk: cloud disk
     * reservedinstance: reserved instance
     * ddh: dedicated host
     */
    readonly resourceType?: string | ros.IResolvable;

    /**
     * Property systemDiskCategory: The category of the system disk. Valid values:
     * cloud: basic disk
     * cloud_efficiency: ultra disk
     * cloud_ssd: standard SSD
     * ephemeral_ssd: local SSD
     * cloud_essd: enhanced SSD (ESSD)
     */
    readonly systemDiskCategory?: string | ros.IResolvable;
}

/**
 * A ROS resource type:  `DATASOURCE::ECS::Zones`
 */
export class Zones extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Attribute ZoneIds: The list of zone IDs.
     */
    public readonly attrZoneIds: ros.IResolvable;

    /**
     * Attribute Zones: The list of zones.
     */
    public readonly attrZones: ros.IResolvable;

    /**
     * Create a new `DATASOURCE::ECS::Zones`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ZonesProps = {}, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosZones = new RosZones(this, id,  {
            ioOptimized: props.ioOptimized,
            instanceChargeType: props.instanceChargeType,
            resourceType: props.resourceType,
            dataDiskCategory: props.dataDiskCategory,
            instanceType: props.instanceType,
            systemDiskCategory: props.systemDiskCategory,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosZones;
        this.attrZoneIds = rosZones.attrZoneIds;
        this.attrZones = rosZones.attrZones;
    }
}

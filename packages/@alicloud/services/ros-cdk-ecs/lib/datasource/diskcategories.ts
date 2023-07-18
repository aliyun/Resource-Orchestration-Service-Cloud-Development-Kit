import * as ros from '@alicloud/ros-cdk-core';
import { RosDiskCategories } from './ecs.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosDiskCategories as DiskCategoriesProperty };

/**
 * Properties for defining a `DATASOURCE::ECS::DiskCategories`
 */
export interface DiskCategoriesProps {

    /**
     * Property type: The resource type to query.
     * If you set Type to data,you can specify the InstanceType parameter to disk.
     * If you set Type to system, you must specify the InstanceType parameter.
     * Valid values:
     * system: system disk
     * data: data disk
     */
    readonly type: string | ros.IResolvable;

    /**
     * Property zoneId: The ID of the zone for which to query resources.
     */
    readonly zoneId: string | ros.IResolvable;

    /**
     * Property dataDiskCategory: The category of the data disk. Valid values: 
     * cloud: basic disk
     * cloud_efficiency: ultra disk
     * cloud_ssd: standard SSD
     * ephemeral_ssd: local SSD
     * cloud_essd: ESSD
     */
    readonly dataDiskCategory?: string | ros.IResolvable;

    /**
     * Property instanceType: The instance type. For more information,see Instance families or call the DescribeInstanceTypes,operation to query the most recent instance type list.
     * When the Type parameter is set to system or data,you must set the InstanceType parameter.
     */
    readonly instanceType?: string | ros.IResolvable;

    /**
     * Property systemDiskCategory: The category of the system disk. Valid values: 
     * cloud: basic disk
     * cloud_efficiency: ultra disk
     * cloud_ssd: standard SSD
     * ephemeral_ssd: local SSD
     * cloud_essd: ESSD
     */
    readonly systemDiskCategory?: string | ros.IResolvable;
}

/**
 * A ROS resource type:  `DATASOURCE::ECS::DiskCategories`
 */
export class DiskCategories extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Attribute DiskCategories: The list of disk categories.
     */
    public readonly attrDiskCategories: ros.IResolvable;

    /**
     * Attribute DiskCategoryIds: The list of disk category IDs.
     */
    public readonly attrDiskCategoryIds: ros.IResolvable;

    /**
     * Create a new `DATASOURCE::ECS::DiskCategories`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: DiskCategoriesProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosDiskCategories = new RosDiskCategories(this, id,  {
            type: props.type,
            zoneId: props.zoneId,
            dataDiskCategory: props.dataDiskCategory,
            instanceType: props.instanceType,
            systemDiskCategory: props.systemDiskCategory,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosDiskCategories;
        this.attrDiskCategories = rosDiskCategories.attrDiskCategories;
        this.attrDiskCategoryIds = rosDiskCategories.attrDiskCategoryIds;
    }
}

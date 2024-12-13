import * as ros from '@alicloud/ros-cdk-core';
import { RosDiskCategories } from './ecs.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosDiskCategories as DiskCategoriesProperty };

/**
 * Properties for defining a `DiskCategories`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-diskcategories
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
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;

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
 * This class encapsulates and extends the ROS resource type `DATASOURCE::ECS::DiskCategories`, which is used to query the information about disk categories.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosDiskCategories`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-diskcategories
 */
export class DiskCategories extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: DiskCategoriesProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute DiskCategories: The list of disk categories.
     */
    public readonly attrDiskCategories: ros.IResolvable;

    /**
     * Attribute DiskCategoryIds: The list of disk category IDs.
     */
    public readonly attrDiskCategoryIds: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: DiskCategoriesProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosDiskCategories = new RosDiskCategories(this, id,  {
            type: props.type,
            zoneId: props.zoneId,
            dataDiskCategory: props.dataDiskCategory,
            instanceType: props.instanceType,
            systemDiskCategory: props.systemDiskCategory,
            refreshOptions: props.refreshOptions === undefined || props.refreshOptions === null ? 'Never' : props.refreshOptions,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosDiskCategories;
        this.attrDiskCategories = rosDiskCategories.attrDiskCategories;
        this.attrDiskCategoryIds = rosDiskCategories.attrDiskCategoryIds;
    }
}

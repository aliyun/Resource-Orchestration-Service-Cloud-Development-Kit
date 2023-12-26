import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `RosPrometheis`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-arms-prometheis
 */
export interface RosPrometheisProps {
    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::ARMS::Prometheis`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Prometheis` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-arms-prometheis
 */
export declare class RosPrometheis extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::ARMS::Prometheis";
    /**
     * @Attribute ClusterIds: The list of cluster IDs.
     */
    readonly attrClusterIds: ros.IResolvable;
    /**
     * @Attribute Prometheis: The list of Prometheis.
     */
    readonly attrPrometheis: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    resourceGroupId: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosPrometheisProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}

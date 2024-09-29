import * as ros from '@alicloud/ros-cdk-core';
import { RosPrometheis } from './arms.generated';
export { RosPrometheis as PrometheisProperty };
/**
 * Properties for defining a `Prometheis`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-arms-prometheis
 */
export interface PrometheisProps {
    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
    /**
     * Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::ARMS::Prometheis`, which is used to query Prometheus instances.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosPrometheis`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-arms-prometheis
 */
export declare class Prometheis extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: PrometheisProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute ClusterIds: The list of cluster IDs.
     */
    readonly attrClusterIds: ros.IResolvable;
    /**
     * Attribute Prometheis: The list of Prometheis.
     */
    readonly attrPrometheis: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props?: PrometheisProps, enableResourcePropertyConstraint?: boolean);
}

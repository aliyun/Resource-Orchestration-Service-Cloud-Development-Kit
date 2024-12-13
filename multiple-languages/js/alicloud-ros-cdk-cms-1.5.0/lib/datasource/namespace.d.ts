import * as ros from '@alicloud/ros-cdk-core';
import { RosNamespace } from './cms.generated';
export { RosNamespace as NamespaceProperty };
/**
 * Properties for defining a `Namespace`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cms-namespace
 */
export interface NamespaceProps {
    /**
     * Property namespace: Indicator warehouse name.
     */
    readonly namespace: string | ros.IResolvable;
    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::CMS::Namespace`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosNamespace`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cms-namespace
 */
export declare class Namespace extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: NamespaceProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute CreateTime: Create the timestamp of the indicator warehouse.
     */
    readonly attrCreateTime: ros.IResolvable;
    /**
     * Attribute Description: Description of indicator warehouse.
     */
    readonly attrDescription: ros.IResolvable;
    /**
     * Attribute ModifyTime: The timestamp of the last modification indicator warehouse.
     */
    readonly attrModifyTime: ros.IResolvable;
    /**
     * Attribute Namespace: Indicator warehouse name.
     */
    readonly attrNamespace: ros.IResolvable;
    /**
     * Attribute Specification: Data storage duration.
     */
    readonly attrSpecification: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: NamespaceProps, enableResourcePropertyConstraint?: boolean);
}

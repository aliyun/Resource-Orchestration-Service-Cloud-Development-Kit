import * as ros from '@alicloud/ros-cdk-core';
import { RosNamespaces } from './cr.generated';
export { RosNamespaces as NamespacesProperty };
/**
 * Properties for defining a `Namespaces`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cr-namespaces
 */
export interface NamespacesProps {
    /**
     * Property status: The status of namespace.
     */
    readonly status?: string | ros.IResolvable;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::CR::Namespaces`, which is used to query namespaces.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosNamespaces`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cr-namespaces
 */
export declare class Namespaces extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: NamespacesProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute NamespaceNames: The list of namespace names.
     */
    readonly attrNamespaceNames: ros.IResolvable;
    /**
     * Attribute Namespaces: The list of namespaces.
     */
    readonly attrNamespaces: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props?: NamespacesProps, enableResourcePropertyConstraint?: boolean);
}

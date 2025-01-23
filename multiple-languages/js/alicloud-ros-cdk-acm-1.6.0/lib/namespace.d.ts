import * as ros from '@alicloud/ros-cdk-core';
import { RosNamespace } from './acm.generated';
export { RosNamespace as NamespaceProperty };
/**
 * Properties for defining a `Namespace`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-acm-namespace
 */
export interface NamespaceProps {
    /**
     * Property name: Namespace name
     */
    readonly name: string | ros.IResolvable;
}
/**
 * Represents a `Namespace`.
 */
export interface INamespace extends ros.IResource {
    readonly props: NamespaceProps;
    /**
     * Attribute Endpoint: Endpoint
     */
    readonly attrEndpoint: ros.IResolvable | string;
    /**
     * Attribute NamespaceId: ID namespace
     */
    readonly attrNamespaceId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ACM::Namespace`, which is used to create a namespace.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosNamespace`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-acm-namespace
 */
export declare class Namespace extends ros.Resource implements INamespace {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: NamespaceProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute Endpoint: Endpoint
     */
    readonly attrEndpoint: ros.IResolvable | string;
    /**
     * Attribute NamespaceId: ID namespace
     */
    readonly attrNamespaceId: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: NamespaceProps, enableResourcePropertyConstraint?: boolean);
}

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
 * This class encapsulates and extends the ROS resource type `ALIYUN::ACM::Namespace`, which is used to create a namespace.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosNamespace`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-acm-namespace
 */
export declare class Namespace extends ros.Resource {
    /**
     * Attribute Endpoint: Endpoint
     */
    readonly attrEndpoint: ros.IResolvable;
    /**
     * Attribute NamespaceId: ID namespace
     */
    readonly attrNamespaceId: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: NamespaceProps, enableResourcePropertyConstraint?: boolean);
}

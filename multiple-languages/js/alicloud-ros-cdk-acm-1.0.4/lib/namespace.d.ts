import * as ros from '@alicloud/ros-cdk-core';
import { RosNamespace } from './acm.generated';
export { RosNamespace as NamespaceProperty };
/**
 * Properties for defining a `ALIYUN::ACM::Namespace`
 */
export interface NamespaceProps {
    /**
     * Property name: Namespace name
     */
    readonly name: string | ros.IResolvable;
}
/**
 * A ROS resource type:  `ALIYUN::ACM::Namespace`
 */
export declare class Namespace extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute Endpoint: Endpoint
     */
    readonly attrEndpoint: ros.IResolvable;
    /**
     * Attribute NamespaceId: ID namespace
     */
    readonly attrNamespaceId: ros.IResolvable;
    /**
     * Create a new `ALIYUN::ACM::Namespace`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: NamespaceProps, enableResourcePropertyConstraint?: boolean);
}

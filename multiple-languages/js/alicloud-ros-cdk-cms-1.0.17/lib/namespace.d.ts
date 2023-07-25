import * as ros from '@alicloud/ros-cdk-core';
import { RosNamespace } from './cms.generated';
export { RosNamespace as NamespaceProperty };
/**
 * Properties for defining a `ALIYUN::CMS::Namespace`
 */
export interface NamespaceProps {
    /**
     * Property namespace: The name of the namespace.
     * The name can contain lowercase letters, digits, and hyphens (-).
     */
    readonly namespace: string | ros.IResolvable;
    /**
     * Property description: The description of the namespace.
     */
    readonly description?: string | ros.IResolvable;
    /**
     * Property specification: The data retention period of the namespace. Valid values:
     * - cms.s1.large: Data storage duration is 15 days.
     * - cms.s1.xlarge: Data storage duration is 32 days.
     * - cms.s1.2xlarge: Data storage duration 63 days.
     * - cms.s1.3xlarge: Data storage duration 93 days.
     * - cms.s1.6xlarge: Data storage duration 185 days.
     * - cms.s1.12xlarge: Data storage duration 376 days.
     */
    readonly specification?: string | ros.IResolvable;
}
/**
 * A ROS resource type:  `ALIYUN::CMS::Namespace`
 */
export declare class Namespace extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute CreateTime: The timestamp that was generated when the namespace was created.
Unit: milliseconds.
     */
    readonly attrCreateTime: ros.IResolvable;
    /**
     * Attribute Description: The description of the namespace.
     */
    readonly attrDescription: ros.IResolvable;
    /**
     * Attribute ModifyTime: The timestamp that was generated when the namespace was last modified.
     */
    readonly attrModifyTime: ros.IResolvable;
    /**
     * Attribute Namespace: The namespace for the Alibaba Cloud service.
     */
    readonly attrNamespace: ros.IResolvable;
    /**
     * Attribute Specification: The data retention period of the namespace. Valid values:
- cms.s1.large: Data storage duration is 15 days.
- cms.s1.xlarge: Data storage duration is 32 days.
- cms.s1.2xlarge: Data storage duration 63 days.
- cms.s1.3xlarge: Data storage duration 93 days.
- cms.s1.6xlarge: Data storage duration 185 days.
- cms.s1.12xlarge: Data storage duration 376 days.
     */
    readonly attrSpecification: ros.IResolvable;
    /**
     * Create a new `ALIYUN::CMS::Namespace`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: NamespaceProps, enableResourcePropertyConstraint?: boolean);
}

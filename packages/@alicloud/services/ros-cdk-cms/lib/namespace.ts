import * as ros from '@alicloud/ros-cdk-core';
import { RosNamespace } from './cms.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosNamespace as NamespaceProperty };

/**
 * Properties for defining a `Namespace`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cms-namespace
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
 * Represents a `Namespace`.
 */
export interface INamespace extends ros.IResource {
    readonly props: NamespaceProps;

    /**
     * Attribute CreateTime: The timestamp that was generated when the namespace was created.
Unit: milliseconds.
     */
    readonly attrCreateTime: ros.IResolvable | string;

    /**
     * Attribute Description: The description of the namespace.
     */
    readonly attrDescription: ros.IResolvable | string;

    /**
     * Attribute ModifyTime: The timestamp that was generated when the namespace was last modified.
     */
    readonly attrModifyTime: ros.IResolvable | string;

    /**
     * Attribute Namespace: The namespace for the Alibaba Cloud service.
     */
    readonly attrNamespace: ros.IResolvable | string;

    /**
     * Attribute Specification: The data retention period of the namespace. Valid values:
- cms.s1.large: Data storage duration is 15 days.
- cms.s1.xlarge: Data storage duration is 32 days.
- cms.s1.2xlarge: Data storage duration 63 days.
- cms.s1.3xlarge: Data storage duration 93 days.
- cms.s1.6xlarge: Data storage duration 185 days.
- cms.s1.12xlarge: Data storage duration 376 days.
     */
    readonly attrSpecification: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::CMS::Namespace`, which is used to create a namespace.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosNamespace`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cms-namespace
 */
export class Namespace extends ros.Resource implements INamespace {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: NamespaceProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute CreateTime: The timestamp that was generated when the namespace was created.
Unit: milliseconds.
     */
    public readonly attrCreateTime: ros.IResolvable | string;

    /**
     * Attribute Description: The description of the namespace.
     */
    public readonly attrDescription: ros.IResolvable | string;

    /**
     * Attribute ModifyTime: The timestamp that was generated when the namespace was last modified.
     */
    public readonly attrModifyTime: ros.IResolvable | string;

    /**
     * Attribute Namespace: The namespace for the Alibaba Cloud service.
     */
    public readonly attrNamespace: ros.IResolvable | string;

    /**
     * Attribute Specification: The data retention period of the namespace. Valid values:
- cms.s1.large: Data storage duration is 15 days.
- cms.s1.xlarge: Data storage duration is 32 days.
- cms.s1.2xlarge: Data storage duration 63 days.
- cms.s1.3xlarge: Data storage duration 93 days.
- cms.s1.6xlarge: Data storage duration 185 days.
- cms.s1.12xlarge: Data storage duration 376 days.
     */
    public readonly attrSpecification: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: NamespaceProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosNamespace = new RosNamespace(this, id,  {
            description: props.description,
            specification: props.specification,
            namespace: props.namespace,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosNamespace;
        this.attrCreateTime = rosNamespace.attrCreateTime;
        this.attrDescription = rosNamespace.attrDescription;
        this.attrModifyTime = rosNamespace.attrModifyTime;
        this.attrNamespace = rosNamespace.attrNamespace;
        this.attrSpecification = rosNamespace.attrSpecification;
    }
}

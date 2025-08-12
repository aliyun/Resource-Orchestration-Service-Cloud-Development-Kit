import * as ros from '@alicloud/ros-cdk-core';
import { RosKvNamespace } from './esa.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosKvNamespace as KvNamespaceProperty };

/**
 * Properties for defining a `KvNamespace`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-kvnamespace
 */
export interface KvNamespaceProps {

    /**
     * Property kvNamespace: The name of the namespace.
     */
    readonly kvNamespace: string | ros.IResolvable;

    /**
     * Property description: The description of the namespace.
     */
    readonly description?: string | ros.IResolvable;
}

/**
 * Represents a `KvNamespace`.
 */
export interface IKvNamespace extends ros.IResource {
    readonly props: KvNamespaceProps;

    /**
     * Attribute Description: The description of the namespace.
     */
    readonly attrDescription: ros.IResolvable | string;

    /**
     * Attribute KvCapacity: The available capacity of the namespace. Unit: bytes.
     */
    readonly attrKvCapacity: ros.IResolvable | string;

    /**
     * Attribute KvCapacityString: The available capacity of the namespace.
     */
    readonly attrKvCapacityString: ros.IResolvable | string;

    /**
     * Attribute KvCapacityUsed: The used capacity of the namespace. Unit: bytes.
     */
    readonly attrKvCapacityUsed: ros.IResolvable | string;

    /**
     * Attribute KvCapacityUsedString: The used capacity of the namespace.
     */
    readonly attrKvCapacityUsedString: ros.IResolvable | string;

    /**
     * Attribute KvNamespace: The name of the namespace.
     */
    readonly attrKvNamespace: ros.IResolvable | string;

    /**
     * Attribute NamespaceId: The ID of the namespace.
     */
    readonly attrNamespaceId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ESA::KvNamespace`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosKvNamespace`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-kvnamespace
 */
export class KvNamespace extends ros.Resource implements IKvNamespace {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: KvNamespaceProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute Description: The description of the namespace.
     */
    public readonly attrDescription: ros.IResolvable | string;

    /**
     * Attribute KvCapacity: The available capacity of the namespace. Unit: bytes.
     */
    public readonly attrKvCapacity: ros.IResolvable | string;

    /**
     * Attribute KvCapacityString: The available capacity of the namespace.
     */
    public readonly attrKvCapacityString: ros.IResolvable | string;

    /**
     * Attribute KvCapacityUsed: The used capacity of the namespace. Unit: bytes.
     */
    public readonly attrKvCapacityUsed: ros.IResolvable | string;

    /**
     * Attribute KvCapacityUsedString: The used capacity of the namespace.
     */
    public readonly attrKvCapacityUsedString: ros.IResolvable | string;

    /**
     * Attribute KvNamespace: The name of the namespace.
     */
    public readonly attrKvNamespace: ros.IResolvable | string;

    /**
     * Attribute NamespaceId: The ID of the namespace.
     */
    public readonly attrNamespaceId: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: KvNamespaceProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosKvNamespace = new RosKvNamespace(this, id,  {
            description: props.description,
            kvNamespace: props.kvNamespace,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosKvNamespace;
        this.attrDescription = rosKvNamespace.attrDescription;
        this.attrKvCapacity = rosKvNamespace.attrKvCapacity;
        this.attrKvCapacityString = rosKvNamespace.attrKvCapacityString;
        this.attrKvCapacityUsed = rosKvNamespace.attrKvCapacityUsed;
        this.attrKvCapacityUsedString = rosKvNamespace.attrKvCapacityUsedString;
        this.attrKvNamespace = rosKvNamespace.attrKvNamespace;
        this.attrNamespaceId = rosKvNamespace.attrNamespaceId;
    }
}

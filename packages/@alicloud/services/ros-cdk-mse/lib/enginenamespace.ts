import * as ros from '@alicloud/ros-cdk-core';
import { RosEngineNamespace } from './mse.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosEngineNamespace as EngineNamespaceProperty };

/**
 * Properties for defining a `EngineNamespace`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mse-enginenamespace
 */
export interface EngineNamespaceProps {

    /**
     * Property instanceId: The ID of the instance.
     */
    readonly instanceId: string | ros.IResolvable;

    /**
     * Property name: The display name of the namespace.
     */
    readonly name: string | ros.IResolvable;

    /**
     * Property desc: The description of the namespace.
     */
    readonly desc?: string | ros.IResolvable;

    /**
     * Property identity: The custom ID of the namespace. If you do not specify this parameter, the automatically generated Universally Unique Identifier (UUID) is returned.
     */
    readonly identity?: string | ros.IResolvable;
}

/**
 * Represents a `EngineNamespace`.
 */
export interface IEngineNamespace extends ros.IResource {
    readonly props: EngineNamespaceProps;

    /**
     * Attribute NamespaceId: The ID of the namespace.
     */
    readonly attrNamespaceId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::MSE::EngineNamespace`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosEngineNamespace`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mse-enginenamespace
 */
export class EngineNamespace extends ros.Resource implements IEngineNamespace {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: EngineNamespaceProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute NamespaceId: The ID of the namespace.
     */
    public readonly attrNamespaceId: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: EngineNamespaceProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosEngineNamespace = new RosEngineNamespace(this, id,  {
            desc: props.desc,
            instanceId: props.instanceId,
            name: props.name,
            identity: props.identity,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosEngineNamespace;
        this.attrNamespaceId = rosEngineNamespace.attrNamespaceId;
    }
}

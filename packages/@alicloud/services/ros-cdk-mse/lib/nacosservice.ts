import * as ros from '@alicloud/ros-cdk-core';
import { RosNacosService } from './mse.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosNacosService as NacosServiceProperty };

/**
 * Properties for defining a `NacosService`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mse-nacosservice
 */
export interface NacosServiceProps {

    /**
     * Property instanceId: The ID of the instance.
     */
    readonly instanceId: string | ros.IResolvable;

    /**
     * Property serviceName: The name of the service.
     */
    readonly serviceName: string | ros.IResolvable;

    /**
     * Property ephemeral: Specifies whether the instance is a temporary node. Valid values:
     * true: yes
     * false: no
     */
    readonly ephemeral?: boolean | ros.IResolvable;

    /**
     * Property groupName: The name of the group.
     */
    readonly groupName?: string | ros.IResolvable;

    /**
     * Property namespaceId: The ID of the namespace.
     */
    readonly namespaceId?: string | ros.IResolvable;

    /**
     * Property protectThreshold: The protection threshold.
     */
    readonly protectThreshold?: string | ros.IResolvable;
}

/**
 * Represents a `NacosService`.
 */
export interface INacosService extends ros.IResource {
    readonly props: NacosServiceProps;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::MSE::NacosService`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosNacosService`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mse-nacosservice
 */
export class NacosService extends ros.Resource implements INacosService {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: NacosServiceProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: NacosServiceProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosNacosService = new RosNacosService(this, id,  {
            groupName: props.groupName,
            instanceId: props.instanceId,
            serviceName: props.serviceName,
            protectThreshold: props.protectThreshold,
            ephemeral: props.ephemeral,
            namespaceId: props.namespaceId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosNacosService;
    }
}

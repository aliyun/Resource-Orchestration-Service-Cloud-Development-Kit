import * as ros from '@alicloud/ros-cdk-core';
import { RosNacosConfig } from './mse.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosNacosConfig as NacosConfigProperty };

/**
 * Properties for defining a `NacosConfig`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mse-nacosconfig
 */
export interface NacosConfigProps {

    /**
     * Property dataId: The data ID.
     */
    readonly dataId: string | ros.IResolvable;

    /**
     * Property group: The ID of the group.
     */
    readonly group: string | ros.IResolvable;

    /**
     * Property instanceId: The ID of the instance.
     */
    readonly instanceId: string | ros.IResolvable;

    /**
     * Property appName: The name of the application.
     */
    readonly appName?: string | ros.IResolvable;

    /**
     * Property betaIps: The list of IP addresses where the beta release of the configuration is performed.
     */
    readonly betaIps?: string | ros.IResolvable;

    /**
     * Property content: The content of the configuration.
     */
    readonly content?: string | ros.IResolvable;

    /**
     * Property desc: The description of the configuration.
     */
    readonly desc?: string | ros.IResolvable;

    /**
     * Property namespaceId: The ID of the namespace.
     */
    readonly namespaceId?: string | ros.IResolvable;

    /**
     * Property tags: The tag of the configuration.
     */
    readonly tags?: string;

    /**
     * Property type: The format of the configuration. Supported formats include TEXT, JSON, and XML.
     */
    readonly type?: string | ros.IResolvable;
}

/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::MSE::NacosConfig`, which is used to create a Nacos configuration.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosNacosConfig`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mse-nacosconfig
 */
export class NacosConfig extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: NacosConfigProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: NacosConfigProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosNacosConfig = new RosNacosConfig(this, id,  {
            group: props.group,
            desc: props.desc,
            type: props.type,
            dataId: props.dataId,
            instanceId: props.instanceId,
            content: props.content,
            betaIps: props.betaIps,
            namespaceId: props.namespaceId,
            tags: props.tags,
            appName: props.appName,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosNacosConfig;
    }
}

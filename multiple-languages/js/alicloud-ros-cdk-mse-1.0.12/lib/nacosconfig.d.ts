import * as ros from '@alicloud/ros-cdk-core';
import { RosNacosConfig } from './mse.generated';
export { RosNacosConfig as NacosConfigProperty };
/**
 * Properties for defining a `ALIYUN::MSE::NacosConfig`
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
 * A ROS resource type:  `ALIYUN::MSE::NacosConfig`
 */
export declare class NacosConfig extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Create a new `ALIYUN::MSE::NacosConfig`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: NacosConfigProps, enableResourcePropertyConstraint?: boolean);
}

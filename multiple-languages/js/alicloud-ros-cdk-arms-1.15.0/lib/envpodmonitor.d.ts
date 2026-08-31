import * as ros from '@alicloud/ros-cdk-core';
import { RosEnvPodMonitor } from './arms.generated';
export { RosEnvPodMonitor as EnvPodMonitorProperty };
/**
 * Properties for defining a `EnvPodMonitor`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-envpodmonitor
 */
export interface EnvPodMonitorProps {
    /**
     * Property configYaml: The YAML configuration string of the PodMonitor.
     */
    readonly configYaml: string | ros.IResolvable;
    /**
     * Property environmentId: The ID of the environment instance.
     */
    readonly environmentId: string | ros.IResolvable;
    /**
     * Property aliyunLang: The language. Valid values: zh and en. Default value: zh.
     */
    readonly aliyunLang?: string | ros.IResolvable;
}
/**
 * Represents a `EnvPodMonitor`.
 */
export interface IEnvPodMonitor extends ros.IResource {
    readonly props: EnvPodMonitorProps;
    /**
     * Attribute ConfigYaml: The YAML configuration string of the PodMonitor.
     */
    readonly attrConfigYaml: ros.IResolvable | string;
    /**
     * Attribute EnvPodMonitorName: The name of the PodMonitor.
     */
    readonly attrEnvPodMonitorName: ros.IResolvable | string;
    /**
     * Attribute EnvironmentId: The ID of the environment instance.
     */
    readonly attrEnvironmentId: ros.IResolvable | string;
    /**
     * Attribute Namespace: The namespace of the PodMonitor.
     */
    readonly attrNamespace: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ARMS::EnvPodMonitor`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosEnvPodMonitor`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-envpodmonitor
 */
export declare class EnvPodMonitor extends ros.Resource implements IEnvPodMonitor {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: EnvPodMonitorProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute ConfigYaml: The YAML configuration string of the PodMonitor.
     */
    readonly attrConfigYaml: ros.IResolvable | string;
    /**
     * Attribute EnvPodMonitorName: The name of the PodMonitor.
     */
    readonly attrEnvPodMonitorName: ros.IResolvable | string;
    /**
     * Attribute EnvironmentId: The ID of the environment instance.
     */
    readonly attrEnvironmentId: ros.IResolvable | string;
    /**
     * Attribute Namespace: The namespace of the PodMonitor.
     */
    readonly attrNamespace: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: EnvPodMonitorProps, enableResourcePropertyConstraint?: boolean);
}

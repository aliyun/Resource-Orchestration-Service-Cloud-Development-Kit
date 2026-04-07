import * as ros from '@alicloud/ros-cdk-core';
import { RosEnvServiceMonitor } from './arms.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosEnvServiceMonitor as EnvServiceMonitorProperty };

/**
 * Properties for defining a `EnvServiceMonitor`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-envservicemonitor
 */
export interface EnvServiceMonitorProps {

    /**
     * Property configYaml: The YAML configuration string of the ServiceMonitor.
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
 * Represents a `EnvServiceMonitor`.
 */
export interface IEnvServiceMonitor extends ros.IResource {
    readonly props: EnvServiceMonitorProps;

    /**
     * Attribute ConfigYaml: The YAML configuration string of the ServiceMonitor.
     */
    readonly attrConfigYaml: ros.IResolvable | string;

    /**
     * Attribute EnvServiceMonitorName: The name of the ServiceMonitor.
     */
    readonly attrEnvServiceMonitorName: ros.IResolvable | string;

    /**
     * Attribute EnvironmentId: The ID of the environment instance.
     */
    readonly attrEnvironmentId: ros.IResolvable | string;

    /**
     * Attribute Namespace: The namespace of the ServiceMonitor.
     */
    readonly attrNamespace: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ARMS::EnvServiceMonitor`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosEnvServiceMonitor`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-envservicemonitor
 */
export class EnvServiceMonitor extends ros.Resource implements IEnvServiceMonitor {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: EnvServiceMonitorProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute ConfigYaml: The YAML configuration string of the ServiceMonitor.
     */
    public readonly attrConfigYaml: ros.IResolvable | string;

    /**
     * Attribute EnvServiceMonitorName: The name of the ServiceMonitor.
     */
    public readonly attrEnvServiceMonitorName: ros.IResolvable | string;

    /**
     * Attribute EnvironmentId: The ID of the environment instance.
     */
    public readonly attrEnvironmentId: ros.IResolvable | string;

    /**
     * Attribute Namespace: The namespace of the ServiceMonitor.
     */
    public readonly attrNamespace: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: EnvServiceMonitorProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosEnvServiceMonitor = new RosEnvServiceMonitor(this, id,  {
            environmentId: props.environmentId,
            aliyunLang: props.aliyunLang,
            configYaml: props.configYaml,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosEnvServiceMonitor;
        this.attrConfigYaml = rosEnvServiceMonitor.attrConfigYaml;
        this.attrEnvServiceMonitorName = rosEnvServiceMonitor.attrEnvServiceMonitorName;
        this.attrEnvironmentId = rosEnvServiceMonitor.attrEnvironmentId;
        this.attrNamespace = rosEnvServiceMonitor.attrNamespace;
    }
}

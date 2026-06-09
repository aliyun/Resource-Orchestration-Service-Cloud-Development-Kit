import * as ros from '@alicloud/ros-cdk-core';
import { RosEnvCustomJob } from './arms.generated';
export { RosEnvCustomJob as EnvCustomJobProperty };
/**
 * Properties for defining a `EnvCustomJob`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-envcustomjob
 */
export interface EnvCustomJobProps {
    /**
     * Property configYaml: The YAML configuration string of the custom job.
     */
    readonly configYaml: string | ros.IResolvable;
    /**
     * Property envCustomJobName: The name of the custom job.
     */
    readonly envCustomJobName: string | ros.IResolvable;
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
 * Represents a `EnvCustomJob`.
 */
export interface IEnvCustomJob extends ros.IResource {
    readonly props: EnvCustomJobProps;
    /**
     * Attribute ConfigYaml: The YAML configuration string of the custom job.
     */
    readonly attrConfigYaml: ros.IResolvable | string;
    /**
     * Attribute EnvCustomJobName: The name of the custom job.
     */
    readonly attrEnvCustomJobName: ros.IResolvable | string;
    /**
     * Attribute EnvironmentId: The ID of the environment instance.
     */
    readonly attrEnvironmentId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ARMS::EnvCustomJob`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosEnvCustomJob`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-envcustomjob
 */
export declare class EnvCustomJob extends ros.Resource implements IEnvCustomJob {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: EnvCustomJobProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute ConfigYaml: The YAML configuration string of the custom job.
     */
    readonly attrConfigYaml: ros.IResolvable | string;
    /**
     * Attribute EnvCustomJobName: The name of the custom job.
     */
    readonly attrEnvCustomJobName: ros.IResolvable | string;
    /**
     * Attribute EnvironmentId: The ID of the environment instance.
     */
    readonly attrEnvironmentId: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: EnvCustomJobProps, enableResourcePropertyConstraint?: boolean);
}

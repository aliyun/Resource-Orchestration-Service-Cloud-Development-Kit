import * as ros from '@alicloud/ros-cdk-core';
import { RosTemplate } from './agentrun.generated';
export { RosTemplate as TemplateProperty };
/**
 * Properties for defining a `Template`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-agentrun-template
 */
export interface TemplateProps {
    /**
     * Property templateName: The name of the template.
     */
    readonly templateName: string | ros.IResolvable;
    /**
     * Property allowAnonymousManage: Whether to allow anonymous management.
     */
    readonly allowAnonymousManage?: boolean | ros.IResolvable;
    /**
     * Property armsConfiguration: The ARMS configuration.
     */
    readonly armsConfiguration?: RosTemplate.ArmsConfigurationProperty | ros.IResolvable;
    /**
     * Property containerConfiguration: The container configuration. Only images based on Browser\/Code Interpreter base images are allowed.
     */
    readonly containerConfiguration?: RosTemplate.ContainerConfigurationProperty | ros.IResolvable;
    /**
     * Property cpu: The CPU resource configuration (unit: cores).
     */
    readonly cpu?: number | ros.IResolvable;
    /**
     * Property credentialConfiguration: The credential configuration.
     */
    readonly credentialConfiguration?: RosTemplate.CredentialConfigurationProperty | ros.IResolvable;
    /**
     * Property description: The description of the template.
     */
    readonly description?: string | ros.IResolvable;
    /**
     * Property diskSize: The disk size (unit: MB).
     */
    readonly diskSize?: number | ros.IResolvable;
    /**
     * Property enableAgent: Whether to enable the sandbox agent.
     */
    readonly enableAgent?: boolean | ros.IResolvable;
    /**
     * Property environmentVariables: The environment variables.
     */
    readonly environmentVariables?: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable;
    /**
     * Property executionRoleArn: The execution role ARN.
     */
    readonly executionRoleArn?: string | ros.IResolvable;
    /**
     * Property logConfiguration: The log configuration.
     */
    readonly logConfiguration?: RosTemplate.LogConfigurationProperty | ros.IResolvable;
    /**
     * Property memory: The memory resource configuration (unit: MB).
     */
    readonly memory?: number | ros.IResolvable;
    /**
     * Property nasConfig: The NAS configuration.
     */
    readonly nasConfig?: RosTemplate.NasConfigProperty | ros.IResolvable;
    /**
     * Property networkConfiguration: The network configuration.
     */
    readonly networkConfiguration?: RosTemplate.NetworkConfigurationProperty | ros.IResolvable;
    /**
     * Property ossConfiguration: The OSS configuration.
     */
    readonly ossConfiguration?: Array<RosTemplate.OssConfigurationProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * Property sandboxIdleTimeoutInSeconds: The sandbox idle timeout in seconds.
     */
    readonly sandboxIdleTimeoutInSeconds?: number | ros.IResolvable;
    /**
     * Property templateConfiguration: The template configuration (flexible object structure, varies by templateType).
     */
    readonly templateConfiguration?: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable;
    /**
     * Property templateType: The type of the template.
     */
    readonly templateType?: string | ros.IResolvable;
    /**
     * Property workspaceId: The workspace ID.
     */
    readonly workspaceId?: string | ros.IResolvable;
}
/**
 * Represents a `Template`.
 */
export interface ITemplate extends ros.IResource {
    readonly props: TemplateProps;
    /**
     * Attribute TemplateArn: The ARN of the template.
     */
    readonly attrTemplateArn: ros.IResolvable | string;
    /**
     * Attribute TemplateId: The ID of the template.
     */
    readonly attrTemplateId: ros.IResolvable | string;
    /**
     * Attribute TemplateName: The name of the template.
     */
    readonly attrTemplateName: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::AgentRun::Template`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosTemplate`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-agentrun-template
 */
export declare class Template extends ros.Resource implements ITemplate {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: TemplateProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute TemplateArn: The ARN of the template.
     */
    readonly attrTemplateArn: ros.IResolvable | string;
    /**
     * Attribute TemplateId: The ID of the template.
     */
    readonly attrTemplateId: ros.IResolvable | string;
    /**
     * Attribute TemplateName: The name of the template.
     */
    readonly attrTemplateName: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: TemplateProps, enableResourcePropertyConstraint?: boolean);
}

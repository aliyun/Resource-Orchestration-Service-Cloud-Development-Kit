import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `RosTemplate`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-agentrun-template
 */
export interface RosTemplateProps {
    /**
     * @Property templateName: The name of the template.
     */
    readonly templateName: string | ros.IResolvable;
    /**
     * @Property allowAnonymousManage: Whether to allow anonymous management.
     */
    readonly allowAnonymousManage?: boolean | ros.IResolvable;
    /**
     * @Property armsConfiguration: The ARMS configuration.
     */
    readonly armsConfiguration?: RosTemplate.ArmsConfigurationProperty | ros.IResolvable;
    /**
     * @Property containerConfiguration: The container configuration. Only images based on Browser\/Code Interpreter base images are allowed.
     */
    readonly containerConfiguration?: RosTemplate.ContainerConfigurationProperty | ros.IResolvable;
    /**
     * @Property cpu: The CPU resource configuration (unit: cores).
     */
    readonly cpu?: number | ros.IResolvable;
    /**
     * @Property credentialConfiguration: The credential configuration.
     */
    readonly credentialConfiguration?: RosTemplate.CredentialConfigurationProperty | ros.IResolvable;
    /**
     * @Property description: The description of the template.
     */
    readonly description?: string | ros.IResolvable;
    /**
     * @Property diskSize: The disk size (unit: MB).
     */
    readonly diskSize?: number | ros.IResolvable;
    /**
     * @Property enableAgent: Whether to enable the sandbox agent.
     */
    readonly enableAgent?: boolean | ros.IResolvable;
    /**
     * @Property environmentVariables: The environment variables.
     */
    readonly environmentVariables?: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable;
    /**
     * @Property executionRoleArn: The execution role ARN.
     */
    readonly executionRoleArn?: string | ros.IResolvable;
    /**
     * @Property logConfiguration: The log configuration.
     */
    readonly logConfiguration?: RosTemplate.LogConfigurationProperty | ros.IResolvable;
    /**
     * @Property memory: The memory resource configuration (unit: MB).
     */
    readonly memory?: number | ros.IResolvable;
    /**
     * @Property nasConfig: The NAS configuration.
     */
    readonly nasConfig?: RosTemplate.NasConfigProperty | ros.IResolvable;
    /**
     * @Property networkConfiguration: The network configuration.
     */
    readonly networkConfiguration?: RosTemplate.NetworkConfigurationProperty | ros.IResolvable;
    /**
     * @Property ossConfiguration: The OSS configuration.
     */
    readonly ossConfiguration?: Array<RosTemplate.OssConfigurationProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property sandboxIdleTimeoutInSeconds: The sandbox idle timeout in seconds.
     */
    readonly sandboxIdleTimeoutInSeconds?: number | ros.IResolvable;
    /**
     * @Property templateConfiguration: The template configuration (flexible object structure, varies by templateType).
     */
    readonly templateConfiguration?: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable;
    /**
     * @Property templateType: The type of the template.
     */
    readonly templateType?: string | ros.IResolvable;
    /**
     * @Property workspaceId: The workspace ID.
     */
    readonly workspaceId?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::AgentRun::Template`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Template` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-agentrun-template
 */
export declare class RosTemplate extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::AgentRun::Template";
    /**
     * @Attribute TemplateArn: The ARN of the template.
     */
    readonly attrTemplateArn: ros.IResolvable;
    /**
     * @Attribute TemplateId: The ID of the template.
     */
    readonly attrTemplateId: ros.IResolvable;
    /**
     * @Attribute TemplateName: The name of the template.
     */
    readonly attrTemplateName: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property templateName: The name of the template.
     */
    templateName: string | ros.IResolvable;
    /**
     * @Property allowAnonymousManage: Whether to allow anonymous management.
     */
    allowAnonymousManage: boolean | ros.IResolvable | undefined;
    /**
     * @Property armsConfiguration: The ARMS configuration.
     */
    armsConfiguration: RosTemplate.ArmsConfigurationProperty | ros.IResolvable | undefined;
    /**
     * @Property containerConfiguration: The container configuration. Only images based on Browser\/Code Interpreter base images are allowed.
     */
    containerConfiguration: RosTemplate.ContainerConfigurationProperty | ros.IResolvable | undefined;
    /**
     * @Property cpu: The CPU resource configuration (unit: cores).
     */
    cpu: number | ros.IResolvable | undefined;
    /**
     * @Property credentialConfiguration: The credential configuration.
     */
    credentialConfiguration: RosTemplate.CredentialConfigurationProperty | ros.IResolvable | undefined;
    /**
     * @Property description: The description of the template.
     */
    description: string | ros.IResolvable | undefined;
    /**
     * @Property diskSize: The disk size (unit: MB).
     */
    diskSize: number | ros.IResolvable | undefined;
    /**
     * @Property enableAgent: Whether to enable the sandbox agent.
     */
    enableAgent: boolean | ros.IResolvable | undefined;
    /**
     * @Property environmentVariables: The environment variables.
     */
    environmentVariables: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable | undefined;
    /**
     * @Property executionRoleArn: The execution role ARN.
     */
    executionRoleArn: string | ros.IResolvable | undefined;
    /**
     * @Property logConfiguration: The log configuration.
     */
    logConfiguration: RosTemplate.LogConfigurationProperty | ros.IResolvable | undefined;
    /**
     * @Property memory: The memory resource configuration (unit: MB).
     */
    memory: number | ros.IResolvable | undefined;
    /**
     * @Property nasConfig: The NAS configuration.
     */
    nasConfig: RosTemplate.NasConfigProperty | ros.IResolvable | undefined;
    /**
     * @Property networkConfiguration: The network configuration.
     */
    networkConfiguration: RosTemplate.NetworkConfigurationProperty | ros.IResolvable | undefined;
    /**
     * @Property ossConfiguration: The OSS configuration.
     */
    ossConfiguration: Array<RosTemplate.OssConfigurationProperty | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property sandboxIdleTimeoutInSeconds: The sandbox idle timeout in seconds.
     */
    sandboxIdleTimeoutInSeconds: number | ros.IResolvable | undefined;
    /**
     * @Property templateConfiguration: The template configuration (flexible object structure, varies by templateType).
     */
    templateConfiguration: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable | undefined;
    /**
     * @Property templateType: The type of the template.
     */
    templateType: string | ros.IResolvable | undefined;
    /**
     * @Property workspaceId: The workspace ID.
     */
    workspaceId: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosTemplateProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosTemplate {
    /**
     * @stability external
     */
    interface ArmsConfigurationProperty {
        /**
         * @Property cmsWorkspace: The ID of the CMS 2.0 workspace.
         */
        readonly cmsWorkspace?: string | ros.IResolvable;
        /**
         * @Property enableArms: Whether to enable ARMS.
         */
        readonly enableArms: boolean | ros.IResolvable;
        /**
         * @Property armsLicenseKey: The license key for ARMS.
         */
        readonly armsLicenseKey: string | ros.IResolvable;
    }
}
export declare namespace RosTemplate {
    /**
     * @stability external
     */
    interface ContainerConfigurationProperty {
        /**
         * @Property acrInstanceId: The ACR instance ID.
         */
        readonly acrInstanceId?: string | ros.IResolvable;
        /**
         * @Property command: The container command.
         */
        readonly command?: Array<string | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property port: The container port.
         */
        readonly port?: number | ros.IResolvable;
        /**
         * @Property image: The container image address.
         */
        readonly image?: string | ros.IResolvable;
        /**
         * @Property imageRegistryType: The image registry type.
         */
        readonly imageRegistryType: string | ros.IResolvable;
    }
}
export declare namespace RosTemplate {
    /**
     * @stability external
     */
    interface CredentialConfigurationProperty {
        /**
         * @Property credentialName: The credential name.
         */
        readonly credentialName: string | ros.IResolvable;
    }
}
export declare namespace RosTemplate {
    /**
     * @stability external
     */
    interface LogConfigurationProperty {
        /**
         * @Property project: The SLS project name.
         */
        readonly project: string | ros.IResolvable;
        /**
         * @Property logstore: The SLS logstore name.
         */
        readonly logstore: string | ros.IResolvable;
    }
}
export declare namespace RosTemplate {
    /**
     * @stability external
     */
    interface MountPointsProperty {
        /**
         * @Property enableTls: Whether to enable TLS.
         */
        readonly enableTls?: boolean | ros.IResolvable;
        /**
         * @Property serverAddr: The NAS server address.
         */
        readonly serverAddr?: string | ros.IResolvable;
        /**
         * @Property mountDir: The mount directory.
         */
        readonly mountDir?: string | ros.IResolvable;
    }
}
export declare namespace RosTemplate {
    /**
     * @stability external
     */
    interface NasConfigProperty {
        /**
         * @Property mountPoints: The NAS mount points.
         */
        readonly mountPoints?: Array<RosTemplate.MountPointsProperty | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property userId: The NAS user ID.
         */
        readonly userId?: number | ros.IResolvable;
        /**
         * @Property groupId: The NAS group ID.
         */
        readonly groupId?: number | ros.IResolvable;
    }
}
export declare namespace RosTemplate {
    /**
     * @stability external
     */
    interface NetworkConfigurationProperty {
        /**
         * @Property vpcId: The VPC ID.
         */
        readonly vpcId?: string | ros.IResolvable;
        /**
         * @Property vSwitchIds: The list of vSwitch IDs.
         */
        readonly vSwitchIds?: Array<string | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property securityGroupId: The security group ID.
         */
        readonly securityGroupId?: string | ros.IResolvable;
        /**
         * @Property networkMode: The network mode.
         */
        readonly networkMode: string | ros.IResolvable;
    }
}
export declare namespace RosTemplate {
    /**
     * @stability external
     */
    interface OssConfigurationProperty {
        /**
         * @Property mountPoint: The mount point.
         */
        readonly mountPoint: string | ros.IResolvable;
        /**
         * @Property bucketName: The OSS bucket name.
         */
        readonly bucketName: string | ros.IResolvable;
        /**
         * @Property permission: The permission.
         */
        readonly permission: string | ros.IResolvable;
        /**
         * @Property region: The region.
         */
        readonly region: string | ros.IResolvable;
        /**
         * @Property prefix: The OSS prefix.
         */
        readonly prefix: string | ros.IResolvable;
    }
}

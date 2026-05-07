// Generated from the AliCloud ROS Resource Specification

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
    readonly environmentVariables?: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;

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
    readonly templateConfiguration?: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;

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
 * Determine whether the given properties match those of a `RosTemplateProps`
 *
 * @param properties - the TypeScript properties of a `RosTemplateProps`
 *
 * @returns the result of the validation.
 */
function RosTemplatePropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    if(properties.memory && (typeof properties.memory) !== 'object') {
        errors.collect(ros.propertyValidator('memory', ros.validateRange)({
            data: properties.memory,
            min: 2048,
            max: undefined,
          }));
    }
    errors.collect(ros.propertyValidator('memory', ros.validateNumber)(properties.memory));
    errors.collect(ros.propertyValidator('workspaceId', ros.validateString)(properties.workspaceId));
    if(properties.cpu && (typeof properties.cpu) !== 'object') {
        errors.collect(ros.propertyValidator('cpu', ros.validateRange)({
            data: properties.cpu,
            min: 2,
            max: undefined,
          }));
    }
    errors.collect(ros.propertyValidator('cpu', ros.validateNumber)(properties.cpu));
    errors.collect(ros.propertyValidator('armsConfiguration', RosTemplate_ArmsConfigurationPropertyValidator)(properties.armsConfiguration));
    errors.collect(ros.propertyValidator('templateConfiguration', ros.hashValidator(ros.validateAny))(properties.templateConfiguration));
    if(properties.templateType && (typeof properties.templateType) !== 'object') {
        errors.collect(ros.propertyValidator('templateType', ros.validateAllowedValues)({
          data: properties.templateType,
          allowedValues: ["CodeInterpreter","AllInOne","CustomImage","ComputerUse","Browser"],
        }));
    }
    errors.collect(ros.propertyValidator('templateType', ros.validateString)(properties.templateType));
    errors.collect(ros.propertyValidator('credentialConfiguration', RosTemplate_CredentialConfigurationPropertyValidator)(properties.credentialConfiguration));
    errors.collect(ros.propertyValidator('containerConfiguration', RosTemplate_ContainerConfigurationPropertyValidator)(properties.containerConfiguration));
    errors.collect(ros.propertyValidator('logConfiguration', RosTemplate_LogConfigurationPropertyValidator)(properties.logConfiguration));
    if(properties.ossConfiguration && (Array.isArray(properties.ossConfiguration) || (typeof properties.ossConfiguration) === 'string')) {
        errors.collect(ros.propertyValidator('ossConfiguration', ros.validateLength)({
            data: properties.ossConfiguration.length,
            min: 1,
            max: undefined,
          }));
    }
    errors.collect(ros.propertyValidator('ossConfiguration', ros.listValidator(RosTemplate_OssConfigurationPropertyValidator))(properties.ossConfiguration));
    errors.collect(ros.propertyValidator('enableAgent', ros.validateBoolean)(properties.enableAgent));
    errors.collect(ros.propertyValidator('executionRoleArn', ros.validateString)(properties.executionRoleArn));
    errors.collect(ros.propertyValidator('environmentVariables', ros.hashValidator(ros.validateAny))(properties.environmentVariables));
    if(properties.diskSize && (typeof properties.diskSize) !== 'object') {
        errors.collect(ros.propertyValidator('diskSize', ros.validateRange)({
            data: properties.diskSize,
            min: 512,
            max: undefined,
          }));
    }
    errors.collect(ros.propertyValidator('diskSize', ros.validateNumber)(properties.diskSize));
    errors.collect(ros.propertyValidator('templateName', ros.requiredValidator)(properties.templateName));
    errors.collect(ros.propertyValidator('templateName', ros.validateString)(properties.templateName));
    errors.collect(ros.propertyValidator('allowAnonymousManage', ros.validateBoolean)(properties.allowAnonymousManage));
    errors.collect(ros.propertyValidator('networkConfiguration', RosTemplate_NetworkConfigurationPropertyValidator)(properties.networkConfiguration));
    if(properties.sandboxIdleTimeoutInSeconds && (typeof properties.sandboxIdleTimeoutInSeconds) !== 'object') {
        errors.collect(ros.propertyValidator('sandboxIdleTimeoutInSeconds', ros.validateRange)({
            data: properties.sandboxIdleTimeoutInSeconds,
            min: 0,
            max: undefined,
          }));
    }
    errors.collect(ros.propertyValidator('sandboxIdleTimeoutInSeconds', ros.validateNumber)(properties.sandboxIdleTimeoutInSeconds));
    errors.collect(ros.propertyValidator('nasConfig', RosTemplate_NasConfigPropertyValidator)(properties.nasConfig));
    return errors.wrap('supplied properties not correct for "RosTemplateProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::AgentRun::Template` resource
 *
 * @param properties - the TypeScript properties of a `RosTemplateProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::AgentRun::Template` resource.
 */
// @ts-ignore TS6133
function rosTemplatePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosTemplatePropsValidator(properties).assertSuccess();
    }
    return {
      'TemplateName': ros.stringToRosTemplate(properties.templateName),
      'AllowAnonymousManage': ros.booleanToRosTemplate(properties.allowAnonymousManage),
      'ArmsConfiguration': rosTemplateArmsConfigurationPropertyToRosTemplate(properties.armsConfiguration),
      'ContainerConfiguration': rosTemplateContainerConfigurationPropertyToRosTemplate(properties.containerConfiguration),
      'Cpu': ros.numberToRosTemplate(properties.cpu),
      'CredentialConfiguration': rosTemplateCredentialConfigurationPropertyToRosTemplate(properties.credentialConfiguration),
      'Description': ros.stringToRosTemplate(properties.description),
      'DiskSize': ros.numberToRosTemplate(properties.diskSize),
      'EnableAgent': ros.booleanToRosTemplate(properties.enableAgent),
      'EnvironmentVariables': ros.hashMapper(ros.objectToRosTemplate)(properties.environmentVariables),
      'ExecutionRoleArn': ros.stringToRosTemplate(properties.executionRoleArn),
      'LogConfiguration': rosTemplateLogConfigurationPropertyToRosTemplate(properties.logConfiguration),
      'Memory': ros.numberToRosTemplate(properties.memory),
      'NasConfig': rosTemplateNasConfigPropertyToRosTemplate(properties.nasConfig),
      'NetworkConfiguration': rosTemplateNetworkConfigurationPropertyToRosTemplate(properties.networkConfiguration),
      'OssConfiguration': ros.listMapper(rosTemplateOssConfigurationPropertyToRosTemplate)(properties.ossConfiguration),
      'SandboxIdleTimeoutInSeconds': ros.numberToRosTemplate(properties.sandboxIdleTimeoutInSeconds),
      'TemplateConfiguration': ros.hashMapper(ros.objectToRosTemplate)(properties.templateConfiguration),
      'TemplateType': ros.stringToRosTemplate(properties.templateType),
      'WorkspaceId': ros.stringToRosTemplate(properties.workspaceId),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::AgentRun::Template`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Template` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-agentrun-template
 */
export class RosTemplate extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::AgentRun::Template";

    /**
     * @Attribute TemplateArn: The ARN of the template.
     */
    public readonly attrTemplateArn: ros.IResolvable;

    /**
     * @Attribute TemplateId: The ID of the template.
     */
    public readonly attrTemplateId: ros.IResolvable;

    /**
     * @Attribute TemplateName: The name of the template.
     */
    public readonly attrTemplateName: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property templateName: The name of the template.
     */
    public templateName: string | ros.IResolvable;

    /**
     * @Property allowAnonymousManage: Whether to allow anonymous management.
     */
    public allowAnonymousManage: boolean | ros.IResolvable | undefined;

    /**
     * @Property armsConfiguration: The ARMS configuration.
     */
    public armsConfiguration: RosTemplate.ArmsConfigurationProperty | ros.IResolvable | undefined;

    /**
     * @Property containerConfiguration: The container configuration. Only images based on Browser\/Code Interpreter base images are allowed.
     */
    public containerConfiguration: RosTemplate.ContainerConfigurationProperty | ros.IResolvable | undefined;

    /**
     * @Property cpu: The CPU resource configuration (unit: cores).
     */
    public cpu: number | ros.IResolvable | undefined;

    /**
     * @Property credentialConfiguration: The credential configuration.
     */
    public credentialConfiguration: RosTemplate.CredentialConfigurationProperty | ros.IResolvable | undefined;

    /**
     * @Property description: The description of the template.
     */
    public description: string | ros.IResolvable | undefined;

    /**
     * @Property diskSize: The disk size (unit: MB).
     */
    public diskSize: number | ros.IResolvable | undefined;

    /**
     * @Property enableAgent: Whether to enable the sandbox agent.
     */
    public enableAgent: boolean | ros.IResolvable | undefined;

    /**
     * @Property environmentVariables: The environment variables.
     */
    public environmentVariables: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable | undefined;

    /**
     * @Property executionRoleArn: The execution role ARN.
     */
    public executionRoleArn: string | ros.IResolvable | undefined;

    /**
     * @Property logConfiguration: The log configuration.
     */
    public logConfiguration: RosTemplate.LogConfigurationProperty | ros.IResolvable | undefined;

    /**
     * @Property memory: The memory resource configuration (unit: MB).
     */
    public memory: number | ros.IResolvable | undefined;

    /**
     * @Property nasConfig: The NAS configuration.
     */
    public nasConfig: RosTemplate.NasConfigProperty | ros.IResolvable | undefined;

    /**
     * @Property networkConfiguration: The network configuration.
     */
    public networkConfiguration: RosTemplate.NetworkConfigurationProperty | ros.IResolvable | undefined;

    /**
     * @Property ossConfiguration: The OSS configuration.
     */
    public ossConfiguration: Array<RosTemplate.OssConfigurationProperty | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property sandboxIdleTimeoutInSeconds: The sandbox idle timeout in seconds.
     */
    public sandboxIdleTimeoutInSeconds: number | ros.IResolvable | undefined;

    /**
     * @Property templateConfiguration: The template configuration (flexible object structure, varies by templateType).
     */
    public templateConfiguration: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable | undefined;

    /**
     * @Property templateType: The type of the template.
     */
    public templateType: string | ros.IResolvable | undefined;

    /**
     * @Property workspaceId: The workspace ID.
     */
    public workspaceId: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosTemplateProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosTemplate.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrTemplateArn = this.getAtt('TemplateArn');
        this.attrTemplateId = this.getAtt('TemplateId');
        this.attrTemplateName = this.getAtt('TemplateName');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.templateName = props.templateName;
        this.allowAnonymousManage = props.allowAnonymousManage;
        this.armsConfiguration = props.armsConfiguration;
        this.containerConfiguration = props.containerConfiguration;
        this.cpu = props.cpu;
        this.credentialConfiguration = props.credentialConfiguration;
        this.description = props.description;
        this.diskSize = props.diskSize;
        this.enableAgent = props.enableAgent;
        this.environmentVariables = props.environmentVariables;
        this.executionRoleArn = props.executionRoleArn;
        this.logConfiguration = props.logConfiguration;
        this.memory = props.memory;
        this.nasConfig = props.nasConfig;
        this.networkConfiguration = props.networkConfiguration;
        this.ossConfiguration = props.ossConfiguration;
        this.sandboxIdleTimeoutInSeconds = props.sandboxIdleTimeoutInSeconds;
        this.templateConfiguration = props.templateConfiguration;
        this.templateType = props.templateType;
        this.workspaceId = props.workspaceId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            templateName: this.templateName,
            allowAnonymousManage: this.allowAnonymousManage,
            armsConfiguration: this.armsConfiguration,
            containerConfiguration: this.containerConfiguration,
            cpu: this.cpu,
            credentialConfiguration: this.credentialConfiguration,
            description: this.description,
            diskSize: this.diskSize,
            enableAgent: this.enableAgent,
            environmentVariables: this.environmentVariables,
            executionRoleArn: this.executionRoleArn,
            logConfiguration: this.logConfiguration,
            memory: this.memory,
            nasConfig: this.nasConfig,
            networkConfiguration: this.networkConfiguration,
            ossConfiguration: this.ossConfiguration,
            sandboxIdleTimeoutInSeconds: this.sandboxIdleTimeoutInSeconds,
            templateConfiguration: this.templateConfiguration,
            templateType: this.templateType,
            workspaceId: this.workspaceId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosTemplatePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosTemplate {
    /**
     * @stability external
     */
    export interface ArmsConfigurationProperty {
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
/**
 * Determine whether the given properties match those of a `ArmsConfigurationProperty`
 *
 * @param properties - the TypeScript properties of a `ArmsConfigurationProperty`
 *
 * @returns the result of the validation.
 */
function RosTemplate_ArmsConfigurationPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('cmsWorkspace', ros.validateString)(properties.cmsWorkspace));
    errors.collect(ros.propertyValidator('enableArms', ros.requiredValidator)(properties.enableArms));
    errors.collect(ros.propertyValidator('enableArms', ros.validateBoolean)(properties.enableArms));
    errors.collect(ros.propertyValidator('armsLicenseKey', ros.requiredValidator)(properties.armsLicenseKey));
    errors.collect(ros.propertyValidator('armsLicenseKey', ros.validateString)(properties.armsLicenseKey));
    return errors.wrap('supplied properties not correct for "ArmsConfigurationProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::AgentRun::Template.ArmsConfiguration` resource
 *
 * @param properties - the TypeScript properties of a `ArmsConfigurationProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::AgentRun::Template.ArmsConfiguration` resource.
 */
// @ts-ignore TS6133
function rosTemplateArmsConfigurationPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosTemplate_ArmsConfigurationPropertyValidator(properties).assertSuccess();
    return {
      'CmsWorkspace': ros.stringToRosTemplate(properties.cmsWorkspace),
      'EnableArms': ros.booleanToRosTemplate(properties.enableArms),
      'ArmsLicenseKey': ros.stringToRosTemplate(properties.armsLicenseKey),
    };
}

export namespace RosTemplate {
    /**
     * @stability external
     */
    export interface ContainerConfigurationProperty {
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
/**
 * Determine whether the given properties match those of a `ContainerConfigurationProperty`
 *
 * @param properties - the TypeScript properties of a `ContainerConfigurationProperty`
 *
 * @returns the result of the validation.
 */
function RosTemplate_ContainerConfigurationPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('acrInstanceId', ros.validateString)(properties.acrInstanceId));
    errors.collect(ros.propertyValidator('command', ros.listValidator(ros.validateString))(properties.command));
    if(properties.port && (typeof properties.port) !== 'object') {
        errors.collect(ros.propertyValidator('port', ros.validateRange)({
            data: properties.port,
            min: 1,
            max: 65535,
          }));
    }
    errors.collect(ros.propertyValidator('port', ros.validateNumber)(properties.port));
    errors.collect(ros.propertyValidator('image', ros.validateString)(properties.image));
    errors.collect(ros.propertyValidator('imageRegistryType', ros.requiredValidator)(properties.imageRegistryType));
    if(properties.imageRegistryType && (typeof properties.imageRegistryType) !== 'object') {
        errors.collect(ros.propertyValidator('imageRegistryType', ros.validateAllowedValues)({
          data: properties.imageRegistryType,
          allowedValues: ["ACR","ACREE","CUSTOM"],
        }));
    }
    errors.collect(ros.propertyValidator('imageRegistryType', ros.validateString)(properties.imageRegistryType));
    return errors.wrap('supplied properties not correct for "ContainerConfigurationProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::AgentRun::Template.ContainerConfiguration` resource
 *
 * @param properties - the TypeScript properties of a `ContainerConfigurationProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::AgentRun::Template.ContainerConfiguration` resource.
 */
// @ts-ignore TS6133
function rosTemplateContainerConfigurationPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosTemplate_ContainerConfigurationPropertyValidator(properties).assertSuccess();
    return {
      'AcrInstanceId': ros.stringToRosTemplate(properties.acrInstanceId),
      'Command': ros.listMapper(ros.stringToRosTemplate)(properties.command),
      'Port': ros.numberToRosTemplate(properties.port),
      'Image': ros.stringToRosTemplate(properties.image),
      'ImageRegistryType': ros.stringToRosTemplate(properties.imageRegistryType),
    };
}

export namespace RosTemplate {
    /**
     * @stability external
     */
    export interface CredentialConfigurationProperty {
        /**
         * @Property credentialName: The credential name.
         */
        readonly credentialName: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `CredentialConfigurationProperty`
 *
 * @param properties - the TypeScript properties of a `CredentialConfigurationProperty`
 *
 * @returns the result of the validation.
 */
function RosTemplate_CredentialConfigurationPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('credentialName', ros.requiredValidator)(properties.credentialName));
    errors.collect(ros.propertyValidator('credentialName', ros.validateString)(properties.credentialName));
    return errors.wrap('supplied properties not correct for "CredentialConfigurationProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::AgentRun::Template.CredentialConfiguration` resource
 *
 * @param properties - the TypeScript properties of a `CredentialConfigurationProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::AgentRun::Template.CredentialConfiguration` resource.
 */
// @ts-ignore TS6133
function rosTemplateCredentialConfigurationPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosTemplate_CredentialConfigurationPropertyValidator(properties).assertSuccess();
    return {
      'CredentialName': ros.stringToRosTemplate(properties.credentialName),
    };
}

export namespace RosTemplate {
    /**
     * @stability external
     */
    export interface LogConfigurationProperty {
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
/**
 * Determine whether the given properties match those of a `LogConfigurationProperty`
 *
 * @param properties - the TypeScript properties of a `LogConfigurationProperty`
 *
 * @returns the result of the validation.
 */
function RosTemplate_LogConfigurationPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('project', ros.requiredValidator)(properties.project));
    errors.collect(ros.propertyValidator('project', ros.validateString)(properties.project));
    errors.collect(ros.propertyValidator('logstore', ros.requiredValidator)(properties.logstore));
    errors.collect(ros.propertyValidator('logstore', ros.validateString)(properties.logstore));
    return errors.wrap('supplied properties not correct for "LogConfigurationProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::AgentRun::Template.LogConfiguration` resource
 *
 * @param properties - the TypeScript properties of a `LogConfigurationProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::AgentRun::Template.LogConfiguration` resource.
 */
// @ts-ignore TS6133
function rosTemplateLogConfigurationPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosTemplate_LogConfigurationPropertyValidator(properties).assertSuccess();
    return {
      'Project': ros.stringToRosTemplate(properties.project),
      'Logstore': ros.stringToRosTemplate(properties.logstore),
    };
}

export namespace RosTemplate {
    /**
     * @stability external
     */
    export interface MountPointsProperty {
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
/**
 * Determine whether the given properties match those of a `MountPointsProperty`
 *
 * @param properties - the TypeScript properties of a `MountPointsProperty`
 *
 * @returns the result of the validation.
 */
function RosTemplate_MountPointsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('enableTls', ros.validateBoolean)(properties.enableTls));
    errors.collect(ros.propertyValidator('serverAddr', ros.validateString)(properties.serverAddr));
    errors.collect(ros.propertyValidator('mountDir', ros.validateString)(properties.mountDir));
    return errors.wrap('supplied properties not correct for "MountPointsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::AgentRun::Template.MountPoints` resource
 *
 * @param properties - the TypeScript properties of a `MountPointsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::AgentRun::Template.MountPoints` resource.
 */
// @ts-ignore TS6133
function rosTemplateMountPointsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosTemplate_MountPointsPropertyValidator(properties).assertSuccess();
    return {
      'EnableTLS': ros.booleanToRosTemplate(properties.enableTls),
      'ServerAddr': ros.stringToRosTemplate(properties.serverAddr),
      'MountDir': ros.stringToRosTemplate(properties.mountDir),
    };
}

export namespace RosTemplate {
    /**
     * @stability external
     */
    export interface NasConfigProperty {
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
/**
 * Determine whether the given properties match those of a `NasConfigProperty`
 *
 * @param properties - the TypeScript properties of a `NasConfigProperty`
 *
 * @returns the result of the validation.
 */
function RosTemplate_NasConfigPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.mountPoints && (Array.isArray(properties.mountPoints) || (typeof properties.mountPoints) === 'string')) {
        errors.collect(ros.propertyValidator('mountPoints', ros.validateLength)({
            data: properties.mountPoints.length,
            min: 1,
            max: undefined,
          }));
    }
    errors.collect(ros.propertyValidator('mountPoints', ros.listValidator(RosTemplate_MountPointsPropertyValidator))(properties.mountPoints));
    errors.collect(ros.propertyValidator('userId', ros.validateNumber)(properties.userId));
    errors.collect(ros.propertyValidator('groupId', ros.validateNumber)(properties.groupId));
    return errors.wrap('supplied properties not correct for "NasConfigProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::AgentRun::Template.NasConfig` resource
 *
 * @param properties - the TypeScript properties of a `NasConfigProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::AgentRun::Template.NasConfig` resource.
 */
// @ts-ignore TS6133
function rosTemplateNasConfigPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosTemplate_NasConfigPropertyValidator(properties).assertSuccess();
    return {
      'MountPoints': ros.listMapper(rosTemplateMountPointsPropertyToRosTemplate)(properties.mountPoints),
      'UserId': ros.numberToRosTemplate(properties.userId),
      'GroupId': ros.numberToRosTemplate(properties.groupId),
    };
}

export namespace RosTemplate {
    /**
     * @stability external
     */
    export interface NetworkConfigurationProperty {
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
/**
 * Determine whether the given properties match those of a `NetworkConfigurationProperty`
 *
 * @param properties - the TypeScript properties of a `NetworkConfigurationProperty`
 *
 * @returns the result of the validation.
 */
function RosTemplate_NetworkConfigurationPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('vpcId', ros.validateString)(properties.vpcId));
    if(properties.vSwitchIds && (Array.isArray(properties.vSwitchIds) || (typeof properties.vSwitchIds) === 'string')) {
        errors.collect(ros.propertyValidator('vSwitchIds', ros.validateLength)({
            data: properties.vSwitchIds.length,
            min: 1,
            max: undefined,
          }));
    }
    errors.collect(ros.propertyValidator('vSwitchIds', ros.listValidator(ros.validateString))(properties.vSwitchIds));
    errors.collect(ros.propertyValidator('securityGroupId', ros.validateString)(properties.securityGroupId));
    errors.collect(ros.propertyValidator('networkMode', ros.requiredValidator)(properties.networkMode));
    if(properties.networkMode && (typeof properties.networkMode) !== 'object') {
        errors.collect(ros.propertyValidator('networkMode', ros.validateAllowedValues)({
          data: properties.networkMode,
          allowedValues: ["PRIVATE","PUBLIC","PUBLIC_AND_PRIVATE"],
        }));
    }
    errors.collect(ros.propertyValidator('networkMode', ros.validateString)(properties.networkMode));
    return errors.wrap('supplied properties not correct for "NetworkConfigurationProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::AgentRun::Template.NetworkConfiguration` resource
 *
 * @param properties - the TypeScript properties of a `NetworkConfigurationProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::AgentRun::Template.NetworkConfiguration` resource.
 */
// @ts-ignore TS6133
function rosTemplateNetworkConfigurationPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosTemplate_NetworkConfigurationPropertyValidator(properties).assertSuccess();
    return {
      'VpcId': ros.stringToRosTemplate(properties.vpcId),
      'VSwitchIds': ros.listMapper(ros.stringToRosTemplate)(properties.vSwitchIds),
      'SecurityGroupId': ros.stringToRosTemplate(properties.securityGroupId),
      'NetworkMode': ros.stringToRosTemplate(properties.networkMode),
    };
}

export namespace RosTemplate {
    /**
     * @stability external
     */
    export interface OssConfigurationProperty {
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
/**
 * Determine whether the given properties match those of a `OssConfigurationProperty`
 *
 * @param properties - the TypeScript properties of a `OssConfigurationProperty`
 *
 * @returns the result of the validation.
 */
function RosTemplate_OssConfigurationPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('mountPoint', ros.requiredValidator)(properties.mountPoint));
    errors.collect(ros.propertyValidator('mountPoint', ros.validateString)(properties.mountPoint));
    errors.collect(ros.propertyValidator('bucketName', ros.requiredValidator)(properties.bucketName));
    errors.collect(ros.propertyValidator('bucketName', ros.validateString)(properties.bucketName));
    errors.collect(ros.propertyValidator('permission', ros.requiredValidator)(properties.permission));
    if(properties.permission && (typeof properties.permission) !== 'object') {
        errors.collect(ros.propertyValidator('permission', ros.validateAllowedValues)({
          data: properties.permission,
          allowedValues: ["READ_ONLY","READ_WRITE"],
        }));
    }
    errors.collect(ros.propertyValidator('permission', ros.validateString)(properties.permission));
    errors.collect(ros.propertyValidator('region', ros.requiredValidator)(properties.region));
    errors.collect(ros.propertyValidator('region', ros.validateString)(properties.region));
    errors.collect(ros.propertyValidator('prefix', ros.requiredValidator)(properties.prefix));
    errors.collect(ros.propertyValidator('prefix', ros.validateString)(properties.prefix));
    return errors.wrap('supplied properties not correct for "OssConfigurationProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::AgentRun::Template.OssConfiguration` resource
 *
 * @param properties - the TypeScript properties of a `OssConfigurationProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::AgentRun::Template.OssConfiguration` resource.
 */
// @ts-ignore TS6133
function rosTemplateOssConfigurationPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosTemplate_OssConfigurationPropertyValidator(properties).assertSuccess();
    return {
      'MountPoint': ros.stringToRosTemplate(properties.mountPoint),
      'BucketName': ros.stringToRosTemplate(properties.bucketName),
      'Permission': ros.stringToRosTemplate(properties.permission),
      'Region': ros.stringToRosTemplate(properties.region),
      'Prefix': ros.stringToRosTemplate(properties.prefix),
    };
}

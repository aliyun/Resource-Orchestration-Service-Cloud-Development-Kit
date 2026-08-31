import * as ros from '@alicloud/ros-cdk-core';
import { RosConfiguration } from './acm.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosConfiguration as ConfigurationProperty };

/**
 * Properties for defining a `Configuration`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-acm-configuration
 */
export interface ConfigurationProps {

    /**
     * Property content: The contents of the configuration
     */
    readonly content: string | ros.IResolvable;

    /**
     * Property dataId: The ID of the configuration. Allowed characters are upper and lower case letters, numbers, decimal points (.), Colons (:), asterisks (*), underscores (_), and underscores (-). When the ID prefix is the following value, ACM will automatically use KMS service to encrypt this configuration:
     * The prefix is cipher-: the KMS service is called to encrypt and decrypt the configuration. The size of the encrypted data does not exceed 4 KB, and the maximum does not exceed 6 KB. Special symbols such as and (&amp;) will decrypt errors and are not recommended.
     * The prefix is cipher-kms-aes-128-: using KMS's envelope encryption and decryption method, the configuration content can exceed  6 KB, up to 100 KB. The plain text data of the configuration content will not be transmitted to the KMS system, which is more secure and recommended.
     */
    readonly dataId: string | ros.IResolvable;

    /**
     * Property namespaceId: ID of namespace
     */
    readonly namespaceId: string | ros.IResolvable;

    /**
     * Property appName: Configuration application name
     */
    readonly appName?: string | ros.IResolvable;

    /**
     * Property desc: Configuration description explains
     */
    readonly desc?: string | ros.IResolvable;

    /**
     * Property group: Group
     */
    readonly group?: string | ros.IResolvable;

    /**
     * Property tags: Label configurations, such as the presence of a plurality of tags, separated by commas
     */
    readonly tags?: string;

    /**
     * Property type: Provisioning content format, optional values as follows:
     * text, json, xml, yaml, text\/html, properties
     */
    readonly type?: string | ros.IResolvable;
}

/**
 * Represents a `Configuration`.
 */
export interface IConfiguration extends ros.IResource {
    readonly props: ConfigurationProps;

    /**
     * Attribute DataId: The ID of the configuration
     */
    readonly attrDataId: ros.IResolvable | string;

    /**
     * Attribute Group: Group
     */
    readonly attrGroup: ros.IResolvable | string;

    /**
     * Attribute NamespaceId: ID of namespace
     */
    readonly attrNamespaceId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ACM::Configuration`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosConfiguration`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-acm-configuration
 */
export class Configuration extends ros.Resource implements IConfiguration {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: ConfigurationProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute DataId: The ID of the configuration
     */
    public readonly attrDataId: ros.IResolvable | string;

    /**
     * Attribute Group: Group
     */
    public readonly attrGroup: ros.IResolvable | string;

    /**
     * Attribute NamespaceId: ID of namespace
     */
    public readonly attrNamespaceId: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ConfigurationProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosConfiguration = new RosConfiguration(this, id,  {
            group: props.group === undefined || props.group === null ? 'DEFAULT_GROUP' : props.group,
            desc: props.desc,
            type: props.type === undefined || props.type === null ? 'text' : props.type,
            dataId: props.dataId,
            content: props.content,
            namespaceId: props.namespaceId,
            tags: props.tags,
            appName: props.appName,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosConfiguration;
        this.attrDataId = rosConfiguration.attrDataId;
        this.attrGroup = rosConfiguration.attrGroup;
        this.attrNamespaceId = rosConfiguration.attrNamespaceId;
    }
}

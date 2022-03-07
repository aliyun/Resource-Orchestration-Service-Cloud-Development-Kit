import * as ros from '@alicloud/ros-cdk-core';
import { RosConfiguration } from './acm.generated';
export { RosConfiguration as ConfigurationProperty };
/**
 * Properties for defining a `ALIYUN::ACM::Configuration`
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
     * text, json, xml, yaml, text/html, properties
     */
    readonly type?: string | ros.IResolvable;
}
/**
 * A ROS resource type:  `ALIYUN::ACM::Configuration`
 */
export declare class Configuration extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute DataId: The ID of the configuration
     */
    readonly attrDataId: ros.IResolvable;
    /**
     * Attribute Group: Group
     */
    readonly attrGroup: ros.IResolvable;
    /**
     * Attribute NamespaceId: ID of namespace
     */
    readonly attrNamespaceId: ros.IResolvable;
    /**
     * Create a new `ALIYUN::ACM::Configuration`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ConfigurationProps, enableResourcePropertyConstraint?: boolean);
}

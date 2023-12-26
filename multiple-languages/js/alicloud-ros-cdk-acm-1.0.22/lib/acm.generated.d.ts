import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `RosConfiguration`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-acm-configuration
 */
export interface RosConfigurationProps {
    /**
     * @Property content: The contents of the configuration
     */
    readonly content: string | ros.IResolvable;
    /**
     * @Property dataId: The ID of the configuration. Allowed characters are upper and lower case letters, numbers, decimal points (.), Colons (:), asterisks (*), underscores (_), and underscores (-). When the ID prefix is the following value, ACM will automatically use KMS service to encrypt this configuration:
     * The prefix is cipher-: the KMS service is called to encrypt and decrypt the configuration. The size of the encrypted data does not exceed 4 KB, and the maximum does not exceed 6 KB. Special symbols such as and (&amp;) will decrypt errors and are not recommended.
     * The prefix is cipher-kms-aes-128-: using KMS's envelope encryption and decryption method, the configuration content can exceed  6 KB, up to 100 KB. The plain text data of the configuration content will not be transmitted to the KMS system, which is more secure and recommended.
     */
    readonly dataId: string | ros.IResolvable;
    /**
     * @Property namespaceId: ID of namespace
     */
    readonly namespaceId: string | ros.IResolvable;
    /**
     * @Property appName: Configuration application name
     */
    readonly appName?: string | ros.IResolvable;
    /**
     * @Property desc: Configuration description explains
     */
    readonly desc?: string | ros.IResolvable;
    /**
     * @Property group: Group
     */
    readonly group?: string | ros.IResolvable;
    /**
     * @Property tags: Label configurations, such as the presence of a plurality of tags, separated by commas
     */
    readonly tags?: string;
    /**
     * @Property type: Provisioning content format, optional values as follows:
     * text, json, xml, yaml, text\/html, properties
     */
    readonly type?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ACM::Configuration`, which is used to create a configuration.
 * @Note This class does not contain additional functions, so it is recommended to use the `Configuration` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-acm-configuration
 */
export declare class RosConfiguration extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ACM::Configuration";
    /**
     * @Attribute DataId: The ID of the configuration
     */
    readonly attrDataId: ros.IResolvable;
    /**
     * @Attribute Group: Group
     */
    readonly attrGroup: ros.IResolvable;
    /**
     * @Attribute NamespaceId: ID of namespace
     */
    readonly attrNamespaceId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property content: The contents of the configuration
     */
    content: string | ros.IResolvable;
    /**
     * @Property dataId: The ID of the configuration. Allowed characters are upper and lower case letters, numbers, decimal points (.), Colons (:), asterisks (*), underscores (_), and underscores (-). When the ID prefix is the following value, ACM will automatically use KMS service to encrypt this configuration:
     * The prefix is cipher-: the KMS service is called to encrypt and decrypt the configuration. The size of the encrypted data does not exceed 4 KB, and the maximum does not exceed 6 KB. Special symbols such as and (&amp;) will decrypt errors and are not recommended.
     * The prefix is cipher-kms-aes-128-: using KMS's envelope encryption and decryption method, the configuration content can exceed  6 KB, up to 100 KB. The plain text data of the configuration content will not be transmitted to the KMS system, which is more secure and recommended.
     */
    dataId: string | ros.IResolvable;
    /**
     * @Property namespaceId: ID of namespace
     */
    namespaceId: string | ros.IResolvable;
    /**
     * @Property appName: Configuration application name
     */
    appName: string | ros.IResolvable | undefined;
    /**
     * @Property desc: Configuration description explains
     */
    desc: string | ros.IResolvable | undefined;
    /**
     * @Property group: Group
     */
    group: string | ros.IResolvable | undefined;
    /**
     * @Property tags: Label configurations, such as the presence of a plurality of tags, separated by commas
     */
    tags: string | undefined;
    /**
     * @Property type: Provisioning content format, optional values as follows:
     * text, json, xml, yaml, text\/html, properties
     */
    type: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosConfigurationProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
/**
 * Properties for defining a `RosNamespace`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-acm-namespace
 */
export interface RosNamespaceProps {
    /**
     * @Property name: Namespace name
     */
    readonly name: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ACM::Namespace`, which is used to create a namespace.
 * @Note This class does not contain additional functions, so it is recommended to use the `Namespace` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-acm-namespace
 */
export declare class RosNamespace extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ACM::Namespace";
    /**
     * @Attribute Endpoint: Endpoint
     */
    readonly attrEndpoint: ros.IResolvable;
    /**
     * @Attribute NamespaceId: ID namespace
     */
    readonly attrNamespaceId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property name: Namespace name
     */
    name: string | ros.IResolvable;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosNamespaceProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}

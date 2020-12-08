import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `ALIYUN::ACM::Configuration`
 */
export interface RosConfigurationProps {
    /**
     * @Property content: The contents of the configuration
     */
    readonly content: string;
    /**
     * @Property dataId: The ID of the configuration. Allowed characters are upper and lower case letters, numbers, decimal points (.), Colons (:), asterisks (*), underscores (_), and underscores (-). When the ID prefix is the following value, ACM will automatically use KMS service to encrypt this configuration:
     * The prefix is cipher-: the KMS service is called to encrypt and decrypt the configuration. The size of the encrypted data does not exceed 4 KB, and the maximum does not exceed 6 KB. Special symbols such as and (&amp;) will decrypt errors and are not recommended.
     * The prefix is cipher-kms-aes-128-: using KMS's envelope encryption and decryption method, the configuration content can exceed  6 KB, up to 100 KB. The plain text data of the configuration content will not be transmitted to the KMS system, which is more secure and recommended.
     */
    readonly dataId: string;
    /**
     * @Property namespaceId: ID of namespace
     */
    readonly namespaceId: string;
    /**
     * @Property appName: Configuration application name
     */
    readonly appName?: string;
    /**
     * @Property desc: Configuration description explains
     */
    readonly desc?: string;
    /**
     * @Property group: Group
     */
    readonly group?: string;
    /**
     * @Property tags: Label configurations, such as the presence of a plurality of tags, separated by commas
     */
    readonly tags?: string;
    /**
     * @Property type: Provisioning content format, optional values as follows:
     * text, json, xml, yaml, text/html, properties
     */
    readonly type?: string;
}
/**
 * A ROS template type:  `ALIYUN::ACM::Configuration`
 */
export declare class RosConfiguration extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ACM::Configuration";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute DataId: The ID of the configuration
     */
    readonly attrDataId: any;
    /**
     * @Attribute Group: Group
     */
    readonly attrGroup: any;
    /**
     * @Attribute NamespaceId: ID of namespace
     */
    readonly attrNamespaceId: any;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property content: The contents of the configuration
     */
    content: string;
    /**
     * @Property dataId: The ID of the configuration. Allowed characters are upper and lower case letters, numbers, decimal points (.), Colons (:), asterisks (*), underscores (_), and underscores (-). When the ID prefix is the following value, ACM will automatically use KMS service to encrypt this configuration:
     * The prefix is cipher-: the KMS service is called to encrypt and decrypt the configuration. The size of the encrypted data does not exceed 4 KB, and the maximum does not exceed 6 KB. Special symbols such as and (&amp;) will decrypt errors and are not recommended.
     * The prefix is cipher-kms-aes-128-: using KMS's envelope encryption and decryption method, the configuration content can exceed  6 KB, up to 100 KB. The plain text data of the configuration content will not be transmitted to the KMS system, which is more secure and recommended.
     */
    dataId: string;
    /**
     * @Property namespaceId: ID of namespace
     */
    namespaceId: string;
    /**
     * @Property appName: Configuration application name
     */
    appName: string | undefined;
    /**
     * @Property desc: Configuration description explains
     */
    desc: string | undefined;
    /**
     * @Property group: Group
     */
    group: string | undefined;
    /**
     * @Property tags: Label configurations, such as the presence of a plurality of tags, separated by commas
     */
    tags: string | undefined;
    /**
     * @Property type: Provisioning content format, optional values as follows:
     * text, json, xml, yaml, text/html, properties
     */
    type: string | undefined;
    /**
     * Create a new `ALIYUN::ACM::Configuration`.
     *
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
 * Properties for defining a `ALIYUN::ACM::Namespace`
 */
export interface RosNamespaceProps {
    /**
     * @Property name: Namespace name
     */
    readonly name: string;
}
/**
 * A ROS template type:  `ALIYUN::ACM::Namespace`
 */
export declare class RosNamespace extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ACM::Namespace";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute Endpoint: Endpoint
     */
    readonly attrEndpoint: any;
    /**
     * @Attribute NamespaceId: ID namespace
     */
    readonly attrNamespaceId: any;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property name: Namespace name
     */
    name: string;
    /**
     * Create a new `ALIYUN::ACM::Namespace`.
     *
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

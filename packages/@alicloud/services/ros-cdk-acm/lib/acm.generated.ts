// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `ALIYUN::ACM::Configuration`
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
     * text, json, xml, yaml, text/html, properties
     */
    readonly type?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosConfigurationProps`
 *
 * @param properties - the TypeScript properties of a `RosConfigurationProps`
 *
 * @returns the result of the validation.
 */
function RosConfigurationPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('group', ros.validateString)(properties.group));
    errors.collect(ros.propertyValidator('desc', ros.validateString)(properties.desc));
    if(properties.type && (typeof properties.type) !== 'object') {
        errors.collect(ros.propertyValidator('type', ros.validateAllowedValues)({
          data: properties.type,
          allowedValues: ["text","json","xml","yaml","text/html","properties"],
        }));
    }
    errors.collect(ros.propertyValidator('type', ros.validateString)(properties.type));
    errors.collect(ros.propertyValidator('dataId', ros.requiredValidator)(properties.dataId));
    errors.collect(ros.propertyValidator('dataId', ros.validateString)(properties.dataId));
    errors.collect(ros.propertyValidator('content', ros.requiredValidator)(properties.content));
    errors.collect(ros.propertyValidator('content', ros.validateString)(properties.content));
    errors.collect(ros.propertyValidator('namespaceId', ros.requiredValidator)(properties.namespaceId));
    errors.collect(ros.propertyValidator('namespaceId', ros.validateString)(properties.namespaceId));
    errors.collect(ros.propertyValidator('tags', ros.validateString)(properties.tags));
    errors.collect(ros.propertyValidator('appName', ros.validateString)(properties.appName));
    return errors.wrap('supplied properties not correct for "RosConfigurationProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ACM::Configuration` resource
 *
 * @param properties - the TypeScript properties of a `RosConfigurationProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ACM::Configuration` resource.
 */
// @ts-ignore TS6133
function rosConfigurationPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosConfigurationPropsValidator(properties).assertSuccess();
    }
    return {
      Content: ros.stringToRosTemplate(properties.content),
      DataId: ros.stringToRosTemplate(properties.dataId),
      NamespaceId: ros.stringToRosTemplate(properties.namespaceId),
      AppName: ros.stringToRosTemplate(properties.appName),
      Desc: ros.stringToRosTemplate(properties.desc),
      Group: ros.stringToRosTemplate(properties.group),
      Tags: ros.stringToRosTemplate(properties.tags),
      Type: ros.stringToRosTemplate(properties.type),
    };
}

/**
 * A ROS template type:  `ALIYUN::ACM::Configuration`
 */
export class RosConfiguration extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ACM::Configuration";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute DataId: The ID of the configuration
     */
    public readonly attrDataId: ros.IResolvable;

    /**
     * @Attribute Group: Group
     */
    public readonly attrGroup: ros.IResolvable;

    /**
     * @Attribute NamespaceId: ID of namespace
     */
    public readonly attrNamespaceId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property content: The contents of the configuration
     */
    public content: string | ros.IResolvable;

    /**
     * @Property dataId: The ID of the configuration. Allowed characters are upper and lower case letters, numbers, decimal points (.), Colons (:), asterisks (*), underscores (_), and underscores (-). When the ID prefix is the following value, ACM will automatically use KMS service to encrypt this configuration:
     * The prefix is cipher-: the KMS service is called to encrypt and decrypt the configuration. The size of the encrypted data does not exceed 4 KB, and the maximum does not exceed 6 KB. Special symbols such as and (&amp;) will decrypt errors and are not recommended.
     * The prefix is cipher-kms-aes-128-: using KMS's envelope encryption and decryption method, the configuration content can exceed  6 KB, up to 100 KB. The plain text data of the configuration content will not be transmitted to the KMS system, which is more secure and recommended.
     */
    public dataId: string | ros.IResolvable;

    /**
     * @Property namespaceId: ID of namespace
     */
    public namespaceId: string | ros.IResolvable;

    /**
     * @Property appName: Configuration application name
     */
    public appName: string | ros.IResolvable | undefined;

    /**
     * @Property desc: Configuration description explains
     */
    public desc: string | ros.IResolvable | undefined;

    /**
     * @Property group: Group
     */
    public group: string | ros.IResolvable | undefined;

    /**
     * @Property tags: Label configurations, such as the presence of a plurality of tags, separated by commas
     */
    public tags: string | undefined;

    /**
     * @Property type: Provisioning content format, optional values as follows:
     * text, json, xml, yaml, text/html, properties
     */
    public type: string | ros.IResolvable | undefined;

    /**
     * Create a new `ALIYUN::ACM::Configuration`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosConfigurationProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosConfiguration.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrDataId = this.getAtt('DataId');
        this.attrGroup = this.getAtt('Group');
        this.attrNamespaceId = this.getAtt('NamespaceId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.content = props.content;
        this.dataId = props.dataId;
        this.namespaceId = props.namespaceId;
        this.appName = props.appName;
        this.desc = props.desc;
        this.group = props.group;
        this.tags = props.tags;
        this.type = props.type;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            content: this.content,
            dataId: this.dataId,
            namespaceId: this.namespaceId,
            appName: this.appName,
            desc: this.desc,
            group: this.group,
            tags: this.tags,
            type: this.type,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosConfigurationPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `ALIYUN::ACM::Namespace`
 */
export interface RosNamespaceProps {

    /**
     * @Property name: Namespace name
     */
    readonly name: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosNamespaceProps`
 *
 * @param properties - the TypeScript properties of a `RosNamespaceProps`
 *
 * @returns the result of the validation.
 */
function RosNamespacePropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('name', ros.requiredValidator)(properties.name));
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    return errors.wrap('supplied properties not correct for "RosNamespaceProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ACM::Namespace` resource
 *
 * @param properties - the TypeScript properties of a `RosNamespaceProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ACM::Namespace` resource.
 */
// @ts-ignore TS6133
function rosNamespacePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosNamespacePropsValidator(properties).assertSuccess();
    }
    return {
      Name: ros.stringToRosTemplate(properties.name),
    };
}

/**
 * A ROS template type:  `ALIYUN::ACM::Namespace`
 */
export class RosNamespace extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ACM::Namespace";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute Endpoint: Endpoint
     */
    public readonly attrEndpoint: ros.IResolvable;

    /**
     * @Attribute NamespaceId: ID namespace
     */
    public readonly attrNamespaceId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property name: Namespace name
     */
    public name: string | ros.IResolvable;

    /**
     * Create a new `ALIYUN::ACM::Namespace`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosNamespaceProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosNamespace.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrEndpoint = this.getAtt('Endpoint');
        this.attrNamespaceId = this.getAtt('NamespaceId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.name = props.name;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            name: this.name,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosNamespacePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

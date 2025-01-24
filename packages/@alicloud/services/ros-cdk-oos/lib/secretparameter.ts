import * as ros from '@alicloud/ros-cdk-core';
import { RosSecretParameter } from './oos.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosSecretParameter as SecretParameterProperty };

/**
 * Properties for defining a `SecretParameter`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oos-secretparameter
 */
export interface SecretParameterProps {

    /**
     * Property secretParameterName: The name of the encryption parameter. The name must be 1 to 180 characters in length, and can contain letters, digits, hyphens (-), and underscores (_). It cannot start with ALIYUN, ACS, ALIBABA, ALICLOUD, or OOS.
     */
    readonly secretParameterName: string | ros.IResolvable;

    /**
     * Property value: The value of the encryption parameter. The value must be 1 to 4096 characters in length.
     */
    readonly value: string | ros.IResolvable;

    /**
     * Property constraints: The constraints of the encryption parameter.
     */
    readonly constraints?: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;

    /**
     * Property description: The description of the encryption parameter. The description must be 1 to 200 characters in length.
     */
    readonly description?: string | ros.IResolvable;

    /**
     * Property keyId: The Customer Master Key (CMK) of Key Management Service (KMS) that is used to encrypt the parameter.
     */
    readonly keyId?: string | ros.IResolvable;

    /**
     * Property resourceGroupId: The ID of resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;

    /**
     * Property tags: Tags of encryption parameter.
     */
    readonly tags?: RosSecretParameter.TagsProperty[];
}

/**
 * Represents a `SecretParameter`.
 */
export interface ISecretParameter extends ros.IResource {
    readonly props: SecretParameterProps;

    /**
     * Attribute Constraints: The constraints of the encryption parameter.
     */
    readonly attrConstraints: ros.IResolvable | string;

    /**
     * Attribute CreateTime: The time when the encryption parameter was created.
     */
    readonly attrCreateTime: ros.IResolvable | string;

    /**
     * Attribute CreatedBy: The user who created the encryption parameter.
     */
    readonly attrCreatedBy: ros.IResolvable | string;

    /**
     * Attribute Description: The description of the encryption parameter.
     */
    readonly attrDescription: ros.IResolvable | string;

    /**
     * Attribute KeyId: The Customer Master Key (CMK) of Key Management Service (KMS) that is used to encrypt the parameter.
     */
    readonly attrKeyId: ros.IResolvable | string;

    /**
     * Attribute ParameterVersion: The version number of the encryption parameter.
     */
    readonly attrParameterVersion: ros.IResolvable | string;

    /**
     * Attribute ResourceGroupId: The ID of resource group.
     */
    readonly attrResourceGroupId: ros.IResolvable | string;

    /**
     * Attribute SecretParameterId: The ID of the encryption parameter.
     */
    readonly attrSecretParameterId: ros.IResolvable | string;

    /**
     * Attribute SecretParameterName: The name of the encryption parameter.
     */
    readonly attrSecretParameterName: ros.IResolvable | string;

    /**
     * Attribute ShareType: The share type of the encryption parameter.
     */
    readonly attrShareType: ros.IResolvable | string;

    /**
     * Attribute Tags: Tags of encryption parameter.
     */
    readonly attrTags: ros.IResolvable | string;

    /**
     * Attribute Type: The data type of the encryption parameter.
     */
    readonly attrType: ros.IResolvable | string;

    /**
     * Attribute UpdatedBy: The user who updated the encryption parameter.
     */
    readonly attrUpdatedBy: ros.IResolvable | string;

    /**
     * Attribute UpdatedDate: The time when the encryption parameter was updated.
     */
    readonly attrUpdatedDate: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::OOS::SecretParameter`, which is used to create an encryption parameter.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosSecretParameter`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oos-secretparameter
 */
export class SecretParameter extends ros.Resource implements ISecretParameter {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: SecretParameterProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute Constraints: The constraints of the encryption parameter.
     */
    public readonly attrConstraints: ros.IResolvable | string;

    /**
     * Attribute CreateTime: The time when the encryption parameter was created.
     */
    public readonly attrCreateTime: ros.IResolvable | string;

    /**
     * Attribute CreatedBy: The user who created the encryption parameter.
     */
    public readonly attrCreatedBy: ros.IResolvable | string;

    /**
     * Attribute Description: The description of the encryption parameter.
     */
    public readonly attrDescription: ros.IResolvable | string;

    /**
     * Attribute KeyId: The Customer Master Key (CMK) of Key Management Service (KMS) that is used to encrypt the parameter.
     */
    public readonly attrKeyId: ros.IResolvable | string;

    /**
     * Attribute ParameterVersion: The version number of the encryption parameter.
     */
    public readonly attrParameterVersion: ros.IResolvable | string;

    /**
     * Attribute ResourceGroupId: The ID of resource group.
     */
    public readonly attrResourceGroupId: ros.IResolvable | string;

    /**
     * Attribute SecretParameterId: The ID of the encryption parameter.
     */
    public readonly attrSecretParameterId: ros.IResolvable | string;

    /**
     * Attribute SecretParameterName: The name of the encryption parameter.
     */
    public readonly attrSecretParameterName: ros.IResolvable | string;

    /**
     * Attribute ShareType: The share type of the encryption parameter.
     */
    public readonly attrShareType: ros.IResolvable | string;

    /**
     * Attribute Tags: Tags of encryption parameter.
     */
    public readonly attrTags: ros.IResolvable | string;

    /**
     * Attribute Type: The data type of the encryption parameter.
     */
    public readonly attrType: ros.IResolvable | string;

    /**
     * Attribute UpdatedBy: The user who updated the encryption parameter.
     */
    public readonly attrUpdatedBy: ros.IResolvable | string;

    /**
     * Attribute UpdatedDate: The time when the encryption parameter was updated.
     */
    public readonly attrUpdatedDate: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: SecretParameterProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosSecretParameter = new RosSecretParameter(this, id,  {
            description: props.description,
            constraints: props.constraints,
            resourceGroupId: props.resourceGroupId,
            secretParameterName: props.secretParameterName,
            value: props.value,
            keyId: props.keyId,
            tags: props.tags,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosSecretParameter;
        this.attrConstraints = rosSecretParameter.attrConstraints;
        this.attrCreateTime = rosSecretParameter.attrCreateTime;
        this.attrCreatedBy = rosSecretParameter.attrCreatedBy;
        this.attrDescription = rosSecretParameter.attrDescription;
        this.attrKeyId = rosSecretParameter.attrKeyId;
        this.attrParameterVersion = rosSecretParameter.attrParameterVersion;
        this.attrResourceGroupId = rosSecretParameter.attrResourceGroupId;
        this.attrSecretParameterId = rosSecretParameter.attrSecretParameterId;
        this.attrSecretParameterName = rosSecretParameter.attrSecretParameterName;
        this.attrShareType = rosSecretParameter.attrShareType;
        this.attrTags = rosSecretParameter.attrTags;
        this.attrType = rosSecretParameter.attrType;
        this.attrUpdatedBy = rosSecretParameter.attrUpdatedBy;
        this.attrUpdatedDate = rosSecretParameter.attrUpdatedDate;
    }
}

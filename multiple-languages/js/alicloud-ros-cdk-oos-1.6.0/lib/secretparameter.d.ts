import * as ros from '@alicloud/ros-cdk-core';
import { RosSecretParameter } from './oos.generated';
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
    readonly constraints?: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable;
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
export declare class SecretParameter extends ros.Resource implements ISecretParameter {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: SecretParameterProps;
    protected enableResourcePropertyConstraint: boolean;
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
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: SecretParameterProps, enableResourcePropertyConstraint?: boolean);
}

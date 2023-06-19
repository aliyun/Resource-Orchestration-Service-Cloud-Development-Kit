import * as ros from '@alicloud/ros-cdk-core';
import { RosSecretParameter } from './oos.generated';
export { RosSecretParameter as SecretParameterProperty };
/**
 * Properties for defining a `ALIYUN::OOS::SecretParameter`
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
 * A ROS resource type:  `ALIYUN::OOS::SecretParameter`
 */
export declare class SecretParameter extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute Constraints: The constraints of the encryption parameter.
     */
    readonly attrConstraints: ros.IResolvable;
    /**
     * Attribute CreateTime: The time when the encryption parameter was created.
     */
    readonly attrCreateTime: ros.IResolvable;
    /**
     * Attribute CreatedBy: The user who created the encryption parameter.
     */
    readonly attrCreatedBy: ros.IResolvable;
    /**
     * Attribute Description: The description of the encryption parameter.
     */
    readonly attrDescription: ros.IResolvable;
    /**
     * Attribute KeyId: The Customer Master Key (CMK) of Key Management Service (KMS) that is used to encrypt the parameter.
     */
    readonly attrKeyId: ros.IResolvable;
    /**
     * Attribute ParameterVersion: The version number of the encryption parameter.
     */
    readonly attrParameterVersion: ros.IResolvable;
    /**
     * Attribute ResourceGroupId: The ID of resource group.
     */
    readonly attrResourceGroupId: ros.IResolvable;
    /**
     * Attribute SecretParameterId: The ID of the encryption parameter.
     */
    readonly attrSecretParameterId: ros.IResolvable;
    /**
     * Attribute SecretParameterName: The name of the encryption parameter.
     */
    readonly attrSecretParameterName: ros.IResolvable;
    /**
     * Attribute ShareType: The share type of the encryption parameter.
     */
    readonly attrShareType: ros.IResolvable;
    /**
     * Attribute Tags: Tags of encryption parameter.
     */
    readonly attrTags: ros.IResolvable;
    /**
     * Attribute Type: The data type of the encryption parameter.
     */
    readonly attrType: ros.IResolvable;
    /**
     * Attribute UpdatedBy: The user who updated the encryption parameter.
     */
    readonly attrUpdatedBy: ros.IResolvable;
    /**
     * Attribute UpdatedDate: The time when the encryption parameter was updated.
     */
    readonly attrUpdatedDate: ros.IResolvable;
    /**
     * Create a new `ALIYUN::OOS::SecretParameter`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: SecretParameterProps, enableResourcePropertyConstraint?: boolean);
}

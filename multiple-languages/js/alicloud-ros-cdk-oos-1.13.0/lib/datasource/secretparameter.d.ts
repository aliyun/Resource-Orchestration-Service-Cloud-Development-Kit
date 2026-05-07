import * as ros from '@alicloud/ros-cdk-core';
import { RosSecretParameter } from './oos.generated';
export { RosSecretParameter as SecretParameterProperty };
/**
 * Properties for defining a `SecretParameter`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-oos-secretparameter
 */
export interface SecretParameterProps {
    /**
     * Property secretParameterName: The name of the parameter.
     */
    readonly secretParameterName: string | ros.IResolvable;
    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
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
     * Attribute KeyId: The ID of the key of Key Management Service (KMS) that is used for encryption.
     */
    readonly attrKeyId: ros.IResolvable | string;
    /**
     * Attribute ParameterVersion: The version number of the encryption parameter.
     */
    readonly attrParameterVersion: ros.IResolvable | string;
    /**
     * Attribute ResourceGroupId: The ID of the resource group.
     */
    readonly attrResourceGroupId: ros.IResolvable | string;
    /**
     * Attribute SecretParameterId: The ID of the encryption parameter.
     */
    readonly attrSecretParameterId: ros.IResolvable | string;
    /**
     * Attribute SecretParameterName: The name of the parameter.
     */
    readonly attrSecretParameterName: ros.IResolvable | string;
    /**
     * Attribute ShareType: The share type of the encryption parameter.
     */
    readonly attrShareType: ros.IResolvable | string;
    /**
     * Attribute Tags: The tags of the parameter.
     */
    readonly attrTags: ros.IResolvable | string;
    /**
     * Attribute Type: The type of the parameter.
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
     * Attribute Value: The value of the encryption parameter.
     */
    readonly attrValue: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::OOS::SecretParameter`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosSecretParameter`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-oos-secretparameter
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
     * Attribute KeyId: The ID of the key of Key Management Service (KMS) that is used for encryption.
     */
    readonly attrKeyId: ros.IResolvable | string;
    /**
     * Attribute ParameterVersion: The version number of the encryption parameter.
     */
    readonly attrParameterVersion: ros.IResolvable | string;
    /**
     * Attribute ResourceGroupId: The ID of the resource group.
     */
    readonly attrResourceGroupId: ros.IResolvable | string;
    /**
     * Attribute SecretParameterId: The ID of the encryption parameter.
     */
    readonly attrSecretParameterId: ros.IResolvable | string;
    /**
     * Attribute SecretParameterName: The name of the parameter.
     */
    readonly attrSecretParameterName: ros.IResolvable | string;
    /**
     * Attribute ShareType: The share type of the encryption parameter.
     */
    readonly attrShareType: ros.IResolvable | string;
    /**
     * Attribute Tags: The tags of the parameter.
     */
    readonly attrTags: ros.IResolvable | string;
    /**
     * Attribute Type: The type of the parameter.
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
     * Attribute Value: The value of the encryption parameter.
     */
    readonly attrValue: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: SecretParameterProps, enableResourcePropertyConstraint?: boolean);
}

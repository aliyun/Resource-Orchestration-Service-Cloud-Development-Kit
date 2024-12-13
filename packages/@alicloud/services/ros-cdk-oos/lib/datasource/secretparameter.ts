import * as ros from '@alicloud/ros-cdk-core';
import { RosSecretParameter } from './oos.generated';
// Generated from the AliCloud ROS Resource Specification
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
 * This class encapsulates and extends the ROS resource type `DATASOURCE::OOS::SecretParameter`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosSecretParameter`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-oos-secretparameter
 */
export class SecretParameter extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: SecretParameterProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute Constraints: The constraints of the encryption parameter.
     */
    public readonly attrConstraints: ros.IResolvable;

    /**
     * Attribute CreateTime: The time when the encryption parameter was created.
     */
    public readonly attrCreateTime: ros.IResolvable;

    /**
     * Attribute CreatedBy: The user who created the encryption parameter.
     */
    public readonly attrCreatedBy: ros.IResolvable;

    /**
     * Attribute Description: The description of the encryption parameter.
     */
    public readonly attrDescription: ros.IResolvable;

    /**
     * Attribute KeyId: The ID of the key of Key Management Service (KMS) that is used for encryption.
     */
    public readonly attrKeyId: ros.IResolvable;

    /**
     * Attribute ParameterVersion: The version number of the encryption parameter.
     */
    public readonly attrParameterVersion: ros.IResolvable;

    /**
     * Attribute ResourceGroupId: The ID of the resource group.
     */
    public readonly attrResourceGroupId: ros.IResolvable;

    /**
     * Attribute SecretParameterId: The ID of the encryption parameter.
     */
    public readonly attrSecretParameterId: ros.IResolvable;

    /**
     * Attribute SecretParameterName: The name of the parameter.
     */
    public readonly attrSecretParameterName: ros.IResolvable;

    /**
     * Attribute ShareType: The share type of the encryption parameter.
     */
    public readonly attrShareType: ros.IResolvable;

    /**
     * Attribute Tags: The tags of the parameter.
     */
    public readonly attrTags: ros.IResolvable;

    /**
     * Attribute Type: The type of the parameter.
     */
    public readonly attrType: ros.IResolvable;

    /**
     * Attribute UpdatedBy: The user who updated the encryption parameter.
     */
    public readonly attrUpdatedBy: ros.IResolvable;

    /**
     * Attribute UpdatedDate: The time when the encryption parameter was updated.
     */
    public readonly attrUpdatedDate: ros.IResolvable;

    /**
     * Attribute Value: The value of the encryption parameter.
     */
    public readonly attrValue: ros.IResolvable;

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
            secretParameterName: props.secretParameterName,
            refreshOptions: props.refreshOptions === undefined || props.refreshOptions === null ? 'Never' : props.refreshOptions,
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
        this.attrValue = rosSecretParameter.attrValue;
    }
}

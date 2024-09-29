import * as ros from '@alicloud/ros-cdk-core';
import { RosPolicy } from './kms.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosPolicy as PolicyProperty };

/**
 * Properties for defining a `Policy`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-kms-policy
 */
export interface PolicyProps {

    /**
     * Property accessControlRules: Network Rules info.
     */
    readonly accessControlRules: RosPolicy.AccessControlRulesProperty | ros.IResolvable;

    /**
     * Property kmsInstanceId: The scope of the permission policy. You need to specify the KMS instance that you want to access.
     */
    readonly kmsInstanceId: string | ros.IResolvable;

    /**
     * Property permissions: The operations that can be performed. Valid values:
     * RbacPermission\/Template\/CryptoServiceKeyUser: allows you to perform cryptographic operations.
     * RbacPermission\/Template\/CryptoServiceSecretUser: allows you to perform secret-related operations.
     */
    readonly permissions: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * Property policyName: The name of the permission policy.
     */
    readonly policyName: string | ros.IResolvable;

    /**
     * Property resources: The key and secret that are allowed to access. Supports a maximum of 30 key and secret.
     * Key: Enter a key in the key\/${KeyId} format. To allow access to all keys of a KMS instance, enter key\/*. 
     * Secret: Enter a secret in the secret\/${SecretName} format. To allow access to all secrets of a KMS instance, enter secret\/*.
     */
    readonly resources: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * Property description: The description of the permission policy.
     */
    readonly description?: string | ros.IResolvable;
}

/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::KMS::Policy`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosPolicy`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-kms-policy
 */
export class Policy extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: PolicyProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute AccessControlRules: Network Rules info.
     */
    public readonly attrAccessControlRules: ros.IResolvable;

    /**
     * Attribute Description: Description.
     */
    public readonly attrDescription: ros.IResolvable;

    /**
     * Attribute KmsInstanceId: The scope of the permission policy. You need to specify the KMS instance that you want to access.
     */
    public readonly attrKmsInstanceId: ros.IResolvable;

    /**
     * Attribute Permissions: RbacPermission Template, support RbacPermission/Template/CryptoServiceKeyUser and RbacPermission/Template/CryptoServiceSecretUser.
     */
    public readonly attrPermissions: ros.IResolvable;

    /**
     * Attribute PolicyName: The name of the permission policy.
     */
    public readonly attrPolicyName: ros.IResolvable;

    /**
     * Attribute Resources: Resources that allowed access by this policy.
     */
    public readonly attrResources: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: PolicyProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosPolicy = new RosPolicy(this, id,  {
            description: props.description,
            accessControlRules: props.accessControlRules,
            policyName: props.policyName,
            permissions: props.permissions,
            kmsInstanceId: props.kmsInstanceId,
            resources: props.resources,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosPolicy;
        this.attrAccessControlRules = rosPolicy.attrAccessControlRules;
        this.attrDescription = rosPolicy.attrDescription;
        this.attrKmsInstanceId = rosPolicy.attrKmsInstanceId;
        this.attrPermissions = rosPolicy.attrPermissions;
        this.attrPolicyName = rosPolicy.attrPolicyName;
        this.attrResources = rosPolicy.attrResources;
    }
}

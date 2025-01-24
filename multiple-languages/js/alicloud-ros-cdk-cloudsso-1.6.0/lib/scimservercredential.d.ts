import * as ros from '@alicloud/ros-cdk-core';
import { RosSCIMServerCredential } from './cloudsso.generated';
export { RosSCIMServerCredential as SCIMServerCredentialProperty };
/**
 * Properties for defining a `SCIMServerCredential`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudsso-scimservercredential
 */
export interface SCIMServerCredentialProps {
    /**
     * Property directoryId: The ID of the directory.
     */
    readonly directoryId: string | ros.IResolvable;
    /**
     * Property status: The new status of the SCIM credential. Valid values:
     * - Enabled: The SCIM credential is enabled.
     * - Disabled: The SCIM credential is disabled.
     * The default value is Enabled.
     */
    readonly status?: string | ros.IResolvable;
}
/**
 * Represents a `SCIMServerCredential`.
 */
export interface ISCIMServerCredential extends ros.IResource {
    readonly props: SCIMServerCredentialProps;
    /**
     * Attribute CredentialId: The ID of the SCIM credential.
     */
    readonly attrCredentialId: ros.IResolvable | string;
    /**
     * Attribute CredentialSecret: The secret of the SCIM credential.
     */
    readonly attrCredentialSecret: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::CloudSSO::SCIMServerCredential`, which is used to create a System for Cross-domain Identity Management (SCIM) credential.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosSCIMServerCredential`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudsso-scimservercredential
 */
export declare class SCIMServerCredential extends ros.Resource implements ISCIMServerCredential {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: SCIMServerCredentialProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute CredentialId: The ID of the SCIM credential.
     */
    readonly attrCredentialId: ros.IResolvable | string;
    /**
     * Attribute CredentialSecret: The secret of the SCIM credential.
     */
    readonly attrCredentialSecret: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: SCIMServerCredentialProps, enableResourcePropertyConstraint?: boolean);
}

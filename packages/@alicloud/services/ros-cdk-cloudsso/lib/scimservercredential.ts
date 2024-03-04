import * as ros from '@alicloud/ros-cdk-core';
import { RosSCIMServerCredential } from './cloudsso.generated';
// Generated from the AliCloud ROS Resource Specification
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
 * This class encapsulates and extends the ROS resource type `ALIYUN::CloudSSO::SCIMServerCredential`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosSCIMServerCredential`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudsso-scimservercredential
 */
export class SCIMServerCredential extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: SCIMServerCredentialProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute CredentialId: The ID of the SCIM credential.
     */
    public readonly attrCredentialId: ros.IResolvable;

    /**
     * Attribute CredentialSecret: The secret of the SCIM credential.
     */
    public readonly attrCredentialSecret: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: SCIMServerCredentialProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosSCIMServerCredential = new RosSCIMServerCredential(this, id,  {
            status: props.status === undefined || props.status === null ? 'Enabled' : props.status,
            directoryId: props.directoryId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosSCIMServerCredential;
        this.attrCredentialId = rosSCIMServerCredential.attrCredentialId;
        this.attrCredentialSecret = rosSCIMServerCredential.attrCredentialSecret;
    }
}

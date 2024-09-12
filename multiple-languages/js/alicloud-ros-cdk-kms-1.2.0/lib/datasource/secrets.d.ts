import * as ros from '@alicloud/ros-cdk-core';
import { RosSecrets } from './kms.generated';
export { RosSecrets as SecretsProperty };
/**
 * Properties for defining a `Secrets`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-kms-secrets
 */
export interface SecretsProps {
    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::KMS::Secrets`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosSecrets`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-kms-secrets
 */
export declare class Secrets extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: SecretsProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute SecretNames: The list of secret names.
     */
    readonly attrSecretNames: ros.IResolvable;
    /**
     * Attribute Secrets: The list of secrets.
     */
    readonly attrSecrets: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props?: SecretsProps, enableResourcePropertyConstraint?: boolean);
}

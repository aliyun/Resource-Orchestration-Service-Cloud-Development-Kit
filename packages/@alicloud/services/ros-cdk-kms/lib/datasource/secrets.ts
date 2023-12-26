import * as ros from '@alicloud/ros-cdk-core';
import { RosSecrets } from './kms.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosSecrets as SecretsProperty };

/**
 * Properties for defining a `Secrets`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-kms-secrets
 */
export interface SecretsProps {
}

/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::KMS::Secrets`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosSecrets`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-kms-secrets
 */
export class Secrets extends ros.Resource {

    /**
     * Attribute SecretNames: The list of secret names.
     */
    public readonly attrSecretNames: ros.IResolvable;

    /**
     * Attribute Secrets: The list of secrets.
     */
    public readonly attrSecrets: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: SecretsProps = {}, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosSecrets = new RosSecrets(this, id,  {
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        props;
        this.resource = rosSecrets;
        this.attrSecretNames = rosSecrets.attrSecretNames;
        this.attrSecrets = rosSecrets.attrSecrets;
    }
}

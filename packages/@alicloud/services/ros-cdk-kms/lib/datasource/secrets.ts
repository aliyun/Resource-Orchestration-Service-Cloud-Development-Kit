import * as ros from '@alicloud/ros-cdk-core';
import { RosSecrets } from './kms.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosSecrets as SecretsProperty };

/**
 * Properties for defining a `DATASOURCE::KMS::Secrets`
 */
export interface SecretsProps {
}

/**
 * A ROS resource type:  `DATASOURCE::KMS::Secrets`
 */
export class Secrets extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Attribute SecretNames: The list of secret names.
     */
    public readonly attrSecretNames: ros.IResolvable;

    /**
     * Attribute Secrets: The list of secrets.
     */
    public readonly attrSecrets: ros.IResolvable;

    /**
     * Create a new `DATASOURCE::KMS::Secrets`.
     *
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

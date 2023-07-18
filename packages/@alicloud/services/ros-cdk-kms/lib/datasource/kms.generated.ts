// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `DATASOURCE::KMS::Secrets`
 */
export interface RosSecretsProps {
}

/**
 * Determine whether the given properties match those of a `RosSecretsProps`
 *
 * @param properties - the TypeScript properties of a `RosSecretsProps`
 *
 * @returns the result of the validation.
 */
function RosSecretsPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    return errors.wrap('supplied properties not correct for "RosSecretsProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::KMS::Secrets` resource
 *
 * @param properties - the TypeScript properties of a `RosSecretsProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::KMS::Secrets` resource.
 */
// @ts-ignore TS6133
function rosSecretsPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosSecretsPropsValidator(properties).assertSuccess();
    }
    return {
    };
}

/**
 * A ROS template type:  `DATASOURCE::KMS::Secrets`
 */
export class RosSecrets extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::KMS::Secrets";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute SecretNames: The list of secret names.
     */
    public readonly attrSecretNames: ros.IResolvable;

    /**
     * @Attribute Secrets: The list of secrets.
     */
    public readonly attrSecrets: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * Create a new `DATASOURCE::KMS::Secrets`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosSecretsProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosSecrets.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrSecretNames = this.getAtt('SecretNames');
        this.attrSecrets = this.getAtt('Secrets');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosSecretsPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

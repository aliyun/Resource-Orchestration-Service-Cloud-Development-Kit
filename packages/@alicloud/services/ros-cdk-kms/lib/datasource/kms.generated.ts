// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `RosInstances`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-kms-instances
 */
export interface RosInstancesProps {
}

/**
 * Determine whether the given properties match those of a `RosInstancesProps`
 *
 * @param properties - the TypeScript properties of a `RosInstancesProps`
 *
 * @returns the result of the validation.
 */
function RosInstancesPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    return errors.wrap('supplied properties not correct for "RosInstancesProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::KMS::Instances` resource
 *
 * @param properties - the TypeScript properties of a `RosInstancesProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::KMS::Instances` resource.
 */
// @ts-ignore TS6133
function rosInstancesPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosInstancesPropsValidator(properties).assertSuccess();
    }
    return {
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::KMS::Instances`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Instances` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-kms-instances
 */
export class RosInstances extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::KMS::Instances";

    /**
     * @Attribute InstanceIds: The list of instance IDs.
     */
    public readonly attrInstanceIds: ros.IResolvable;

    /**
     * @Attribute Instances: The list of instances.
     */
    public readonly attrInstances: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosInstancesProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosInstances.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrInstanceIds = this.getAtt('InstanceIds');
        this.attrInstances = this.getAtt('Instances');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosInstancesPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosSecrets`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-kms-secrets
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
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::KMS::Secrets`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Secrets` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-kms-secrets
 */
export class RosSecrets extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::KMS::Secrets";

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

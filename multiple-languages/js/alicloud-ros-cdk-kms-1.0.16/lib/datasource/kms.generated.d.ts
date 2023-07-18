import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `DATASOURCE::KMS::Secrets`
 */
export interface RosSecretsProps {
}
/**
 * A ROS template type:  `DATASOURCE::KMS::Secrets`
 */
export declare class RosSecrets extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::KMS::Secrets";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute SecretNames: The list of secret names.
     */
    readonly attrSecretNames: ros.IResolvable;
    /**
     * @Attribute Secrets: The list of secrets.
     */
    readonly attrSecrets: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * Create a new `DATASOURCE::KMS::Secrets`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosSecretsProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}

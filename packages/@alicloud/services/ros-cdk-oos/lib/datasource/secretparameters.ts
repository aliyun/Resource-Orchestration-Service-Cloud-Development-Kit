import * as ros from '@alicloud/ros-cdk-core';
import { RosSecretParameters } from './oos.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosSecretParameters as SecretParametersProperty };

/**
 * Properties for defining a `DATASOURCE::OOS::SecretParameters`
 */
export interface SecretParametersProps {

    /**
     * Property resourceGroupId: The ID of resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;

    /**
     * Property secretParameterName: The name of the encryption parameter.
     */
    readonly secretParameterName?: string | ros.IResolvable;
}

/**
 * A ROS resource type:  `DATASOURCE::OOS::SecretParameters`
 */
export class SecretParameters extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Attribute SecretParameterNames: The list of secret parameter names.
     */
    public readonly attrSecretParameterNames: ros.IResolvable;

    /**
     * Attribute SecretParameters: The list of secret parameters.
     */
    public readonly attrSecretParameters: ros.IResolvable;

    /**
     * Create a new `DATASOURCE::OOS::SecretParameters`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: SecretParametersProps = {}, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosSecretParameters = new RosSecretParameters(this, id,  {
            resourceGroupId: props.resourceGroupId,
            secretParameterName: props.secretParameterName,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosSecretParameters;
        this.attrSecretParameterNames = rosSecretParameters.attrSecretParameterNames;
        this.attrSecretParameters = rosSecretParameters.attrSecretParameters;
    }
}

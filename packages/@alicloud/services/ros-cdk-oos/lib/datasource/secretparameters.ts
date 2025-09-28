import * as ros from '@alicloud/ros-cdk-core';
import { RosSecretParameters } from './oos.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosSecretParameters as SecretParametersProperty };

/**
 * Properties for defining a `SecretParameters`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-oos-secretparameters
 */
export interface SecretParametersProps {

    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;

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
 * Represents a `SecretParameters`.
 */
export interface ISecretParameters extends ros.IResource {
    readonly props: SecretParametersProps;

    /**
     * Attribute SecretParameterNames: The list of secret parameter names.
     */
    readonly attrSecretParameterNames: ros.IResolvable | string;

    /**
     * Attribute SecretParameters: The list of secret parameters.
     */
    readonly attrSecretParameters: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::OOS::SecretParameters`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosSecretParameters`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-oos-secretparameters
 */
export class SecretParameters extends ros.Resource implements ISecretParameters {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: SecretParametersProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute SecretParameterNames: The list of secret parameter names.
     */
    public readonly attrSecretParameterNames: ros.IResolvable | string;

    /**
     * Attribute SecretParameters: The list of secret parameters.
     */
    public readonly attrSecretParameters: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: SecretParametersProps = {}, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosSecretParameters = new RosSecretParameters(this, id,  {
            resourceGroupId: props.resourceGroupId,
            secretParameterName: props.secretParameterName,
            refreshOptions: props.refreshOptions === undefined || props.refreshOptions === null ? 'Never' : props.refreshOptions,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosSecretParameters;
        this.attrSecretParameterNames = rosSecretParameters.attrSecretParameterNames;
        this.attrSecretParameters = rosSecretParameters.attrSecretParameters;
    }
}

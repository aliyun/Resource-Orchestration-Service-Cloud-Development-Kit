import * as ros from '@alicloud/ros-cdk-core';
import { RosParameter } from './oos.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosParameter as ParameterProperty };

/**
 * Properties for defining a `Parameter`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-oos-parameter
 */
export interface ParameterProps {

    /**
     * Property name: The name of the common parameter.
     */
    readonly name: string | ros.IResolvable;

    /**
     * Property parameterVersion: The version number of the common parameter.
     */
    readonly parameterVersion?: number | ros.IResolvable;

    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}

/**
 * Represents a `Parameter`.
 */
export interface IParameter extends ros.IResource {
    readonly props: ParameterProps;

    /**
     * Attribute Constraints: The constraints of the common parameter.
     */
    readonly attrConstraints: ros.IResolvable | string;

    /**
     * Attribute CreatedBy: The user who created the common parameter.
     */
    readonly attrCreatedBy: ros.IResolvable | string;

    /**
     * Attribute CreatedDate: The time when the common parameter was created.
     */
    readonly attrCreatedDate: ros.IResolvable | string;

    /**
     * Attribute Description: The description of the common parameter.
     */
    readonly attrDescription: ros.IResolvable | string;

    /**
     * Attribute ParameterId: The ID of the common parameter.
     */
    readonly attrParameterId: ros.IResolvable | string;

    /**
     * Attribute ParameterVersion: The version number of the common parameter.
     */
    readonly attrParameterVersion: ros.IResolvable | string;

    /**
     * Attribute ShareType: The share type of the common parameter.
     */
    readonly attrShareType: ros.IResolvable | string;

    /**
     * Attribute Tags: The tags of the common parameter.
     */
    readonly attrTags: ros.IResolvable | string;

    /**
     * Attribute Type: The data type of the common parameter.
     */
    readonly attrType: ros.IResolvable | string;

    /**
     * Attribute UpdatedBy: The user who last updated the common parameter.
     */
    readonly attrUpdatedBy: ros.IResolvable | string;

    /**
     * Attribute UpdatedDate: The time when the common parameter was last updated.
     */
    readonly attrUpdatedDate: ros.IResolvable | string;

    /**
     * Attribute Value: The value of the common parameter.
     */
    readonly attrValue: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::OOS::Parameter`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosParameter`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-oos-parameter
 */
export class Parameter extends ros.Resource implements IParameter {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: ParameterProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute Constraints: The constraints of the common parameter.
     */
    public readonly attrConstraints: ros.IResolvable | string;

    /**
     * Attribute CreatedBy: The user who created the common parameter.
     */
    public readonly attrCreatedBy: ros.IResolvable | string;

    /**
     * Attribute CreatedDate: The time when the common parameter was created.
     */
    public readonly attrCreatedDate: ros.IResolvable | string;

    /**
     * Attribute Description: The description of the common parameter.
     */
    public readonly attrDescription: ros.IResolvable | string;

    /**
     * Attribute ParameterId: The ID of the common parameter.
     */
    public readonly attrParameterId: ros.IResolvable | string;

    /**
     * Attribute ParameterVersion: The version number of the common parameter.
     */
    public readonly attrParameterVersion: ros.IResolvable | string;

    /**
     * Attribute ShareType: The share type of the common parameter.
     */
    public readonly attrShareType: ros.IResolvable | string;

    /**
     * Attribute Tags: The tags of the common parameter.
     */
    public readonly attrTags: ros.IResolvable | string;

    /**
     * Attribute Type: The data type of the common parameter.
     */
    public readonly attrType: ros.IResolvable | string;

    /**
     * Attribute UpdatedBy: The user who last updated the common parameter.
     */
    public readonly attrUpdatedBy: ros.IResolvable | string;

    /**
     * Attribute UpdatedDate: The time when the common parameter was last updated.
     */
    public readonly attrUpdatedDate: ros.IResolvable | string;

    /**
     * Attribute Value: The value of the common parameter.
     */
    public readonly attrValue: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ParameterProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosParameter = new RosParameter(this, id,  {
            parameterVersion: props.parameterVersion,
            name: props.name,
            refreshOptions: props.refreshOptions === undefined || props.refreshOptions === null ? 'Never' : props.refreshOptions,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosParameter;
        this.attrConstraints = rosParameter.attrConstraints;
        this.attrCreatedBy = rosParameter.attrCreatedBy;
        this.attrCreatedDate = rosParameter.attrCreatedDate;
        this.attrDescription = rosParameter.attrDescription;
        this.attrParameterId = rosParameter.attrParameterId;
        this.attrParameterVersion = rosParameter.attrParameterVersion;
        this.attrShareType = rosParameter.attrShareType;
        this.attrTags = rosParameter.attrTags;
        this.attrType = rosParameter.attrType;
        this.attrUpdatedBy = rosParameter.attrUpdatedBy;
        this.attrUpdatedDate = rosParameter.attrUpdatedDate;
        this.attrValue = rosParameter.attrValue;
    }
}

import * as ros from '@alicloud/ros-cdk-core';
import { RosFunctionVersion } from './fc3.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosFunctionVersion as FunctionVersionProperty };

/**
 * Properties for defining a `FunctionVersion`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-fc3-functionversion
 */
export interface FunctionVersionProps {

    /**
     * Property functionName: Function Name.
     */
    readonly functionName: string | ros.IResolvable;

    /**
     * Property description: Description of the function version.
     */
    readonly description?: string | ros.IResolvable;
}

/**
 * Represents a `FunctionVersion`.
 */
export interface IFunctionVersion extends ros.IResource {
    readonly props: FunctionVersionProps;

    /**
     * Attribute CreateTime: The creation time of the resource.
     */
    readonly attrCreateTime: ros.IResolvable | string;

    /**
     * Attribute Description: Description of the function version.
     */
    readonly attrDescription: ros.IResolvable | string;

    /**
     * Attribute FunctionName: Function Name.
     */
    readonly attrFunctionName: ros.IResolvable | string;

    /**
     * Attribute LastModifiedTime: Update time.
     */
    readonly attrLastModifiedTime: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::FC3::FunctionVersion`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosFunctionVersion`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-fc3-functionversion
 */
export class FunctionVersion extends ros.Resource implements IFunctionVersion {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: FunctionVersionProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute CreateTime: The creation time of the resource.
     */
    public readonly attrCreateTime: ros.IResolvable | string;

    /**
     * Attribute Description: Description of the function version.
     */
    public readonly attrDescription: ros.IResolvable | string;

    /**
     * Attribute FunctionName: Function Name.
     */
    public readonly attrFunctionName: ros.IResolvable | string;

    /**
     * Attribute LastModifiedTime: Update time.
     */
    public readonly attrLastModifiedTime: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: FunctionVersionProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosFunctionVersion = new RosFunctionVersion(this, id,  {
            functionName: props.functionName,
            description: props.description,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosFunctionVersion;
        this.attrCreateTime = rosFunctionVersion.attrCreateTime;
        this.attrDescription = rosFunctionVersion.attrDescription;
        this.attrFunctionName = rosFunctionVersion.attrFunctionName;
        this.attrLastModifiedTime = rosFunctionVersion.attrLastModifiedTime;
    }
}

import * as ros from '@alicloud/ros-cdk-core';
import { RosDeployRevision } from './oos.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosDeployRevision as DeployRevisionProperty };

/**
 * Properties for defining a `DeployRevision`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oos-deployrevision
 */
export interface DeployRevisionProps {

    /**
     * Property applicationName: The name of the application.
     */
    readonly applicationName: string | ros.IResolvable;

    /**
     * Property description: The description of the revision.
     */
    readonly description?: string | ros.IResolvable;

    /**
     * Property hooks: The hook of the code to be deployed.
     */
    readonly hooks?: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;

    /**
     * Property location: The location of the code to be deployed.
     */
    readonly location?: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;

    /**
     * Property revisionType: The type of the revision.
     */
    readonly revisionType?: string | ros.IResolvable;
}

/**
 * Represents a `DeployRevision`.
 */
export interface IDeployRevision extends ros.IResource {
    readonly props: DeployRevisionProps;

    /**
     * Attribute RevisionId: The ID of the revision.
     */
    readonly attrRevisionId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::OOS::DeployRevision`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosDeployRevision`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oos-deployrevision
 */
export class DeployRevision extends ros.Resource implements IDeployRevision {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: DeployRevisionProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute RevisionId: The ID of the revision.
     */
    public readonly attrRevisionId: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: DeployRevisionProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosDeployRevision = new RosDeployRevision(this, id,  {
            applicationName: props.applicationName,
            description: props.description,
            revisionType: props.revisionType,
            hooks: props.hooks,
            location: props.location,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosDeployRevision;
        this.attrRevisionId = rosDeployRevision.attrRevisionId;
    }
}

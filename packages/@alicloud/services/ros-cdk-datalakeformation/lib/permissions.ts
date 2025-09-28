import * as ros from '@alicloud/ros-cdk-core';
import { RosPermissions } from './datalakeformation.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosPermissions as PermissionsProperty };

/**
 * Properties for defining a `Permissions`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-datalakeformation-permissions
 */
export interface PermissionsProps {

    /**
     * Property catalogId: The catalog id.
     */
    readonly catalogId: string | ros.IResolvable;

    /**
     * Property permissions: The permissions list.
     */
    readonly permissions: Array<RosPermissions.PermissionsProperty | ros.IResolvable> | ros.IResolvable;
}

/**
 * Represents a `Permissions`.
 */
export interface IPermissions extends ros.IResource {
    readonly props: PermissionsProps;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::DataLakeFormation::Permissions`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosPermissions`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-datalakeformation-permissions
 */
export class Permissions extends ros.Resource implements IPermissions {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: PermissionsProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: PermissionsProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosPermissions = new RosPermissions(this, id,  {
            permissions: props.permissions,
            catalogId: props.catalogId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosPermissions;
    }
}

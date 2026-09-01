import * as ros from '@alicloud/ros-cdk-core';
import { RosExtensions } from './polardb.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosExtensions as ExtensionsProperty };

/**
 * Properties for defining a `Extensions`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardb-extensions
 */
export interface ExtensionsProps {

    /**
     * Property accountName: The account name associated with the database.
     */
    readonly accountName: string | ros.IResolvable;

    /**
     * Property dbClusterId: The cluster ID.
     */
    readonly dbClusterId: string | ros.IResolvable;

    /**
     * Property dbNames: The database name.
     */
    readonly dbNames: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * Property extensions: The extensions to install.
     */
    readonly extensions?: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * Property resourceGroupId: The resource group ID.
     */
    readonly resourceGroupId?: string | ros.IResolvable;

    /**
     * Property sourceDbName: The source database name.
     */
    readonly sourceDbName?: string | ros.IResolvable;

    /**
     * Property vpcId: The VPC ID of the access endpoint.
     */
    readonly vpcId?: string | ros.IResolvable;
}

/**
 * Represents a `Extensions`.
 */
export interface IExtensions extends ros.IResource {
    readonly props: ExtensionsProps;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::POLARDB::Extensions`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosExtensions`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardb-extensions
 */
export class Extensions extends ros.Resource implements IExtensions {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: ExtensionsProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ExtensionsProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosExtensions = new RosExtensions(this, id,  {
            sourceDbName: props.sourceDbName,
            resourceGroupId: props.resourceGroupId,
            vpcId: props.vpcId,
            dbClusterId: props.dbClusterId,
            dbNames: props.dbNames,
            extensions: props.extensions,
            accountName: props.accountName,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosExtensions;
    }
}

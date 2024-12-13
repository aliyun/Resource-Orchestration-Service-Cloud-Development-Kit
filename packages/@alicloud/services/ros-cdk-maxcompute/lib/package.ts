import * as ros from '@alicloud/ros-cdk-core';
import { RosPackage } from './maxcompute.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosPackage as PackageProperty };

/**
 * Properties for defining a `Package`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-maxcompute-package
 */
export interface PackageProps {

    /**
     * Property packageName: The name of the project package.
     */
    readonly packageName: string | ros.IResolvable;

    /**
     * Property projectName: The name of the MaxCompute project.
     */
    readonly projectName: string | ros.IResolvable;

    /**
     * Property acl: The access-control list (ACL).
     */
    readonly acl?: RosPackage.AclProperty | ros.IResolvable;
}

/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::MaxCompute::Package`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosPackage`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-maxcompute-package
 */
export class Package extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: PackageProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute PackageName: The name of the project package.
     */
    public readonly attrPackageName: ros.IResolvable;

    /**
     * Attribute ProjectName: The name of the MaxCompute project.
     */
    public readonly attrProjectName: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: PackageProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosPackage = new RosPackage(this, id,  {
            projectName: props.projectName,
            packageName: props.packageName,
            acl: props.acl,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosPackage;
        this.attrPackageName = rosPackage.attrPackageName;
        this.attrProjectName = rosPackage.attrProjectName;
    }
}
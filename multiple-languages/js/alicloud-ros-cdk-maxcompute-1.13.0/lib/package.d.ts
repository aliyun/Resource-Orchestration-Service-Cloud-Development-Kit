import * as ros from '@alicloud/ros-cdk-core';
import { RosPackage } from './maxcompute.generated';
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
 * Represents a `Package`.
 */
export interface IPackage extends ros.IResource {
    readonly props: PackageProps;
    /**
     * Attribute PackageName: The name of the project package.
     */
    readonly attrPackageName: ros.IResolvable | string;
    /**
     * Attribute ProjectName: The name of the MaxCompute project.
     */
    readonly attrProjectName: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::MaxCompute::Package`, which is used to create a package.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosPackage`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-maxcompute-package
 */
export declare class Package extends ros.Resource implements IPackage {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: PackageProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute PackageName: The name of the project package.
     */
    readonly attrPackageName: ros.IResolvable | string;
    /**
     * Attribute ProjectName: The name of the MaxCompute project.
     */
    readonly attrProjectName: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: PackageProps, enableResourcePropertyConstraint?: boolean);
}

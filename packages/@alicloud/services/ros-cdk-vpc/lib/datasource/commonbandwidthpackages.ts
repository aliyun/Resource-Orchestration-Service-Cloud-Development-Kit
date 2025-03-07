import * as ros from '@alicloud/ros-cdk-core';
import { RosCommonBandwidthPackages } from './vpc.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosCommonBandwidthPackages as CommonBandwidthPackagesProperty };

/**
 * Properties for defining a `CommonBandwidthPackages`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-commonbandwidthpackages
 */
export interface CommonBandwidthPackagesProps {

    /**
     * Property commonBandwidthPackageId: The ID of the Internet shared bandwidth.
     */
    readonly commonBandwidthPackageId?: string | ros.IResolvable;

    /**
     * Property commonBandwidthPackageName: The name of the Internet Shared Bandwidth instance.
     */
    readonly commonBandwidthPackageName?: string | ros.IResolvable;

    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;

    /**
     * Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
}

/**
 * Represents a `CommonBandwidthPackages`.
 */
export interface ICommonBandwidthPackages extends ros.IResource {
    readonly props: CommonBandwidthPackagesProps;

    /**
     * Attribute CommonBandwidthPackageIds: The list of common bandwidth package IDs.
     */
    readonly attrCommonBandwidthPackageIds: ros.IResolvable | string;

    /**
     * Attribute CommonBandwidthPackages: The list of common bandwidth packages.
     */
    readonly attrCommonBandwidthPackages: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::VPC::CommonBandwidthPackages`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosCommonBandwidthPackages`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-commonbandwidthpackages
 */
export class CommonBandwidthPackages extends ros.Resource implements ICommonBandwidthPackages {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: CommonBandwidthPackagesProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute CommonBandwidthPackageIds: The list of common bandwidth package IDs.
     */
    public readonly attrCommonBandwidthPackageIds: ros.IResolvable | string;

    /**
     * Attribute CommonBandwidthPackages: The list of common bandwidth packages.
     */
    public readonly attrCommonBandwidthPackages: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: CommonBandwidthPackagesProps = {}, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosCommonBandwidthPackages = new RosCommonBandwidthPackages(this, id,  {
            resourceGroupId: props.resourceGroupId,
            commonBandwidthPackageName: props.commonBandwidthPackageName,
            commonBandwidthPackageId: props.commonBandwidthPackageId,
            refreshOptions: props.refreshOptions === undefined || props.refreshOptions === null ? 'Never' : props.refreshOptions,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosCommonBandwidthPackages;
        this.attrCommonBandwidthPackageIds = rosCommonBandwidthPackages.attrCommonBandwidthPackageIds;
        this.attrCommonBandwidthPackages = rosCommonBandwidthPackages.attrCommonBandwidthPackages;
    }
}

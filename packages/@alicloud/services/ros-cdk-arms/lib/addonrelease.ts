import * as ros from '@alicloud/ros-cdk-core';
import { RosAddonRelease } from './arms.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosAddonRelease as AddonReleaseProperty };

/**
 * Properties for defining a `AddonRelease`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-addonrelease
 */
export interface AddonReleaseProps {

    /**
     * Property addonVersion: The version of the add-on.
     */
    readonly addonVersion: string | ros.IResolvable;

    /**
     * Property environmentId: The id of the environment.
     */
    readonly environmentId: string | ros.IResolvable;

    /**
     * Property name: The name of the add-on.
     */
    readonly name: string | ros.IResolvable;

    /**
     * Property releaseName: The name of the add-on after it is installed. If you do not specify this parameter, a default rule name is generated.
     */
    readonly releaseName?: string | ros.IResolvable;

    /**
     * Property values: The metadata.
     */
    readonly values?: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;
}

/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ARMS::AddonRelease`, which is used to install an add-on release.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosAddonRelease`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-addonrelease
 */
export class AddonRelease extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: AddonReleaseProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute Config: AddonRelease configuration information.
     */
    public readonly attrConfig: ros.IResolvable;

    /**
     * Attribute EnvironmentId: The environment ID.
     */
    public readonly attrEnvironmentId: ros.IResolvable;

    /**
     * Attribute Release: Release information.
     */
    public readonly attrRelease: ros.IResolvable;

    /**
     * Attribute ReleaseName: The name of the add-on.
     */
    public readonly attrReleaseName: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: AddonReleaseProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosAddonRelease = new RosAddonRelease(this, id,  {
            environmentId: props.environmentId,
            addonVersion: props.addonVersion,
            values: props.values,
            releaseName: props.releaseName,
            name: props.name,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosAddonRelease;
        this.attrConfig = rosAddonRelease.attrConfig;
        this.attrEnvironmentId = rosAddonRelease.attrEnvironmentId;
        this.attrRelease = rosAddonRelease.attrRelease;
        this.attrReleaseName = rosAddonRelease.attrReleaseName;
    }
}

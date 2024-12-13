import * as ros from '@alicloud/ros-cdk-core';
import { RosAddonRelease } from './arms.generated';
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
    readonly values?: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ARMS::AddonRelease`, which is used to install an add-on release.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosAddonRelease`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-addonrelease
 */
export declare class AddonRelease extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: AddonReleaseProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute Config: AddonRelease configuration information.
     */
    readonly attrConfig: ros.IResolvable;
    /**
     * Attribute EnvironmentId: The environment ID.
     */
    readonly attrEnvironmentId: ros.IResolvable;
    /**
     * Attribute Release: Release information.
     */
    readonly attrRelease: ros.IResolvable;
    /**
     * Attribute ReleaseName: The name of the add-on.
     */
    readonly attrReleaseName: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: AddonReleaseProps, enableResourcePropertyConstraint?: boolean);
}

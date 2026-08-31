import * as ros from '@alicloud/ros-cdk-core';
import { RosAddonRelease } from './cms2.generated';
export { RosAddonRelease as AddonReleaseProperty };
/**
 * Properties for defining a `AddonRelease`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cms2-addonrelease
 */
export interface AddonReleaseProps {
    /**
     * Property addonName: The name of the add-on.
     */
    readonly addonName: string | ros.IResolvable;
    /**
     * Property addonVersion: The version of the add-on.
     */
    readonly addonVersion: string | ros.IResolvable;
    /**
     * Property policyId: The ID of the integration policy.
     */
    readonly policyId: string | ros.IResolvable;
    /**
     * Property entityRules: Entity discovery rules model.
     */
    readonly entityRules?: RosAddonRelease.EntityRulesProperty | ros.IResolvable;
    /**
     * Property envType: The environment type.
     */
    readonly envType?: string | ros.IResolvable;
    /**
     * Property lang: The language of the add-on.
     */
    readonly lang?: string | ros.IResolvable;
    /**
     * Property parentAddonReleaseId: The ID of the parent add-on release.
     */
    readonly parentAddonReleaseId?: string | ros.IResolvable;
    /**
     * Property releaseName: The name of the add-on release.
     */
    readonly releaseName?: string | ros.IResolvable;
    /**
     * Property values: The values of the add-on release.
     */
    readonly values?: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable;
    /**
     * Property workspace: The workspace of the add-on release.
     */
    readonly workspace?: string | ros.IResolvable;
}
/**
 * Represents a `AddonRelease`.
 */
export interface IAddonRelease extends ros.IResource {
    readonly props: AddonReleaseProps;
    /**
     * Attribute ReleaseName: The name of the add-on release.
     */
    readonly attrReleaseName: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::CMS2::AddonRelease`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosAddonRelease`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cms2-addonrelease
 */
export declare class AddonRelease extends ros.Resource implements IAddonRelease {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: AddonReleaseProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute ReleaseName: The name of the add-on release.
     */
    readonly attrReleaseName: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: AddonReleaseProps, enableResourcePropertyConstraint?: boolean);
}

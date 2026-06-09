import * as ros from '@alicloud/ros-cdk-core';
import { RosUpgradeVersion } from './redis.generated';
export { RosUpgradeVersion as UpgradeVersionProperty };
/**
 * Properties for defining a `UpgradeVersion`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-redis-upgradeversion
 */
export interface UpgradeVersionProps {
    /**
     * Property instanceId: The id of the instance.
     */
    readonly instanceId: string | ros.IResolvable;
    /**
     * Property autoUpgradeOpen: Whether to enable automatic upgrade.
     */
    readonly autoUpgradeOpen?: boolean | ros.IResolvable;
    /**
     * Property effectiveTime: The time when the upgrade is effective. Value: Immediately|MaintainTime, default: Immediately.
     */
    readonly effectiveTime?: string | ros.IResolvable;
    /**
     * Property majorVersion: Upgrade the major version of the instance.
     */
    readonly majorVersion?: string | ros.IResolvable;
    /**
     * Property minorVersion: The minor version to be upgraded to, the default value is: latest_version, that is, the latest version.
     */
    readonly minorVersion?: string | ros.IResolvable;
}
/**
 * Represents a `UpgradeVersion`.
 */
export interface IUpgradeVersion extends ros.IResource {
    readonly props: UpgradeVersionProps;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::REDIS::UpgradeVersion`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosUpgradeVersion`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-redis-upgradeversion
 */
export declare class UpgradeVersion extends ros.Resource implements IUpgradeVersion {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: UpgradeVersionProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: UpgradeVersionProps, enableResourcePropertyConstraint?: boolean);
}

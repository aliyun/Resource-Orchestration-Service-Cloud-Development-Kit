import * as ros from '@alicloud/ros-cdk-core';
import { RosSCIMSynchronization } from './cloudsso.generated';
export { RosSCIMSynchronization as SCIMSynchronizationProperty };
/**
 * Properties for defining a `SCIMSynchronization`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudsso-scimsynchronization
 */
export interface SCIMSynchronizationProps {
    /**
     * Property directoryId: The ID of the directory.
     */
    readonly directoryId: string | ros.IResolvable;
    /**
     * Property scimSynchronizationStatus: The status of SCIM synchronization. Valid values:
     * - Enabled
     * - Disabled
     * The default value is Enabled.
     */
    readonly scimSynchronizationStatus?: string | ros.IResolvable;
}
/**
 * Represents a `SCIMSynchronization`.
 */
export interface ISCIMSynchronization extends ros.IResource {
    readonly props: SCIMSynchronizationProps;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::CloudSSO::SCIMSynchronization`, which is used to enable or disable System for Cross-domain Identity Management (SCIM) synchronization.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosSCIMSynchronization`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudsso-scimsynchronization
 */
export declare class SCIMSynchronization extends ros.Resource implements ISCIMSynchronization {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: SCIMSynchronizationProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: SCIMSynchronizationProps, enableResourcePropertyConstraint?: boolean);
}

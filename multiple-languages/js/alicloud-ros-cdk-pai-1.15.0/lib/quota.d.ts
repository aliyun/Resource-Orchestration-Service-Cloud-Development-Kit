import * as ros from '@alicloud/ros-cdk-core';
import { RosQuota } from './pai.generated';
export { RosQuota as QuotaProperty };
/**
 * Properties for defining a `Quota`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pai-quota
 */
export interface QuotaProps {
    /**
     * Property quotaName: The name of the quota.
     */
    readonly quotaName: string | ros.IResolvable;
    /**
     * Property allocateStrategy: The allocation strategy.
     */
    readonly allocateStrategy?: string | ros.IResolvable;
    /**
     * Property clusterSpec: The cluster specification.
     */
    readonly clusterSpec?: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable;
    /**
     * Property description: The description of the quota.
     */
    readonly description?: string | ros.IResolvable;
    /**
     * Property labels: The labels associated with the quota.
     */
    readonly labels?: Array<RosQuota.LabelsProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * Property min: The minimum resource allocation configuration.
     */
    readonly min?: RosQuota.MinProperty | ros.IResolvable;
    /**
     * Property parentQuotaId: The ID of the parent quota.
     */
    readonly parentQuotaId?: string | ros.IResolvable;
    /**
     * Property queueStrategy: The queue strategy.
     */
    readonly queueStrategy?: string | ros.IResolvable;
    /**
     * Property quotaConfig: The quota configuration.
     */
    readonly quotaConfig?: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable;
    /**
     * Property resourceGroupIds: The list of resource group IDs.
     */
    readonly resourceGroupIds?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * Property resourceType: The type of the resource.
     */
    readonly resourceType?: string | ros.IResolvable;
}
/**
 * Represents a `Quota`.
 */
export interface IQuota extends ros.IResource {
    readonly props: QuotaProps;
    /**
     * Attribute QuotaId: The ID of the quota.
     */
    readonly attrQuotaId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::PAI::Quota`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosQuota`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pai-quota
 */
export declare class Quota extends ros.Resource implements IQuota {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: QuotaProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute QuotaId: The ID of the quota.
     */
    readonly attrQuotaId: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: QuotaProps, enableResourcePropertyConstraint?: boolean);
}

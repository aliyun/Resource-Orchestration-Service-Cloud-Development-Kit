import * as ros from '@alicloud/ros-cdk-core';
import { RosRun } from './pai.generated';
export { RosRun as RunProperty };
/**
 * Properties for defining a `Run`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pai-run
 */
export interface RunProps {
    /**
     * Property experimentId: Resource attribute field of the experiment ID to which Run belongs.
     */
    readonly experimentId: string | ros.IResolvable;
    /**
     * Property runName: The name of the Run.
     */
    readonly runName?: string | ros.IResolvable;
    /**
     * Property sourceId: Attribute Resource field representing the source task ID.
     */
    readonly sourceId?: string | ros.IResolvable;
    /**
     * Property sourceType: Resource attribute fields representing the source type.
     */
    readonly sourceType?: string | ros.IResolvable;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::PAI::Run`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosRun`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pai-run
 */
export declare class Run extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: RunProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute Accessibility: Resource attribute fields representing visibility.
     */
    readonly attrAccessibility: ros.IResolvable;
    /**
     * Attribute CreateTime: The creation time of the Run.
     */
    readonly attrCreateTime: ros.IResolvable;
    /**
     * Attribute ExperimentId: Resource attribute field of the experiment ID to which Run belongs.
     */
    readonly attrExperimentId: ros.IResolvable;
    /**
     * Attribute GmtModifiedTime: Resource attribute fields representing edit time.
     */
    readonly attrGmtModifiedTime: ros.IResolvable;
    /**
     * Attribute Labels: Run attribute field representing the run tag.
     */
    readonly attrLabels: ros.IResolvable;
    /**
     * Attribute Metrics: Resource attribute field representing the run metric.
     */
    readonly attrMetrics: ros.IResolvable;
    /**
     * Attribute OwnerId: Resource attribute field representing owner.
     */
    readonly attrOwnerId: ros.IResolvable;
    /**
     * Attribute Params: Resource attribute field representing the run parameter.
     */
    readonly attrParams: ros.IResolvable;
    /**
     * Attribute RunId: The ID of the Run.
     */
    readonly attrRunId: ros.IResolvable;
    /**
     * Attribute RunName: The name of the Run.
     */
    readonly attrRunName: ros.IResolvable;
    /**
     * Attribute SourceId: Attribute Resource field representing the source task ID.
     */
    readonly attrSourceId: ros.IResolvable;
    /**
     * Attribute SourceType: Run attribute fields representing the source type.
     */
    readonly attrSourceType: ros.IResolvable;
    /**
     * Attribute UserId: Run attribute field representing creator ID.
     */
    readonly attrUserId: ros.IResolvable;
    /**
     * Attribute WorkspaceId: Resource attribute field of the workspace ID to which Run belongs.
     */
    readonly attrWorkspaceId: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RunProps, enableResourcePropertyConstraint?: boolean);
}

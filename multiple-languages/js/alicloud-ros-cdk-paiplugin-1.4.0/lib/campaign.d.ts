import * as ros from '@alicloud/ros-cdk-core';
import { RosCampaign } from './paiplugin.generated';
export { RosCampaign as CampaignProperty };
/**
 * Properties for defining a `Campaign`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-paiplugin-campaign
 */
export interface CampaignProps {
    /**
     * Property name: The name of the campaign.
     */
    readonly name: string | ros.IResolvable;
    /**
     * Property remark: The remark of the campaign.
     */
    readonly remark?: string | ros.IResolvable;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::PAIPlugin::Campaign`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosCampaign`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-paiplugin-campaign
 */
export declare class Campaign extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: CampaignProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute CampaignId: The Campaign ID created this time.
     */
    readonly attrCampaignId: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: CampaignProps, enableResourcePropertyConstraint?: boolean);
}

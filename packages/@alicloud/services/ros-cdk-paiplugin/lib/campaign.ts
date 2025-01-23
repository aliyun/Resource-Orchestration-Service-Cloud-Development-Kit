import * as ros from '@alicloud/ros-cdk-core';
import { RosCampaign } from './paiplugin.generated';
// Generated from the AliCloud ROS Resource Specification
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
 * Represents a `Campaign`.
 */
export interface ICampaign extends ros.IResource {
    readonly props: CampaignProps;

    /**
     * Attribute CampaignId: The Campaign ID created this time.
     */
    readonly attrCampaignId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::PAIPlugin::Campaign`, which is used to create an operational activity.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosCampaign`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-paiplugin-campaign
 */
export class Campaign extends ros.Resource implements ICampaign {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: CampaignProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute CampaignId: The Campaign ID created this time.
     */
    public readonly attrCampaignId: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: CampaignProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosCampaign = new RosCampaign(this, id,  {
            remark: props.remark,
            name: props.name,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosCampaign;
        this.attrCampaignId = rosCampaign.attrCampaignId;
    }
}

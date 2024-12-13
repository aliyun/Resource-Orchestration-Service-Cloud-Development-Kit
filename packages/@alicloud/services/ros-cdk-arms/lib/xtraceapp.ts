import * as ros from '@alicloud/ros-cdk-core';
import { RosXTraceApp } from './arms.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosXTraceApp as XTraceAppProperty };

/**
 * Properties for defining a `XTraceApp`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-xtraceapp
 */
export interface XTraceAppProps {

    /**
     * Property xTraceAppName: The name of the resource.
     */
    readonly xTraceAppName: string | ros.IResolvable;

    /**
     * Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;

    /**
     * Property tags: Tags of The tags of the resource..
     */
    readonly tags?: RosXTraceApp.TagsProperty[];
}

/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ARMS::XTraceApp`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosXTraceApp`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-xtraceapp
 */
export class XTraceApp extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: XTraceAppProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute CreateTime: The creation time of the resource.
     */
    public readonly attrCreateTime: ros.IResolvable;

    /**
     * Attribute Pid: the identify of application.
     */
    public readonly attrPid: ros.IResolvable;

    /**
     * Attribute ResourceGroupId: The ID of the resource group.
     */
    public readonly attrResourceGroupId: ros.IResolvable;

    /**
     * Attribute Tags: The tags of the resource.
     */
    public readonly attrTags: ros.IResolvable;

    /**
     * Attribute XTraceAppName: The name of the resource.
     */
    public readonly attrXTraceAppName: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: XTraceAppProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosXTraceApp = new RosXTraceApp(this, id,  {
            resourceGroupId: props.resourceGroupId,
            tags: props.tags,
            xTraceAppName: props.xTraceAppName,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosXTraceApp;
        this.attrCreateTime = rosXTraceApp.attrCreateTime;
        this.attrPid = rosXTraceApp.attrPid;
        this.attrResourceGroupId = rosXTraceApp.attrResourceGroupId;
        this.attrTags = rosXTraceApp.attrTags;
        this.attrXTraceAppName = rosXTraceApp.attrXTraceAppName;
    }
}

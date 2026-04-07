import * as ros from '@alicloud/ros-cdk-core';
import { RosRum } from './arms.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosRum as RumProperty };

/**
 * Properties for defining a `Rum`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-rum
 */
export interface RumProps {

    /**
     * Property appName: The name of the RUM application.
     * The value can be up to 64 characters in length.
     */
    readonly appName: string | ros.IResolvable;

    /**
     * Property siteType: The type of the website.
     */
    readonly siteType: string | ros.IResolvable;

    /**
     * Property appGroup: The group to which the RUM application belongs.
     */
    readonly appGroup?: string | ros.IResolvable;

    /**
     * Property description: The description of the RUM application.
     */
    readonly description?: string | ros.IResolvable;

    /**
     * Property language: The programming language of the RUM application.
     */
    readonly language?: string | ros.IResolvable;

    /**
     * Property nickName: The nickname of the RUM application.
     */
    readonly nickName?: string | ros.IResolvable;

    /**
     * Property packageName: The package name of the RUM application.
     */
    readonly packageName?: string | ros.IResolvable;

    /**
     * Property realRegionId: The actual region ID for internal use.
     */
    readonly realRegionId?: string | ros.IResolvable;

    /**
     * Property resourceGroupId: The ID of the resource group to which the RUM application belongs.
     */
    readonly resourceGroupId?: string | ros.IResolvable;

    /**
     * Property source: The source of the RUM application.
     */
    readonly source?: string | ros.IResolvable;

    /**
     * Property tags: A list of tags to attach to the RUM application.
     * Each tag is a key-value pair.
     */
    readonly tags?: RosRum.TagsProperty[];
}

/**
 * Represents a `Rum`.
 */
export interface IRum extends ros.IResource {
    readonly props: RumProps;

    /**
     * Attribute CdnDomain: The CDN domain of the RUM application.
     */
    readonly attrCdnDomain: ros.IResolvable | string;

    /**
     * Attribute Endpoint: The endpoint of the RUM application.
     */
    readonly attrEndpoint: ros.IResolvable | string;

    /**
     * Attribute Pid: The PID of the RUM application.
     */
    readonly attrPid: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ARMS::Rum`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosRum`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-rum
 */
export class Rum extends ros.Resource implements IRum {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: RumProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute CdnDomain: The CDN domain of the RUM application.
     */
    public readonly attrCdnDomain: ros.IResolvable | string;

    /**
     * Attribute Endpoint: The endpoint of the RUM application.
     */
    public readonly attrEndpoint: ros.IResolvable | string;

    /**
     * Attribute Pid: The PID of the RUM application.
     */
    public readonly attrPid: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RumProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosRum = new RosRum(this, id,  {
            description: props.description,
            resourceGroupId: props.resourceGroupId,
            language: props.language,
            packageName: props.packageName,
            realRegionId: props.realRegionId,
            siteType: props.siteType,
            nickName: props.nickName,
            appGroup: props.appGroup,
            source: props.source,
            tags: props.tags,
            appName: props.appName,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosRum;
        this.attrCdnDomain = rosRum.attrCdnDomain;
        this.attrEndpoint = rosRum.attrEndpoint;
        this.attrPid = rosRum.attrPid;
    }
}

import * as ros from '@alicloud/ros-cdk-core';
import { RosUrlObservation } from './esa.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosUrlObservation as UrlObservationProperty };

/**
 * Properties for defining a `UrlObservation`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-urlobservation
 */
export interface UrlObservationProps {

    /**
     * Property sdkType: SDK integration mode. Value:
     * - **automatic**: automatic integration.
     * - **manual**: manual integration.
     */
    readonly sdkType: string | ros.IResolvable;

    /**
     * Property siteId: The site ID.
     */
    readonly siteId: number | ros.IResolvable;

    /**
     * Property url: The URL of the page to monitor.
     */
    readonly url: string | ros.IResolvable;
}

/**
 * Represents a `UrlObservation`.
 */
export interface IUrlObservation extends ros.IResource {
    readonly props: UrlObservationProps;

    /**
     * Attribute ConfigId: Config Id.
     */
    readonly attrConfigId: ros.IResolvable | string;

    /**
     * Attribute SdkType: SDK integration mode.
     */
    readonly attrSdkType: ros.IResolvable | string;

    /**
     * Attribute Url: The URL of the page to monitor.
     */
    readonly attrUrl: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ESA::UrlObservation`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosUrlObservation`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-urlobservation
 */
export class UrlObservation extends ros.Resource implements IUrlObservation {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: UrlObservationProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute ConfigId: Config Id.
     */
    public readonly attrConfigId: ros.IResolvable | string;

    /**
     * Attribute SdkType: SDK integration mode.
     */
    public readonly attrSdkType: ros.IResolvable | string;

    /**
     * Attribute Url: The URL of the page to monitor.
     */
    public readonly attrUrl: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: UrlObservationProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosUrlObservation = new RosUrlObservation(this, id,  {
            sdkType: props.sdkType,
            siteId: props.siteId,
            url: props.url,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosUrlObservation;
        this.attrConfigId = rosUrlObservation.attrConfigId;
        this.attrSdkType = rosUrlObservation.attrSdkType;
        this.attrUrl = rosUrlObservation.attrUrl;
    }
}

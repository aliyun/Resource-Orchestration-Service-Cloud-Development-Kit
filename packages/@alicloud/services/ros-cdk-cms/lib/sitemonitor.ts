import * as ros from '@alicloud/ros-cdk-core';
import { RosSiteMonitor } from './cms.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosSiteMonitor as SiteMonitorProperty };

/**
 * Properties for defining a `SiteMonitor`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cms-sitemonitor
 */
export interface SiteMonitorProps {

    /**
     * Property address: The URL or IP address monitored by the monitoring task.
     */
    readonly address: string | ros.IResolvable;

    /**
     * Property taskName: The name of the site monitoring task. The name must be 4 to 100 characters in length.
     * It can contain letters, digits, and underscores (_).
     */
    readonly taskName: string | ros.IResolvable;

    /**
     * Property taskType: The protocol used by the site monitoring task. Valid values: HTTP, HTTPS, PING, TCP,
     * UDP, DNS, SMTP, POP3, and FTP.
     */
    readonly taskType: string | ros.IResolvable;

    /**
     * Property alertIds:
     */
    readonly alertIds?: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * Property interval: The interval at which detection requests are sent. Valid values: 1, 5, and 15. Unit:
     * minutes. Default value: 1.
     */
    readonly interval?: number | ros.IResolvable;

    /**
     * Property ispCities: The information about detection points, which is specified in a JSON array. Example:
     * [{"city":"546","isp":"465"},{"city":"572","isp":"465"},{"city":"738","isp":"465"}]. The three city codes represent Beijing, Hangzhou, and Qingdao.
     * Note You can call the DescribeSiteMonitorISPCityList API operation to query the detection
     * points that can be used to create site monitoring tasks. For more information, see
     * DescribeSiteMonitorISPCityList . If this parameter is not specified, the system randomly selects three detection
     * points for site monitoring.
     */
    readonly ispCities?: Array<RosSiteMonitor.IspCitiesProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * Property optionsJson: The extended options of the protocol that is used by the site monitoring task. The
     * options vary based on the protocol.
     */
    readonly optionsJson?: string | ros.IResolvable;
}

/**
 * Represents a `SiteMonitor`.
 */
export interface ISiteMonitor extends ros.IResource {
    readonly props: SiteMonitorProps;

    /**
     * Attribute TaskId: The ID of the site monitoring task.
     */
    readonly attrTaskId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::CMS::SiteMonitor`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosSiteMonitor`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cms-sitemonitor
 */
export class SiteMonitor extends ros.Resource implements ISiteMonitor {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: SiteMonitorProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute TaskId: The ID of the site monitoring task.
     */
    public readonly attrTaskId: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: SiteMonitorProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosSiteMonitor = new RosSiteMonitor(this, id,  {
            address: props.address,
            optionsJson: props.optionsJson,
            taskName: props.taskName,
            taskType: props.taskType,
            ispCities: props.ispCities,
            interval: props.interval,
            alertIds: props.alertIds,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosSiteMonitor;
        this.attrTaskId = rosSiteMonitor.attrTaskId;
    }
}

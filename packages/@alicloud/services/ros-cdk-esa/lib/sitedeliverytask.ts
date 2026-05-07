import * as ros from '@alicloud/ros-cdk-core';
import { RosSiteDeliveryTask } from './esa.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosSiteDeliveryTask as SiteDeliveryTaskProperty };

/**
 * Properties for defining a `SiteDeliveryTask`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-sitedeliverytask
 */
export interface SiteDeliveryTaskProps {

    /**
     * Property businessType: Real-time log type. Valid values:
     * - `dcdn_log_access_l1 (default)`: access log.
     * - `dcdn_log_er`: Edge Routine logs.
     * - `dcdn_log_waf`: firewall logs.
     * - `dcdn_log_ipa`: TCP\/UDP proxy logs.
     */
    readonly businessType: string | ros.IResolvable;

    /**
     * Property dataCenter: Data Center. Values:
     * - `cn`: Mainland China.
     * - `sg`: Global (excluding Mainland China).
     */
    readonly dataCenter: string | ros.IResolvable;

    /**
     * Property deliveryType: Delivery Type:
     * - `sls`: Alibaba Cloud Simple Log Service (SLS).
     * - `http`: Http service.
     * - `aws3`: Amazon s3 service.
     * - `oss`: Alibaba Cloud Object Storage Service.
     * - `kafka`: Kafka service.
     * - `aws3cmpt`: Amazon s3 Compatible Service.
     */
    readonly deliveryType: string | ros.IResolvable;

    /**
     * Property fieldName: The list of delivery fields to be modified, separated by commas.
     */
    readonly fieldName: string | ros.IResolvable;

    /**
     * Property siteId: The site ID.
     */
    readonly siteId: number | ros.IResolvable;

    /**
     * Property taskName: The name of the delivery task.
     */
    readonly taskName: string | ros.IResolvable;

    /**
     * Property discardRate: If the discard rate is not filled, the default value is 0.
     */
    readonly discardRate?: number | ros.IResolvable;

    /**
     * Property httpDelivery: HTTP delivery configuration parameters.
     */
    readonly httpDelivery?: RosSiteDeliveryTask.HttpDeliveryProperty | ros.IResolvable;

    /**
     * Property kafkaDelivery: Kafka delivery configuration parameters.
     */
    readonly kafkaDelivery?: RosSiteDeliveryTask.KafkaDeliveryProperty | ros.IResolvable;

    /**
     * Property ossDelivery: OSS delivery configuration.
     */
    readonly ossDelivery?: RosSiteDeliveryTask.OssDeliveryProperty | ros.IResolvable;

    /**
     * Property s3Delivery: S3\/S3 compatible delivery configuration parameters.
     */
    readonly s3Delivery?: RosSiteDeliveryTask.S3DeliveryProperty | ros.IResolvable;

    /**
     * Property slsDelivery: SLS delivery configuration.
     */
    readonly slsDelivery?: RosSiteDeliveryTask.SlsDeliveryProperty | ros.IResolvable;
}

/**
 * Represents a `SiteDeliveryTask`.
 */
export interface ISiteDeliveryTask extends ros.IResource {
    readonly props: SiteDeliveryTaskProps;

    /**
     * Attribute BusinessType: Real-time log type.
     */
    readonly attrBusinessType: ros.IResolvable | string;

    /**
     * Attribute DataCenter: Data Center.
     */
    readonly attrDataCenter: ros.IResolvable | string;

    /**
     * Attribute DeliveryType: Delivery Type:.
     */
    readonly attrDeliveryType: ros.IResolvable | string;

    /**
     * Attribute DiscardRate: If the discard rate is not filled, the default value is 0.
     */
    readonly attrDiscardRate: ros.IResolvable | string;

    /**
     * Attribute FieldName: The list of delivery fields to be modified, separated by commas.
     */
    readonly attrFieldName: ros.IResolvable | string;

    /**
     * Attribute FilterRules: The filtering rules.
     */
    readonly attrFilterRules: ros.IResolvable | string;

    /**
     * Attribute SinkConfig: The delivery configuration.
     */
    readonly attrSinkConfig: ros.IResolvable | string;

    /**
     * Attribute SiteId: The site ID.
     */
    readonly attrSiteId: ros.IResolvable | string;

    /**
     * Attribute SiteName: The website name.
     */
    readonly attrSiteName: ros.IResolvable | string;

    /**
     * Attribute TaskName: The task name.
     */
    readonly attrTaskName: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ESA::SiteDeliveryTask`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosSiteDeliveryTask`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-sitedeliverytask
 */
export class SiteDeliveryTask extends ros.Resource implements ISiteDeliveryTask {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: SiteDeliveryTaskProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute BusinessType: Real-time log type.
     */
    public readonly attrBusinessType: ros.IResolvable | string;

    /**
     * Attribute DataCenter: Data Center.
     */
    public readonly attrDataCenter: ros.IResolvable | string;

    /**
     * Attribute DeliveryType: Delivery Type:.
     */
    public readonly attrDeliveryType: ros.IResolvable | string;

    /**
     * Attribute DiscardRate: If the discard rate is not filled, the default value is 0.
     */
    public readonly attrDiscardRate: ros.IResolvable | string;

    /**
     * Attribute FieldName: The list of delivery fields to be modified, separated by commas.
     */
    public readonly attrFieldName: ros.IResolvable | string;

    /**
     * Attribute FilterRules: The filtering rules.
     */
    public readonly attrFilterRules: ros.IResolvable | string;

    /**
     * Attribute SinkConfig: The delivery configuration.
     */
    public readonly attrSinkConfig: ros.IResolvable | string;

    /**
     * Attribute SiteId: The site ID.
     */
    public readonly attrSiteId: ros.IResolvable | string;

    /**
     * Attribute SiteName: The website name.
     */
    public readonly attrSiteName: ros.IResolvable | string;

    /**
     * Attribute TaskName: The task name.
     */
    public readonly attrTaskName: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: SiteDeliveryTaskProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosSiteDeliveryTask = new RosSiteDeliveryTask(this, id,  {
            slsDelivery: props.slsDelivery,
            httpDelivery: props.httpDelivery,
            siteId: props.siteId,
            dataCenter: props.dataCenter,
            discardRate: props.discardRate === undefined || props.discardRate === null ? 0 : props.discardRate,
            s3Delivery: props.s3Delivery,
            taskName: props.taskName,
            businessType: props.businessType,
            kafkaDelivery: props.kafkaDelivery,
            fieldName: props.fieldName,
            ossDelivery: props.ossDelivery,
            deliveryType: props.deliveryType,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosSiteDeliveryTask;
        this.attrBusinessType = rosSiteDeliveryTask.attrBusinessType;
        this.attrDataCenter = rosSiteDeliveryTask.attrDataCenter;
        this.attrDeliveryType = rosSiteDeliveryTask.attrDeliveryType;
        this.attrDiscardRate = rosSiteDeliveryTask.attrDiscardRate;
        this.attrFieldName = rosSiteDeliveryTask.attrFieldName;
        this.attrFilterRules = rosSiteDeliveryTask.attrFilterRules;
        this.attrSinkConfig = rosSiteDeliveryTask.attrSinkConfig;
        this.attrSiteId = rosSiteDeliveryTask.attrSiteId;
        this.attrSiteName = rosSiteDeliveryTask.attrSiteName;
        this.attrTaskName = rosSiteDeliveryTask.attrTaskName;
    }
}

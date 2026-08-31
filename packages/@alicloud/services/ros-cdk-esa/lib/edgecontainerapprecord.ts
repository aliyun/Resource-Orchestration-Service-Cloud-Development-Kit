import * as ros from '@alicloud/ros-cdk-core';
import { RosEdgeContainerAppRecord } from './esa.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosEdgeContainerAppRecord as EdgeContainerAppRecordProperty };

/**
 * Properties for defining a `EdgeContainerAppRecord`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-edgecontainerapprecord
 */
export interface EdgeContainerAppRecordProps {

    /**
     * Property appId: The application ID.
     */
    readonly appId: string | ros.IResolvable;

    /**
     * Property recordName: The associated domain name.
     */
    readonly recordName: string | ros.IResolvable;

    /**
     * Property siteId: The website ID.
     */
    readonly siteId: number | ros.IResolvable;
}

/**
 * Represents a `EdgeContainerAppRecord`.
 */
export interface IEdgeContainerAppRecord extends ros.IResource {
    readonly props: EdgeContainerAppRecordProps;

    /**
     * Attribute AppId: The application ID.
     */
    readonly attrAppId: ros.IResolvable | string;

    /**
     * Attribute Cname: The CNAME of the associated domain name.
     */
    readonly attrCname: ros.IResolvable | string;

    /**
     * Attribute ConfigId: The configuration ID of the associated domain name.
     */
    readonly attrConfigId: ros.IResolvable | string;

    /**
     * Attribute CreateTime: The time when the domain name was added. The time follows the ISO 8601 standard in the YYYY-MM-DDThh:mm:ss format. The time is displayed in UTC.
     */
    readonly attrCreateTime: ros.IResolvable | string;

    /**
     * Attribute RecordId: The record ID of the associated domain name.
     */
    readonly attrRecordId: ros.IResolvable | string;

    /**
     * Attribute RecordName: The associated domain name.
     */
    readonly attrRecordName: ros.IResolvable | string;

    /**
     * Attribute SchemdId: The scheduling domain ID of the associated domain name.
     */
    readonly attrSchemdId: ros.IResolvable | string;

    /**
     * Attribute SiteId: The website ID.
     */
    readonly attrSiteId: ros.IResolvable | string;

    /**
     * Attribute UpdateTime: The time when the scheduling domain ID or CNAME was last modified. The time follows the ISO 8601 standard in the YYYY-MM-DDThh:mm:ss format. The time is displayed in UTC.
     */
    readonly attrUpdateTime: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ESA::EdgeContainerAppRecord`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosEdgeContainerAppRecord`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-edgecontainerapprecord
 */
export class EdgeContainerAppRecord extends ros.Resource implements IEdgeContainerAppRecord {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: EdgeContainerAppRecordProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute AppId: The application ID.
     */
    public readonly attrAppId: ros.IResolvable | string;

    /**
     * Attribute Cname: The CNAME of the associated domain name.
     */
    public readonly attrCname: ros.IResolvable | string;

    /**
     * Attribute ConfigId: The configuration ID of the associated domain name.
     */
    public readonly attrConfigId: ros.IResolvable | string;

    /**
     * Attribute CreateTime: The time when the domain name was added. The time follows the ISO 8601 standard in the YYYY-MM-DDThh:mm:ss format. The time is displayed in UTC.
     */
    public readonly attrCreateTime: ros.IResolvable | string;

    /**
     * Attribute RecordId: The record ID of the associated domain name.
     */
    public readonly attrRecordId: ros.IResolvable | string;

    /**
     * Attribute RecordName: The associated domain name.
     */
    public readonly attrRecordName: ros.IResolvable | string;

    /**
     * Attribute SchemdId: The scheduling domain ID of the associated domain name.
     */
    public readonly attrSchemdId: ros.IResolvable | string;

    /**
     * Attribute SiteId: The website ID.
     */
    public readonly attrSiteId: ros.IResolvable | string;

    /**
     * Attribute UpdateTime: The time when the scheduling domain ID or CNAME was last modified. The time follows the ISO 8601 standard in the YYYY-MM-DDThh:mm:ss format. The time is displayed in UTC.
     */
    public readonly attrUpdateTime: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: EdgeContainerAppRecordProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosEdgeContainerAppRecord = new RosEdgeContainerAppRecord(this, id,  {
            recordName: props.recordName,
            siteId: props.siteId,
            appId: props.appId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosEdgeContainerAppRecord;
        this.attrAppId = rosEdgeContainerAppRecord.attrAppId;
        this.attrCname = rosEdgeContainerAppRecord.attrCname;
        this.attrConfigId = rosEdgeContainerAppRecord.attrConfigId;
        this.attrCreateTime = rosEdgeContainerAppRecord.attrCreateTime;
        this.attrRecordId = rosEdgeContainerAppRecord.attrRecordId;
        this.attrRecordName = rosEdgeContainerAppRecord.attrRecordName;
        this.attrSchemdId = rosEdgeContainerAppRecord.attrSchemdId;
        this.attrSiteId = rosEdgeContainerAppRecord.attrSiteId;
        this.attrUpdateTime = rosEdgeContainerAppRecord.attrUpdateTime;
    }
}

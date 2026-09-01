import * as ros from '@alicloud/ros-cdk-core';
import { RosRecord } from './esa.generated';
export { RosRecord as RecordProperty };
/**
 * Properties for defining a `Record`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-record
 */
export interface RecordProps {
    /**
     * Property data: The DNS record information. The format of this field varies based on the record type. For more information, see [References] https:\/\/www.alibabacloud.com\/help\/doc-detail\/2708761.html?spm=openapi-amp.newDocPublishment.0.0.6a0f281feoeVWr.
     */
    readonly data: RosRecord.DataProperty | ros.IResolvable;
    /**
     * Property recordName: The record name. This parameter specifies a filter condition for the query.
     */
    readonly recordName: string | ros.IResolvable;
    /**
     * Property recordType: The type of the DNS record, such as A\/AAAA, CNAME, and TXT.
     */
    readonly recordType: string | ros.IResolvable;
    /**
     * Property siteId: The website ID.
     */
    readonly siteId: number | ros.IResolvable;
    /**
     * Property authConf: The origin authentication information of the CNAME record.
     */
    readonly authConf?: RosRecord.AuthConfProperty | ros.IResolvable;
    /**
     * Property bizName: The business scenario of the record for acceleration. Leave the parameter empty if your record is not proxied. Valid values:
     * image_video: video and image.
     * api: API.
     * web: web page.
     */
    readonly bizName?: string | ros.IResolvable;
    /**
     * Property comment: The comment of the record. The maximum length is 100 characters.
     */
    readonly comment?: string | ros.IResolvable;
    /**
     * Property hostPolicy: The origin host policy. This policy takes effect when the record type is CNAME. You can set the policy in two modes:
     * follow_hostname: Follow the host record.
     * follow_origin_domain: match the origin's domain name.
     */
    readonly hostPolicy?: string | ros.IResolvable;
    /**
     * Property proxied: Specifies whether to proxy the record. Only CNAME and A\/AAAA records can be proxied. Valid values:
     * true
     * false.
     */
    readonly proxied?: boolean | ros.IResolvable;
    /**
     * Property sourceType: The origin type for the CNAME record. This parameter is required when you add a CNAME record. Valid values:
     * OSS: OSS bucket.
     * S3: S3 bucket.
     * LB: load balancer.
     * OP: origin pool.
     * Domain: domain name.
     * If you do not pass this parameter or if you leave its value empty, Domain is used by default.
     */
    readonly sourceType?: string | ros.IResolvable;
    /**
     * Property ttl: The TTL of the record. Unit: seconds. If the value is 1, the TTL of the record is determined by the system.
     */
    readonly ttl?: number | ros.IResolvable;
}
/**
 * Represents a `Record`.
 */
export interface IRecord extends ros.IResource {
    readonly props: RecordProps;
    /**
     * Attribute AuthConf: The origin authentication information of the CNAME record.
     */
    readonly attrAuthConf: ros.IResolvable | string;
    /**
     * Attribute BizName: The business scenario of the record for acceleration. Leave the parameter empty if your record is not proxied.
     */
    readonly attrBizName: ros.IResolvable | string;
    /**
     * Attribute Comment: The comment of the record. The maximum length is 100 characters.
     */
    readonly attrComment: ros.IResolvable | string;
    /**
     * Attribute CreateTime: The time when the record was created. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
     */
    readonly attrCreateTime: ros.IResolvable | string;
    /**
     * Attribute Data: The DNS record information. The format of this field varies based on the record type. For more information, see [References]https://www.alibabacloud.com/help/doc-detail/2708761.html?spm=openapi-amp.newDocPublishment.0.0.6a0f281feoeVWr.
     */
    readonly attrData: ros.IResolvable | string;
    /**
     * Attribute HostPolicy: The origin host policy. This policy takes effect when the record type is CNAME.
     */
    readonly attrHostPolicy: ros.IResolvable | string;
    /**
     * Attribute ModifyTime: The time when the record was updated. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
     */
    readonly attrModifyTime: ros.IResolvable | string;
    /**
     * Attribute Proxied: Specifies whether to proxy the record. Only CNAME and A/AAAA records can be proxied.
     */
    readonly attrProxied: ros.IResolvable | string;
    /**
     * Attribute RecordCname: The CNAME. If you use CNAME setup when you add your website to ESA, the value is the CNAME that you configured then.
     */
    readonly attrRecordCname: ros.IResolvable | string;
    /**
     * Attribute RecordId: Record Id.
     */
    readonly attrRecordId: ros.IResolvable | string;
    /**
     * Attribute RecordName: The record name. This parameter specifies a filter condition for the query.
     */
    readonly attrRecordName: ros.IResolvable | string;
    /**
     * Attribute RecordType: The type of the DNS record, such as A/AAAA, CNAME, and TXT.
     */
    readonly attrRecordType: ros.IResolvable | string;
    /**
     * Attribute SiteId: The website ID.
     */
    readonly attrSiteId: ros.IResolvable | string;
    /**
     * Attribute SiteName: The website name.
     */
    readonly attrSiteName: ros.IResolvable | string;
    /**
     * Attribute SourceType: The origin type for the CNAME record. This parameter is required when you add a CNAME record.
     */
    readonly attrSourceType: ros.IResolvable | string;
    /**
     * Attribute Ttl: The TTL of the record. Unit: seconds. If the value is 1, the TTL of the record is determined by the system.
     */
    readonly attrTtl: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ESA::Record`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosRecord`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-record
 */
export declare class Record extends ros.Resource implements IRecord {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: RecordProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute AuthConf: The origin authentication information of the CNAME record.
     */
    readonly attrAuthConf: ros.IResolvable | string;
    /**
     * Attribute BizName: The business scenario of the record for acceleration. Leave the parameter empty if your record is not proxied.
     */
    readonly attrBizName: ros.IResolvable | string;
    /**
     * Attribute Comment: The comment of the record. The maximum length is 100 characters.
     */
    readonly attrComment: ros.IResolvable | string;
    /**
     * Attribute CreateTime: The time when the record was created. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
     */
    readonly attrCreateTime: ros.IResolvable | string;
    /**
     * Attribute Data: The DNS record information. The format of this field varies based on the record type. For more information, see [References]https://www.alibabacloud.com/help/doc-detail/2708761.html?spm=openapi-amp.newDocPublishment.0.0.6a0f281feoeVWr.
     */
    readonly attrData: ros.IResolvable | string;
    /**
     * Attribute HostPolicy: The origin host policy. This policy takes effect when the record type is CNAME.
     */
    readonly attrHostPolicy: ros.IResolvable | string;
    /**
     * Attribute ModifyTime: The time when the record was updated. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
     */
    readonly attrModifyTime: ros.IResolvable | string;
    /**
     * Attribute Proxied: Specifies whether to proxy the record. Only CNAME and A/AAAA records can be proxied.
     */
    readonly attrProxied: ros.IResolvable | string;
    /**
     * Attribute RecordCname: The CNAME. If you use CNAME setup when you add your website to ESA, the value is the CNAME that you configured then.
     */
    readonly attrRecordCname: ros.IResolvable | string;
    /**
     * Attribute RecordId: Record Id.
     */
    readonly attrRecordId: ros.IResolvable | string;
    /**
     * Attribute RecordName: The record name. This parameter specifies a filter condition for the query.
     */
    readonly attrRecordName: ros.IResolvable | string;
    /**
     * Attribute RecordType: The type of the DNS record, such as A/AAAA, CNAME, and TXT.
     */
    readonly attrRecordType: ros.IResolvable | string;
    /**
     * Attribute SiteId: The website ID.
     */
    readonly attrSiteId: ros.IResolvable | string;
    /**
     * Attribute SiteName: The website name.
     */
    readonly attrSiteName: ros.IResolvable | string;
    /**
     * Attribute SourceType: The origin type for the CNAME record. This parameter is required when you add a CNAME record.
     */
    readonly attrSourceType: ros.IResolvable | string;
    /**
     * Attribute Ttl: The TTL of the record. Unit: seconds. If the value is 1, the TTL of the record is determined by the system.
     */
    readonly attrTtl: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RecordProps, enableResourcePropertyConstraint?: boolean);
}

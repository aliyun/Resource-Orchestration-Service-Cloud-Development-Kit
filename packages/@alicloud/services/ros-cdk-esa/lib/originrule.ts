import * as ros from '@alicloud/ros-cdk-core';
import { RosOriginRule } from './esa.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosOriginRule as OriginRuleProperty };

/**
 * Properties for defining a `OriginRule`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-originrule
 */
export interface OriginRuleProps {

    /**
     * Property siteId: The site ID.
     */
    readonly siteId: number | ros.IResolvable;

    /**
     * Property dnsRecord: Overwrite the DNS resolution record of the origin request.
     */
    readonly dnsRecord?: string | ros.IResolvable;

    /**
     * Property follow302Enable: Return Source 302 follow switch. Value range:
     * - `on`: ON.
     * - `off`: closed.
     */
    readonly follow302Enable?: string | ros.IResolvable;

    /**
     * Property follow302MaxTries: 302 follows the upper limit of the number of times, with a value range of [1-5].
     */
    readonly follow302MaxTries?: number | ros.IResolvable;

    /**
     * Property follow302RetainArgs: Retain the original request parameter switch. Value range:
     * - `on`: ON.
     * - `off`: closed.
     */
    readonly follow302RetainArgs?: string | ros.IResolvable;

    /**
     * Property follow302RetainHeader: Retain the original request header switch. Value range:
     * - `on`: ON.
     * - `off`: closed.
     */
    readonly follow302RetainHeader?: string | ros.IResolvable;

    /**
     * Property follow302TargetHost: Modify the source host after 302.
     */
    readonly follow302TargetHost?: string | ros.IResolvable;

    /**
     * Property originHost: The HOST carried in the back-to-origin request.
     */
    readonly originHost?: string | ros.IResolvable;

    /**
     * Property originHttpPort: The port of the origin station accessed when the HTTP protocol is used to return to the origin.
     */
    readonly originHttpPort?: number | ros.IResolvable;

    /**
     * Property originHttpsPort: Port of the origin server when using the HTTPS protocol for origin requests.
     */
    readonly originHttpsPort?: number | ros.IResolvable;

    /**
     * Property originMtls: The mtls switch. Value range:
     * - `on`: ON.
     * - `off`: closed.
     */
    readonly originMtls?: string | ros.IResolvable;

    /**
     * Property originReadTimeout: Read timeout interval of the source station (s).
     */
    readonly originReadTimeout?: number | ros.IResolvable;

    /**
     * Property originScheme: The protocol used by the back-to-origin request. Value range:
     * - `http`: uses the http protocol to return to the source.
     * - `https`: uses the https protocol to return to the source.
     * - `follow`: follows the Client Protocol back to the source.
     */
    readonly originScheme?: string | ros.IResolvable;

    /**
     * Property originSni: SNI carried in the back-to-origin request.
     */
    readonly originSni?: string | ros.IResolvable;

    /**
     * Property originVerify: Source station certificate verification switch. Value range:
     * - `on`: ON.
     * - `off`: closed.
     */
    readonly originVerify?: string | ros.IResolvable;

    /**
     * Property range: Use the range sharding method to download the file from the source. Value range:
     * - `on`: Open.
     * - `off`: off.
     * - `force`: force.
     */
    readonly range?: string | ros.IResolvable;

    /**
     * Property rangeChunkSize: range shard size.
     */
    readonly rangeChunkSize?: string | ros.IResolvable;

    /**
     * Property rule: Rule content, using conditional expressions to match user requests. When adding global configuration, this parameter does not need to be set. There are two usage scenarios:
     * - Match all incoming requests: value set to true
     * - Match specified request: Set the value to a custom expression, for example: (http.host eq \"video.example.com\").
     */
    readonly rule?: string | ros.IResolvable;

    /**
     * Property ruleEnable: Rule switch. When adding global configuration, this parameter does not need to be set. Value range:
     * - `on`: open.
     * - `off`: close.
     */
    readonly ruleEnable?: string | ros.IResolvable;

    /**
     * Property ruleName: Rule name. When adding global configuration, this parameter does not need to be set.
     */
    readonly ruleName?: string | ros.IResolvable;

    /**
     * Property sequence: Order of rule execution. The smaller the value, the higher the priority for execution.
     */
    readonly sequence?: number | ros.IResolvable;

    /**
     * Property siteVersion: The version number of the site configuration. For sites that have enabled configuration version management, this parameter can be used to specify the effective version of the configuration site, which defaults to version 0.
     */
    readonly siteVersion?: number | ros.IResolvable;
}

/**
 * Represents a `OriginRule`.
 */
export interface IOriginRule extends ros.IResource {
    readonly props: OriginRuleProps;

    /**
     * Attribute ConfigId: Back-to-source rule configuration ID.
     */
    readonly attrConfigId: ros.IResolvable | string;

    /**
     * Attribute ConfigType: The configuration type. You can use this parameter to check the global configuration or rule configuration.
     */
    readonly attrConfigType: ros.IResolvable | string;

    /**
     * Attribute DnsRecord: Overwrite the DNS resolution record of the origin request.
     */
    readonly attrDnsRecord: ros.IResolvable | string;

    /**
     * Attribute Follow302Enable: Return Source 302 follow switch.
     */
    readonly attrFollow302Enable: ros.IResolvable | string;

    /**
     * Attribute Follow302MaxTries: 302 follows the upper limit of the number of times, with a value range of [1-5].
     */
    readonly attrFollow302MaxTries: ros.IResolvable | string;

    /**
     * Attribute Follow302RetainArgs: Retain the original request parameter switch.
     */
    readonly attrFollow302RetainArgs: ros.IResolvable | string;

    /**
     * Attribute Follow302RetainHeader: Retain the original request header switch.
     */
    readonly attrFollow302RetainHeader: ros.IResolvable | string;

    /**
     * Attribute Follow302TargetHost: Modify the source host after 302.
     */
    readonly attrFollow302TargetHost: ros.IResolvable | string;

    /**
     * Attribute OriginHost: The HOST carried in the back-to-origin request.
     */
    readonly attrOriginHost: ros.IResolvable | string;

    /**
     * Attribute OriginHttpPort: The port of the origin station accessed when the HTTP protocol is used to return to the origin.
     */
    readonly attrOriginHttpPort: ros.IResolvable | string;

    /**
     * Attribute OriginHttpsPort: The port of the origin station accessed when the HTTPS protocol is used to return to the origin.
     */
    readonly attrOriginHttpsPort: ros.IResolvable | string;

    /**
     * Attribute OriginMtls: The mtls switch.
     */
    readonly attrOriginMtls: ros.IResolvable | string;

    /**
     * Attribute OriginReadTimeout: Read timeout interval of the source station (s).
     */
    readonly attrOriginReadTimeout: ros.IResolvable | string;

    /**
     * Attribute OriginScheme: The protocol used by the back-to-origin request.
     */
    readonly attrOriginScheme: ros.IResolvable | string;

    /**
     * Attribute OriginSni: SNI carried in the back-to-origin request.
     */
    readonly attrOriginSni: ros.IResolvable | string;

    /**
     * Attribute OriginVerify: Source station certificate verification switch.
     */
    readonly attrOriginVerify: ros.IResolvable | string;

    /**
     * Attribute Range: Use the range sharding method to download the file from the source.
     */
    readonly attrRange: ros.IResolvable | string;

    /**
     * Attribute RangeChunkSize: range shard size.
     */
    readonly attrRangeChunkSize: ros.IResolvable | string;

    /**
     * Attribute Rule: Rule content, using conditional expressions to match user requests. When adding global configuration, this parameter does not need to be set.
     */
    readonly attrRule: ros.IResolvable | string;

    /**
     * Attribute RuleEnable: Rule switch. When adding global configuration, this parameter does not need to be set.
     */
    readonly attrRuleEnable: ros.IResolvable | string;

    /**
     * Attribute RuleName: Rule name. When adding global configuration, this parameter does not need to be set.
     */
    readonly attrRuleName: ros.IResolvable | string;

    /**
     * Attribute Sequence: Order of rule execution. The smaller the value, the higher the priority for execution.
     */
    readonly attrSequence: ros.IResolvable | string;

    /**
     * Attribute SiteVersion: The version number of the site configuration. For sites that have enabled configuration version management, this parameter can be used to specify the effective version of the configuration site, which defaults to version 0.
     */
    readonly attrSiteVersion: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ESA::OriginRule`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosOriginRule`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-originrule
 */
export class OriginRule extends ros.Resource implements IOriginRule {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: OriginRuleProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute ConfigId: Back-to-source rule configuration ID.
     */
    public readonly attrConfigId: ros.IResolvable | string;

    /**
     * Attribute ConfigType: The configuration type. You can use this parameter to check the global configuration or rule configuration.
     */
    public readonly attrConfigType: ros.IResolvable | string;

    /**
     * Attribute DnsRecord: Overwrite the DNS resolution record of the origin request.
     */
    public readonly attrDnsRecord: ros.IResolvable | string;

    /**
     * Attribute Follow302Enable: Return Source 302 follow switch.
     */
    public readonly attrFollow302Enable: ros.IResolvable | string;

    /**
     * Attribute Follow302MaxTries: 302 follows the upper limit of the number of times, with a value range of [1-5].
     */
    public readonly attrFollow302MaxTries: ros.IResolvable | string;

    /**
     * Attribute Follow302RetainArgs: Retain the original request parameter switch.
     */
    public readonly attrFollow302RetainArgs: ros.IResolvable | string;

    /**
     * Attribute Follow302RetainHeader: Retain the original request header switch.
     */
    public readonly attrFollow302RetainHeader: ros.IResolvable | string;

    /**
     * Attribute Follow302TargetHost: Modify the source host after 302.
     */
    public readonly attrFollow302TargetHost: ros.IResolvable | string;

    /**
     * Attribute OriginHost: The HOST carried in the back-to-origin request.
     */
    public readonly attrOriginHost: ros.IResolvable | string;

    /**
     * Attribute OriginHttpPort: The port of the origin station accessed when the HTTP protocol is used to return to the origin.
     */
    public readonly attrOriginHttpPort: ros.IResolvable | string;

    /**
     * Attribute OriginHttpsPort: The port of the origin station accessed when the HTTPS protocol is used to return to the origin.
     */
    public readonly attrOriginHttpsPort: ros.IResolvable | string;

    /**
     * Attribute OriginMtls: The mtls switch.
     */
    public readonly attrOriginMtls: ros.IResolvable | string;

    /**
     * Attribute OriginReadTimeout: Read timeout interval of the source station (s).
     */
    public readonly attrOriginReadTimeout: ros.IResolvable | string;

    /**
     * Attribute OriginScheme: The protocol used by the back-to-origin request.
     */
    public readonly attrOriginScheme: ros.IResolvable | string;

    /**
     * Attribute OriginSni: SNI carried in the back-to-origin request.
     */
    public readonly attrOriginSni: ros.IResolvable | string;

    /**
     * Attribute OriginVerify: Source station certificate verification switch.
     */
    public readonly attrOriginVerify: ros.IResolvable | string;

    /**
     * Attribute Range: Use the range sharding method to download the file from the source.
     */
    public readonly attrRange: ros.IResolvable | string;

    /**
     * Attribute RangeChunkSize: range shard size.
     */
    public readonly attrRangeChunkSize: ros.IResolvable | string;

    /**
     * Attribute Rule: Rule content, using conditional expressions to match user requests. When adding global configuration, this parameter does not need to be set.
     */
    public readonly attrRule: ros.IResolvable | string;

    /**
     * Attribute RuleEnable: Rule switch. When adding global configuration, this parameter does not need to be set.
     */
    public readonly attrRuleEnable: ros.IResolvable | string;

    /**
     * Attribute RuleName: Rule name. When adding global configuration, this parameter does not need to be set.
     */
    public readonly attrRuleName: ros.IResolvable | string;

    /**
     * Attribute Sequence: Order of rule execution. The smaller the value, the higher the priority for execution.
     */
    public readonly attrSequence: ros.IResolvable | string;

    /**
     * Attribute SiteVersion: The version number of the site configuration. For sites that have enabled configuration version management, this parameter can be used to specify the effective version of the configuration site, which defaults to version 0.
     */
    public readonly attrSiteVersion: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: OriginRuleProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosOriginRule = new RosOriginRule(this, id,  {
            siteId: props.siteId,
            follow302MaxTries: props.follow302MaxTries,
            ruleEnable: props.ruleEnable,
            originHttpsPort: props.originHttpsPort,
            follow302RetainArgs: props.follow302RetainArgs,
            follow302RetainHeader: props.follow302RetainHeader,
            originScheme: props.originScheme,
            sequence: props.sequence,
            range: props.range,
            rangeChunkSize: props.rangeChunkSize,
            originReadTimeout: props.originReadTimeout,
            originHost: props.originHost,
            originHttpPort: props.originHttpPort,
            originMtls: props.originMtls,
            follow302TargetHost: props.follow302TargetHost,
            originSni: props.originSni,
            rule: props.rule,
            follow302Enable: props.follow302Enable,
            dnsRecord: props.dnsRecord,
            siteVersion: props.siteVersion,
            ruleName: props.ruleName,
            originVerify: props.originVerify,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosOriginRule;
        this.attrConfigId = rosOriginRule.attrConfigId;
        this.attrConfigType = rosOriginRule.attrConfigType;
        this.attrDnsRecord = rosOriginRule.attrDnsRecord;
        this.attrFollow302Enable = rosOriginRule.attrFollow302Enable;
        this.attrFollow302MaxTries = rosOriginRule.attrFollow302MaxTries;
        this.attrFollow302RetainArgs = rosOriginRule.attrFollow302RetainArgs;
        this.attrFollow302RetainHeader = rosOriginRule.attrFollow302RetainHeader;
        this.attrFollow302TargetHost = rosOriginRule.attrFollow302TargetHost;
        this.attrOriginHost = rosOriginRule.attrOriginHost;
        this.attrOriginHttpPort = rosOriginRule.attrOriginHttpPort;
        this.attrOriginHttpsPort = rosOriginRule.attrOriginHttpsPort;
        this.attrOriginMtls = rosOriginRule.attrOriginMtls;
        this.attrOriginReadTimeout = rosOriginRule.attrOriginReadTimeout;
        this.attrOriginScheme = rosOriginRule.attrOriginScheme;
        this.attrOriginSni = rosOriginRule.attrOriginSni;
        this.attrOriginVerify = rosOriginRule.attrOriginVerify;
        this.attrRange = rosOriginRule.attrRange;
        this.attrRangeChunkSize = rosOriginRule.attrRangeChunkSize;
        this.attrRule = rosOriginRule.attrRule;
        this.attrRuleEnable = rosOriginRule.attrRuleEnable;
        this.attrRuleName = rosOriginRule.attrRuleName;
        this.attrSequence = rosOriginRule.attrSequence;
        this.attrSiteVersion = rosOriginRule.attrSiteVersion;
    }
}

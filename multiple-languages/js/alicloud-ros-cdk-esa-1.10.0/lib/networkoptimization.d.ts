import * as ros from '@alicloud/ros-cdk-core';
import { RosNetworkOptimization } from './esa.generated';
export { RosNetworkOptimization as NetworkOptimizationProperty };
/**
 * Properties for defining a `NetworkOptimization`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-networkoptimization
 */
export interface NetworkOptimizationProps {
    /**
     * Property siteId: Site ID.
     */
    readonly siteId: number | ros.IResolvable;
    /**
     * Property grpc: Whether to enable GRPC, default is disabled. Value range:
     * - `on`: Enabled
     * - `off`: Disabled.
     */
    readonly grpc?: string | ros.IResolvable;
    /**
     * Property http2Origin: Whether to enable HTTP2 origin, default is disabled. Value range:
     * - `on`: Enabled
     * - `off`: Disabled.
     */
    readonly http2Origin?: string | ros.IResolvable;
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
     * Property ruleName: Rule name.
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
    /**
     * Property smartRouting: Whether to enable smart routing service, default is disabled. Value range:
     * - `on`: Enabled
     * - `off`: Disabled.
     */
    readonly smartRouting?: string | ros.IResolvable;
    /**
     * Property uploadMaxFilesize: Maximum upload file size, in MB, value range: 100～500.
     */
    readonly uploadMaxFilesize?: number | ros.IResolvable;
    /**
     * Property websocket: Whether to enable Websocket, default is enabled. Value range:
     * - `on`: Enabled
     * - `off`: Disabled.
     */
    readonly websocket?: string | ros.IResolvable;
}
/**
 * Represents a `NetworkOptimization`.
 */
export interface INetworkOptimization extends ros.IResource {
    readonly props: NetworkOptimizationProps;
    /**
     * Attribute ConfigId: ConfigId of the configuration, which can be obtained by calling the ListNetworkOptimizations.
     */
    readonly attrConfigId: ros.IResolvable | string;
    /**
     * Attribute ConfigType: Configuration type, which can be used to query global or rule configurations.
     */
    readonly attrConfigType: ros.IResolvable | string;
    /**
     * Attribute Grpc: Whether to enable GRPC, default is disabled.
     */
    readonly attrGrpc: ros.IResolvable | string;
    /**
     * Attribute Http2Origin: Whether to enable HTTP2 origin, default is disabled.
     */
    readonly attrHttp2Origin: ros.IResolvable | string;
    /**
     * Attribute Rule: Rule content, using conditional expressions to match user requests. When adding global configuration, this parameter does not need to be set.
     */
    readonly attrRule: ros.IResolvable | string;
    /**
     * Attribute RuleEnable: Rule switch. When adding global configuration, this parameter does not need to be set.
     */
    readonly attrRuleEnable: ros.IResolvable | string;
    /**
     * Attribute RuleName: Rule name.
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
    /**
     * Attribute SmartRouting: Whether to enable smart routing service, default is disabled.
     */
    readonly attrSmartRouting: ros.IResolvable | string;
    /**
     * Attribute UploadMaxFilesize: Maximum upload file size, in MB, value range: 100～500.
     */
    readonly attrUploadMaxFilesize: ros.IResolvable | string;
    /**
     * Attribute Websocket: Whether to enable Websocket, default is enabled.
     */
    readonly attrWebsocket: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ESA::NetworkOptimization`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosNetworkOptimization`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-networkoptimization
 */
export declare class NetworkOptimization extends ros.Resource implements INetworkOptimization {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: NetworkOptimizationProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute ConfigId: ConfigId of the configuration, which can be obtained by calling the ListNetworkOptimizations.
     */
    readonly attrConfigId: ros.IResolvable | string;
    /**
     * Attribute ConfigType: Configuration type, which can be used to query global or rule configurations.
     */
    readonly attrConfigType: ros.IResolvable | string;
    /**
     * Attribute Grpc: Whether to enable GRPC, default is disabled.
     */
    readonly attrGrpc: ros.IResolvable | string;
    /**
     * Attribute Http2Origin: Whether to enable HTTP2 origin, default is disabled.
     */
    readonly attrHttp2Origin: ros.IResolvable | string;
    /**
     * Attribute Rule: Rule content, using conditional expressions to match user requests. When adding global configuration, this parameter does not need to be set.
     */
    readonly attrRule: ros.IResolvable | string;
    /**
     * Attribute RuleEnable: Rule switch. When adding global configuration, this parameter does not need to be set.
     */
    readonly attrRuleEnable: ros.IResolvable | string;
    /**
     * Attribute RuleName: Rule name.
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
    /**
     * Attribute SmartRouting: Whether to enable smart routing service, default is disabled.
     */
    readonly attrSmartRouting: ros.IResolvable | string;
    /**
     * Attribute UploadMaxFilesize: Maximum upload file size, in MB, value range: 100～500.
     */
    readonly attrUploadMaxFilesize: ros.IResolvable | string;
    /**
     * Attribute Websocket: Whether to enable Websocket, default is enabled.
     */
    readonly attrWebsocket: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: NetworkOptimizationProps, enableResourcePropertyConstraint?: boolean);
}

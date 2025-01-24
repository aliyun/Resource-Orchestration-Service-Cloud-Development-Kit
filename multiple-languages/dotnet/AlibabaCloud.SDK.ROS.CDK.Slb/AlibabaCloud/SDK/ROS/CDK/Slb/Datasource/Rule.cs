using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Slb.Datasource
{
    /// <summary>This class encapsulates and extends the ROS resource type `DATASOURCE::SLB::Rule`.</summary>
    /// <remarks>
    /// <strong>Note</strong>: This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosRule`for a more convenient development experience.
    /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-slb-rule
    /// </remarks>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Slb.Datasource.Rule), fullyQualifiedName: "@alicloud/ros-cdk-slb.datasource.Rule", parametersJson: "[{\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"name\":\"props\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-slb.datasource.RuleProps\"}},{\"name\":\"enableResourcePropertyConstraint\",\"optional\":true,\"type\":{\"primitive\":\"boolean\"}}]")]
    public class Rule : AlibabaCloud.SDK.ROS.CDK.Core.Resource_, AlibabaCloud.SDK.ROS.CDK.Slb.Datasource.IRule
    {
        /// <summary>Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.</summary>
        public Rule(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Slb.Datasource.IRuleProps props, bool? enableResourcePropertyConstraint = null): base(_MakeDeputyProps(scope, id, props, enableResourcePropertyConstraint))
        {
        }

        [System.Runtime.CompilerServices.MethodImpl(System.Runtime.CompilerServices.MethodImplOptions.AggressiveInlining)]
        private static DeputyProps _MakeDeputyProps(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Slb.Datasource.IRuleProps props, bool? enableResourcePropertyConstraint = null)
        {
            return new DeputyProps(new object?[]{scope, id, props, enableResourcePropertyConstraint});
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected Rule(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected Rule(DeputyProps props): base(props)
        {
        }

        /// <summary>Attribute Cookie: The cookie to be configured on the backend server.</summary>
        [JsiiProperty(name: "attrCookie", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrCookie
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute CookieTimeout: The timeout period of a cookie.</summary>
        [JsiiProperty(name: "attrCookieTimeout", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrCookieTimeout
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute Domain: The domain name that is configured in the forwarding rule.</summary>
        [JsiiProperty(name: "attrDomain", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrDomain
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute HealthCheck: Specifies whether to enable health checks.</summary>
        [JsiiProperty(name: "attrHealthCheck", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrHealthCheck
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute HealthCheckConnectPort: The port of the backend server that is used for health checks.</summary>
        /// <remarks>
        /// Valid values: 1 to 65535.
        /// </remarks>
        [JsiiProperty(name: "attrHealthCheckConnectPort", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrHealthCheckConnectPort
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute HealthCheckDomain: The domain name that is used for health checks.</summary>
        /// <remarks>
        /// Valid values:  $_ip: The private IP address of the backend server. If the $_ip parameter is set or the HealthCheckDomain parameter is not set, SLB uses the private IP addresses of backend servers as the domain names for health checks. domain: The domain name must be 1 to 80 characters in length. It can contain only letters, digits, periods (.),and hyphens (-).
        /// </remarks>
        [JsiiProperty(name: "attrHealthCheckDomain", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrHealthCheckDomain
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute HealthCheckHttpCode: The HTTP status code that indicates a successful health check.</summary>
        /// <remarks>
        /// Separate multiple HTTP status codes with commas (,). Default value: http_2xx.
        /// </remarks>
        [JsiiProperty(name: "attrHealthCheckHttpCode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrHealthCheckHttpCode
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute HealthCheckInterval: The time interval between two consecutive health checks.</summary>
        [JsiiProperty(name: "attrHealthCheckInterval", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrHealthCheckInterval
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute HealthCheckTimeout: The timeout period of a health check response.</summary>
        /// <remarks>
        /// If a backend ECS instance does not send an expected response within the specified period of time, the ECS instance is considered unhealthy.
        /// </remarks>
        [JsiiProperty(name: "attrHealthCheckTimeout", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrHealthCheckTimeout
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute HealthCheckUri: The URI that is used for health checks.</summary>
        [JsiiProperty(name: "attrHealthCheckUri", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrHealthCheckUri
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute HealthyThreshold: The number of consecutive successful health checks that must occur before an unhealthy backend server is declared healthy.</summary>
        /// <remarks>
        /// In this case, the health check state is changed from fail to success.
        /// </remarks>
        [JsiiProperty(name: "attrHealthyThreshold", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrHealthyThreshold
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute ListenerPort: The listener port that is used by the SLB instance.</summary>
        [JsiiProperty(name: "attrListenerPort", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrListenerPort
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute ListenerSync: Indicates whether the forwarding rule uses the scheduling algorithm, session persistence, and health check configurations of the listener.</summary>
        [JsiiProperty(name: "attrListenerSync", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrListenerSync
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute LoadBalancerId: The ID of the SLB instance.</summary>
        [JsiiProperty(name: "attrLoadBalancerId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrLoadBalancerId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute RuleId: The ID of the forwarding rule.</summary>
        [JsiiProperty(name: "attrRuleId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrRuleId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute RuleName: The name of the forwarding rule.</summary>
        [JsiiProperty(name: "attrRuleName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrRuleName
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute Scheduler: The scheduling algorithm.</summary>
        [JsiiProperty(name: "attrScheduler", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrScheduler
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute StickySession: Indicates whether session persistence is enabled.</summary>
        /// <remarks>
        /// Valid values: on and off.
        /// </remarks>
        [JsiiProperty(name: "attrStickySession", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrStickySession
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute StickySessionType: The method that is used to handle a cookie.</summary>
        [JsiiProperty(name: "attrStickySessionType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrStickySessionType
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute UnhealthyThreshold: The number of consecutive failed health checks that must occur before a healthy backend server is declared unhealthy.</summary>
        /// <remarks>
        /// In this case, the health check state is changed from success to fail.
        /// </remarks>
        [JsiiProperty(name: "attrUnhealthyThreshold", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrUnhealthyThreshold
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute Url: The URL that is configured in the forwarding rule.</summary>
        [JsiiProperty(name: "attrUrl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrUrl
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute VserverGroupId: The ID of the vServer group that is associated with the forwarding rule.</summary>
        [JsiiProperty(name: "attrVserverGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrVserverGroupId
        {
            get => GetInstanceProperty<object>()!;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-slb.datasource.RuleProps\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Slb.Datasource.IRuleProps Props
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Slb.Datasource.IRuleProps>()!;
        }

        [JsiiProperty(name: "enableResourcePropertyConstraint", typeJson: "{\"primitive\":\"boolean\"}")]
        protected virtual bool EnableResourcePropertyConstraint
        {
            get => GetInstanceProperty<bool>()!;
            set => SetInstanceProperty(value);
        }

        [JsiiProperty(name: "id", typeJson: "{\"primitive\":\"string\"}")]
        protected virtual string Id
        {
            get => GetInstanceProperty<string>()!;
            set => SetInstanceProperty(value);
        }

        [JsiiProperty(name: "scope", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}")]
        protected virtual AlibabaCloud.SDK.ROS.CDK.Core.Construct Scope
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.Construct>()!;
            set => SetInstanceProperty(value);
        }
    }
}

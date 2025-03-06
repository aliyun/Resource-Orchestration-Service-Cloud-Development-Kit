using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Slb.Datasource
{
    /// <summary>Represents a `Rule`.</summary>
    [JsiiInterface(nativeType: typeof(IRule), fullyQualifiedName: "@alicloud/ros-cdk-slb.datasource.IRule")]
    public interface IRule : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute Cookie: The cookie to be configured on the backend server.</summary>
        [JsiiProperty(name: "attrCookie", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrCookie
        {
            get;
        }

        /// <summary>Attribute CookieTimeout: The timeout period of a cookie.</summary>
        [JsiiProperty(name: "attrCookieTimeout", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrCookieTimeout
        {
            get;
        }

        /// <summary>Attribute Domain: The domain name that is configured in the forwarding rule.</summary>
        [JsiiProperty(name: "attrDomain", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDomain
        {
            get;
        }

        /// <summary>Attribute HealthCheck: Specifies whether to enable health checks.</summary>
        [JsiiProperty(name: "attrHealthCheck", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrHealthCheck
        {
            get;
        }

        /// <summary>Attribute HealthCheckConnectPort: The port of the backend server that is used for health checks.</summary>
        /// <remarks>
        /// Valid values: 1 to 65535.
        /// </remarks>
        [JsiiProperty(name: "attrHealthCheckConnectPort", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrHealthCheckConnectPort
        {
            get;
        }

        /// <summary>Attribute HealthCheckDomain: The domain name that is used for health checks.</summary>
        /// <remarks>
        /// Valid values:  $_ip: The private IP address of the backend server. If the $_ip parameter is set or the HealthCheckDomain parameter is not set, SLB uses the private IP addresses of backend servers as the domain names for health checks. domain: The domain name must be 1 to 80 characters in length. It can contain only letters, digits, periods (.),and hyphens (-).
        /// </remarks>
        [JsiiProperty(name: "attrHealthCheckDomain", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrHealthCheckDomain
        {
            get;
        }

        /// <summary>Attribute HealthCheckHttpCode: The HTTP status code that indicates a successful health check.</summary>
        /// <remarks>
        /// Separate multiple HTTP status codes with commas (,). Default value: http_2xx.
        /// </remarks>
        [JsiiProperty(name: "attrHealthCheckHttpCode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrHealthCheckHttpCode
        {
            get;
        }

        /// <summary>Attribute HealthCheckInterval: The time interval between two consecutive health checks.</summary>
        [JsiiProperty(name: "attrHealthCheckInterval", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrHealthCheckInterval
        {
            get;
        }

        /// <summary>Attribute HealthCheckTimeout: The timeout period of a health check response.</summary>
        /// <remarks>
        /// If a backend ECS instance does not send an expected response within the specified period of time, the ECS instance is considered unhealthy.
        /// </remarks>
        [JsiiProperty(name: "attrHealthCheckTimeout", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrHealthCheckTimeout
        {
            get;
        }

        /// <summary>Attribute HealthCheckUri: The URI that is used for health checks.</summary>
        [JsiiProperty(name: "attrHealthCheckUri", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrHealthCheckUri
        {
            get;
        }

        /// <summary>Attribute HealthyThreshold: The number of consecutive successful health checks that must occur before an unhealthy backend server is declared healthy.</summary>
        /// <remarks>
        /// In this case, the health check state is changed from fail to success.
        /// </remarks>
        [JsiiProperty(name: "attrHealthyThreshold", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrHealthyThreshold
        {
            get;
        }

        /// <summary>Attribute ListenerPort: The listener port that is used by the SLB instance.</summary>
        [JsiiProperty(name: "attrListenerPort", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrListenerPort
        {
            get;
        }

        /// <summary>Attribute ListenerSync: Indicates whether the forwarding rule uses the scheduling algorithm, session persistence, and health check configurations of the listener.</summary>
        [JsiiProperty(name: "attrListenerSync", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrListenerSync
        {
            get;
        }

        /// <summary>Attribute LoadBalancerId: The ID of the SLB instance.</summary>
        [JsiiProperty(name: "attrLoadBalancerId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrLoadBalancerId
        {
            get;
        }

        /// <summary>Attribute RuleId: The ID of the forwarding rule.</summary>
        [JsiiProperty(name: "attrRuleId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrRuleId
        {
            get;
        }

        /// <summary>Attribute RuleName: The name of the forwarding rule.</summary>
        [JsiiProperty(name: "attrRuleName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrRuleName
        {
            get;
        }

        /// <summary>Attribute Scheduler: The scheduling algorithm.</summary>
        [JsiiProperty(name: "attrScheduler", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrScheduler
        {
            get;
        }

        /// <summary>Attribute StickySession: Indicates whether session persistence is enabled.</summary>
        /// <remarks>
        /// Valid values: on and off.
        /// </remarks>
        [JsiiProperty(name: "attrStickySession", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrStickySession
        {
            get;
        }

        /// <summary>Attribute StickySessionType: The method that is used to handle a cookie.</summary>
        [JsiiProperty(name: "attrStickySessionType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrStickySessionType
        {
            get;
        }

        /// <summary>Attribute UnhealthyThreshold: The number of consecutive failed health checks that must occur before a healthy backend server is declared unhealthy.</summary>
        /// <remarks>
        /// In this case, the health check state is changed from success to fail.
        /// </remarks>
        [JsiiProperty(name: "attrUnhealthyThreshold", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrUnhealthyThreshold
        {
            get;
        }

        /// <summary>Attribute Url: The URL that is configured in the forwarding rule.</summary>
        [JsiiProperty(name: "attrUrl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrUrl
        {
            get;
        }

        /// <summary>Attribute VserverGroupId: The ID of the vServer group that is associated with the forwarding rule.</summary>
        [JsiiProperty(name: "attrVserverGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrVserverGroupId
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-slb.datasource.RuleProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Slb.Datasource.IRuleProps Props
        {
            get;
        }

        /// <summary>Represents a `Rule`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IRule), fullyQualifiedName: "@alicloud/ros-cdk-slb.datasource.IRule")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Slb.Datasource.IRule
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute Cookie: The cookie to be configured on the backend server.</summary>
            [JsiiProperty(name: "attrCookie", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrCookie
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute CookieTimeout: The timeout period of a cookie.</summary>
            [JsiiProperty(name: "attrCookieTimeout", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrCookieTimeout
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Domain: The domain name that is configured in the forwarding rule.</summary>
            [JsiiProperty(name: "attrDomain", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDomain
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute HealthCheck: Specifies whether to enable health checks.</summary>
            [JsiiProperty(name: "attrHealthCheck", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrHealthCheck
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute HealthCheckConnectPort: The port of the backend server that is used for health checks.</summary>
            /// <remarks>
            /// Valid values: 1 to 65535.
            /// </remarks>
            [JsiiProperty(name: "attrHealthCheckConnectPort", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrHealthCheckConnectPort
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute HealthCheckDomain: The domain name that is used for health checks.</summary>
            /// <remarks>
            /// Valid values:  $_ip: The private IP address of the backend server. If the $_ip parameter is set or the HealthCheckDomain parameter is not set, SLB uses the private IP addresses of backend servers as the domain names for health checks. domain: The domain name must be 1 to 80 characters in length. It can contain only letters, digits, periods (.),and hyphens (-).
            /// </remarks>
            [JsiiProperty(name: "attrHealthCheckDomain", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrHealthCheckDomain
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute HealthCheckHttpCode: The HTTP status code that indicates a successful health check.</summary>
            /// <remarks>
            /// Separate multiple HTTP status codes with commas (,). Default value: http_2xx.
            /// </remarks>
            [JsiiProperty(name: "attrHealthCheckHttpCode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrHealthCheckHttpCode
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute HealthCheckInterval: The time interval between two consecutive health checks.</summary>
            [JsiiProperty(name: "attrHealthCheckInterval", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrHealthCheckInterval
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute HealthCheckTimeout: The timeout period of a health check response.</summary>
            /// <remarks>
            /// If a backend ECS instance does not send an expected response within the specified period of time, the ECS instance is considered unhealthy.
            /// </remarks>
            [JsiiProperty(name: "attrHealthCheckTimeout", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrHealthCheckTimeout
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute HealthCheckUri: The URI that is used for health checks.</summary>
            [JsiiProperty(name: "attrHealthCheckUri", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrHealthCheckUri
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute HealthyThreshold: The number of consecutive successful health checks that must occur before an unhealthy backend server is declared healthy.</summary>
            /// <remarks>
            /// In this case, the health check state is changed from fail to success.
            /// </remarks>
            [JsiiProperty(name: "attrHealthyThreshold", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrHealthyThreshold
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ListenerPort: The listener port that is used by the SLB instance.</summary>
            [JsiiProperty(name: "attrListenerPort", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrListenerPort
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ListenerSync: Indicates whether the forwarding rule uses the scheduling algorithm, session persistence, and health check configurations of the listener.</summary>
            [JsiiProperty(name: "attrListenerSync", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrListenerSync
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute LoadBalancerId: The ID of the SLB instance.</summary>
            [JsiiProperty(name: "attrLoadBalancerId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrLoadBalancerId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute RuleId: The ID of the forwarding rule.</summary>
            [JsiiProperty(name: "attrRuleId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrRuleId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute RuleName: The name of the forwarding rule.</summary>
            [JsiiProperty(name: "attrRuleName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrRuleName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Scheduler: The scheduling algorithm.</summary>
            [JsiiProperty(name: "attrScheduler", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrScheduler
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute StickySession: Indicates whether session persistence is enabled.</summary>
            /// <remarks>
            /// Valid values: on and off.
            /// </remarks>
            [JsiiProperty(name: "attrStickySession", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrStickySession
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute StickySessionType: The method that is used to handle a cookie.</summary>
            [JsiiProperty(name: "attrStickySessionType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrStickySessionType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute UnhealthyThreshold: The number of consecutive failed health checks that must occur before a healthy backend server is declared unhealthy.</summary>
            /// <remarks>
            /// In this case, the health check state is changed from success to fail.
            /// </remarks>
            [JsiiProperty(name: "attrUnhealthyThreshold", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrUnhealthyThreshold
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Url: The URL that is configured in the forwarding rule.</summary>
            [JsiiProperty(name: "attrUrl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrUrl
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute VserverGroupId: The ID of the vServer group that is associated with the forwarding rule.</summary>
            [JsiiProperty(name: "attrVserverGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrVserverGroupId
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-slb.datasource.RuleProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Slb.Datasource.IRuleProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Slb.Datasource.IRuleProps>()!;
            }

            /// <summary>The environment this resource belongs to.</summary>
            /// <remarks>
            /// For resources that are created and managed by the CDK
            /// (generally, those created by creating new class instances like Role, Bucket, etc.),
            /// this is always the same as the environment of the stack they belong to;
            /// however, for imported resources
            /// (those obtained from static methods like fromRoleArn, fromBucketName, etc.),
            /// that might be different than the stack they were imported into.
            /// </remarks>
            [JsiiProperty(name: "env", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResourceEnvironment\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Core.IResourceEnvironment Env
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResourceEnvironment>()!;
            }

            /// <summary>The stack in which this resource is defined.</summary>
            [JsiiProperty(name: "stack", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.Stack\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Core.Stack Stack
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.Stack>()!;
            }

            /// <summary>The construct tree node for this construct.</summary>
            [JsiiProperty(name: "node", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.ConstructNode\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Core.ConstructNode Node
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.ConstructNode>()!;
            }
        }
    }
}

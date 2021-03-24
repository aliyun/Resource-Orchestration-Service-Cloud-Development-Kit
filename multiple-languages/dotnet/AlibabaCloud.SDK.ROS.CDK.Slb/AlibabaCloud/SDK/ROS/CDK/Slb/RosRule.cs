using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Slb
{
    /// <summary>A ROS template type:  `ALIYUN::SLB::Rule`.</summary>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Slb.RosRule), fullyQualifiedName: "@alicloud/ros-cdk-slb.RosRule", parametersJson: "[{\"docs\":{\"summary\":\"- scope in which this resource is defined.\"},\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"docs\":{\"summary\":\"- scoped id of the resource.\"},\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"docs\":{\"summary\":\"- resource properties.\"},\"name\":\"props\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-slb.RosRuleProps\"}},{\"name\":\"enableResourcePropertyConstraint\",\"type\":{\"primitive\":\"boolean\"}}]")]
    public class RosRule : AlibabaCloud.SDK.ROS.CDK.Core.RosResource
    {
        /// <summary>Create a new `ALIYUN::SLB::Rule`.</summary>
        /// <param name="scope">- scope in which this resource is defined.</param>
        /// <param name="id">- scoped id of the resource.</param>
        /// <param name="props">- resource properties.</param>
        public RosRule(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Slb.IRosRuleProps props, bool enableResourcePropertyConstraint): base(new DeputyProps(new object?[]{scope, id, props, enableResourcePropertyConstraint}))
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected RosRule(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected RosRule(DeputyProps props): base(props)
        {
        }

        [JsiiMethod(name: "renderProperties", returnsJson: "{\"type\":{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}}", parametersJson: "[{\"name\":\"props\",\"type\":{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}}]", isOverride: true)]
        protected override System.Collections.Generic.IDictionary<string, object> RenderProperties(System.Collections.Generic.IDictionary<string, object> props)
        {
            return InvokeInstanceMethod<System.Collections.Generic.IDictionary<string, object>>(new System.Type[]{typeof(System.Collections.Generic.IDictionary<string, object>)}, new object[]{props})!;
        }

        /// <summary>The resource type name for this resource class.</summary>
        [JsiiProperty(name: "ROS_RESOURCE_TYPE_NAME", typeJson: "{\"primitive\":\"string\"}")]
        public static string ROS_RESOURCE_TYPE_NAME
        {
            get;
        }
        = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Slb.RosRule))!;

        /// <remarks>
        /// <strong>Attribute</strong>: Rules: A list of forwarding rules. Each element of rules contains "RuleId".
        /// </remarks>
        [JsiiProperty(name: "attrRules", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrRules
        {
            get => GetInstanceProperty<object>()!;
        }

        [JsiiProperty(name: "rosProperties", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}")]
        protected override System.Collections.Generic.IDictionary<string, object> RosProperties
        {
            get => GetInstanceProperty<System.Collections.Generic.IDictionary<string, object>>()!;
        }

        [JsiiProperty(name: "enableResourcePropertyConstraint", typeJson: "{\"primitive\":\"boolean\"}")]
        public virtual bool EnableResourcePropertyConstraint
        {
            get => GetInstanceProperty<bool>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: listenerPort: The front-end HTTPS listener port of the Server Load Balancer instance. Valid value:
        /// 1-65535
        /// </remarks>
        [JsiiProperty(name: "listenerPort", typeJson: "{\"primitive\":\"number\"}")]
        public virtual double ListenerPort
        {
            get => GetInstanceProperty<double>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: loadBalancerId: The ID of Server Load Balancer instance.
        /// </remarks>
        [JsiiProperty(name: "loadBalancerId", typeJson: "{\"primitive\":\"string\"}")]
        public virtual string LoadBalancerId
        {
            get => GetInstanceProperty<string>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: ruleList: The forwarding rules to add.
        /// </remarks>
        [JsiiProperty(name: "ruleList", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-slb.RosRule.RuleListProperty\"}]}},\"kind\":\"array\"}}]}}")]
        public virtual object RuleList
        {
            get => GetInstanceProperty<object>()!;
            set => SetInstanceProperty(value);
        }
        [JsiiInterface(nativeType: typeof(IRuleListProperty), fullyQualifiedName: "@alicloud/ros-cdk-slb.RosRule.RuleListProperty")]
        public interface IRuleListProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: ruleName: The name of the forwarding rule.
            /// </remarks>
            [JsiiProperty(name: "ruleName", typeJson: "{\"primitive\":\"string\"}")]
            string RuleName
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: vServerGroupId: The ID of the VServer group associated with the forwarding rule.
            /// </remarks>
            [JsiiProperty(name: "vServerGroupId", typeJson: "{\"primitive\":\"string\"}")]
            string VServerGroupId
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: domain: The domain name.
            /// </remarks>
            [JsiiProperty(name: "domain", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            string? Domain
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: url: The URL.
            /// </remarks>
            [JsiiProperty(name: "url", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            string? Url
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(IRuleListProperty), fullyQualifiedName: "@alicloud/ros-cdk-slb.RosRule.RuleListProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Slb.RosRule.IRuleListProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: ruleName: The name of the forwarding rule.
                /// </remarks>
                [JsiiProperty(name: "ruleName", typeJson: "{\"primitive\":\"string\"}")]
                public string RuleName
                {
                    get => GetInstanceProperty<string>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: vServerGroupId: The ID of the VServer group associated with the forwarding rule.
                /// </remarks>
                [JsiiProperty(name: "vServerGroupId", typeJson: "{\"primitive\":\"string\"}")]
                public string VServerGroupId
                {
                    get => GetInstanceProperty<string>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: domain: The domain name.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "domain", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
                public string? Domain
                {
                    get => GetInstanceProperty<string?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: url: The URL.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "url", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
                public string? Url
                {
                    get => GetInstanceProperty<string?>();
                }
            }
        }
        #pragma warning disable CS8618

        [JsiiByValue(fqn: "@alicloud/ros-cdk-slb.RosRule.RuleListProperty")]
        public class RuleListProperty : AlibabaCloud.SDK.ROS.CDK.Slb.RosRule.IRuleListProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: ruleName: The name of the forwarding rule.
            /// </remarks>
            [JsiiProperty(name: "ruleName", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
            public string RuleName
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: vServerGroupId: The ID of the VServer group associated with the forwarding rule.
            /// </remarks>
            [JsiiProperty(name: "vServerGroupId", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
            public string VServerGroupId
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: domain: The domain name.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "domain", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
            public string? Domain
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: url: The URL.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "url", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
            public string? Url
            {
                get;
                set;
            }
        }
    }
}

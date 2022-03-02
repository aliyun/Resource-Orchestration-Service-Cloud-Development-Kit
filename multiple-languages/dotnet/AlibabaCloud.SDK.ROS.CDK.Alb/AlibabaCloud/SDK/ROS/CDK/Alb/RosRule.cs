using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Alb
{
    /// <summary>A ROS template type:  `ALIYUN::ALB::Rule`.</summary>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Alb.RosRule), fullyQualifiedName: "@alicloud/ros-cdk-alb.RosRule", parametersJson: "[{\"docs\":{\"summary\":\"- scope in which this resource is defined.\"},\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"docs\":{\"summary\":\"- scoped id of the resource.\"},\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"docs\":{\"summary\":\"- resource properties.\"},\"name\":\"props\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-alb.RosRuleProps\"}},{\"name\":\"enableResourcePropertyConstraint\",\"type\":{\"primitive\":\"boolean\"}}]")]
    public class RosRule : AlibabaCloud.SDK.ROS.CDK.Core.RosResource
    {
        /// <summary>Create a new `ALIYUN::ALB::Rule`.</summary>
        /// <param name="scope">- scope in which this resource is defined.</param>
        /// <param name="id">- scoped id of the resource.</param>
        /// <param name="props">- resource properties.</param>
        public RosRule(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Alb.IRosRuleProps props, bool enableResourcePropertyConstraint): base(new DeputyProps(new object?[]{scope, id, props, enableResourcePropertyConstraint}))
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

        [JsiiMethod(name: "renderProperties", returnsJson: "{\"type\":{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}}", parametersJson: "[{\"name\":\"props\",\"type\":{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}}]")]
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
        = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Alb.RosRule))!;

        /// <remarks>
        /// <strong>Attribute</strong>: RuleId: The ID of the forwarding rules.
        /// </remarks>
        [JsiiProperty(name: "attrRuleId", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrRuleId
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
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
        /// <strong>Property</strong>: listenerId: The ID of the listener that is configured for the Application Load Balancer (ALB)
        /// instance.
        /// </remarks>
        [JsiiProperty(name: "listenerId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object ListenerId
        {
            get => GetInstanceProperty<object>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: priority: The priority of the forwarding rule. Valid values: 1 to 10000. A lower value specifies a higher priority.
        /// Note The priority of each forwarding rule within a listener must be unique.
        /// </remarks>
        [JsiiProperty(name: "priority", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object Priority
        {
            get => GetInstanceProperty<object>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: ruleActions: The actions of the forwarding rule.
        /// </remarks>
        [JsiiProperty(name: "ruleActions", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-alb.RosRule.RuleActionsProperty\"}]}},\"kind\":\"array\"}}]}}")]
        public virtual object RuleActions
        {
            get => GetInstanceProperty<object>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: ruleConditions: The conditions of the forwarding rule.
        /// </remarks>
        [JsiiProperty(name: "ruleConditions", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-alb.RosRule.RuleConditionsProperty\"}]}},\"kind\":\"array\"}}]}}")]
        public virtual object RuleConditions
        {
            get => GetInstanceProperty<object>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: ruleName: The name of the forwarding rule.
        /// The name must be 2 to 128 characters in length.
        /// It can contain letters, digits, periods (.), underscores (_), and hyphens (-). It
        /// must start with a letter.
        /// </remarks>
        [JsiiProperty(name: "ruleName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object RuleName
        {
            get => GetInstanceProperty<object>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: direction: Rule direction. Valid values: Request or Response.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "direction", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? Direction
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }
        [JsiiInterface(nativeType: typeof(ICookieConfigProperty), fullyQualifiedName: "@alicloud/ros-cdk-alb.RosRule.CookieConfigProperty")]
        public interface ICookieConfigProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: values: Cookie values
            /// </remarks>
            [JsiiProperty(name: "values", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-alb.RosRule.ValuesProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Values
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(ICookieConfigProperty), fullyQualifiedName: "@alicloud/ros-cdk-alb.RosRule.CookieConfigProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Alb.RosRule.ICookieConfigProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: values: Cookie values
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "values", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-alb.RosRule.ValuesProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
                public object? Values
                {
                    get => GetInstanceProperty<object?>();
                }
            }
        }
        [JsiiByValue(fqn: "@alicloud/ros-cdk-alb.RosRule.CookieConfigProperty")]
        public class CookieConfigProperty : AlibabaCloud.SDK.ROS.CDK.Alb.RosRule.ICookieConfigProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: values: Cookie values
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "values", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-alb.RosRule.ValuesProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? Values
            {
                get;
                set;
            }
        }
        [JsiiInterface(nativeType: typeof(IFixedResponseConfigProperty), fullyQualifiedName: "@alicloud/ros-cdk-alb.RosRule.FixedResponseConfigProperty")]
        public interface IFixedResponseConfigProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: content: The content of the fixed response. The content cannot exceed 1 KB in size, and can
            /// contain only ASCII characters.
            /// </remarks>
            [JsiiProperty(name: "content", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Content
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: contentType: The format of the content.
            /// Valid values: text/plain, text/css, text/html, application/javascript, and application/json.
            /// </remarks>
            [JsiiProperty(name: "contentType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? ContentType
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: httpCode: The HTTP status code of the response. Valid values: HTTP_2xx, HTTP_4xx, and HTTP_5xx. x is a digit.
            /// </remarks>
            [JsiiProperty(name: "httpCode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? HttpCode
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(IFixedResponseConfigProperty), fullyQualifiedName: "@alicloud/ros-cdk-alb.RosRule.FixedResponseConfigProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Alb.RosRule.IFixedResponseConfigProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: content: The content of the fixed response. The content cannot exceed 1 KB in size, and can
                /// contain only ASCII characters.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "content", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? Content
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: contentType: The format of the content.
                /// Valid values: text/plain, text/css, text/html, application/javascript, and application/json.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "contentType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? ContentType
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: httpCode: The HTTP status code of the response. Valid values: HTTP_2xx, HTTP_4xx, and HTTP_5xx. x is a digit.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "httpCode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? HttpCode
                {
                    get => GetInstanceProperty<object?>();
                }
            }
        }
        [JsiiByValue(fqn: "@alicloud/ros-cdk-alb.RosRule.FixedResponseConfigProperty")]
        public class FixedResponseConfigProperty : AlibabaCloud.SDK.ROS.CDK.Alb.RosRule.IFixedResponseConfigProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: content: The content of the fixed response. The content cannot exceed 1 KB in size, and can
            /// contain only ASCII characters.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "content", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Content
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: contentType: The format of the content.
            /// Valid values: text/plain, text/css, text/html, application/javascript, and application/json.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "contentType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ContentType
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: httpCode: The HTTP status code of the response. Valid values: HTTP_2xx, HTTP_4xx, and HTTP_5xx. x is a digit.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "httpCode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? HttpCode
            {
                get;
                set;
            }
        }
        [JsiiInterface(nativeType: typeof(IForwardGroupConfigProperty), fullyQualifiedName: "@alicloud/ros-cdk-alb.RosRule.ForwardGroupConfigProperty")]
        public interface IForwardGroupConfigProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: serverGroupTuples: The list of server groups to which requests are forwarded.
            /// </remarks>
            [JsiiProperty(name: "serverGroupTuples", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-alb.RosRule.ServerGroupTuplesProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? ServerGroupTuples
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(IForwardGroupConfigProperty), fullyQualifiedName: "@alicloud/ros-cdk-alb.RosRule.ForwardGroupConfigProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Alb.RosRule.IForwardGroupConfigProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: serverGroupTuples: The list of server groups to which requests are forwarded.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "serverGroupTuples", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-alb.RosRule.ServerGroupTuplesProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
                public object? ServerGroupTuples
                {
                    get => GetInstanceProperty<object?>();
                }
            }
        }
        [JsiiByValue(fqn: "@alicloud/ros-cdk-alb.RosRule.ForwardGroupConfigProperty")]
        public class ForwardGroupConfigProperty : AlibabaCloud.SDK.ROS.CDK.Alb.RosRule.IForwardGroupConfigProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: serverGroupTuples: The list of server groups to which requests are forwarded.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "serverGroupTuples", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-alb.RosRule.ServerGroupTuplesProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? ServerGroupTuples
            {
                get;
                set;
            }
        }
        [JsiiInterface(nativeType: typeof(IHeaderConfigProperty), fullyQualifiedName: "@alicloud/ros-cdk-alb.RosRule.HeaderConfigProperty")]
        public interface IHeaderConfigProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: key: The key of the header.
            /// The key must be 1 to 40 characters in length
            /// It can contain letters, digits, hyphens (-), and underscores (_).
            /// Cookie or Host is not supported.
            /// </remarks>
            [JsiiProperty(name: "key", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Key
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: values: The values of the header. The header values within a forwarding rule must be unique.
            /// The value must be 1 to 128 characters in length.
            /// It can contain asterisks (*), question marks (?), and other printable characters from ASCII code 32 to 127 (ch >= 32 && ch < 127).
            /// The value cannot start or end with a space character.
            /// </remarks>
            [JsiiProperty(name: "values", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Values
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(IHeaderConfigProperty), fullyQualifiedName: "@alicloud/ros-cdk-alb.RosRule.HeaderConfigProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Alb.RosRule.IHeaderConfigProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: key: The key of the header.
                /// The key must be 1 to 40 characters in length
                /// It can contain letters, digits, hyphens (-), and underscores (_).
                /// Cookie or Host is not supported.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "key", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? Key
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: values: The values of the header. The header values within a forwarding rule must be unique.
                /// The value must be 1 to 128 characters in length.
                /// It can contain asterisks (*), question marks (?), and other printable characters from ASCII code 32 to 127 (ch >= 32 && ch < 127).
                /// The value cannot start or end with a space character.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "values", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
                public object? Values
                {
                    get => GetInstanceProperty<object?>();
                }
            }
        }
        [JsiiByValue(fqn: "@alicloud/ros-cdk-alb.RosRule.HeaderConfigProperty")]
        public class HeaderConfigProperty : AlibabaCloud.SDK.ROS.CDK.Alb.RosRule.IHeaderConfigProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: key: The key of the header.
            /// The key must be 1 to 40 characters in length
            /// It can contain letters, digits, hyphens (-), and underscores (_).
            /// Cookie or Host is not supported.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "key", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Key
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: values: The values of the header. The header values within a forwarding rule must be unique.
            /// The value must be 1 to 128 characters in length.
            /// It can contain asterisks (*), question marks (?), and other printable characters from ASCII code 32 to 127 (ch >= 32 && ch < 127).
            /// The value cannot start or end with a space character.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "values", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? Values
            {
                get;
                set;
            }
        }
        [JsiiInterface(nativeType: typeof(IHostConfigProperty), fullyQualifiedName: "@alicloud/ros-cdk-alb.RosRule.HostConfigProperty")]
        public interface IHostConfigProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: values: The host name. A forwarding rule can contain only one host name. The host names must be unique.
            /// The host name must be 3 to 128 characters in length, and can contain lowercase letters, digits, hyphens (-), periods (.), asterisks (*), and question marks (?).
            /// The host name must contain at least one period (.). It cannot start or end with a period (.).
            /// The rightmost field can contain only letters and wildcard characters. It cannot contain digits or hyphens (-).
            /// The domain labels cannot start or end with hyphens (-). You can include an asterisk (*) and question mark (?) anywhere in a domain label.
            /// </remarks>
            [JsiiProperty(name: "values", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Values
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(IHostConfigProperty), fullyQualifiedName: "@alicloud/ros-cdk-alb.RosRule.HostConfigProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Alb.RosRule.IHostConfigProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: values: The host name. A forwarding rule can contain only one host name. The host names must be unique.
                /// The host name must be 3 to 128 characters in length, and can contain lowercase letters, digits, hyphens (-), periods (.), asterisks (*), and question marks (?).
                /// The host name must contain at least one period (.). It cannot start or end with a period (.).
                /// The rightmost field can contain only letters and wildcard characters. It cannot contain digits or hyphens (-).
                /// The domain labels cannot start or end with hyphens (-). You can include an asterisk (*) and question mark (?) anywhere in a domain label.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "values", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
                public object? Values
                {
                    get => GetInstanceProperty<object?>();
                }
            }
        }
        [JsiiByValue(fqn: "@alicloud/ros-cdk-alb.RosRule.HostConfigProperty")]
        public class HostConfigProperty : AlibabaCloud.SDK.ROS.CDK.Alb.RosRule.IHostConfigProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: values: The host name. A forwarding rule can contain only one host name. The host names must be unique.
            /// The host name must be 3 to 128 characters in length, and can contain lowercase letters, digits, hyphens (-), periods (.), asterisks (*), and question marks (?).
            /// The host name must contain at least one period (.). It cannot start or end with a period (.).
            /// The rightmost field can contain only letters and wildcard characters. It cannot contain digits or hyphens (-).
            /// The domain labels cannot start or end with hyphens (-). You can include an asterisk (*) and question mark (?) anywhere in a domain label.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "values", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? Values
            {
                get;
                set;
            }
        }
        [JsiiInterface(nativeType: typeof(IInsertHeaderConfigProperty), fullyQualifiedName: "@alicloud/ros-cdk-alb.RosRule.InsertHeaderConfigProperty")]
        public interface IInsertHeaderConfigProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: key: The key of the response header.
            /// The key must be 1 to 40 characters in length.
            /// It can contain letters, digits, underscores (_), and hyphens (-).
            /// The header names specified by InsertHeaderConfig must be unique.
            /// Note You cannot set the name of the header to one of the following values (case-insensitive):
            /// slb-id, slb-ip, x-forwarded-for, x-forwarded-proto, x-forwarded-eip, x-forwarded-port, x-forwarded-client-srcport, connection, upgrade, content-length, transfer-encoding, keep-alive, te, host, cookie, remoteip, and authority.
            /// </remarks>
            [JsiiProperty(name: "key", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Key
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: value: The content of the header to be inserted.
            /// If ValueType is set to SystemDefined, you can set the value to:
            /// ClientSrcPort: the port of the client.
            /// ClientSrcIp: the IP address of the client.
            /// Protocol: the request protocol (HTTP or HTTPS)
            /// SLBId: the ID of the ALB instance.
            /// SLBPort: the listening port of the ALB instance.
            /// If ValueType is set to UserDefined, you can customize the content of the header. The content must be 1 to 128 characters in length, and can contain asterisks (*) and question marks (?).
            /// It can also contain printable characters from ASCII code 32 to 127 (ch >= 32 && ch < 127). The header content cannot start or end with a space character.
            /// If ValueType is set to ReferenceHeader, you can reference one of the request headers. The header content must be 1 to 128 characters
            /// in length, and can contain lowercase letters, digits, underscores (_), and hyphens (-).
            /// </remarks>
            [JsiiProperty(name: "value", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Value
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: valueType: The type of the content. Valid values:
            /// UserDefined: user-defined.
            /// ReferenceHeader: references one of the request headers.
            /// SystemDefined: system-defined.
            /// </remarks>
            [JsiiProperty(name: "valueType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? ValueType
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(IInsertHeaderConfigProperty), fullyQualifiedName: "@alicloud/ros-cdk-alb.RosRule.InsertHeaderConfigProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Alb.RosRule.IInsertHeaderConfigProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: key: The key of the response header.
                /// The key must be 1 to 40 characters in length.
                /// It can contain letters, digits, underscores (_), and hyphens (-).
                /// The header names specified by InsertHeaderConfig must be unique.
                /// Note You cannot set the name of the header to one of the following values (case-insensitive):
                /// slb-id, slb-ip, x-forwarded-for, x-forwarded-proto, x-forwarded-eip, x-forwarded-port, x-forwarded-client-srcport, connection, upgrade, content-length, transfer-encoding, keep-alive, te, host, cookie, remoteip, and authority.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "key", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? Key
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: value: The content of the header to be inserted.
                /// If ValueType is set to SystemDefined, you can set the value to:
                /// ClientSrcPort: the port of the client.
                /// ClientSrcIp: the IP address of the client.
                /// Protocol: the request protocol (HTTP or HTTPS)
                /// SLBId: the ID of the ALB instance.
                /// SLBPort: the listening port of the ALB instance.
                /// If ValueType is set to UserDefined, you can customize the content of the header. The content must be 1 to 128 characters in length, and can contain asterisks (*) and question marks (?).
                /// It can also contain printable characters from ASCII code 32 to 127 (ch >= 32 && ch < 127). The header content cannot start or end with a space character.
                /// If ValueType is set to ReferenceHeader, you can reference one of the request headers. The header content must be 1 to 128 characters
                /// in length, and can contain lowercase letters, digits, underscores (_), and hyphens (-).
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "value", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? Value
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: valueType: The type of the content. Valid values:
                /// UserDefined: user-defined.
                /// ReferenceHeader: references one of the request headers.
                /// SystemDefined: system-defined.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "valueType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? ValueType
                {
                    get => GetInstanceProperty<object?>();
                }
            }
        }
        [JsiiByValue(fqn: "@alicloud/ros-cdk-alb.RosRule.InsertHeaderConfigProperty")]
        public class InsertHeaderConfigProperty : AlibabaCloud.SDK.ROS.CDK.Alb.RosRule.IInsertHeaderConfigProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: key: The key of the response header.
            /// The key must be 1 to 40 characters in length.
            /// It can contain letters, digits, underscores (_), and hyphens (-).
            /// The header names specified by InsertHeaderConfig must be unique.
            /// Note You cannot set the name of the header to one of the following values (case-insensitive):
            /// slb-id, slb-ip, x-forwarded-for, x-forwarded-proto, x-forwarded-eip, x-forwarded-port, x-forwarded-client-srcport, connection, upgrade, content-length, transfer-encoding, keep-alive, te, host, cookie, remoteip, and authority.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "key", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Key
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: value: The content of the header to be inserted.
            /// If ValueType is set to SystemDefined, you can set the value to:
            /// ClientSrcPort: the port of the client.
            /// ClientSrcIp: the IP address of the client.
            /// Protocol: the request protocol (HTTP or HTTPS)
            /// SLBId: the ID of the ALB instance.
            /// SLBPort: the listening port of the ALB instance.
            /// If ValueType is set to UserDefined, you can customize the content of the header. The content must be 1 to 128 characters in length, and can contain asterisks (*) and question marks (?).
            /// It can also contain printable characters from ASCII code 32 to 127 (ch >= 32 && ch < 127). The header content cannot start or end with a space character.
            /// If ValueType is set to ReferenceHeader, you can reference one of the request headers. The header content must be 1 to 128 characters
            /// in length, and can contain lowercase letters, digits, underscores (_), and hyphens (-).
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "value", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Value
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: valueType: The type of the content. Valid values:
            /// UserDefined: user-defined.
            /// ReferenceHeader: references one of the request headers.
            /// SystemDefined: system-defined.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "valueType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ValueType
            {
                get;
                set;
            }
        }
        [JsiiInterface(nativeType: typeof(IMethodConfigProperty), fullyQualifiedName: "@alicloud/ros-cdk-alb.RosRule.MethodConfigProperty")]
        public interface IMethodConfigProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: values: The request method.
            /// </remarks>
            [JsiiProperty(name: "values", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Values
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(IMethodConfigProperty), fullyQualifiedName: "@alicloud/ros-cdk-alb.RosRule.MethodConfigProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Alb.RosRule.IMethodConfigProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: values: The request method.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "values", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
                public object? Values
                {
                    get => GetInstanceProperty<object?>();
                }
            }
        }
        [JsiiByValue(fqn: "@alicloud/ros-cdk-alb.RosRule.MethodConfigProperty")]
        public class MethodConfigProperty : AlibabaCloud.SDK.ROS.CDK.Alb.RosRule.IMethodConfigProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: values: The request method.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "values", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? Values
            {
                get;
                set;
            }
        }
        [JsiiInterface(nativeType: typeof(IPathConfigProperty), fullyQualifiedName: "@alicloud/ros-cdk-alb.RosRule.PathConfigProperty")]
        public interface IPathConfigProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: values: The path of the URL.
            /// </remarks>
            [JsiiProperty(name: "values", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Values
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(IPathConfigProperty), fullyQualifiedName: "@alicloud/ros-cdk-alb.RosRule.PathConfigProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Alb.RosRule.IPathConfigProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: values: The path of the URL.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "values", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
                public object? Values
                {
                    get => GetInstanceProperty<object?>();
                }
            }
        }
        [JsiiByValue(fqn: "@alicloud/ros-cdk-alb.RosRule.PathConfigProperty")]
        public class PathConfigProperty : AlibabaCloud.SDK.ROS.CDK.Alb.RosRule.IPathConfigProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: values: The path of the URL.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "values", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? Values
            {
                get;
                set;
            }
        }
        [JsiiInterface(nativeType: typeof(IQueryStringConfigProperty), fullyQualifiedName: "@alicloud/ros-cdk-alb.RosRule.QueryStringConfigProperty")]
        public interface IQueryStringConfigProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: values: The list of query strings.
            /// </remarks>
            [JsiiProperty(name: "values", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-alb.RosRule.QueryStringConfigValuesProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Values
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(IQueryStringConfigProperty), fullyQualifiedName: "@alicloud/ros-cdk-alb.RosRule.QueryStringConfigProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Alb.RosRule.IQueryStringConfigProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: values: The list of query strings.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "values", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-alb.RosRule.QueryStringConfigValuesProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
                public object? Values
                {
                    get => GetInstanceProperty<object?>();
                }
            }
        }
        [JsiiByValue(fqn: "@alicloud/ros-cdk-alb.RosRule.QueryStringConfigProperty")]
        public class QueryStringConfigProperty : AlibabaCloud.SDK.ROS.CDK.Alb.RosRule.IQueryStringConfigProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: values: The list of query strings.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "values", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-alb.RosRule.QueryStringConfigValuesProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? Values
            {
                get;
                set;
            }
        }
        [JsiiInterface(nativeType: typeof(IQueryStringConfigValuesProperty), fullyQualifiedName: "@alicloud/ros-cdk-alb.RosRule.QueryStringConfigValuesProperty")]
        public interface IQueryStringConfigValuesProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: key: They key of the query string.
            /// The key must be 1 to 100 characters in length
            /// It can contain asterisks (*), question marks (?), and other printable characters. It cannot contain uppercase letters.
            /// The key cannot contain space characters or the following special characters: ; # [ ] { } \ | < > &.
            /// </remarks>
            [JsiiProperty(name: "key", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Key
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: value: The value of the cookie.
            /// The key must be 1 to 128 characters in length.
            /// It can contain lowercase letters, asterisks (*), question marks (?), and other printable characters. It cannot contain uppercase letters, space characters, or the following special characters: # [ ] { } \ | < > &.
            /// </remarks>
            [JsiiProperty(name: "value", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Value
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(IQueryStringConfigValuesProperty), fullyQualifiedName: "@alicloud/ros-cdk-alb.RosRule.QueryStringConfigValuesProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Alb.RosRule.IQueryStringConfigValuesProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: key: They key of the query string.
                /// The key must be 1 to 100 characters in length
                /// It can contain asterisks (*), question marks (?), and other printable characters. It cannot contain uppercase letters.
                /// The key cannot contain space characters or the following special characters: ; # [ ] { } \ | < > &.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "key", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? Key
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: value: The value of the cookie.
                /// The key must be 1 to 128 characters in length.
                /// It can contain lowercase letters, asterisks (*), question marks (?), and other printable characters. It cannot contain uppercase letters, space characters, or the following special characters: # [ ] { } \ | < > &.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "value", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? Value
                {
                    get => GetInstanceProperty<object?>();
                }
            }
        }
        [JsiiByValue(fqn: "@alicloud/ros-cdk-alb.RosRule.QueryStringConfigValuesProperty")]
        public class QueryStringConfigValuesProperty : AlibabaCloud.SDK.ROS.CDK.Alb.RosRule.IQueryStringConfigValuesProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: key: They key of the query string.
            /// The key must be 1 to 100 characters in length
            /// It can contain asterisks (*), question marks (?), and other printable characters. It cannot contain uppercase letters.
            /// The key cannot contain space characters or the following special characters: ; # [ ] { } \ | < > &.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "key", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Key
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: value: The value of the cookie.
            /// The key must be 1 to 128 characters in length.
            /// It can contain lowercase letters, asterisks (*), question marks (?), and other printable characters. It cannot contain uppercase letters, space characters, or the following special characters: # [ ] { } \ | < > &.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "value", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Value
            {
                get;
                set;
            }
        }
        [JsiiInterface(nativeType: typeof(IRedirectConfigProperty), fullyQualifiedName: "@alicloud/ros-cdk-alb.RosRule.RedirectConfigProperty")]
        public interface IRedirectConfigProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: host: The host name to which requests are redirected. Valid values:
            /// ${host} (default): If you set the value to ${host}, you cannot add other characters to the
            /// value.
            /// To customize the host name, make sure that the following requirements are met:
            /// The host name must be 3 to 128 characters in length, and can contain lowercase letters,
            /// digits, hyphens (-), periods (.), asterisks (*), and question marks (?).
            /// The host name must contain at least one period (.). It cannot start or end with a
            /// period (.).
            /// The rightmost field can contain only letters and wildcard characters. It cannot contain
            /// digits or hyphens (-).
            /// The domain labels cannot start or end with hyphens (-). You can include an asterisk
            /// (*) and question mark (?) anywhere in a domain label.
            /// </remarks>
            [JsiiProperty(name: "host", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Host
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: httpCode: The redirect type. Valid values: 301, 302, 303, 307, and 308.
            /// </remarks>
            [JsiiProperty(name: "httpCode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? HttpCode
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong></strong>: :. It cannot contain the following special characters: " % # ; ! ( ) [ ]^ , ". It can also contain asterisks (*) and question marks (?) as wildcard characters.
            /// The value is case-sensitive.
            ///
            /// <strong>Property</strong>: path: The path of the URL to which requests are redirected. Valid values:
            /// Default value: ${path}. ${host}, ${protocol}, and ${port} are also supported. Each variable can be specified only once. You can specify one
            /// or more of the preceding variables in each request. You can also combine them with
            /// the following characters.
            /// To customize the path, make sure that the following requirements are met:
            /// The path must be 1 to 128 characters in length.
            /// It must start with a forward slash (/). The path can contain letters, digits, and
            /// the following special characters: $ - _ .+ / & ~
            /// </remarks>
            [JsiiProperty(name: "path", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Path
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: port: The port to which requests are redirected.
            /// ${port} (default): If you set the value to ${port}, you cannot add other characters to the
            /// value.
            /// You can also enter a port number. Valid values: 1 to 63335.
            /// </remarks>
            [JsiiProperty(name: "port", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Port
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: protocol: The redirect protocol.
            /// ${protocol} (default): If you set the value to ${protocol}, you cannot add other characters to
            /// the value.
            /// You can also set the value to HTTP or HTTPS.
            /// Note HTTPS listeners do not support HTTPS to HTTP redirection.
            /// </remarks>
            [JsiiProperty(name: "protocol", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Protocol
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: query: The query string of the URL to which requests are redirected.
            /// Default value: ${query}. ${host}, ${protocol}, and ${port} are also supported. Each variable can be specified only once. You can specify one
            /// or more of the preceding variables in each request. You can also combine them with
            /// the following characters.
            /// To customize the query string, make sure that the following requirements are met:
            /// The value must be 1 to 128 characters in length.
            /// It can contain printable characters. It cannot contain space characters or the following
            /// special characters: # [ ] { } \ | < > &. It cannot contain uppercase letters.
            /// </remarks>
            [JsiiProperty(name: "query", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Query
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(IRedirectConfigProperty), fullyQualifiedName: "@alicloud/ros-cdk-alb.RosRule.RedirectConfigProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Alb.RosRule.IRedirectConfigProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: host: The host name to which requests are redirected. Valid values:
                /// ${host} (default): If you set the value to ${host}, you cannot add other characters to the
                /// value.
                /// To customize the host name, make sure that the following requirements are met:
                /// The host name must be 3 to 128 characters in length, and can contain lowercase letters,
                /// digits, hyphens (-), periods (.), asterisks (*), and question marks (?).
                /// The host name must contain at least one period (.). It cannot start or end with a
                /// period (.).
                /// The rightmost field can contain only letters and wildcard characters. It cannot contain
                /// digits or hyphens (-).
                /// The domain labels cannot start or end with hyphens (-). You can include an asterisk
                /// (*) and question mark (?) anywhere in a domain label.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "host", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? Host
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: httpCode: The redirect type. Valid values: 301, 302, 303, 307, and 308.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "httpCode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? HttpCode
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong></strong>: :. It cannot contain the following special characters: " % # ; ! ( ) [ ]^ , ". It can also contain asterisks (*) and question marks (?) as wildcard characters.
                /// The value is case-sensitive.
                ///
                /// <strong>Property</strong>: path: The path of the URL to which requests are redirected. Valid values:
                /// Default value: ${path}. ${host}, ${protocol}, and ${port} are also supported. Each variable can be specified only once. You can specify one
                /// or more of the preceding variables in each request. You can also combine them with
                /// the following characters.
                /// To customize the path, make sure that the following requirements are met:
                /// The path must be 1 to 128 characters in length.
                /// It must start with a forward slash (/). The path can contain letters, digits, and
                /// the following special characters: $ - _ .+ / & ~
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "path", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? Path
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: port: The port to which requests are redirected.
                /// ${port} (default): If you set the value to ${port}, you cannot add other characters to the
                /// value.
                /// You can also enter a port number. Valid values: 1 to 63335.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "port", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? Port
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: protocol: The redirect protocol.
                /// ${protocol} (default): If you set the value to ${protocol}, you cannot add other characters to
                /// the value.
                /// You can also set the value to HTTP or HTTPS.
                /// Note HTTPS listeners do not support HTTPS to HTTP redirection.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "protocol", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? Protocol
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: query: The query string of the URL to which requests are redirected.
                /// Default value: ${query}. ${host}, ${protocol}, and ${port} are also supported. Each variable can be specified only once. You can specify one
                /// or more of the preceding variables in each request. You can also combine them with
                /// the following characters.
                /// To customize the query string, make sure that the following requirements are met:
                /// The value must be 1 to 128 characters in length.
                /// It can contain printable characters. It cannot contain space characters or the following
                /// special characters: # [ ] { } \ | < > &. It cannot contain uppercase letters.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "query", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? Query
                {
                    get => GetInstanceProperty<object?>();
                }
            }
        }
        [JsiiByValue(fqn: "@alicloud/ros-cdk-alb.RosRule.RedirectConfigProperty")]
        public class RedirectConfigProperty : AlibabaCloud.SDK.ROS.CDK.Alb.RosRule.IRedirectConfigProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: host: The host name to which requests are redirected. Valid values:
            /// ${host} (default): If you set the value to ${host}, you cannot add other characters to the
            /// value.
            /// To customize the host name, make sure that the following requirements are met:
            /// The host name must be 3 to 128 characters in length, and can contain lowercase letters,
            /// digits, hyphens (-), periods (.), asterisks (*), and question marks (?).
            /// The host name must contain at least one period (.). It cannot start or end with a
            /// period (.).
            /// The rightmost field can contain only letters and wildcard characters. It cannot contain
            /// digits or hyphens (-).
            /// The domain labels cannot start or end with hyphens (-). You can include an asterisk
            /// (*) and question mark (?) anywhere in a domain label.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "host", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Host
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: httpCode: The redirect type. Valid values: 301, 302, 303, 307, and 308.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "httpCode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? HttpCode
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong></strong>: :. It cannot contain the following special characters: " % # ; ! ( ) [ ]^ , ". It can also contain asterisks (*) and question marks (?) as wildcard characters.
            /// The value is case-sensitive.
            ///
            /// <strong>Property</strong>: path: The path of the URL to which requests are redirected. Valid values:
            /// Default value: ${path}. ${host}, ${protocol}, and ${port} are also supported. Each variable can be specified only once. You can specify one
            /// or more of the preceding variables in each request. You can also combine them with
            /// the following characters.
            /// To customize the path, make sure that the following requirements are met:
            /// The path must be 1 to 128 characters in length.
            /// It must start with a forward slash (/). The path can contain letters, digits, and
            /// the following special characters: $ - _ .+ / & ~
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "path", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Path
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: port: The port to which requests are redirected.
            /// ${port} (default): If you set the value to ${port}, you cannot add other characters to the
            /// value.
            /// You can also enter a port number. Valid values: 1 to 63335.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "port", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Port
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: protocol: The redirect protocol.
            /// ${protocol} (default): If you set the value to ${protocol}, you cannot add other characters to
            /// the value.
            /// You can also set the value to HTTP or HTTPS.
            /// Note HTTPS listeners do not support HTTPS to HTTP redirection.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "protocol", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Protocol
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: query: The query string of the URL to which requests are redirected.
            /// Default value: ${query}. ${host}, ${protocol}, and ${port} are also supported. Each variable can be specified only once. You can specify one
            /// or more of the preceding variables in each request. You can also combine them with
            /// the following characters.
            /// To customize the query string, make sure that the following requirements are met:
            /// The value must be 1 to 128 characters in length.
            /// It can contain printable characters. It cannot contain space characters or the following
            /// special characters: # [ ] { } \ | < > &. It cannot contain uppercase letters.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "query", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Query
            {
                get;
                set;
            }
        }
        [JsiiInterface(nativeType: typeof(IResponseHeaderConfigProperty), fullyQualifiedName: "@alicloud/ros-cdk-alb.RosRule.ResponseHeaderConfigProperty")]
        public interface IResponseHeaderConfigProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: key: The key of the header.
            /// The key must be 1 to 40 characters in length
            /// It can contain letters, digits, hyphens (-), and underscores (_).
            /// Cookie or Host is not supported.
            /// </remarks>
            [JsiiProperty(name: "key", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Key
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: values: The values of the header.
            /// </remarks>
            [JsiiProperty(name: "values", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Values
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(IResponseHeaderConfigProperty), fullyQualifiedName: "@alicloud/ros-cdk-alb.RosRule.ResponseHeaderConfigProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Alb.RosRule.IResponseHeaderConfigProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: key: The key of the header.
                /// The key must be 1 to 40 characters in length
                /// It can contain letters, digits, hyphens (-), and underscores (_).
                /// Cookie or Host is not supported.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "key", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? Key
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: values: The values of the header.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "values", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
                public object? Values
                {
                    get => GetInstanceProperty<object?>();
                }
            }
        }
        [JsiiByValue(fqn: "@alicloud/ros-cdk-alb.RosRule.ResponseHeaderConfigProperty")]
        public class ResponseHeaderConfigProperty : AlibabaCloud.SDK.ROS.CDK.Alb.RosRule.IResponseHeaderConfigProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: key: The key of the header.
            /// The key must be 1 to 40 characters in length
            /// It can contain letters, digits, hyphens (-), and underscores (_).
            /// Cookie or Host is not supported.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "key", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Key
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: values: The values of the header.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "values", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? Values
            {
                get;
                set;
            }
        }
        [JsiiInterface(nativeType: typeof(IRewriteConfigProperty), fullyQualifiedName: "@alicloud/ros-cdk-alb.RosRule.RewriteConfigProperty")]
        public interface IRewriteConfigProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: host: Destination host address of internal jump. Valid values:
            /// ${host} (default): If you set the value to ${host}, you cannot add other characters to the
            /// value.
            /// To customize the host name, make sure that the following requirements are met:
            /// The host name must be 3 to 128 characters in length, and can contain lowercase letters,
            /// digits, hyphens (-), periods (.), asterisks (*), and question marks (?).
            /// The host name must contain at least one period (.). It cannot start or end with a
            /// period (.).
            /// The rightmost field can contain only letters and wildcard characters. It cannot contain
            /// digits or hyphens (-).
            /// The domain labels cannot start or end with hyphens (-). You can include an asterisk
            /// (*) and question mark (?) anywhere in a domain label.
            /// </remarks>
            [JsiiProperty(name: "host", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Host
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong></strong>: :. It cannot contain the following special characters: " % # ; ! ( ) [ ]^ , ". It can also contain asterisks (*) and question marks (?) as wildcard characters.
            /// The value is case-sensitive.
            ///
            /// <strong>Property</strong>: path: The path to jump. Valid values:
            /// Default value: ${path}. ${host}, ${protocol}, and ${port} are also supported. Each variable can be specified only once. You can specify one
            /// or more of the preceding variables in each request. You can also combine them with
            /// the following characters.
            /// To customize the path, make sure that the following requirements are met:
            /// The path must be 1 to 128 characters in length.
            /// It must start with a forward slash (/). The path can contain letters, digits, and
            /// the following special characters: $ - _ .+ / & ~
            /// </remarks>
            [JsiiProperty(name: "path", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Path
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: query: Query string for internal jump.
            /// Default value: ${query}. ${host}, ${protocol}, and ${port} are also supported. Each variable can be specified only once. You can specify one
            /// or more of the preceding variables in each request. You can also combine them with
            /// the following characters.
            /// To customize the query string, make sure that the following requirements are met:
            /// The value must be 1 to 128 characters in length.
            /// It can contain printable characters. It cannot contain space characters or the following
            /// special characters: # [ ] { } \ | < > &. It cannot contain uppercase letters.
            /// </remarks>
            [JsiiProperty(name: "query", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Query
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(IRewriteConfigProperty), fullyQualifiedName: "@alicloud/ros-cdk-alb.RosRule.RewriteConfigProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Alb.RosRule.IRewriteConfigProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: host: Destination host address of internal jump. Valid values:
                /// ${host} (default): If you set the value to ${host}, you cannot add other characters to the
                /// value.
                /// To customize the host name, make sure that the following requirements are met:
                /// The host name must be 3 to 128 characters in length, and can contain lowercase letters,
                /// digits, hyphens (-), periods (.), asterisks (*), and question marks (?).
                /// The host name must contain at least one period (.). It cannot start or end with a
                /// period (.).
                /// The rightmost field can contain only letters and wildcard characters. It cannot contain
                /// digits or hyphens (-).
                /// The domain labels cannot start or end with hyphens (-). You can include an asterisk
                /// (*) and question mark (?) anywhere in a domain label.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "host", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? Host
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong></strong>: :. It cannot contain the following special characters: " % # ; ! ( ) [ ]^ , ". It can also contain asterisks (*) and question marks (?) as wildcard characters.
                /// The value is case-sensitive.
                ///
                /// <strong>Property</strong>: path: The path to jump. Valid values:
                /// Default value: ${path}. ${host}, ${protocol}, and ${port} are also supported. Each variable can be specified only once. You can specify one
                /// or more of the preceding variables in each request. You can also combine them with
                /// the following characters.
                /// To customize the path, make sure that the following requirements are met:
                /// The path must be 1 to 128 characters in length.
                /// It must start with a forward slash (/). The path can contain letters, digits, and
                /// the following special characters: $ - _ .+ / & ~
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "path", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? Path
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: query: Query string for internal jump.
                /// Default value: ${query}. ${host}, ${protocol}, and ${port} are also supported. Each variable can be specified only once. You can specify one
                /// or more of the preceding variables in each request. You can also combine them with
                /// the following characters.
                /// To customize the query string, make sure that the following requirements are met:
                /// The value must be 1 to 128 characters in length.
                /// It can contain printable characters. It cannot contain space characters or the following
                /// special characters: # [ ] { } \ | < > &. It cannot contain uppercase letters.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "query", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? Query
                {
                    get => GetInstanceProperty<object?>();
                }
            }
        }
        [JsiiByValue(fqn: "@alicloud/ros-cdk-alb.RosRule.RewriteConfigProperty")]
        public class RewriteConfigProperty : AlibabaCloud.SDK.ROS.CDK.Alb.RosRule.IRewriteConfigProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: host: Destination host address of internal jump. Valid values:
            /// ${host} (default): If you set the value to ${host}, you cannot add other characters to the
            /// value.
            /// To customize the host name, make sure that the following requirements are met:
            /// The host name must be 3 to 128 characters in length, and can contain lowercase letters,
            /// digits, hyphens (-), periods (.), asterisks (*), and question marks (?).
            /// The host name must contain at least one period (.). It cannot start or end with a
            /// period (.).
            /// The rightmost field can contain only letters and wildcard characters. It cannot contain
            /// digits or hyphens (-).
            /// The domain labels cannot start or end with hyphens (-). You can include an asterisk
            /// (*) and question mark (?) anywhere in a domain label.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "host", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Host
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong></strong>: :. It cannot contain the following special characters: " % # ; ! ( ) [ ]^ , ". It can also contain asterisks (*) and question marks (?) as wildcard characters.
            /// The value is case-sensitive.
            ///
            /// <strong>Property</strong>: path: The path to jump. Valid values:
            /// Default value: ${path}. ${host}, ${protocol}, and ${port} are also supported. Each variable can be specified only once. You can specify one
            /// or more of the preceding variables in each request. You can also combine them with
            /// the following characters.
            /// To customize the path, make sure that the following requirements are met:
            /// The path must be 1 to 128 characters in length.
            /// It must start with a forward slash (/). The path can contain letters, digits, and
            /// the following special characters: $ - _ .+ / & ~
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "path", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Path
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: query: Query string for internal jump.
            /// Default value: ${query}. ${host}, ${protocol}, and ${port} are also supported. Each variable can be specified only once. You can specify one
            /// or more of the preceding variables in each request. You can also combine them with
            /// the following characters.
            /// To customize the query string, make sure that the following requirements are met:
            /// The value must be 1 to 128 characters in length.
            /// It can contain printable characters. It cannot contain space characters or the following
            /// special characters: # [ ] { } \ | < > &. It cannot contain uppercase letters.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "query", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Query
            {
                get;
                set;
            }
        }
        [JsiiInterface(nativeType: typeof(IRuleActionsProperty), fullyQualifiedName: "@alicloud/ros-cdk-alb.RosRule.RuleActionsProperty")]
        public interface IRuleActionsProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: order: The priority of the action. Valid values: 1 to 50000. A lower value specifies a higher priority. The actions specified in a forwarding
            /// rule are applied in descending order of priority. This parameter is required. The
            /// priority of each action within a forwarding rule is unique.
            /// </remarks>
            [JsiiProperty(name: "order", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            object Order
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: type: The action. Valid values:
            /// ForwardGroup: forwards a request to multiple vServer groups.
            /// Redirect: redirects a request.
            /// FixedResponse: returns a fixed response.
            /// Rewrite: rewrites a request.
            /// InsertHeader: adds a header to a request.
            /// The type of the action. You can specify the last action and the actions
            /// that you want to perform before the last action:
            /// FinalType: the last action that you want to perform in a forwarding rule. Each forwarding rule can contain only one FinalType action.
            /// You can specify a ForwardGroup, Redirect, or FixedResponse action as the FinalType action.
            /// ExtType: the action or the actions to be performed before the FinalType action. A forwarding rule can contain one or more ExtType actions.
            /// To specify this parameter, you must also specify FinalType. You can specify multiple InsertHeader actions or one Rewrite action.
            /// </remarks>
            [JsiiProperty(name: "type", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            object Type
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: fixedResponseConfig: The configuration of the fixed response.
            /// </remarks>
            [JsiiProperty(name: "fixedResponseConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-alb.RosRule.FixedResponseConfigProperty\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? FixedResponseConfig
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: forwardGroupConfig: The configuration of the server group.
            /// </remarks>
            [JsiiProperty(name: "forwardGroupConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-alb.RosRule.ForwardGroupConfigProperty\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? ForwardGroupConfig
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: insertHeaderConfig: The configuration of the header to be inserted.
            /// </remarks>
            [JsiiProperty(name: "insertHeaderConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-alb.RosRule.InsertHeaderConfigProperty\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? InsertHeaderConfig
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: redirectConfig: The configuration of the external redirect action.
            /// </remarks>
            [JsiiProperty(name: "redirectConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-alb.RosRule.RedirectConfigProperty\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? RedirectConfig
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: rewriteConfig: The configuration of the internal redirect action.
            /// </remarks>
            [JsiiProperty(name: "rewriteConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-alb.RosRule.RewriteConfigProperty\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? RewriteConfig
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(IRuleActionsProperty), fullyQualifiedName: "@alicloud/ros-cdk-alb.RosRule.RuleActionsProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Alb.RosRule.IRuleActionsProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: order: The priority of the action. Valid values: 1 to 50000. A lower value specifies a higher priority. The actions specified in a forwarding
                /// rule are applied in descending order of priority. This parameter is required. The
                /// priority of each action within a forwarding rule is unique.
                /// </remarks>
                [JsiiProperty(name: "order", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
                public object Order
                {
                    get => GetInstanceProperty<object>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: type: The action. Valid values:
                /// ForwardGroup: forwards a request to multiple vServer groups.
                /// Redirect: redirects a request.
                /// FixedResponse: returns a fixed response.
                /// Rewrite: rewrites a request.
                /// InsertHeader: adds a header to a request.
                /// The type of the action. You can specify the last action and the actions
                /// that you want to perform before the last action:
                /// FinalType: the last action that you want to perform in a forwarding rule. Each forwarding rule can contain only one FinalType action.
                /// You can specify a ForwardGroup, Redirect, or FixedResponse action as the FinalType action.
                /// ExtType: the action or the actions to be performed before the FinalType action. A forwarding rule can contain one or more ExtType actions.
                /// To specify this parameter, you must also specify FinalType. You can specify multiple InsertHeader actions or one Rewrite action.
                /// </remarks>
                [JsiiProperty(name: "type", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
                public object Type
                {
                    get => GetInstanceProperty<object>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: fixedResponseConfig: The configuration of the fixed response.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "fixedResponseConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-alb.RosRule.FixedResponseConfigProperty\"}]}}", isOptional: true)]
                public object? FixedResponseConfig
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: forwardGroupConfig: The configuration of the server group.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "forwardGroupConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-alb.RosRule.ForwardGroupConfigProperty\"}]}}", isOptional: true)]
                public object? ForwardGroupConfig
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: insertHeaderConfig: The configuration of the header to be inserted.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "insertHeaderConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-alb.RosRule.InsertHeaderConfigProperty\"}]}}", isOptional: true)]
                public object? InsertHeaderConfig
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: redirectConfig: The configuration of the external redirect action.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "redirectConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-alb.RosRule.RedirectConfigProperty\"}]}}", isOptional: true)]
                public object? RedirectConfig
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: rewriteConfig: The configuration of the internal redirect action.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "rewriteConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-alb.RosRule.RewriteConfigProperty\"}]}}", isOptional: true)]
                public object? RewriteConfig
                {
                    get => GetInstanceProperty<object?>();
                }
            }
        }
        #pragma warning disable CS8618

        [JsiiByValue(fqn: "@alicloud/ros-cdk-alb.RosRule.RuleActionsProperty")]
        public class RuleActionsProperty : AlibabaCloud.SDK.ROS.CDK.Alb.RosRule.IRuleActionsProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: order: The priority of the action. Valid values: 1 to 50000. A lower value specifies a higher priority. The actions specified in a forwarding
            /// rule are applied in descending order of priority. This parameter is required. The
            /// priority of each action within a forwarding rule is unique.
            /// </remarks>
            [JsiiProperty(name: "order", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Order
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: type: The action. Valid values:
            /// ForwardGroup: forwards a request to multiple vServer groups.
            /// Redirect: redirects a request.
            /// FixedResponse: returns a fixed response.
            /// Rewrite: rewrites a request.
            /// InsertHeader: adds a header to a request.
            /// The type of the action. You can specify the last action and the actions
            /// that you want to perform before the last action:
            /// FinalType: the last action that you want to perform in a forwarding rule. Each forwarding rule can contain only one FinalType action.
            /// You can specify a ForwardGroup, Redirect, or FixedResponse action as the FinalType action.
            /// ExtType: the action or the actions to be performed before the FinalType action. A forwarding rule can contain one or more ExtType actions.
            /// To specify this parameter, you must also specify FinalType. You can specify multiple InsertHeader actions or one Rewrite action.
            /// </remarks>
            [JsiiProperty(name: "type", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Type
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: fixedResponseConfig: The configuration of the fixed response.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "fixedResponseConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-alb.RosRule.FixedResponseConfigProperty\"}]}}", isOptional: true)]
            public object? FixedResponseConfig
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: forwardGroupConfig: The configuration of the server group.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "forwardGroupConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-alb.RosRule.ForwardGroupConfigProperty\"}]}}", isOptional: true)]
            public object? ForwardGroupConfig
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: insertHeaderConfig: The configuration of the header to be inserted.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "insertHeaderConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-alb.RosRule.InsertHeaderConfigProperty\"}]}}", isOptional: true)]
            public object? InsertHeaderConfig
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: redirectConfig: The configuration of the external redirect action.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "redirectConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-alb.RosRule.RedirectConfigProperty\"}]}}", isOptional: true)]
            public object? RedirectConfig
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: rewriteConfig: The configuration of the internal redirect action.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "rewriteConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-alb.RosRule.RewriteConfigProperty\"}]}}", isOptional: true)]
            public object? RewriteConfig
            {
                get;
                set;
            }
        }
        [JsiiInterface(nativeType: typeof(IRuleConditionsProperty), fullyQualifiedName: "@alicloud/ros-cdk-alb.RosRule.RuleConditionsProperty")]
        public interface IRuleConditionsProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: type: The type of the forwarding rule. Valid values:
            /// Host: Requests are forwarded based on hosts.
            /// Path: Requests are forwarded based on paths.
            /// Header: Requests are forwarded based on HTTP headers.
            /// QueryString: Requests are forwarded based on query strings.
            /// Method: Request are forwarded based on request methods.
            /// Cookie: Request are forwarded based on cookies.
            /// </remarks>
            [JsiiProperty(name: "type", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            object Type
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: cookieConfig: The configuration of the cookie.
            /// </remarks>
            [JsiiProperty(name: "cookieConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-alb.RosRule.CookieConfigProperty\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? CookieConfig
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: headerConfig: The configuration of the header.
            /// </remarks>
            [JsiiProperty(name: "headerConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-alb.RosRule.HeaderConfigProperty\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? HeaderConfig
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: hostConfig: The configuration of the host.
            /// </remarks>
            [JsiiProperty(name: "hostConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-alb.RosRule.HostConfigProperty\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? HostConfig
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: methodConfig: The configuration of the request method.
            /// </remarks>
            [JsiiProperty(name: "methodConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-alb.RosRule.MethodConfigProperty\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? MethodConfig
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: pathConfig: The configuration of the URL.
            /// </remarks>
            [JsiiProperty(name: "pathConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-alb.RosRule.PathConfigProperty\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? PathConfig
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: queryStringConfig: The configuration of the query string.
            /// </remarks>
            [JsiiProperty(name: "queryStringConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-alb.RosRule.QueryStringConfigProperty\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? QueryStringConfig
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: responseHeaderConfig: The configuration of header.
            /// </remarks>
            [JsiiProperty(name: "responseHeaderConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-alb.RosRule.ResponseHeaderConfigProperty\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? ResponseHeaderConfig
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(IRuleConditionsProperty), fullyQualifiedName: "@alicloud/ros-cdk-alb.RosRule.RuleConditionsProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Alb.RosRule.IRuleConditionsProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: type: The type of the forwarding rule. Valid values:
                /// Host: Requests are forwarded based on hosts.
                /// Path: Requests are forwarded based on paths.
                /// Header: Requests are forwarded based on HTTP headers.
                /// QueryString: Requests are forwarded based on query strings.
                /// Method: Request are forwarded based on request methods.
                /// Cookie: Request are forwarded based on cookies.
                /// </remarks>
                [JsiiProperty(name: "type", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
                public object Type
                {
                    get => GetInstanceProperty<object>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: cookieConfig: The configuration of the cookie.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "cookieConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-alb.RosRule.CookieConfigProperty\"}]}}", isOptional: true)]
                public object? CookieConfig
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: headerConfig: The configuration of the header.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "headerConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-alb.RosRule.HeaderConfigProperty\"}]}}", isOptional: true)]
                public object? HeaderConfig
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: hostConfig: The configuration of the host.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "hostConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-alb.RosRule.HostConfigProperty\"}]}}", isOptional: true)]
                public object? HostConfig
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: methodConfig: The configuration of the request method.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "methodConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-alb.RosRule.MethodConfigProperty\"}]}}", isOptional: true)]
                public object? MethodConfig
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: pathConfig: The configuration of the URL.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "pathConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-alb.RosRule.PathConfigProperty\"}]}}", isOptional: true)]
                public object? PathConfig
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: queryStringConfig: The configuration of the query string.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "queryStringConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-alb.RosRule.QueryStringConfigProperty\"}]}}", isOptional: true)]
                public object? QueryStringConfig
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: responseHeaderConfig: The configuration of header.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "responseHeaderConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-alb.RosRule.ResponseHeaderConfigProperty\"}]}}", isOptional: true)]
                public object? ResponseHeaderConfig
                {
                    get => GetInstanceProperty<object?>();
                }
            }
        }
        #pragma warning disable CS8618

        [JsiiByValue(fqn: "@alicloud/ros-cdk-alb.RosRule.RuleConditionsProperty")]
        public class RuleConditionsProperty : AlibabaCloud.SDK.ROS.CDK.Alb.RosRule.IRuleConditionsProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: type: The type of the forwarding rule. Valid values:
            /// Host: Requests are forwarded based on hosts.
            /// Path: Requests are forwarded based on paths.
            /// Header: Requests are forwarded based on HTTP headers.
            /// QueryString: Requests are forwarded based on query strings.
            /// Method: Request are forwarded based on request methods.
            /// Cookie: Request are forwarded based on cookies.
            /// </remarks>
            [JsiiProperty(name: "type", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Type
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: cookieConfig: The configuration of the cookie.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "cookieConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-alb.RosRule.CookieConfigProperty\"}]}}", isOptional: true)]
            public object? CookieConfig
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: headerConfig: The configuration of the header.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "headerConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-alb.RosRule.HeaderConfigProperty\"}]}}", isOptional: true)]
            public object? HeaderConfig
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: hostConfig: The configuration of the host.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "hostConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-alb.RosRule.HostConfigProperty\"}]}}", isOptional: true)]
            public object? HostConfig
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: methodConfig: The configuration of the request method.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "methodConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-alb.RosRule.MethodConfigProperty\"}]}}", isOptional: true)]
            public object? MethodConfig
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: pathConfig: The configuration of the URL.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "pathConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-alb.RosRule.PathConfigProperty\"}]}}", isOptional: true)]
            public object? PathConfig
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: queryStringConfig: The configuration of the query string.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "queryStringConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-alb.RosRule.QueryStringConfigProperty\"}]}}", isOptional: true)]
            public object? QueryStringConfig
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: responseHeaderConfig: The configuration of header.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "responseHeaderConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-alb.RosRule.ResponseHeaderConfigProperty\"}]}}", isOptional: true)]
            public object? ResponseHeaderConfig
            {
                get;
                set;
            }
        }
        [JsiiInterface(nativeType: typeof(IServerGroupTuplesProperty), fullyQualifiedName: "@alicloud/ros-cdk-alb.RosRule.ServerGroupTuplesProperty")]
        public interface IServerGroupTuplesProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: serverGroupId: The server group to which requests are forwarded.
            /// </remarks>
            [JsiiProperty(name: "serverGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? ServerGroupId
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(IServerGroupTuplesProperty), fullyQualifiedName: "@alicloud/ros-cdk-alb.RosRule.ServerGroupTuplesProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Alb.RosRule.IServerGroupTuplesProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: serverGroupId: The server group to which requests are forwarded.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "serverGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? ServerGroupId
                {
                    get => GetInstanceProperty<object?>();
                }
            }
        }
        [JsiiByValue(fqn: "@alicloud/ros-cdk-alb.RosRule.ServerGroupTuplesProperty")]
        public class ServerGroupTuplesProperty : AlibabaCloud.SDK.ROS.CDK.Alb.RosRule.IServerGroupTuplesProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: serverGroupId: The server group to which requests are forwarded.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "serverGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ServerGroupId
            {
                get;
                set;
            }
        }
        [JsiiInterface(nativeType: typeof(IValuesProperty), fullyQualifiedName: "@alicloud/ros-cdk-alb.RosRule.ValuesProperty")]
        public interface IValuesProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: key: The key of the cookie.
            /// The key must be 1 to 100 characters in length
            /// It can contain asterisks (*), question marks (?), and other printable characters. It cannot contain uppercase letters.
            /// It cannot contain space characters or the following special characters: ; # [ ] { } \ | < > &.
            /// </remarks>
            [JsiiProperty(name: "key", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Key
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: value: The value of the cookie.
            /// The key must be 1 to 100 characters in length.
            /// It can contain asterisks (*), question marks (?), and other printable characters. It cannot contain uppercase letters.
            /// It cannot contain space characters or the following special characters: ; # [ ] { } \ | < > &.
            /// </remarks>
            [JsiiProperty(name: "value", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Value
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(IValuesProperty), fullyQualifiedName: "@alicloud/ros-cdk-alb.RosRule.ValuesProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Alb.RosRule.IValuesProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: key: The key of the cookie.
                /// The key must be 1 to 100 characters in length
                /// It can contain asterisks (*), question marks (?), and other printable characters. It cannot contain uppercase letters.
                /// It cannot contain space characters or the following special characters: ; # [ ] { } \ | < > &.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "key", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? Key
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: value: The value of the cookie.
                /// The key must be 1 to 100 characters in length.
                /// It can contain asterisks (*), question marks (?), and other printable characters. It cannot contain uppercase letters.
                /// It cannot contain space characters or the following special characters: ; # [ ] { } \ | < > &.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "value", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? Value
                {
                    get => GetInstanceProperty<object?>();
                }
            }
        }
        [JsiiByValue(fqn: "@alicloud/ros-cdk-alb.RosRule.ValuesProperty")]
        public class ValuesProperty : AlibabaCloud.SDK.ROS.CDK.Alb.RosRule.IValuesProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: key: The key of the cookie.
            /// The key must be 1 to 100 characters in length
            /// It can contain asterisks (*), question marks (?), and other printable characters. It cannot contain uppercase letters.
            /// It cannot contain space characters or the following special characters: ; # [ ] { } \ | < > &.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "key", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Key
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: value: The value of the cookie.
            /// The key must be 1 to 100 characters in length.
            /// It can contain asterisks (*), question marks (?), and other printable characters. It cannot contain uppercase letters.
            /// It cannot contain space characters or the following special characters: ; # [ ] { } \ | < > &.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "value", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Value
            {
                get;
                set;
            }
        }
    }
}

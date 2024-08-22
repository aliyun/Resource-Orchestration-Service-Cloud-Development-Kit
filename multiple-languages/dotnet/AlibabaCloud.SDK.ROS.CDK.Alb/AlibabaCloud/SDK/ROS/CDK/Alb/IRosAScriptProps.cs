using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Alb
{
    /// <summary>Properties for defining a `RosAScript`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-alb-ascript
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosAScriptProps), fullyQualifiedName: "@alicloud/ros-cdk-alb.RosAScriptProps")]
    public interface IRosAScriptProps
    {
        /// <remarks>
        /// <strong>Property</strong>: aScriptName: The name of the AScript rule.
        /// The name must be 2 to 128 character in length, and can contain letters, digits, periods (.), underscores (_), and hyphens (-). It must start with a letter.
        /// </remarks>
        [JsiiProperty(name: "aScriptName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AScriptName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: listenerId: The listener ID.
        /// </remarks>
        [JsiiProperty(name: "listenerId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ListenerId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: scriptContent: The content of the AScript rule.
        /// </remarks>
        [JsiiProperty(name: "scriptContent", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ScriptContent
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: enabled: Specifies whether to enable the AScript rule. Valid values:
        /// true
        /// false (default)
        /// </remarks>
        [JsiiProperty(name: "enabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Enabled
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: extAttributeEnabled: Specifies whether to enable the extended attributes of the AScript rule. Valid values:
        /// true
        /// false (default)
        /// </remarks>
        [JsiiProperty(name: "extAttributeEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ExtAttributeEnabled
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: extAttributes: The extended attributes.
        /// </remarks>
        [JsiiProperty(name: "extAttributes", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-alb.RosAScript.ExtAttributesProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ExtAttributes
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosAScript`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-alb-ascript
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosAScriptProps), fullyQualifiedName: "@alicloud/ros-cdk-alb.RosAScriptProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Alb.IRosAScriptProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: aScriptName: The name of the AScript rule.
            /// The name must be 2 to 128 character in length, and can contain letters, digits, periods (.), underscores (_), and hyphens (-). It must start with a letter.
            /// </remarks>
            [JsiiProperty(name: "aScriptName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AScriptName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: listenerId: The listener ID.
            /// </remarks>
            [JsiiProperty(name: "listenerId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ListenerId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: scriptContent: The content of the AScript rule.
            /// </remarks>
            [JsiiProperty(name: "scriptContent", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ScriptContent
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: enabled: Specifies whether to enable the AScript rule. Valid values:
            /// true
            /// false (default)
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "enabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Enabled
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: extAttributeEnabled: Specifies whether to enable the extended attributes of the AScript rule. Valid values:
            /// true
            /// false (default)
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "extAttributeEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ExtAttributeEnabled
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: extAttributes: The extended attributes.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "extAttributes", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-alb.RosAScript.ExtAttributesProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? ExtAttributes
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}

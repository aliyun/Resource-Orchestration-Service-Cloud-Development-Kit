using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Alb
{
    /// <summary>Properties for defining a `AScript`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-alb-ascript
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IAScriptProps), fullyQualifiedName: "@alicloud/ros-cdk-alb.AScriptProps")]
    public interface IAScriptProps
    {
        /// <summary>Property aScriptName: The name of the AScript rule.</summary>
        /// <remarks>
        /// The name must be 2 to 128 character in length, and can contain letters, digits, periods (.), underscores (_), and hyphens (-). It must start with a letter.
        /// </remarks>
        [JsiiProperty(name: "aScriptName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AScriptName
        {
            get;
        }

        /// <summary>Property listenerId: The listener ID.</summary>
        [JsiiProperty(name: "listenerId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ListenerId
        {
            get;
        }

        /// <summary>Property scriptContent: The content of the AScript rule.</summary>
        [JsiiProperty(name: "scriptContent", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ScriptContent
        {
            get;
        }

        /// <summary>Property enabled: Specifies whether to enable the AScript rule.</summary>
        /// <remarks>
        /// Valid values:
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

        /// <summary>Property extAttributeEnabled: Specifies whether to enable the extended attributes of the AScript rule.</summary>
        /// <remarks>
        /// Valid values:
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

        /// <summary>Property extAttributes: The extended attributes.</summary>
        [JsiiProperty(name: "extAttributes", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-alb.RosAScript.ExtAttributesProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ExtAttributes
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `AScript`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-alb-ascript
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IAScriptProps), fullyQualifiedName: "@alicloud/ros-cdk-alb.AScriptProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Alb.IAScriptProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property aScriptName: The name of the AScript rule.</summary>
            /// <remarks>
            /// The name must be 2 to 128 character in length, and can contain letters, digits, periods (.), underscores (_), and hyphens (-). It must start with a letter.
            /// </remarks>
            [JsiiProperty(name: "aScriptName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AScriptName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property listenerId: The listener ID.</summary>
            [JsiiProperty(name: "listenerId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ListenerId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property scriptContent: The content of the AScript rule.</summary>
            [JsiiProperty(name: "scriptContent", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ScriptContent
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property enabled: Specifies whether to enable the AScript rule.</summary>
            /// <remarks>
            /// Valid values:
            /// true
            /// false (default)
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "enabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Enabled
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property extAttributeEnabled: Specifies whether to enable the extended attributes of the AScript rule.</summary>
            /// <remarks>
            /// Valid values:
            /// true
            /// false (default)
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "extAttributeEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ExtAttributeEnabled
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property extAttributes: The extended attributes.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "extAttributes", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-alb.RosAScript.ExtAttributesProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? ExtAttributes
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}

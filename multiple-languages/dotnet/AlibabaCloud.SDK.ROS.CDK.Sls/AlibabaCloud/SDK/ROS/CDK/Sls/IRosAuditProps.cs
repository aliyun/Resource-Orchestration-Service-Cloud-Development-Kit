using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Sls
{
    /// <summary>Properties for defining a `ALIYUN::SLS::Audit`.</summary>
    [JsiiInterface(nativeType: typeof(IRosAuditProps), fullyQualifiedName: "@alicloud/ros-cdk-sls.RosAuditProps")]
    public interface IRosAuditProps
    {
        /// <remarks>
        /// <strong>Property</strong>: displayName: Name of SLS log audit.
        /// </remarks>
        [JsiiProperty(name: "displayName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DisplayName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: variableMap: Log audit detailed configuration.
        /// </remarks>
        [JsiiProperty(name: "variableMap", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-sls.RosAudit.VariableMapProperty\"}]}}")]
        object VariableMap
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: multiAccount: Multi-account configuration, please fill in multiple aliuid.
        /// </remarks>
        [JsiiProperty(name: "multiAccount", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? MultiAccount
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ALIYUN::SLS::Audit`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IRosAuditProps), fullyQualifiedName: "@alicloud/ros-cdk-sls.RosAuditProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Sls.IRosAuditProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: displayName: Name of SLS log audit.
            /// </remarks>
            [JsiiProperty(name: "displayName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DisplayName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: variableMap: Log audit detailed configuration.
            /// </remarks>
            [JsiiProperty(name: "variableMap", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-sls.RosAudit.VariableMapProperty\"}]}}")]
            public object VariableMap
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: multiAccount: Multi-account configuration, please fill in multiple aliuid.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "multiAccount", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? MultiAccount
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}

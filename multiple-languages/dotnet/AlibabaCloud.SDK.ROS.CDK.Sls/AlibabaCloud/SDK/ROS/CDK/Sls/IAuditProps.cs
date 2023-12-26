using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Sls
{
    /// <summary>Properties for defining a `Audit`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-audit
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IAuditProps), fullyQualifiedName: "@alicloud/ros-cdk-sls.AuditProps")]
    public interface IAuditProps
    {
        /// <summary>Property displayName: Name of SLS log audit.</summary>
        [JsiiProperty(name: "displayName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DisplayName
        {
            get;
        }

        /// <summary>Property variableMap: Log audit detailed configuration.</summary>
        [JsiiProperty(name: "variableMap", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-sls.RosAudit.VariableMapProperty\"}]}}")]
        object VariableMap
        {
            get;
        }

        /// <summary>Property multiAccount: Multi-account configuration, please fill in multiple aliuid.</summary>
        [JsiiProperty(name: "multiAccount", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? MultiAccount
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `Audit`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-audit
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IAuditProps), fullyQualifiedName: "@alicloud/ros-cdk-sls.AuditProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Sls.IAuditProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property displayName: Name of SLS log audit.</summary>
            [JsiiProperty(name: "displayName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DisplayName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property variableMap: Log audit detailed configuration.</summary>
            [JsiiProperty(name: "variableMap", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-sls.RosAudit.VariableMapProperty\"}]}}")]
            public object VariableMap
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property multiAccount: Multi-account configuration, please fill in multiple aliuid.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "multiAccount", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? MultiAccount
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}

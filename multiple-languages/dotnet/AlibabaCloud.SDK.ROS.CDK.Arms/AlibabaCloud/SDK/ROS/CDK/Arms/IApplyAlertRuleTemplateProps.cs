using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Arms
{
    /// <summary>Properties for defining a `ApplyAlertRuleTemplate`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-applyalertruletemplate
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IApplyAlertRuleTemplateProps), fullyQualifiedName: "@alicloud/ros-cdk-arms.ApplyAlertRuleTemplateProps")]
    public interface IApplyAlertRuleTemplateProps
    {
        /// <summary>Property clusterIds: The IDs list of Prometheus Instances.</summary>
        [JsiiProperty(name: "clusterIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ClusterIds
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property templateIds: The IDs list of Prometheus alert rule templates.</summary>
        [JsiiProperty(name: "templateIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? TemplateIds
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property update: Whether to update created alert rules.</summary>
        /// <remarks>
        /// Default false.
        /// </remarks>
        [JsiiProperty(name: "update", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Update
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ApplyAlertRuleTemplate`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-applyalertruletemplate
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IApplyAlertRuleTemplateProps), fullyQualifiedName: "@alicloud/ros-cdk-arms.ApplyAlertRuleTemplateProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Arms.IApplyAlertRuleTemplateProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property clusterIds: The IDs list of Prometheus Instances.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "clusterIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? ClusterIds
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property templateIds: The IDs list of Prometheus alert rule templates.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "templateIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? TemplateIds
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property update: Whether to update created alert rules.</summary>
            /// <remarks>
            /// Default false.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "update", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Update
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}

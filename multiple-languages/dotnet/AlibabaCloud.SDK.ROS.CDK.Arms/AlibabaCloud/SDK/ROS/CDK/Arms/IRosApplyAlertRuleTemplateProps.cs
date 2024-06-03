using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Arms
{
    /// <summary>Properties for defining a `RosApplyAlertRuleTemplate`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-applyalertruletemplate
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosApplyAlertRuleTemplateProps), fullyQualifiedName: "@alicloud/ros-cdk-arms.RosApplyAlertRuleTemplateProps")]
    public interface IRosApplyAlertRuleTemplateProps
    {
        /// <remarks>
        /// <strong>Property</strong>: clusterIds: The IDs list of Prometheus Instances.
        /// </remarks>
        [JsiiProperty(name: "clusterIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ClusterIds
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: templateIds: The IDs list of Prometheus alert rule templates.
        /// </remarks>
        [JsiiProperty(name: "templateIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? TemplateIds
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: update: Whether to update created alert rules. Default false.
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

        /// <summary>Properties for defining a `RosApplyAlertRuleTemplate`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-applyalertruletemplate
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosApplyAlertRuleTemplateProps), fullyQualifiedName: "@alicloud/ros-cdk-arms.RosApplyAlertRuleTemplateProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Arms.IRosApplyAlertRuleTemplateProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: clusterIds: The IDs list of Prometheus Instances.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "clusterIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? ClusterIds
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: templateIds: The IDs list of Prometheus alert rule templates.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "templateIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? TemplateIds
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: update: Whether to update created alert rules. Default false.
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

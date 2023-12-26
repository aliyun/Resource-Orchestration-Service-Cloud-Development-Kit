using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Pvtz.Datasource
{
    /// <summary>Properties for defining a `RosRules`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-pvtz-rules
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosRulesProps), fullyQualifiedName: "@alicloud/ros-cdk-pvtz.datasource.RosRulesProps")]
    public interface IRosRulesProps
    {
        /// <remarks>
        /// <strong>Property</strong>: endpointId: EndpointId
        /// </remarks>
        [JsiiProperty(name: "endpointId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? EndpointId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosRules`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-pvtz-rules
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosRulesProps), fullyQualifiedName: "@alicloud/ros-cdk-pvtz.datasource.RosRulesProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Pvtz.Datasource.IRosRulesProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: endpointId: EndpointId
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "endpointId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EndpointId
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}

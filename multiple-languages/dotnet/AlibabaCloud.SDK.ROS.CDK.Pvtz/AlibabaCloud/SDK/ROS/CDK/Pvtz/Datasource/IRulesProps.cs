using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Pvtz.Datasource
{
    /// <summary>Properties for defining a `Rules`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-pvtz-rules
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRulesProps), fullyQualifiedName: "@alicloud/ros-cdk-pvtz.datasource.RulesProps")]
    public interface IRulesProps
    {
        /// <summary>Property endpointId: EndpointId.</summary>
        [JsiiProperty(name: "endpointId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? EndpointId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `Rules`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-pvtz-rules
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRulesProps), fullyQualifiedName: "@alicloud/ros-cdk-pvtz.datasource.RulesProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Pvtz.Datasource.IRulesProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property endpointId: EndpointId.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "endpointId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EndpointId
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}

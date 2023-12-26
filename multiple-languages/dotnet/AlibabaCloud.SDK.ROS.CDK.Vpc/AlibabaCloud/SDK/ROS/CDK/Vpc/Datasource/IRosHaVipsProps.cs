using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc.Datasource
{
    /// <summary>Properties for defining a `RosHaVips`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-havips
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosHaVipsProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.datasource.RosHaVipsProps")]
    public interface IRosHaVipsProps
    {
        /// <remarks>
        /// <strong>Property</strong>: haVipId: The  ID of the resource
        /// </remarks>
        [JsiiProperty(name: "haVipId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? HaVipId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosHaVips`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-havips
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosHaVipsProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.datasource.RosHaVipsProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Vpc.Datasource.IRosHaVipsProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: haVipId: The  ID of the resource
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "haVipId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? HaVipId
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}

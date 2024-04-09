using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc.Datasource
{
    /// <summary>Properties for defining a `RosHaVip`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-havip
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosHaVipProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.datasource.RosHaVipProps")]
    public interface IRosHaVipProps
    {
        /// <remarks>
        /// <strong>Property</strong>: haVipId: The  ID of the resource.
        /// </remarks>
        [JsiiProperty(name: "haVipId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object HaVipId
        {
            get;
        }

        /// <summary>Properties for defining a `RosHaVip`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-havip
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosHaVipProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.datasource.RosHaVipProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Vpc.Datasource.IRosHaVipProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: haVipId: The  ID of the resource.
            /// </remarks>
            [JsiiProperty(name: "haVipId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object HaVipId
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}

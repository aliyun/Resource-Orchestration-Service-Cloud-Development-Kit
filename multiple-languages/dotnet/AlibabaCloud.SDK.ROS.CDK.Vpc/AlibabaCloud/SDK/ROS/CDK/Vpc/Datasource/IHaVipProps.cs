using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc.Datasource
{
    /// <summary>Properties for defining a `HaVip`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-havip
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IHaVipProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.datasource.HaVipProps")]
    public interface IHaVipProps
    {
        /// <summary>Property haVipId: The  ID of the resource.</summary>
        [JsiiProperty(name: "haVipId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object HaVipId
        {
            get;
        }

        /// <summary>Properties for defining a `HaVip`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-havip
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IHaVipProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.datasource.HaVipProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Vpc.Datasource.IHaVipProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property haVipId: The  ID of the resource.</summary>
            [JsiiProperty(name: "haVipId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object HaVipId
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}

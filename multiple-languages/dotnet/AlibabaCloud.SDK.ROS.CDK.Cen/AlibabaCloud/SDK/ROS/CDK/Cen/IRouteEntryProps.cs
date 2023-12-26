using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cen
{
    /// <summary>Properties for defining a `RouteEntry`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-routeentry
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRouteEntryProps), fullyQualifiedName: "@alicloud/ros-cdk-cen.RouteEntryProps")]
    public interface IRouteEntryProps
    {
        /// <summary>Property cenId: The ID of the CEN instance where the route entry is published.</summary>
        [JsiiProperty(name: "cenId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object CenId
        {
            get;
        }

        /// <summary>Property childInstanceId: The ID of the attached network (VPC or VBR).</summary>
        [JsiiProperty(name: "childInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ChildInstanceId
        {
            get;
        }

        /// <summary>Property childInstanceRegionId: The ID of the region where the attached VBR or VPC is located.</summary>
        [JsiiProperty(name: "childInstanceRegionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ChildInstanceRegionId
        {
            get;
        }

        /// <summary>Property childInstanceRouteTableId: The route table of the attached VBR or VPC.</summary>
        [JsiiProperty(name: "childInstanceRouteTableId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ChildInstanceRouteTableId
        {
            get;
        }

        /// <summary>Property childInstanceType: The type of the network, value: VPC VBR.</summary>
        [JsiiProperty(name: "childInstanceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ChildInstanceType
        {
            get;
        }

        /// <summary>Property destinationCidrBlock: The destination CIDR block of the route entry to publish.</summary>
        [JsiiProperty(name: "destinationCidrBlock", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DestinationCidrBlock
        {
            get;
        }

        /// <summary>Properties for defining a `RouteEntry`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-routeentry
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRouteEntryProps), fullyQualifiedName: "@alicloud/ros-cdk-cen.RouteEntryProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cen.IRouteEntryProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property cenId: The ID of the CEN instance where the route entry is published.</summary>
            [JsiiProperty(name: "cenId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object CenId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property childInstanceId: The ID of the attached network (VPC or VBR).</summary>
            [JsiiProperty(name: "childInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ChildInstanceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property childInstanceRegionId: The ID of the region where the attached VBR or VPC is located.</summary>
            [JsiiProperty(name: "childInstanceRegionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ChildInstanceRegionId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property childInstanceRouteTableId: The route table of the attached VBR or VPC.</summary>
            [JsiiProperty(name: "childInstanceRouteTableId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ChildInstanceRouteTableId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property childInstanceType: The type of the network, value: VPC VBR.</summary>
            [JsiiProperty(name: "childInstanceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ChildInstanceType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property destinationCidrBlock: The destination CIDR block of the route entry to publish.</summary>
            [JsiiProperty(name: "destinationCidrBlock", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DestinationCidrBlock
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}

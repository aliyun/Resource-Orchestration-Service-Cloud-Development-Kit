using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cen
{
    /// <summary>Properties for defining a `RosRouteEntry`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-routeentry
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosRouteEntryProps), fullyQualifiedName: "@alicloud/ros-cdk-cen.RosRouteEntryProps")]
    public interface IRosRouteEntryProps
    {
        /// <remarks>
        /// <strong>Property</strong>: cenId: The ID of the CEN instance where the route entry is published.
        /// </remarks>
        [JsiiProperty(name: "cenId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object CenId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: childInstanceId: The ID of the attached network (VPC or VBR).
        /// </remarks>
        [JsiiProperty(name: "childInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ChildInstanceId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: childInstanceRegionId: The ID of the region where the attached VBR or VPC is located.
        /// </remarks>
        [JsiiProperty(name: "childInstanceRegionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ChildInstanceRegionId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: childInstanceRouteTableId: The route table of the attached VBR or VPC.
        /// </remarks>
        [JsiiProperty(name: "childInstanceRouteTableId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ChildInstanceRouteTableId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: childInstanceType: The type of the network, value: VPC VBR
        /// </remarks>
        [JsiiProperty(name: "childInstanceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ChildInstanceType
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: destinationCidrBlock: The destination CIDR block of the route entry to publish.
        /// </remarks>
        [JsiiProperty(name: "destinationCidrBlock", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DestinationCidrBlock
        {
            get;
        }

        /// <summary>Properties for defining a `RosRouteEntry`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-routeentry
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosRouteEntryProps), fullyQualifiedName: "@alicloud/ros-cdk-cen.RosRouteEntryProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cen.IRosRouteEntryProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: cenId: The ID of the CEN instance where the route entry is published.
            /// </remarks>
            [JsiiProperty(name: "cenId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object CenId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: childInstanceId: The ID of the attached network (VPC or VBR).
            /// </remarks>
            [JsiiProperty(name: "childInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ChildInstanceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: childInstanceRegionId: The ID of the region where the attached VBR or VPC is located.
            /// </remarks>
            [JsiiProperty(name: "childInstanceRegionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ChildInstanceRegionId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: childInstanceRouteTableId: The route table of the attached VBR or VPC.
            /// </remarks>
            [JsiiProperty(name: "childInstanceRouteTableId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ChildInstanceRouteTableId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: childInstanceType: The type of the network, value: VPC VBR
            /// </remarks>
            [JsiiProperty(name: "childInstanceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ChildInstanceType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: destinationCidrBlock: The destination CIDR block of the route entry to publish.
            /// </remarks>
            [JsiiProperty(name: "destinationCidrBlock", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DestinationCidrBlock
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}

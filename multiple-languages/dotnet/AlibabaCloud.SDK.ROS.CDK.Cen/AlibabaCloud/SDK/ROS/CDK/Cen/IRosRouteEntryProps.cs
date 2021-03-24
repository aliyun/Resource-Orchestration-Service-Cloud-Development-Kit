using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cen
{
    /// <summary>Properties for defining a `ALIYUN::CEN::RouteEntry`.</summary>
    [JsiiInterface(nativeType: typeof(IRosRouteEntryProps), fullyQualifiedName: "@alicloud/ros-cdk-cen.RosRouteEntryProps")]
    public interface IRosRouteEntryProps
    {
        /// <remarks>
        /// <strong>Property</strong>: cenId: The ID of the CEN instance where the route entry is published.
        /// </remarks>
        [JsiiProperty(name: "cenId", typeJson: "{\"primitive\":\"string\"}")]
        string CenId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: childInstanceId: The ID of the attached network (VPC or VBR).
        /// </remarks>
        [JsiiProperty(name: "childInstanceId", typeJson: "{\"primitive\":\"string\"}")]
        string ChildInstanceId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: childInstanceRegionId: The ID of the region where the attached VBR or VPC is located.
        /// </remarks>
        [JsiiProperty(name: "childInstanceRegionId", typeJson: "{\"primitive\":\"string\"}")]
        string ChildInstanceRegionId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: childInstanceRouteTableId: The route table of the attached VBR or VPC.
        /// </remarks>
        [JsiiProperty(name: "childInstanceRouteTableId", typeJson: "{\"primitive\":\"string\"}")]
        string ChildInstanceRouteTableId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: childInstanceType: The type of the network, value: VPC VBR
        /// </remarks>
        [JsiiProperty(name: "childInstanceType", typeJson: "{\"primitive\":\"string\"}")]
        string ChildInstanceType
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: destinationCidrBlock: The destination CIDR block of the route entry to publish.
        /// </remarks>
        [JsiiProperty(name: "destinationCidrBlock", typeJson: "{\"primitive\":\"string\"}")]
        string DestinationCidrBlock
        {
            get;
        }

        /// <summary>Properties for defining a `ALIYUN::CEN::RouteEntry`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IRosRouteEntryProps), fullyQualifiedName: "@alicloud/ros-cdk-cen.RosRouteEntryProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cen.IRosRouteEntryProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: cenId: The ID of the CEN instance where the route entry is published.
            /// </remarks>
            [JsiiProperty(name: "cenId", typeJson: "{\"primitive\":\"string\"}")]
            public string CenId
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: childInstanceId: The ID of the attached network (VPC or VBR).
            /// </remarks>
            [JsiiProperty(name: "childInstanceId", typeJson: "{\"primitive\":\"string\"}")]
            public string ChildInstanceId
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: childInstanceRegionId: The ID of the region where the attached VBR or VPC is located.
            /// </remarks>
            [JsiiProperty(name: "childInstanceRegionId", typeJson: "{\"primitive\":\"string\"}")]
            public string ChildInstanceRegionId
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: childInstanceRouteTableId: The route table of the attached VBR or VPC.
            /// </remarks>
            [JsiiProperty(name: "childInstanceRouteTableId", typeJson: "{\"primitive\":\"string\"}")]
            public string ChildInstanceRouteTableId
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: childInstanceType: The type of the network, value: VPC VBR
            /// </remarks>
            [JsiiProperty(name: "childInstanceType", typeJson: "{\"primitive\":\"string\"}")]
            public string ChildInstanceType
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: destinationCidrBlock: The destination CIDR block of the route entry to publish.
            /// </remarks>
            [JsiiProperty(name: "destinationCidrBlock", typeJson: "{\"primitive\":\"string\"}")]
            public string DestinationCidrBlock
            {
                get => GetInstanceProperty<string>()!;
            }
        }
    }
}

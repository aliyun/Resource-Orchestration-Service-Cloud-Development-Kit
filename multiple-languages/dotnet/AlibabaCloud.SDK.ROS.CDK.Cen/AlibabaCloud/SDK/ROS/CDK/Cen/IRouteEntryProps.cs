using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cen
{
    /// <summary>Properties for defining a `ALIYUN::CEN::RouteEntry`.</summary>
    [JsiiInterface(nativeType: typeof(IRouteEntryProps), fullyQualifiedName: "@alicloud/ros-cdk-cen.RouteEntryProps")]
    public interface IRouteEntryProps
    {
        /// <summary>Property cenId: The ID of the CEN instance where the route entry is published.</summary>
        [JsiiProperty(name: "cenId", typeJson: "{\"primitive\":\"string\"}")]
        string CenId
        {
            get;
        }

        /// <summary>Property childInstanceId: The ID of the attached network (VPC or VBR).</summary>
        [JsiiProperty(name: "childInstanceId", typeJson: "{\"primitive\":\"string\"}")]
        string ChildInstanceId
        {
            get;
        }

        /// <summary>Property childInstanceRegionId: The ID of the region where the attached VBR or VPC is located.</summary>
        [JsiiProperty(name: "childInstanceRegionId", typeJson: "{\"primitive\":\"string\"}")]
        string ChildInstanceRegionId
        {
            get;
        }

        /// <summary>Property childInstanceRouteTableId: The route table of the attached VBR or VPC.</summary>
        [JsiiProperty(name: "childInstanceRouteTableId", typeJson: "{\"primitive\":\"string\"}")]
        string ChildInstanceRouteTableId
        {
            get;
        }

        /// <summary>Property childInstanceType: The type of the network, value: VPC VBR.</summary>
        [JsiiProperty(name: "childInstanceType", typeJson: "{\"primitive\":\"string\"}")]
        string ChildInstanceType
        {
            get;
        }

        /// <summary>Property destinationCidrBlock: The destination CIDR block of the route entry to publish.</summary>
        [JsiiProperty(name: "destinationCidrBlock", typeJson: "{\"primitive\":\"string\"}")]
        string DestinationCidrBlock
        {
            get;
        }

        /// <summary>Properties for defining a `ALIYUN::CEN::RouteEntry`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IRouteEntryProps), fullyQualifiedName: "@alicloud/ros-cdk-cen.RouteEntryProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cen.IRouteEntryProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property cenId: The ID of the CEN instance where the route entry is published.</summary>
            [JsiiProperty(name: "cenId", typeJson: "{\"primitive\":\"string\"}")]
            public string CenId
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property childInstanceId: The ID of the attached network (VPC or VBR).</summary>
            [JsiiProperty(name: "childInstanceId", typeJson: "{\"primitive\":\"string\"}")]
            public string ChildInstanceId
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property childInstanceRegionId: The ID of the region where the attached VBR or VPC is located.</summary>
            [JsiiProperty(name: "childInstanceRegionId", typeJson: "{\"primitive\":\"string\"}")]
            public string ChildInstanceRegionId
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property childInstanceRouteTableId: The route table of the attached VBR or VPC.</summary>
            [JsiiProperty(name: "childInstanceRouteTableId", typeJson: "{\"primitive\":\"string\"}")]
            public string ChildInstanceRouteTableId
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property childInstanceType: The type of the network, value: VPC VBR.</summary>
            [JsiiProperty(name: "childInstanceType", typeJson: "{\"primitive\":\"string\"}")]
            public string ChildInstanceType
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property destinationCidrBlock: The destination CIDR block of the route entry to publish.</summary>
            [JsiiProperty(name: "destinationCidrBlock", typeJson: "{\"primitive\":\"string\"}")]
            public string DestinationCidrBlock
            {
                get => GetInstanceProperty<string>()!;
            }
        }
    }
}

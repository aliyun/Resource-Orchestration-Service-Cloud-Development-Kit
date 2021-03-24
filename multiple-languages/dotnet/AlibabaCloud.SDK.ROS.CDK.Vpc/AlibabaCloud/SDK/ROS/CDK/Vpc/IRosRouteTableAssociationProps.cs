using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc
{
    /// <summary>Properties for defining a `ALIYUN::VPC::RouteTableAssociation`.</summary>
    [JsiiInterface(nativeType: typeof(IRosRouteTableAssociationProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.RosRouteTableAssociationProps")]
    public interface IRosRouteTableAssociationProps
    {
        /// <remarks>
        /// <strong>Property</strong>: routeTableId: The ID of the route table.
        /// </remarks>
        [JsiiProperty(name: "routeTableId", typeJson: "{\"primitive\":\"string\"}")]
        string RouteTableId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: vSwitchId: The ID of the VSwitch.
        /// </remarks>
        [JsiiProperty(name: "vSwitchId", typeJson: "{\"primitive\":\"string\"}")]
        string VSwitchId
        {
            get;
        }

        /// <summary>Properties for defining a `ALIYUN::VPC::RouteTableAssociation`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IRosRouteTableAssociationProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.RosRouteTableAssociationProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Vpc.IRosRouteTableAssociationProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: routeTableId: The ID of the route table.
            /// </remarks>
            [JsiiProperty(name: "routeTableId", typeJson: "{\"primitive\":\"string\"}")]
            public string RouteTableId
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: vSwitchId: The ID of the VSwitch.
            /// </remarks>
            [JsiiProperty(name: "vSwitchId", typeJson: "{\"primitive\":\"string\"}")]
            public string VSwitchId
            {
                get => GetInstanceProperty<string>()!;
            }
        }
    }
}

using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc
{
    /// <summary>Properties for defining a `ALIYUN::VPC::RouteTableAssociation`.</summary>
    [JsiiInterface(nativeType: typeof(IRouteTableAssociationProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.RouteTableAssociationProps")]
    public interface IRouteTableAssociationProps
    {
        /// <summary>Property routeTableId: The ID of the route table.</summary>
        [JsiiProperty(name: "routeTableId", typeJson: "{\"primitive\":\"string\"}")]
        string RouteTableId
        {
            get;
        }

        /// <summary>Property vSwitchId: The ID of the VSwitch.</summary>
        [JsiiProperty(name: "vSwitchId", typeJson: "{\"primitive\":\"string\"}")]
        string VSwitchId
        {
            get;
        }

        /// <summary>Properties for defining a `ALIYUN::VPC::RouteTableAssociation`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IRouteTableAssociationProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.RouteTableAssociationProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Vpc.IRouteTableAssociationProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property routeTableId: The ID of the route table.</summary>
            [JsiiProperty(name: "routeTableId", typeJson: "{\"primitive\":\"string\"}")]
            public string RouteTableId
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property vSwitchId: The ID of the VSwitch.</summary>
            [JsiiProperty(name: "vSwitchId", typeJson: "{\"primitive\":\"string\"}")]
            public string VSwitchId
            {
                get => GetInstanceProperty<string>()!;
            }
        }
    }
}

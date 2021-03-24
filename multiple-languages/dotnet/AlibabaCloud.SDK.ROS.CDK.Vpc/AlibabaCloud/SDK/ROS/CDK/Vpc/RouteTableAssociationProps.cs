using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::VPC::RouteTableAssociation`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-vpc.RouteTableAssociationProps")]
    public class RouteTableAssociationProps : AlibabaCloud.SDK.ROS.CDK.Vpc.IRouteTableAssociationProps
    {
        /// <summary>Property routeTableId: The ID of the route table.</summary>
        [JsiiProperty(name: "routeTableId", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string RouteTableId
        {
            get;
            set;
        }

        /// <summary>Property vSwitchId: The ID of the VSwitch.</summary>
        [JsiiProperty(name: "vSwitchId", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string VSwitchId
        {
            get;
            set;
        }
    }
}

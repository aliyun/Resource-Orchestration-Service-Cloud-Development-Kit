using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::VPC::RouteTable`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-vpc.RosRouteTableProps")]
    public class RosRouteTableProps : AlibabaCloud.SDK.ROS.CDK.Vpc.IRosRouteTableProps
    {
        /// <remarks>
        /// <strong>Property</strong>: vpcId: The ID of the VPC to which the custom route table belongs.
        /// </remarks>
        [JsiiProperty(name: "vpcId", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string VpcId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: description: The description of the route table.
        /// The description must be 2 to 256 characters in length. The description must start with a letter, but cannot start with http:// or https://.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "description", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? Description
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: routeTableName: The name of the route table.
        /// The name must be 2 to 128 characters in length. It can contain letters, numbers, periods (.), underscores (_), and hyphens (-). It must start with a letter and cannot start with http:// or https://.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "routeTableName", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? RouteTableName
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: tags: Tags to attach to routetable. Max support 20 tags to add during create routetable. Each tag with two properties Key and Value, and Key is required.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-core.RosTag\"},\"kind\":\"array\"}}", isOptional: true, isOverride: true)]
        public AlibabaCloud.SDK.ROS.CDK.Core.IRosTag[]? Tags
        {
            get;
            set;
        }
    }
}

using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cen
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::CEN::TransitRouterVpcAttachment`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-cen.RosTransitRouterVpcAttachmentProps")]
    public class RosTransitRouterVpcAttachmentProps : AlibabaCloud.SDK.ROS.CDK.Cen.IRosTransitRouterVpcAttachmentProps
    {
        /// <remarks>
        /// <strong>Property</strong>: vpcId: VpcId
        /// </remarks>
        [JsiiProperty(name: "vpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object VpcId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: zoneMappings: ZoneMappingss
        /// </remarks>
        [JsiiProperty(name: "zoneMappings", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cen.RosTransitRouterVpcAttachment.ZoneMappingsProperty\"}]}},\"kind\":\"array\"}}]}}", isOverride: true)]
        public object ZoneMappings
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: autoCreateVpcRoute:
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "autoCreateVpcRoute", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? AutoCreateVpcRoute
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: cenId: CenId
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "cenId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? CenId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: chargeType:
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "chargeType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? ChargeType
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: resourceType: ResourceType
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "resourceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? ResourceType
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: routeTableAssociationEnabled:
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "routeTableAssociationEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? RouteTableAssociationEnabled
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: routeTablePropagationEnabled:
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "routeTablePropagationEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? RouteTablePropagationEnabled
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: transitRouterAttachmentDescription: TransitRouterAttachmentDescription
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "transitRouterAttachmentDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? TransitRouterAttachmentDescription
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: transitRouterAttachmentName: TransitRouterAttachmentName
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "transitRouterAttachmentName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? TransitRouterAttachmentName
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: transitRouterId: TransitRouterId
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "transitRouterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? TransitRouterId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: vpcOwnerId: VpcOwnerId
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "vpcOwnerId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? VpcOwnerId
        {
            get;
            set;
        }
    }
}

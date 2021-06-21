using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cen
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::CEN::TransitRouterVpcAttachment`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-cen.TransitRouterVpcAttachmentProps")]
    public class TransitRouterVpcAttachmentProps : AlibabaCloud.SDK.ROS.CDK.Cen.ITransitRouterVpcAttachmentProps
    {
        /// <summary>Property vpcId: VpcId.</summary>
        [JsiiProperty(name: "vpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object VpcId
        {
            get;
            set;
        }

        /// <summary>Property zoneMappings: ZoneMappingss.</summary>
        [JsiiProperty(name: "zoneMappings", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cen.RosTransitRouterVpcAttachment.ZoneMappingsProperty\"}]}},\"kind\":\"array\"}}]}}", isOverride: true)]
        public object ZoneMappings
        {
            get;
            set;
        }

        /// <summary>Property autoCreateVpcRoute:.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "autoCreateVpcRoute", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? AutoCreateVpcRoute
        {
            get;
            set;
        }

        /// <summary>Property cenId: CenId.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "cenId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? CenId
        {
            get;
            set;
        }

        /// <summary>Property chargeType:.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "chargeType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? ChargeType
        {
            get;
            set;
        }

        /// <summary>Property resourceType: ResourceType.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "resourceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? ResourceType
        {
            get;
            set;
        }

        /// <summary>Property routeTableAssociationEnabled:.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "routeTableAssociationEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? RouteTableAssociationEnabled
        {
            get;
            set;
        }

        /// <summary>Property routeTablePropagationEnabled:.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "routeTablePropagationEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? RouteTablePropagationEnabled
        {
            get;
            set;
        }

        /// <summary>Property transitRouterAttachmentDescription: TransitRouterAttachmentDescription.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "transitRouterAttachmentDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? TransitRouterAttachmentDescription
        {
            get;
            set;
        }

        /// <summary>Property transitRouterAttachmentName: TransitRouterAttachmentName.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "transitRouterAttachmentName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? TransitRouterAttachmentName
        {
            get;
            set;
        }

        /// <summary>Property transitRouterId: TransitRouterId.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "transitRouterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? TransitRouterId
        {
            get;
            set;
        }

        /// <summary>Property vpcOwnerId: VpcOwnerId.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "vpcOwnerId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? VpcOwnerId
        {
            get;
            set;
        }
    }
}

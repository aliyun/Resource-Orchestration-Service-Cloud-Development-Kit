using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Apigateway
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::ApiGateway::Group`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-apigateway.GroupProps")]
    public class GroupProps : AlibabaCloud.SDK.ROS.CDK.Apigateway.IGroupProps
    {
        /// <summary>Property groupName: The name of the Group.Need [4, 50] Chinese\English\Number characters or "_",and should start with Chinese/English character.</summary>
        [JsiiProperty(name: "groupName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object GroupName
        {
            get;
            set;
        }

        /// <summary>Property description: Description of the Group, less than 180 characters.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? Description
        {
            get;
            set;
        }

        /// <summary>Property instanceId: API gateway instance ID.</summary>
        /// <remarks>
        /// For example, "api-shared-vpc-001" means vpc instance, while "api-shared-classic-001" means classic instance.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? InstanceId
        {
            get;
            set;
        }

        /// <summary>Property internetEnable: Enable or disable internet subdomain.</summary>
        /// <remarks>
        /// True for enable.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "internetEnable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? InternetEnable
        {
            get;
            set;
        }

        /// <summary>Property passthroughHeaders: Pass through headers setting.</summary>
        /// <remarks>
        /// values:
        /// host: pass through host headers
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "passthroughHeaders", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? PassthroughHeaders
        {
            get;
            set;
        }

        /// <summary>Property tags: Tags to attach to group.</summary>
        /// <remarks>
        /// Max support 20 tags to add during create group. Each tag with two properties Key and Value, and Key is required.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-apigateway.RosGroup.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
        public AlibabaCloud.SDK.ROS.CDK.Apigateway.RosGroup.ITagsProperty[]? Tags
        {
            get;
            set;
        }

        /// <summary>Property vpcIntranetEnable: Enable or disable VPC intranet subdomain.</summary>
        /// <remarks>
        /// True for enable.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "vpcIntranetEnable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? VpcIntranetEnable
        {
            get;
            set;
        }
    }
}

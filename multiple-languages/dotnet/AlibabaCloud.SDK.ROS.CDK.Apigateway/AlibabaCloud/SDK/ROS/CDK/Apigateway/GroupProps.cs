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
        [JsiiProperty(name: "groupName", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string GroupName
        {
            get;
            set;
        }

        /// <summary>Property description: Description of the Group, less than 180 characters.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "description", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? Description
        {
            get;
            set;
        }

        /// <summary>Property instanceId: API gateway instance ID.</summary>
        /// <remarks>
        /// For example, "api-shared-vpc-001" means vpc instance, while "api-shared-classic-001" means classic instance.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "instanceId", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? InstanceId
        {
            get;
            set;
        }

        /// <summary>Property internetEnable: Enable or disable internet subdomain.</summary>
        /// <remarks>
        /// True for enable.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "internetEnable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
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
        [JsiiProperty(name: "passthroughHeaders", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? PassthroughHeaders
        {
            get;
            set;
        }

        /// <summary>Property tags: Tags to attach to group.</summary>
        /// <remarks>
        /// Max support 20 tags to add during create group. Each tag with two properties Key and Value, and Key is required.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}},\"kind\":\"array\"}}", isOptional: true, isOverride: true)]
        public System.Collections.Generic.IDictionary<string, object>[]? Tags
        {
            get;
            set;
        }

        /// <summary>Property vpcIntranetEnable: Enable or disable VPC intranet subdomain.</summary>
        /// <remarks>
        /// True for enable.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "vpcIntranetEnable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? VpcIntranetEnable
        {
            get;
            set;
        }
    }
}

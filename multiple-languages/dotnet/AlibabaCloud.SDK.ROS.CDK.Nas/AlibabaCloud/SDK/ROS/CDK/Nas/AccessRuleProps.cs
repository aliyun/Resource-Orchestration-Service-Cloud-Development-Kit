using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Nas
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::NAS::AccessRule`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-nas.AccessRuleProps")]
    public class AccessRuleProps : AlibabaCloud.SDK.ROS.CDK.Nas.IAccessRuleProps
    {
        /// <summary>Property accessGroupName: Permission group name.</summary>
        [JsiiProperty(name: "accessGroupName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object AccessGroupName
        {
            get;
            set;
        }

        /// <summary>Property sourceCidrIp: Address or address segment.</summary>
        [JsiiProperty(name: "sourceCidrIp", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object SourceCidrIp
        {
            get;
            set;
        }

        /// <summary>Property priority: Priority level.</summary>
        /// <remarks>
        /// Range: 1-100. Default value: 1
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "priority", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? Priority
        {
            get;
            set;
        }

        /// <summary>Property rwAccessType: Read-write permission type: RDWR (default), RDONLY.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "rwAccessType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? RwAccessType
        {
            get;
            set;
        }

        /// <summary>Property userAccessType: User permission type: no_squash (default), root_squash, all_squash.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "userAccessType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? UserAccessType
        {
            get;
            set;
        }
    }
}
